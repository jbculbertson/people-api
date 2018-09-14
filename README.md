# People Uploader API

This is the repo for the node-powered People Uploader API.  The People Uploader allows you to upload a list of your friends, attaching info to each person.  The app stores your friends, and secures them behind a password protected login page.

## Project Description

This project was a response to a coding challenge presented to me.  The goal was to create a full stack app (React repo linked below), allowing users to upload a file containing information about people.  The backend needed to persist this info, and the front end needed a real-time display of people.

I took the extra step of requiring a login to the site, so that I could persist and display all all time view of people uploaded by each user.

I chose to spend a total of 2 working days on this.  In order to achieve this, my strategy involved using a design framework (Semantic UI, not acheiving pixel perfection on the mockup, and some code that could easily be refactored for a more scalable solution.).


## React Repo

[People React Repo](https://github.com/jbculbertson/people)

## Setup

First, you'll need to clone the repo and `cd` into it.

```
git clone git@github.com:jbculbertson/people-api.git
cd people-api
```

Then, install packages.

```
npm install
```

This app makes use of packages like.

*   `Lodash` for helper functions
*   `Async` for asynchronous calls
*   `Mongoose` to add a schema and model structure
*   `Express` for a server structure
*   `Mocha and Chai` for testing

## Run

Spin up the app:

```
npm start
```

## Tests

I've added a basic test structure to cover the User endpoints.  You can run them with:

```
npm test
```
