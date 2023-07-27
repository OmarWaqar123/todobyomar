# Todo App - MERN Website

This is a MERN (MongoDB, Express, React, Node.js) Todo app that allows you to keep track of your tasks. With this app, you can easily add new tasks, mark tasks as completed, and remove tasks that are no longer needed.


## Table of Contents

* Introduction

* Features

* Technologies Used

* Getting Started

* Installation

* Usage

* API Documentation

* Contributing

* License



## Introduction

The MERN Todo app is a full-stack web application that simplifies task management. Whether you want to keep track of your daily to-dos or manage a project, this app has got you covered. It provides an intuitive user interface for adding, updating, and deleting tasks, and the data is securely stored in a MongoDB database.


## Features

- User-friendly interface for adding new tasks.
- Option to mark tasks as completed.
- Easy removal of completed tasks.
- Secure authentication and data management.
- Mobile-responsive design for accessibility on different devices.


## Technologies Used

* Frontend: React.js
* Backend: Node.js with Express.js
* Database: MongoDB


## Getting Started

To run the MERN Todo app locally on your machine, follow the steps below:

## Installation

1. Clone this GitHub repository to your local machine.

```bash
git clone https://github.com/OmarWaqar123/todobyomar.git

cd backend
```

2. Install the required dependencies for both the backend  and the frontend.

```bash
npm install

cd ..

cd frontend

npm install
```

## Usage

1. Ensure you have MongoDB installed and running on your machine or you have created account on MongoDB atlas website.

2. Go to server.js file in backend folder and add your own mongoDB url to connect to mongoDB  

3. Start the server.

```bash
cd ..
cd backend
npm start
```

4. Start the React frontend.

```bash
cd ..
cd frontend
npm run dev
```
The app should now be running locally at http://localhost:5713/.



## API Documentation

The MERN Todo app exposes the following APIs:

- GET /todo/all: Get all tasks.
- POST /todo/new: Create a new task.
- PUT /todo/complete/:id: Update a task (e.g., mark as completed).
- DELETE /todo/delete/:id: Delete a task.

## Contributing

Contributions to the MERN Todo app are always welcome. If you find any issues or want to add new features, feel free to create a pull request.

1. Fork the project on GitHub.
2. Clone your forked repository.
3. Create a new branch.
4. Make your changes and commit them.
5. Push your changes to your forked repository.
6. Submit a pull request to the main branch of the original repository.

### Happy coding!


