import csv

# assume file name is file.csv --> this can later come from user
with open('file.csv') as dataFile:
    reader = csv.DictReader(dataFile)
    
    print('='*100)

    # header names are known so we can format based on what we know
    for row in reader:
        print('-+'*48)
        print('Name: ' + row['lastname'] + ", " + row['name'])
        print("Age: " + row['age'])
        print('Score" ' + row['score'])
    
    print('='*100)