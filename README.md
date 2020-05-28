#  Project Tweet analytics
## *A web analytics keyword dashboard*

### Front-End : 
[twitter_api_project_front_end](https://github.com/noeklk/twitter_api_project_front_end)

### Description

This API allows :

- Users can signup and login in the application
- Users can login in the application with his account Twitter
- Users can see the tweets trends for each country
- Datavizualisation of the setup keyword to display the differences with time.


### Instructions

1.  You can either clone the project or download the latest release here :  `https://github.com/noeklk/noe_project_insight_back.git`
2.  Install docker & docker-compose
3.  Position yourself at the root of the project  `cd twitter_api_project_back_end`

### Languages used :
* Javascript (Node.JS)

### URL API : 
`http://127.0.0.1:4200/home`

#### Environment variables :
Rename the .env.sample file to .env and insert your values

```
USER_JWT_KEY=YOUR_GUEST_JWT_KEY
DB_NAME=YOUR_DB_NAME ("test" to use mocked datas)

TWITTER_CONSUMER_KEY=XXX
TWITTER_CONSUMER_SECRET=XXX
TWITTER_CALLBACK_URL=XXX
SESSION_SECRET=XXX
```

Here is a few requirements to use the application with this api

-   You must run both the api and application on the same environment
    -   Both must be running independently with  `docker-compose up`
    -   Navigate to  `localhost:4200`  OR  `127.0.0.1:4200`
    -   Then if you used mocked datas by entering  `test`  into the  `DB_NAME`  environment key, you should be able to login the application with the following users  `mongo > mongo-init.js`  

### Credits & Licence
29/05/2020 - GPL3 Licence (Open Source)
&nbsp;

**Noé ABDEL KALEK**  - *Front-End & Back-End Developer (Project Manager)*
&nbsp;
**Jéremie VANG FOUA**  - *Front-End & Back-End Developer*
&nbsp;
**Zayd SELMANI**  - *Front-End & Back-End Developer*  
&nbsp;
**Ouijdane EL IDRISSI RIOUI** - *Front-End & Back-End Developer*
&nbsp;