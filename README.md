# ToDo-REST-API

## Table of Contents
- [Project Overview](#project-overview)
- [How to Run the Project](#how-to-run-the-project)
- [Notes on Implementation](#notes-on-implementation)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## How to Run the Project

1. Clone this repository:
` git clone https://github.com/andisiambuku/ToDo-REST-API.git
`

2. Navigate to the project directory:
`$ cd ToDo-REST-API
`

3. Install dependencies:
`npm install
`

4. Set up environment variables (create a `.env` file in the root directory):
`
DB_URI=your_mongodb_connection_string PORT=3000
`

5. Start the server:
`
npm start
`

## Notes on Implementation

### Database Setup

This project uses MongoDB with Mongoose ODM. The database schema is defined in `src/models/toDoModel.ts`. Ensure your MongoDB connection string is correctly set in the `.env` file.

### API Endpoints

- GET `/api/v1/todos`: Retrieve all ToDo items
- POST `/api/v1/todos`: Create a new ToDo item
- GET `/api/v1/todos/:id`: Retrieve a specific ToDo item
- PUT `/api/v1/todos/:id`: Update a ToDo item
- DELETE `/api/v1/todos/:id`: Delete a ToDo item

### Environment Variables

Make sure to set up the following environment variables in your `.env` file:

- `DB_URI`: MongoDB connection string
- `PORT`: Port number for the server (default is 3000)

