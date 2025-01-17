World Whizz App

Overview

This Node.js-powered application is a fun and educational travel app that lets users explore Western European countries through an interactive world map. Users can learn interesting facts about each country, participate in quizzes, and earn badges for their achievements. Users can also sign up for an account to save their progress, including badges earned and questions answered correctly.

Features

Country Exploration
    •	Click on a Western European country to: 
        o	View general information: 
        o	Country Name
        o	Flag (image)
        o	Greeting in the national language
        o	Capital City
        o	Currency
        o	Population
        o	Fun Fact: Randomly selected from five available facts.

Quiz
    •	Start a quiz for the selected country: 
        o	5 multiple-choice questions with 4 possible answers (only 1 correct).
        o	Earn a country badge if all 5 questions are answered correctly.

User Accounts
    •	Sign Up/Login functionality to save progress.
    •	Tracks user achievements: 
        o	Logs all correctly answered questions.
        o	Displays all badges earned from completed quizzes.

Technology Stack
    •	Node.js: Backend server.
    •	Express.js: Framework for API and routing.
    •  	MongoDB: Database for storing user data, country information, and progress.
    •	Mongoose: ODM for MongoDB.
    •	bcrypt: For secure password hashing.
    •	Phaser: Frontend

Setup and Installation
Prerequisites
Ensure you have the following installed on your machine:
    •	Node.js
    •	MongoDB
    •	npm (Node Package Manager)
Installation Steps
    1.	Clone the repository:
    2.	git clone https://github.com/RubyEdwards/world-whizz.git
    3.	cd world-whizz
    4.	Install dependencies:
    5.	npm install
    6.	Set up environment variables:
        o	Create a .env file in the root directory.
        o	Add the following variables: 
        o	PORT=8080
        o	MONGO_URI=mongodb:
    7.	Start the development server:
    8.	npm run dev
    9.	Open the app in your browser at http://localhost:8080.

API Endpoints
Country Information
    •	GET /api/countries 
        o	Returns a list of all countries and their general information.
    •	GET /api/countries/:id 
        o	Returns detailed information for a specific country.
Quiz
    •	POST /api/quizzes/start 
        o	Starts a quiz for a specific country.
    •	POST /api/quizzes/submit 
        o	Submits answers and checks if all are correct.
User Management
    •	POST /api/users/signup 
        o	Registers a new user.
    •	POST /api/users/signin 
        o	Logs in an existing user.
    •	GET /api/users/journal 
        o	Retrieves the user's progress (questions answered correctly and badges earned).
Future Enhancements
    •	Add more regions.
    •	More quiz questions.
    •	Share progress with other users.