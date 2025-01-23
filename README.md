# World Whizz App

![World Whizz logo of a red panda standing on a globe](public/assets/ww-logo.png)

## Overview

This Node.js-powered application is a fun and educational travel app that lets users explore Western European countries through an interactive world map. Users can learn interesting facts about each country, participate in quizzes, and earn badges for their achievements. Users sign up for an account to save their progress and see in their journal the badges they have earned, accompanied by facts from successfully completed quizzes.

## Features

### Country Exploration
Navigate around the map using a mouse or touch screen and click on a country badge icon to view:
- Greeting in the national language
- Country name
- Capital city
- Currency
- Population
- Fun fact (randomly selected from five available facts)

### Quiz
Start a quiz for the selected country:
- 5 multiple-choice questions with 4 possible answers
- Earn that country's badge if all 5 questions are answered correctly

### User Accounts
- Sign Up/Login functionality to save progress
- Tracks user achievements by showing a country badge and country facts for countries where users achieved 5/5 in the quiz

### Technology Stack
- **Node.js:** Runtime environment
- **Express.js:** Server framework for Node.js
- **MongoDB:** NoSQL document database
- **Mongoose:** Object Data Modelling (ODM) library for MongoDB and Node.js
- **bcrypt:** Library for password hashing
- **Axios:** Promise-based HTTP client for data fetching
- **Vite:** Front-end build tool
- **Phaser:** Front-end HTML5 game framework and library

## API Endpoints

### Country Information
- `GET /countries` - Returns a list of all countries and their general information.
- `GET /countries/:countrycode` - Returns detailed information for the specified country.

### Quiz
- `GET /countries/:countrycode/quiz` - Starts a quiz for the specified country.

### User Management
- `POST /signup` - Registers a new user.
- `POST /signin` - Logs in an existing user.
- `POST /user/country` - Updates the user's progress (countries completed).
- `GET /user/:username/:countryname` - Checks the user's progress (countries completed).

### Future Enhancements
- Add more regions.
- More quiz questions.
- Share progress with other users.
- Reward users with mascot decoration for progress made.