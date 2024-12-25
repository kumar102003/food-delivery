Food Delivery App

This is a Food Delivery Application that allows users to browse food items, place orders, view past orders, and manage their cart. The app is built with React.js for the frontend and Node.js/Express.js for the backend. Authentication is handled using JWT (JSON Web Tokens) to ensure secure user access.
Features

    Home: Displays a list of all available food items.
    Login & Signup: Allows users to create an account and log in securely.
    Search: Provides users with the ability to search for food items.
    My Orders: Displays all the orders that the user has placed in the past.
    Cart: Shows the items that the user has added to their cart, ready for checkout.

Screenshots
1. Home Page
<img width="900" alt="Home" src="https://github.com/user-attachments/assets/53b3bff5-cd2a-452f-baad-3661e9d0a078" />

The Home page displays a list of all available food items that users can browse and add to their cart.


2. Login Page

The Login page allows users to authenticate with their registered credentials.
<img width="958" alt="Login" src="https://github.com/user-attachments/assets/f46e4f93-d6d9-440c-92c1-90e3df9fb57e" />


3. Signup Page

The Signup page lets new users create an account to start using the app.
<img width="930" alt="SignUp" src="https://github.com/user-attachments/assets/b33317c0-2164-44e7-9322-b416d373f37a" />

4. Search Page

The Search feature helps users find specific food items by entering keywords.
<img width="958" alt="Search" src="https://github.com/user-attachments/assets/e02db4d2-6b9d-45c0-8049-2b60ca996b0d" />

5. My Orders Page

The My Orders page shows a list of all the orders that the user has placed in the past, providing a history of their orders.
<img width="847" alt="MyOrder" src="https://github.com/user-attachments/assets/ce1ce856-1e74-405f-ad26-240db52729f3" />

6. Cart Page

The Cart page displays the items that the user has added to their cart, allowing them to proceed to checkout.
<img width="869" alt="Cart" src="https://github.com/user-attachments/assets/a5d67f61-447e-46db-9ee0-600e7c9c165f" />

Tech Stack

    Frontend: React.js, HTML, CSS 
    Backend: Node.js, Express.js
    Authentication: JWT (JSON Web Tokens)
    Database: MongoDB 

  Steps to Install and Run the Project

    Clone the repository:

    First, clone the project to your local machine:

git clone https://github.com/kumar102003/food-delivery.git

Navigate to the project directory:

cd food-delivery

Install backend dependencies:

Navigate to the backend/ folder and install the backend dependencies:

cd backend
npm install

Install frontend dependencies:

Go back to the root directory of your project and install frontend dependencies (which are in the src/ folder, alongside public/):

cd ..
npm install

This will install all the dependencies for both the backend and frontend parts of your project.

Set up your environment variables:

    In the root directory of your project (where README.md is located), create a .env file.

    Add the necessary environment variables, such as your MongoDB URI and JWT secret:

    MONGO_URI=your-mongo-uri
    JWT_SECRET=your-jwt-secret

Start the backend server:

Run the backend server from the backend directory:

cd backend
npm start

Start the frontend server:

Run the frontend server from the root directory of your project:

cd ..
npm start

Access the app:

    The backend server will run on a specified port (usually http://localhost:5000).
    The frontend will be available at http://localhost:3000.
