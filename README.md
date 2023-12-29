# WELCOME TO Flight Search Service

## Project Setup
    -   clone the project on your local
    -   execute 'npm install' on the same path as of your root dieretory of the downloded project;
    -   create a '.env'  file in the root directory and add the following environment variable;
        - 'PORT=3000'
    
    - Inside the 'src/config' folder create a new file 'config.json' and then add the following piece of json

'''

{
  "development": {
    "username": "<YourDBLoginName>",
    "password": "<YourDBPassword>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


'''