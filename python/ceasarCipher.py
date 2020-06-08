# Simplified Ceasar Cipher example works on alphabetic charachtors only.
# Numbers provide a small pre-image since we are ciphering on each word. So numbers are not
# accepted and instead of 1 you should type one to increese security

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


def cipherPhrase(phrase, shift):
    result = ''
    for ch in phrase:
        result += getCipherChar(ch, shift)

    return result
