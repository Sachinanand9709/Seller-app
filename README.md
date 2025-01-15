 # Frontend  React + Vite
Seller App- README

This README file outlines the steps required to set up and run the Single Page Application  project designed to showcase full-stack development skills. The application features login functionality, a seller search feature, and a simple, modern UI.

Project Overview
The Seller Review application  is a full-stack web application with the following components:
Frontend: Developed using React.js and styled with Bootstrap for a clean, user-friendly design.
Backend: Built with Spring Boot to create RESTful APIs for handling   login and seller data.
Database: MySQL stores seller information and reviews.

SINGUP:http://localhost:8082/api/auth/singup
LOGIN:http://localhost:8082/api/auth/login

Username:sachinbscc385
password:abcd123456

Github repositorylink for fronend:https://github.com/Sachinanand9709/Seller-app.git
Github repository link for backend:https://github.com/Sachinanand9709/seller-backend.git

1. Frontend Setup:  React.js 
   npm install
   Run the Application: npm dev run

3. Backend Setup:  mvn clean install
Configure the Database:
Update the application.properties file with your database credentials:
spring.datasource.url=jdbc:mysql://localhost:5175/sellerreview
spring.datasource.username=root
spring.datasource.password="Root123"
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

Build and Run the Backend:
mvn clean install
mvn spring-boot:run

API Endpoints: open postman  
POST/api/auth/singup:{"username":" ", "password":" "}
POST/api/auth/login:{ "username":"sachinbscc385",
                        "password":abcd1234" }

POST/PUT/DELETE/GET /api/sellers: Fetches a list of sellers, optionally filtered by name using a query parameter.
Sample  data  { "name": "Sachin","rating": 4.5, "review": "good" }


3. Database Setup
Steps:Create the Database:
CREATE DATABASE sellerreview;
USE sellerreview;

4. Running the Application

Steps:

Start the backend service:mvn clean install
mvn spring-boot:run

Start the frontend service:
npm dev run 

Open your browser and visit:
Frontend: http://localhost:5175
Backend: http://localhost:8082

Workflow:
Login: Enter username and password to authenticate.
Search: Use the search bar to find sellers by name.
View Sellers: See the list of sellers, including their ratings and reviews.





Contact Information
For support or questions, 
contact:8651001467
Email: jaiswal18sachin@gmail.com



