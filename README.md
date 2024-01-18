# Tasneem's Tech Blog
## Description
- This application will build a CMS style blog site similar to any wordpress site where developers can publish their blogs, comment on other's posts and see their blog's update. The application follows MVC paradigm in its architectural stucture and is deployed to Heroku. For templating language I used Handlebars.js, Sequelizer as ORM and express-session as npm package for authentication.

## Table of Contents
  - [Installation](#installation)
  - [Required Task](#required-task)
  - [User Instruction](#user-instruction)
  - [Command line code](#command-line-code)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Deploying to Heroku](#deploying-to-heroku)

## Installation

- Here are the installation process :
  - [1] Here is the repo for this application https://github.com/thalim-glam/techth_blog
  - [2] Clone the repository or download the zip folder.
  - [3] Open the source code in your code editor.
  - [4] Open the integrated terminal or git bash to test the application.
  - [5] Please refer to [Tests](#tests) section for further information regarding testing.

## Required Task 
- User Story 
  ```
  AS A developer who writes about tech
  I WANT a CMS-style blog site
  SO THAT I can publish articles, blog posts, and my thoughts and opinions
  ```
- Acceptance criteria
  ```
  GIVEN a CMS-style blog site
  WHEN I visit the site for the first time
  THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
  WHEN I click on the homepage option
  THEN I am taken to the homepage
  WHEN I click on any other links in the navigation
  THEN I am prompted to either sign up or sign in
  WHEN I choose to sign up
  THEN I am prompted to create a username and password
  WHEN I click on the sign-up button
  THEN my user credentials are saved and I am logged into the site
  WHEN I revisit the site at a later time and choose to sign in
  THEN I am prompted to enter my username and password
  WHEN I am signed in to the site
  THEN I see navigation links for the homepage, the dashboard, and the option to log out
  WHEN I click on the homepage option in the navigation
  THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
  WHEN I click on an existing blog post
  THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
  WHEN I enter a comment and click on the submit button while signed in
  THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
  WHEN I click on the dashboard option in the navigation
  THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
  WHEN I click on the button to add a new blog post
  THEN I am prompted to enter both a title and contents for my blog post
  WHEN I click on the button to create a new blog post
  THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
  WHEN I click on one of my existing posts in the dashboard
  THEN I am able to delete or update my post and taken back to an updated dashboard
  WHEN I click on the logout option in the navigation
  THEN I am signed out of the site
  WHEN I am idle on the site for more than a set time
  THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
  ```
## User Instruction

  - Click here for the repository:  
  - Click here for Readme file: 
  - Click here for the Heroku-deployed link :  
  - Here is a sample screenshots of my application :
    - Walkthrough Video link: 
    - Showing all post ![Screenshot of all post](./public/image/screenshot1.jpg)
    - Screenshot -2  ![Screenshot-2s]()
    - Screenshot -3 ![Screenshot-3]()
    - Screenshot -4 ![Screenshot-4]()

## Command line code

I used the following command lines:
- npm i
- npm run start
- git status
- git add -A
- git commit -m "Comment goes here"
- git pull origin main
- git push
- git branch
- git checkout main
- git checkout -b feature/add-branch

## Credits

Apart from me :D the credit also goes to my Instructor, the TAs, my Tutor, Classmates, and 
- Class Recordings
- https://www.geeksforgeeks.org/
- https://stackoverflow.com/
- https://sequelize.org/
- https://dev.mysql.com/
- https://google.com/

## License
 ![Github license](https://img.shields.io/badge/license-MIT-blue.svg) 

## Tests

To test this application please type, 
  - npm i [To install node modules ]
  - npm i express [To install express ]
  - npm run start [ To start the server ]
  - Open web browser 
  - You can also use Innsomnia/postman to test the application
  - Click here for deployed Heroku link : 

## Deploying to Heroku
:) This is suggested in the Heroku website.
:) Therefore using it for testing purpose.
:) Please feel free to click the button below 

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


### Done By: Tasneem Halim 😎