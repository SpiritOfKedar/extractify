import asyncio
import re
from app.utils.browser import get_page_content

async def main():
    print('Testing Pinterest Video Data Extraction...')
    # This URL is the one you tested that is a video Pin
    html = await get_page_content('https://in.pinterest.com/pin/504895808240406857/')
    if html:
        print('Got HTML! Length:', len(html))
        # Look for video URLs in the HTML
        videos = set(re.findall(r'https://[^"\'\s>]+?\.mp4', html))
        print('Found mp4 URLs:', videos)
        
        # Look for m3u8 URLs
        m3u8s = set(re.findall(r'https://[^"\'\s>]+?\.m3u8', html))
        print('Found m3u8 URLs:', m3u8s)
        
    else:
        print('Failed to get HTML.')

if __name__ == '__main__':
    asyncio.run(main())
