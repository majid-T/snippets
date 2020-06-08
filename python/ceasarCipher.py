# Simplified Ceasar Cipher example works on alphabetic charachtors only.
# Numbers provide a small pre-image since we are ciphering on each word. So numbers are not
# accepted and instead of 1 you should type one to increese security

import tkinter as tk

# All alphabet chars in a list
chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
         't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
         'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


# Function to cipher a charcahter by provided shift
def getCipherChar(inCh, shift):
    # For space only return space
    if inCh == ' ':
        return ' '

    # Get the current index of charachter in our list
    index = chars.index(inCh)

    # shift the index
    newIndex = index+shift

    # Check if new index is bigger than lenght of list -1 to avoid out of range index,
    # if it is deduct lenght to cycle from begining
    if(newIndex > len(chars)-1):
        newIndex -= len(chars)

    return chars[newIndex]

# Function to iterate n a phrase and chipher charachters
# Uses the lenght of the first word as shift


def cipherPhrase():
    phrase = originalPhrase.get()
    shift = len(phrase.split(' ')[0])
    result = ''
    for ch in phrase:
        result += getCipherChar(ch, shift)

    data.delete(1.0, tk.END)
    data.insert(tk.END, result)


# GUI part of code
win = tk.Tk()
win.title('Ceasar Cipher code')


originalPhrase = tk.Entry(win, width=40)
originalPhrase.grid(row=0, column=0, padx=3, pady=3)


button = tk.Button(win, text='Encrypt text', command=cipherPhrase)
button.grid(row=0, column=1, pady=5)

data = tk.Text(win, height=20, width=100)
data.grid(row=1, column=0, columnspan=2)

labelFooter = tk.Label(
    win, text='Sample non official Copy- Under dev version majid.shockoohi@gmail.com')
labelFooter.grid(row=2, column=0, columnspan=2, padx=10, pady=1)

win.mainloop()
