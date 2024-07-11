# AptFinder

A simple listing apartments app, enables users to view list of apartments, view details of a certain apartment and to add is apartment.

This project marks my first experience with Next.js for frontend and React Native for Mobile Application.


https://github.com/mohmoussad/AptFinder/assets/88286511/53889c21-f1e0-4ba3-b1a5-77c75eec6b45



https://github.com/mohmoussad/AptFinder/assets/88286511/a8adbbdf-8637-4cfe-8aa3-286a09a6df5f


## Backend

### Tech Stack

- Language: TypeScript
- Framework: Node.js with Express
- Database: PostgreSQL with Sequelize ORM
- Deployment: Docker, Docker Compose
- Cloud Storage: Cloudinary (for image storage)

### Database Schema

![alt text](image.png)

## Frontend

### Tech Stack

- Framework: Next.js
- Language: JavaScript

## Mobile

### Tech Stack

- Framework: React Native
- Language: JavaScript
- Deployment: Expo Client (for testing)

## Running Backend, Frontend and Database with Docker Compose

- You need docker and docker-compose to be installed on your machine
- Modify .env.example files to include the required data
- Run `docker-compose up --build`
- Your backend should be accessible at http://localhost:5000 and frontend at http://localhost:3000.
