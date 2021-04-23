# todo 
# make a UI for this
from pytube import YouTube

movieLink = 'https://www.youtube.com/watch?v=uFfqHuVcW8s'

try:
    yt_obj = YouTube(movieLink)
 
    filters = yt_obj.streams.filter(progressive=True, file_extension='mp4')
 
    # download the highest quality video
    filters.get_highest_resolution().download()
    print('Video Downloaded Successfully')
except Exception as e:
    print(e)