import pandas as pd
import tkinter as tk
import tkinter.ttk as tkk
from tkinter.filedialog import askopenfile

win = tk.Tk()
win.title('CSV Loader')


def open():
    file = askopenfile(mode='r', filetypes=[('CSV File', '*.csv')])

    content = pd.read_csv(file)
    data.insert(tk.END, content)


label = tk.Label(win, text='Select File')
label.grid(row=0, column=0, padx=8, pady=8)

button = tk.Button(win, text='Load File', command=open)
button.grid(row=0, column=1, padx=8, pady=8)

data = tk.Text(win, height=10, width=30)
data.grid(row=3, column=0, columnspan=2)

win.mainloop()
