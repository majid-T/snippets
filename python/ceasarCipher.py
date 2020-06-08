# Simplified Ceasar Cipher example works on alphabetic charachtors only.

# All alphabet chars in a list
chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
         't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
         'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


def getCipherChar(inCh, shift):
    # For space only return space
    if inCh == ' ':
        return ' '

    # Get the current index of charachter in our list
    index = chars.index(inCh)

    # shift the index
    newIndex = index+shift

    if(newIndex > len(chars)-1):
        newIndex -= len(chars)

    return chars[newIndex]


def cipherPhrase(phrase, shift):
    result = ''
    for ch in phrase:
        result += getCipherChar(ch, shift)

    return result

