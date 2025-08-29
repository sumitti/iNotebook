# 📒 iNotebook

A **secure note-taking web application** built with the **MERN stack**, featuring authentication, full **CRUD functionality**, and a clean, responsive user interface, deployed at: [Live Demo](https://inotebook-1-2cpm.onrender.com)

---

## Built With

- **Frontend**: React (bootstrapped with Create React App) :contentReference[oaicite:1]{index=1}  
- **Backend**: Node.js + Express  
- **Database**: MongoDB  
- **Authentication**: Likely JSON Web Tokens (JWT) (common in MERN apps, though not explicitly stated)  

---

## Getting Started

These instructions will help you run the project locally.

### Prerequisites

- Node.js (v14+ recommended)  
- npm or yarn  
- MongoDB instance (local or cloud-based)

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/sumitti/iNotebook.git
   cd iNotebook
   ````
2. **Install frontend dependencies**

   ```bash
   cd public
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd ../backend
   npm install
   ```

---

## Available Scripts

Run these from the root or appropriate subdirectory, as configured:

* `npm start` → Launches the frontend in development mode at `http://localhost:3000` 
* `npm test` → Starts the test runner in interactive watch mode 
* `npm run build` → Builds the app for production into the `build` folder (minified and optimized)
* `npm run eject` → Ejects from Create React App setup to give full control over configurations (irreversible)

---

## Features

* User registration and secure login (authentication likely via JWT)
* Create, Read, Update, and Delete notes (CRUD)
* Clean, responsive UI (mobile-friendly)
* Built using established MERN architecture for scalability and maintainability

---

## Project Structure

```
iNotebook/
├── backend/           Backend server & API logic
├── public/            React frontend (bootstrapped with CRA)
├── src/               Frontend source code
├── README.md          Project documentation
├── package.json       Project metadata & scripts
```

---

## Deployment

The live version is hosted and accessible here: [Live Demo](https://inotebook-1-2cpm.onrender.com)

You can deploy your own version using hosting platforms such as Heroku, Render, Netlify, or Vercel—configure environment variables (e.g., MongoDB URI, JWT secrets) and adjust build settings accordingly.

---

## Technologies & Tags

* **Languages**: JavaScript (frontend and backend)
* **Frameworks & Tools**: React, Node.js, Express
* **Database**: MongoDB
* **Keywords**: `notes-app`, `mern-project`, `inotebook`, `reactjs`, `nodejs`, `mongodb`

---

## Contributing

Contributions are welcome! You might consider:

1. Forking the repo
2. Creating a feature branch: `git checkout -b feature/YourFeature`
3. Making your changes and committing them
4. Pushing to your branch and opening a pull request

Feel free to add features like note categorization, search, collaboration tools, or UI enhancements.
