# Property Management Application

This is a full-stack property management application built with React for the frontend and Node.js/Express for the backend. The application allows users to manage properties, tenants, and payments.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (local or cloud instance)

## Installation

Clone the repository to your local machine:

- git clone https://github.com/iammoussaab/property-management-app.git
- cd property-management-app

## Backend Setup

Navigate to the backend directory:

- cd backend
  Install the backend dependencies:
- npm install
  Create a .env file in the backend directory and add the following environment variables:

- PORT=5000
- MONGO_URI=your-mongodb-uri
- JWT_SECRET=your-jwt-secret

Start the backend server:

- npm start
  The backend server will start on http://localhost:5000.

## Frontend Setup

Navigate to the frontend directory:

- cd ../frontend
  Install the frontend dependencies:
- npm install
  Start the frontend development server:
- npm start
  The frontend server will start on http://localhost:3000.

## Running the Application

To run the application, ensure both the backend and frontend servers are running. Open your browser and navigate to http://localhost:3000 to access the application.

## Available Scripts

In the frontend directory, you can run the following scripts:

- npm start: Starts the development server.
- npm run build: Builds the app for production to the build folder.
- npm test: Launches the test runner.
- npm run eject: Ejects the app from the Create React App configuration.
  In the backend directory, you can run the following scripts:
- npm start: Starts the backend server.
- npm run dev: Starts the backend server with nodemon for live reloading.

This README file provides all the necessary instructions to set up, run, and understand the available scripts for your property management application.
