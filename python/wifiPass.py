# snippet for see the saved passwords around
import subprocess

wifiNames = subprocess.check_output(['netsh', 'wlan', 'show', 'profiles'])
wifiNames = wifiNames.decode('utf-8').split('\n')
wifiNames = [i.split(':')[1][1:-1]
             for i in wifiNames if 'All User Profile' in i]
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
