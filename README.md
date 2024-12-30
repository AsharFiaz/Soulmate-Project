# Soulmate Project

Soulmate is a full-stack web application designed to connect individuals through a seamless matchmaking platform. It consists of a **backend** (Node.js) and a **frontend** (React.js), offering robust functionality and an intuitive user interface.

## Features

### Frontend:
- Built with React.js for a dynamic and responsive user interface.
- Components include:
  - **Header and Footer**: Navigation and branding.
  - **SignIn/SignUp**: User authentication pages.
  - **Profile and UserInfoForm**: User profile creation and updates.
  - **SuccessfulStories and Trusted**: Sections to showcase user success stories.
- Includes CSS for styling and a variety of images to enhance visual appeal.

### Backend:
- Built with Node.js and Express.js.
- Database models include:
  - **Users.js**: Manages user-related data.
  - **registration.js**: Handles user registration logic.
- API endpoints for user authentication and data handling.

## Installation

### Prerequisites:
- Node.js and npm installed on your machine.
- MongoDB database (local or cloud-based, e.g., MongoDB Atlas).
- Git for version control.

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/AsharFiaz/Soulmate-Project.git
   ```

2. Navigate to the backend folder and install dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Navigate to the frontend folder and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` folder with the following:
     ```env
     PORT=5000
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-secret-key
     ```

5. Start the backend server:
   ```bash
   cd ../backend
   npm start
   ```

6. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```

## Usage

- Visit `http://localhost:3000` to access the frontend.
- The backend runs on `http://localhost:5000`.
- Users can register, log in, and update their profiles.

## Project Structure

### Backend
```
backend/
├── index.js            # Main entry point for the server
├── package.json        # Backend dependencies and scripts
└── models/             # Database models
    ├── Users.js
    └── registration.js
```

### Frontend
```
frontend/
├── public/             # Public assets (e.g., index.html, favicon.ico)
├── src/
│   ├── components/     # React components (e.g., Navbar.jsx, Footer.jsx)
│   ├── image/          # Images and video assets
│   └── App.js          # Main React component
└── package.json        # Frontend dependencies and scripts
```

## Technologies Used

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Version Control**: Git

## Future Improvements
- Add unit tests for both frontend and backend.
- Implement advanced matchmaking algorithms.
- Optimize for mobile responsiveness.

## License
This project is licensed under the MIT License.

