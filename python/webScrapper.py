import requests
from bs4 import BeautifulSoup
import pandas as pd
import tkinter as tk
import tkinter.ttk as ttk
from tkinter.filedialog import askopenfile

win = tk.Tk()
win.title('Web Scrapper')


def open():
    url = urlInput.get()
    tag = tagInput.get()
    dataTxt = ''
    if(url and tag):
        page = requests.get(url)
        soup = BeautifulSoup(page.content, 'html.parser')
        tags = soup.find_all([tag])

        for tg in tags:
            dataTxt += str(tg)
            dataTxt += '\n'
    else:
        dataTxt = 'Error! One of the fields are missing!'

    data.delete(1.0, tk.END)
    data.insert(tk.END, dataTxt)


urlLabel = tk.Label(win, text='Enter the URL here')
urlLabel.grid(row=0, column=0, pady=5)

urlInput = ttk.Entry(win, width=40)
urlInput.grid(row=0, column=1, pady=5)

tagLabel = tk.Label(win, text='What tag to Look')
tagLabel.grid(row=0, column=2, pady=5)

tagInput = ttk.Entry(win, width=40)
tagInput.grid(row=0, column=3, padx=3, pady=3)

button = tk.Button(win, text='Scrap', command=open)
button.grid(row=0, column=4, pady=5)

data = tk.Text(win, height=40, width=100)
data.grid(row=1, column=0, columnspan=5)

# labelFooter = tk.Label(
#     win, text='Sample non official Copy- Under dev version majid.shockoohi@gmail.com')
# labelFooter.grid(row=2, column=0, columnspan=2, padx=10, pady=1)

win.mainloop()
