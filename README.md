### Agent News

Agent News is a Reddit style news site, where users can read, sort through and comment on articles. It uses an API https://agent-news.herokuapp.com/api , hosted on Heroku, to store data in an SQL database. The Github repository for the API can be found here: https://github.com/samtatman/NC-News

# Live Website

A link to the hosted app can be found here: https://agentnewsfornow.netlify.com/

# Setting Up

# Prerequisites

This application was built with Node JS v.12.8.0

In order to run this program locally, open the terminal and clone the repo into a Github depository using the terminal command:

```bash
git clone https://github.com/samtatman/NC-News-App.git
```

Install the Node packages _@reach/router_, _axios_, and _lodash-throttle_ using the command:

```bash
npm i @reach/router axios lodash.throttle
```

# Hosting the App locally

To host the app locally, run the command:

```bash
npm start
```

The program will open in a page on your browser

# Hosting the website

To create a new build, run the command

```bash
npm run build
```

This will replace the current build directory with an updated one.
