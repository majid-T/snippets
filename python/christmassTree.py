from random import randint
from time import sleep

r2 = randint(1,30)

def makeTree():
    print('\033c')
    for x in range(1,23):
        r1 = randint(1,r2)

        if x==1:
            ch='S'
        elif r1%4==0:
            ch='o'
        elif r1%3==0:
            ch="i"
        else:
            ch='*'
        
        print("{:^33}".format(ch*x))
        sleep(.75)

while True:
    makeTree()