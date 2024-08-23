cd..
cd pub
cd {{=it.cohesion}}
git add -A && git commit -m committing
git push heroku master
heroku open
TIMEOUT 11
taskkill /F /IM vrt.dpy.bat