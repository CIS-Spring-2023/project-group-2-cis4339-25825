# Backend

This implementation is for NodeJS based on [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) and uses [mongoose](https://mongoosejs.com/) as the ODM.

## Project setup
   /// You will need to install the following onto your local machine 




    npm install
    npm init
    npm install --express

### Before startup
You need a MongoDB database ready.

Make sure you have a collection named 'org' in your database that contains at least one organization with the orgid listed in your environment variable (see below).

Setup a .env file with the following variables: MONGO_URL, PORT and ORG





### MongoDB Credentials  




    MONGO_URL= that is the Mongo URL connection string
    PORT= e.g.3000
    ORG= that is the orgid (as a string)

### Compiles and hot-reloads for development

    npm start

# This is my connection string
mongodb+srv://tesnpm st:test@cluster0.ktwp6yn.mongodb.net/test


