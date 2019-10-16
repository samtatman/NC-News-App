# Agent News

Agent News is a Reddit style news site, where users can read, sort through and comment on articles, built in _React JS_.
It uses an API https://agent-news.herokuapp.com/api , hosted on Heroku, to store data in an SQL database. The Github repository for the API can be found here: https://github.com/samtatman/NC-News

## Live Website

A link to the hosted app can be found here: https://agentnewsfornow.netlify.com/

## Setting Up

### Prerequisites

This application was built with _Node JS v12.8.0_. It is recommended that you have an up-to-date version of _Node_ installed, or at least _v12.0.0_.

In order to run this program locally, fork this repository into your own Github repo. From there, clone the repo into your repository using the terminal command:

```bash
git clone _(your-github-repository-URL)
```

Open the file in a code editor program, such as _VS-Code_.

Install the Node packages _@reach/router_, _axios_, and _lodash-throttle_ using the command:

```bash
npm i @reach/router axios lodash.throttle
```

### Hosting the App locally

To host the app locally, run the command:

```bash
npm start
```

The program will open in a page on your browser

### Hosting the App on Netlify

To Create a new build of the website, run the command

```bash
npm run build
```

This will replace the current build directory with an updated one.
