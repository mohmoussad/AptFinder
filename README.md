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

### Endpoints Documentation

Assume your backend API base URL is http://your-backend-url/api.

#### List Apartments

- Endpoint: GET /apartments
- Description: Retrieves a list of all apartments.
- Response:

```
[
  {
    "id": 1,
    "title": "Spacious Apartment in Downtown",
    "description": "Lorem ipsum dolor sit amet...",
    "price": 1500.00,
    "createdAt": "2024-07-11T08:00:00Z",
    "updatedAt": "2024-07-11T10:30:00Z",
    "images": [
      {
        "id": 1,
        "url": "http://your-backend-url/uploads/image1.jpg"
      },
      {
        "id": 2,
        "url": "http://your-backend-url/uploads/image2.jpg"
      }
    ]
  },
  {
    "id": 2,
    "title": "Cozy Studio Apartment",
    "description": "Nulla consectetur elit...",
    "price": 900.00,
    "createdAt": "2024-07-10T12:00:00Z",
    "updatedAt": "2024-07-11T09:45:00Z",
    "images": [
      {
        "id": 3,
        "url": "http://your-backend-url/uploads/image3.jpg"
      }
    ]
  }
]
```

#### Get One Apartment

- Endpoint: GET /apartments/:id
- Description: Retrieves details of a specific apartment identified by id.
- Parameters:

  - `id`: Integer, ID of the apartment to retrieve.

- Response:

```
{
  "id": 1,
  "title": "Spacious Apartment in Downtown",
  "description": "Lorem ipsum dolor sit amet...",
  "price": 1500.0,
  "createdAt": "2024-07-11T08:00:00Z",
  "updatedAt": "2024-07-11T10:30:00Z",
  "images": [
    {
      "id": 1,
      "url": "http://your-backend-url/uploads/image1.jpg"
    },
    {
      "id": 2,
      "url": "http://your-backend-url/uploads/image2.jpg"
    }
  ]
}
```

#### Add Apartment

- Endpoint: POST /apartments
- Description: Creates a new apartment listing.
- Request Body:

```
{
  "title": "New Apartment Listing",
  "description": "A new apartment description...",
  "price": 1200.0,
  "images": [
    {
      "url": "http://your-backend-url/uploads/image1.jpg"
    },
    {
      "url": "http://your-backend-url/uploads/image2.jpg"
    }
  ]
}
```

- Response:

```
{
  "id": 3,
  "title": "New Apartment Listing",
  "description": "A new apartment description...",
  "price": 1200.0,
  "createdAt": "2024-07-11T12:00:00Z",
  "updatedAt": "2024-07-11T12:00:00Z",
  "images": [
    {
      "id": 4,
      "url": "http://your-backend-url/uploads/image1.jpg"
    },
    {
      "id": 5,
      "url": "http://your-backend-url/uploads/image2.jpg"
    }
  ]
}
```

#### Endpoint: POST /images/upload

- Description: Uploads an image for an apartment.
- Request Body:

```
Form-data:
    image: File
```

- Response:

```
{
  "id": 6,
  "url": "http://your-backend-url/uploads/image3.jpg"
}
```

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
