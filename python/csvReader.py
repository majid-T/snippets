import csv

with open('file.csv') as dataFile:
    reader = csv.DictReader(dataFile)
    
    print('='*100)

    for row in reader:
        print('-+'*48)
        print('Name: ' + row['lastname'] + ", " + row['name'])
        print("Age: " + row['age'])
        print('Score" ' + row['score'])
    
    print('='*100)