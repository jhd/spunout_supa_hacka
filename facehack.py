import urllib2
import json

def searchByID(ID):
    return json.load(urllib2.urlopen("http://www.whoismytd.com/v1/service/:" + ID))   

def searchByTag(tag):
    return json.load(urllib2.urlopen("http://www.whoismytd.com/v1/service/:" + tags))   

def allData():
    return json.load(urllib2.urlopen("http://www.whoismytd.com/v1"))   

def getLatitude(ID, data):
    return data['services'][ID]['address']['latitude']

def getLongitude(ID, data):
    return data['services'][ID]['address']['longitude']

def getTitle(ID, data):
    return data['services'][ID]['title']

def getInfo(ID, data):
    return data['services'][ID]['info']

def getPage(ID, data):
    return data['services'][ID]['page']

def getWebsite(ID, data):
    return data['services'][ID]['website']

def getEmail(ID, data):
    return data['services'][ID]['email']

def getPhone(ID, data):
    return data['services'][ID]['phone']

def getHotline(ID, data):
    return data['services'][ID]['hotline']

def getHours(ID, data):
    return data['services'][ID]['hours']

def getKeywords(ID, data):
    return data['services'][ID]['keywords']

def getImage(ID, data):
    return data['services'][ID]['image']

def getAddress(ID, data):
    result = data['services'][ID]['address']['lines'][0]
    result = result + data['services'][ID]['address']['lines'][1] + '\n'
    result = result + data['services'][ID]['address']['city'] + '\n'
    result = result + data['services'][ID]['address']['postcode'] + '\n'
    result = result + data['services'][ID]['address']['county'] + '\n'
    result = result + data['services'][ID]['address']['country']

    return result
allData = allData()

print getLatitude(0, allData)
print getLongitude(0, allData)
print getWebsite(0, allData)
print getEmail(0, allData)
print getPhone(0, allData)
print getHotline(0, allData)
print getKeywords(0, allData)
print getTitle(0, allData)
print getInfo(0, allData)
print getPage(0, allData)
print getAddress(0, allData)
