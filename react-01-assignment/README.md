Hello World React App
This project is a simple React application that demonstrates the use of functional and class components, passing props, handling state, and adding event listeners. It includes enhanced CSS styling with box shadows, borders, hover effects, and colors.

Table of Contents
Installation
Usage
Components
Functional Components
Class Components
Student Component
Display Component
Buttons Component
Styling
Contributing
License
Installation
To install and run the application locally:

Clone the repository:

sh
Copy code
git clone https://github.com/your-username/hello-world-app.git
cd hello-world-app
Install the dependencies:

sh
Copy code
npm install
Start the development server:

sh
Copy code
npm start
Open http://localhost:3000 to view the app in your browser.

Usage
The application displays a simple "Hello World" message along with various components that demonstrate different features of React:

Functional components: First, Second, Third, Fourth
Class components: First1, Second1, Third1, Fourth1
Student component displaying student information via props
Display component allowing modification of name and address props
Buttons component with event handlers for button clicks
Components
Functional Components
The application includes four functional components:

First
Second
Third
Fourth
These components simply display their names.

Class Components
The application also includes four class components:

First1
Second1
Third1
Fourth1
These components similarly display their names.

Student Component
There are two Student components: a functional component (StudentFunction) and a class component (StudentClass). Both receive name, address, and scores as props and display this information.

Display Component
The Display component receives name and address as props and displays them in text boxes. Users can modify these values within the component.

Buttons Component
The Buttons component includes two buttons. When clicked, they display an alert with either "Hello" or "Bye".

Styling
The application includes enhanced CSS styling:

Centered layout
Box shadows and hover effects
Borders and rounded corners
Color scheme for text and buttons
CSS is located in the src/App.css file and is applied globally.