# Agent News

Agent News is a Reddit style news site, where users can read, sort through and comment on articles, built in _React JS_.

The website logs you in as user 'jessjelly' automatically. From the homepage, you are shown a list of all of the articles on the site, which can be filtered by number of _comments_, _date added_, and number of _votes_, shown in either ascending or descending order and filtered by topic of _football_, _coding_ or _cooking_

Clicking on an article title will show the article with a list of comments for that article, and clicking on the author will show a user page showing info about the user and the articles that they have written.

There is an _infinite scroll_ on both the article list and the comment list, meaning that scrolling to the bottom of a list will load another batch of articles or comments.

## Live Website

The hosted app can be found [here.](https://agentnewsfornow.netlify.com/)

It uses an [API](https://agent-news.herokuapp.com/api) , hosted on Heroku, to store data in an SQL database. The Github repository for the API can be found [here.](https://github.com/samtatman/NC-News)

## Setting Up Locally

### Prerequisites

This application was built with _Node JS v12.8.0_. It is recommended that you have an up-to-date version of _Node_ installed.

### Installing

In order to run this program locally, clone this repository into a directory using the terminal command:

```bash
git clone https://github.com/samtatman/NC-News-app
```

Open the file in a code editor program, such as _VS-Code_.

Install the Node packages required using the command:

```bash
npm install
```

### Hosting the App locally

To host the app locally, run the command:

```bash
npm start
```

The program will open in a page on your browser

### Deploying the App on Netlify

To create a new build of the website, run the command:

```bash
npm run build
```

This will replace the current build directory with an updated one.
From there, run the command:

```bash
netlify deploy
```

When asked for a Publish Directory, specify

```bash
./build
```

This will create a draft URL. To create a live URL, input the command:

```bash
netlify deploy
```

specifying './build' as the Publish Directory again.

## Author

Sam Tatman
