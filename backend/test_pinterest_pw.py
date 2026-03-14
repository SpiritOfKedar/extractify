import asyncio
from playwright.async_api import async_playwright
import re

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        try:
            print("Navigating to Pinterest...")
            # Use domcontentloaded instead of networkidle to avoid hanging
            await page.goto("https://in.pinterest.com/pin/504895808240406857/", wait_until="domcontentloaded", timeout=15000)
            print("Waiting briefly for JS...")
            await page.wait_for_timeout(3000)
            
            html = await page.content()
            print("Got HTML! Length:", len(html))
            
            with open("pinterest_test.html", "w", encoding="utf-8") as f:
                f.write(html)
                
            videos = set(re.findall(r'https://[^"\'\s>]+?\.mp4', html))
            print('Found mp4 URLs:', videos)
            
            m3u8s = set(re.findall(r'https://[^"\'\s>]+?\.m3u8', html))
            print('Found m3u8 URLs:', m3u8s)
            
        except Exception as e:
            print("Error:", e)
        finally:
            await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
