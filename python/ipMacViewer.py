import tkinter as tk
from tkinter.messagebox import showinfo
from getmac import getmac
import socket

win = tk.Tk()
win.config(bg='#ffcc00')
win.title('View Mac and IP')


def getIp():
    pass


def getMac():
    pass


ipButton = tk.Button(win, text='IP', bg='#000000',
                     fg='#f1c433', padx=17, pady=17, command=getIp)
ipButton.pack()

macButton = tk.Button(win, text='MAC', bg='#000000',
                      fg='#f1c433', padx=7, pady=7, command=getMac)
macButton.pack()

win.mainloop()
