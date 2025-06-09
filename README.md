# Celebal Summer Internship (Node.Js)

A concise overview: Node.js + Express REST API with MongoDB—supports CRUD, authentication, and a blogging platform for backend learning.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. Install dependencies  
   ```bash
   npm install
   ```
3. Start the server  
   ```bash
   npm start
   ```

## Usage

- Access API via `http://localhost:3000/api/...`
- Example: `GET /api/posts` returns all posts
- Authentication uses JWT—include token in `Authorization: Bearer <token>`

## Project Structure

```
├── config/         # Configuration & DB setup
├── controllers/    # Route handlers
├── models/         # Mongoose schemas
├── routes/         # Express routes
├── middlewares/    # Auth, validation
├── utils/          # Helpers, logger
├── server.js       # Application entry point
└── package.json
```

## API Endpoints

| Method | Endpoint              | Description            |
|--------|-----------------------|------------------------|
| POST   | `/api/auth/register`  | User registration      |
| POST   | `/api/auth/login`     | User login & JWT token |
| GET    | `/api/posts`          | Fetch all blog posts   |
| POST   | `/api/posts`          | Create a blog post     |

## Contributing

Contributions are welcome!

1. Fork the repo  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit your changes with clear messages  
4. Submit a pull request

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
