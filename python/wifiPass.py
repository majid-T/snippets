# snippet for see the saved passwords around
import subprocess

wifiNames = subprocess.check_output(['netsh', 'wlan', 'show', 'profiles'])
wifiNames = wifiNames.decode('utf-8').split('\n')
wifiNames = [i.split(':')[1][1:-1]
             for i in wifiNames if 'All User Profile' in i]
