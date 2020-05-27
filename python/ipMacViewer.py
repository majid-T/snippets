import tkinter as tk
from tkinter.messagebox import showinfo
from getmac import getmac
import socket

win = tk.Tk()
win.config(bg='#ffcc00')
win.title('View Mac and IP')

# Gets ir local ip ex- assigned by WIFI router


def getIp():
    hostName = socket.gethostname()
    ipAdd = socket.gethostbyname(hostName)
    showinfo('IP Address', f'IP address is : {ipAdd}')

# Gets mac of ethernet port you are using now


def getMac():
    macAdd = getmac.get_mac_address()
    showinfo("MAC Address", f'MAC address is: {macAdd}')


ipButton = tk.Button(win, text='IP', bg='#000000',
                     fg='#f1c433', padx=17, pady=17, command=getIp)
ipButton.pack()

macButton = tk.Button(win, text='MAC', bg='#000000',
                      fg='#f1c433', padx=7, pady=7, command=getMac)
macButton.pack()

win.mainloop()
