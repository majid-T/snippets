import subprocess


def pingSomeIp(destIp):
    timeResult = []
    pingResult = subprocess.check_output(['ping', destIp]).decode('utf-8')
    pingResultArr = pingResult.split('\n')[2:6]
    for i in pingResultArr:
        timeResult.append(i.split(' ')[4][5:-2])
    return timeResult

# Uncomment to test script
# res = pingSomeIp('8.8.8.8')

# for item in res:
#     print(item)
