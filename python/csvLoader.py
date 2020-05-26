import pandas as pd
import tkinter as tk
from tkinter.filedialog import askopenfile

win = tk.Tk()
win.title('CSV Loader')


def open():
    file = askopenfile(mode='r', filetypes=[('CSV File', '*.csv')])

    content = 'No file Selected!'
    if(file):
        content = ''
        content = pd.read_csv(file)

    data.delete(1.0, tk.END)
    data.insert(tk.END, content)


label = tk.Label(win, text='Select a CSV File to be loaded below')
label.grid(row=0, column=0, pady=5)

button = tk.Button(win, text='Load File', command=open)
button.grid(row=0, column=1, pady=5)

data = tk.Text(win, height=40, width=100)
data.grid(row=1, column=0, columnspan=2)

labelFooter = tk.Label(
    win, text='Sample non official Copy- Under dev version majid.shockoohi@gmail.com')
labelFooter.grid(row=2, column=0, columnspan=2, padx=10, pady=1)

win.mainloop()
