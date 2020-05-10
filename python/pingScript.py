import subprocess


def pingSomeIp(destIp):
    pingResult = subprocess.check_output(['ping', destIp]).decode('utf-8')
    pingResultArr = pingResult.split('\n')
    return pingResultArr[2:6]


res = pingSomeIp('8.8.8.8')

for item in res:
    print(item)
