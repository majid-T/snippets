# snippet to extract passwords for saved wifi profiles
import subprocess


# Getting saved wifi profiles using cmd command netsh wlan show profiles
wifiNames = subprocess.check_output(['netsh', 'wlan', 'show', 'profiles'])
wifiNames = wifiNames.decode('utf-8').split('\n')
wifiNames = [i.split(':')[1][1:-1]
             for i in wifiNames if 'All User Profile' in i]

# Looping  in names and using cmd command netsh wlan show profile WIFI_NAME with KEY=CLEAR switch and print result
for name in wifiNames:
    password = subprocess.check_output(
        ['netsh', 'wlan', 'show', 'profile', name, 'KEY=CLEAR']).decode('utf-8').split('\n')
    password = [line.split(':')[1][1:-1]
                for line in password if 'Key Content' in line]
    try:
        print('{:<30}| {:<}'.format(name, password[0]))
    except IndexError:
        print('{:<30}| {:<}'.format(
            name, 'No PASSWORD - other authentication protocol might been used'))
