import json
import re

with open('pinterest_test.html', 'r', encoding='utf-8') as f:
    html = f.read()

print('Searching for v.pinimg URLs...')
urls = re.findall(r'https://v\.pinimg\.com/[^\s"\'><]+', html)
print(f'Found {len(urls)} v.pinimg.com URLs')
if urls:
    print(urls[:3])

print('\nSearching for __PWS_DATA__ ...')
pws_match = re.search(r'<script\s+id="__PWS_DATA__"[^>]*>(.*?)</script>', html, re.DOTALL)
if pws_match:
    print('Found __PWS_DATA__!')
    try:
        data = json.loads(pws_match.group(1))
        with open('pws_data.json', 'w', encoding='utf-8') as out:
            json.dump(data, out, indent=2)
        print('Saved __PWS_DATA__ to pws_data.json')
    except Exception as e:
        print('Error parsing JSON:', e)
else:
    print('No __PWS_DATA__ found. Looking for Relay data...')
    relay = re.search(r'<script\s+id="__RELAY_STORE__"[^>]*>(.*?)</script>', html, re.DOTALL)
    if relay:
        print('Found __RELAY_STORE__!')
        try:
            data = json.loads(relay.group(1))
            with open('relay_data.json', 'w', encoding='utf-8') as out:
                json.dump(data, out, indent=2)
            print('Saved __RELAY_STORE__ to relay_data.json')
        except Exception as e:
            print('Error parsing JSON:', e)
            
    scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
    for i, s in enumerate(scripts):
        if 'video_list' in s or 'story_pin_data' in s or 'video' in s.lower():
            print(f'Found video hint in script {i} (len {len(s)})')
