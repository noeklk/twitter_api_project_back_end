#  Project Tweet analytics
## *A web analytics keyword dashboard*

### Front-End : 
[Twitter Analytics Front End](https://github.com/noeklk/twitter_api_project_front_end)

### Description

This API allows :

- CRUD Users.
- Database MongoDB.
- CRUD Keywords.
- Twitter API.
- CRON jobs will check every 10 minutes, if a tweet is posted about that keyword and store the number in database.

### Instructions

1.  You can either clone the project or download the latest release here :  [twitter_api_project_back_end](https://github.com/noeklk/twitter_api_project_back_end)
2.  Install docker & docker-compose
3.  Position yourself at the root of the project  `cd twitter_api_project_back_end`

### Languages used :
* Javascript (Node.JS)

### Base URL to API : 
`http://127.0.0.1:3000/`
or
`http://localhost:3000/`

#### Environment variables :
Rename the .env.sample file to .env and insert your values

### You can get your twitter_consumer_key and twitter_consumer_secret here [Twitter Applications](https://developer.twitter.com/en/apps/)
In the [Details] of your applications you will be able to get in the [keys and tokens] tab and get both of your keys
- twitter_consumer_key: API key
- twitter_consumer_secret: API secret key

```
USER_JWT_KEY=XXX (Anything that is unique)
DB_NAME=YOUR_DB_NAME ("test" to use mocked datas)

TWITTER_CONSUMER_KEY=XXX  (Use your Twitter App api consumer key 'Your Twitter App > Details > Keys And Tokens')
TWITTER_CONSUMER_SECRET=XXX (Use your Twitter App api consumer secret key 'Your Twitter App > Details > Keys And Tokens')

SESSION_SECRET=XXX (Anything that is unique)
```

Here is a few requirements to use the application with this api

-   You must run both the api and application on the same environment
    -   Both must be running independently with  `docker-compose up`
    -   Navigate to  `localhost:4200`  OR  `127.0.0.1:4200`
    -   Then if you used mocked datas by entering  `test`  into the  `DB_NAME`  environment key, you should be able to login the application with the following users  `mongo > mongo-init.js`  

Here are the few mocked users data if you use the 'test' database

Pseudo | Password 
--- | --- 
etudiant1 | etudiant1
etudiant2 | etudiant2


### Credits & Licence
29/05/2020 - GPL3 Licence (Open Source)


**Noé ABDEL KALEK**  - *Front-End & Back-End Developer (Project Manager)*


**Jéremie VANG FOUA**  - *Front-End & Back-End Developer*


**Zayd SELMANI**  - *Front-End & Back-End Developer*  


**Ouijdane EL IDRISSI RIOUI** - *Front-End & Back-End Developer*

