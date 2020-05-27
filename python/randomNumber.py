import tkinter as tk
from tkinter import ttk
import random

win = tk.Tk()
win.title('Random Number Generator')


def play():
    randomNo = random.randint(1, 1000)
    number.config(text=f'Number is: {randomNo}')


number = ttk.Label(win, text='')
number.pack(pady=10)

play = ttk.Button(win, text='roll', command=play)
play.pack(padx=50)

win.mainloop()
