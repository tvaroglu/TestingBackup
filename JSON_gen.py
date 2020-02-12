####SIMPLE ETL PROCESS IN ACTION!!!####

import unittest
import json, pprint
pp = pprint.PrettyPrinter(indent=2)


###EXTRACT (lines 19-31)###
###TRANSFORM (lines 32-39)###
###LOAD (lines 40-48)###


##file paths (input):##
##EXAMPLE SYNTAX (for a single file):  "with open('C:/Users/tvaroglu/Desktop/Product Dev/Test Suite/POSTMAN_automation/locations/environment.json', 'r') as file:"

##file paths (output):##
##EXAMPLE SYNTAX (for a single file):  "with open('C:/Users/tvaroglu/Desktop/Product Dev/Test Suite/POSTMAN_automation/zzzBackup/functional_testing/locations_environment2_test.json', 'w') as newfile:"

basepath = 'C:/Users/tvaroglu/Desktop/Product Dev/Test Suite/POSTMAN_automation/'
svcs = ['locations', 'quotes', 'orders', 'services', 'users']

for svc in svcs:
    pathlist = [basepath + svc + '/environment.json']
    print(pathlist)
    #print(len(pathlist))
    for p in pathlist:
        with open(p, 'r') as reader:
            envdata = json.load(reader)
            #pp.pprint(envdata)
            #print(len(envdata['values']))
            #pp.pprint(envdata['values'])
            varmod = envdata['values']
            for index,x in enumerate(varmod):
                #print(type(x))
                if 'url' in x ['key']:
                    envdata['values'][index]['value'] = 'https://api.cloudlink/v1'
                ##placeholder to modify additional variables##
                #if 'sfid' in x ['key']:
                    #envdata['values'][index]['value'] = 'Other sfid ID'
            newpath = [basepath + svc + '/environment_modified.json']
            print(newpath)
            #print(len(newpath))
            for file in newpath:
                with open(file, 'w') as writer:
                    json.dump(envdata, writer)
                    #pp.pprint(envdata)
                    #print(len(envdata['values']))
                    pp.pprint(envdata['values'])

