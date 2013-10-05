import urllib2
import json

def searchByID(ID):
    return json.load(urllib2.urlopen("htpp://api.spunout.ie/search/:" + ID))   

def searchByTag(tag):
    return json.load(urllib2.urlopen("http://api.spunout.ie/search/:" + tags))   

def allData():
    return json.load(urllib2.urlopen("http://api.spunout.ie/"))   

print allData()
