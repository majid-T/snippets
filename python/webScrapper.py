import requests
from bs4 import BeautifulSoup

URL = 'https://majid-t.github.io/memory-game/'

page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')
imgs = soup.find_all(["img"])

# print(soup.find_all(["img"]))

for img in imgs:
    print(img)
