import requests
from bs4 import BeautifulSoup

URL = 'https://majid-t.github.io/memory-game/'

page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')
print(soup.prettify())
