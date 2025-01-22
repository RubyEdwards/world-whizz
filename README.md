# World Whizz App

![World Whizz logo of a red panda standing on a globe](public/assets/ww-logo.png)

## Overview

This Node.js-powered application is a fun and educational travel app that lets users explore Western European countries through an interactive world map. Users can learn interesting facts about each country, participate in quizzes, and earn badges for their achievements. Users can also sign up for an account to save their progress, including badges earned and questions answered correctly.

## Features

### Country Exploration
Navigate around the map using a mouse or touch screen and click on a country badge icon to view:
- Greeting in the national language
- Country Name
- Capital City
- Currency
- Population
- Fun Fact (randomly selected from five available facts)

### Quiz
Start a quiz for the selected country:
- 5 multiple-choice questions with 4 possible answers (only 1 correct)
- Earn a country badge if all 5 questions are answered correctly

### User Accounts
- Sign Up/Login functionality to save progress
- Tracks user achievements by showing a country badge and country facts for countries where users achieved 5/5 in the quiz

### Technology Stack
- **Node.js:** Backend server
- **Express.js:** Framework for API and routing
- **MongoDB:** Database for storing user data, country information, and progress
- **Mongoose:** ODM for MongoDB
- **bcrypt:** For secure password hashing
- **Phaser:** Frontend

## Setup and Installation
Ensure you have the following installed on your machine in order to connect locally:
- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation Steps

- If you'd like to try running this repository on your local machine 💻 , you can clone it by entering the following command in your terminal: `git clone https://github.com/RubyEdwards/world-whizz`.
- Then navigate into the folder using the command `cd world-whizz`.
- After that please install the required dependencies using the command `npm install`.
- Next set up environment variables by creating a .env file in the root directory with the following text: `PORT=8080 MONGO_URI=mongodb:`
- Enter the command `npm run dev` and open the app in your browser at `http://localhost:8080`.


## API Endpoints
### Country Information
- `GET /api/countries` - Returns a list of all countries and their general information.
`GET /api/countries/:id` - Returns detailed information for a specific country.

### Quiz
- `POST /api/quizzes/start` - Starts a quiz for a specific country.
- `POST /api/quizzes/submit` - Submits answers and checks if all are correct.
### User Management
- `POST /api/users/signup` - Registers a new user.
- `POST /api/users/signin` - Logs in an existing user.
- `GET /api/users/journal` - Retrieves the user's progress (questions answered correctly and badges earned).

### Future Enhancements
- Add more regions.
- More quiz questions.
- Share progress with other users.