#simple passport generator with almost all chars 
import random;

allChars= "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[];:."

passwordlen = 10

password = ''.join(random.sample(allChars,passwordlen))
print(password)
