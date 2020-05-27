import tkinter as tk
from tkinter import ttk
from tkinter.messagebox import showinfo
import random

win = tk.Tk()
win.title('Random Number Generator')


def play():
    pass


number = ttk.Label(win, text='')
number.pack(pady=10)

play = ttk.Button(win, text='roll', command=play)
play.pack(padx=50)

win.mainloop()
