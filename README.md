# BookHaven

## Description

BookHaven is a book search engine that allows users to discover new books and maintain a personalized list of their favorite titles. Users can search for books, create accounts, log in, log out, and save books to their accounts for future reference. The application is built with a GraphQL API using Apollo Server and MongoDB for data storage.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
* [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To run this application locally:

1.	Clone the repository:
```
git clone https://github.com/wilsacker/BookHaven.git
```

2. Navigate to the project directory:
```
cd BookHaven
```

3. Install the dependencies:
```
npm install
```

4.	Set up MongoDB if you haven’t already: MongoDB Installation Guide

5.	Ensure your MongoDB server is running.

6.	Set up environment variables:

•	Create a .env file using the .env.example file in the root directory.
•	Add the necessary variables to configure your database connection.

## Usage

1.	Run the application using the following command:
```
node run develop
```

2.	The application will start, and you can access it in your web browser at http://localhost:3000/.

3.	Users can:
•	Search for books using various criteria.
•	Create an account to save their favorite books.
•	Log in and out to manage their account and saved books.

## Features

•	Search Books: Find books by title, author, or keywords.
•	Save Favorites: Add books to your personal favorites list for easy access.
•	User Authentication: Secure login and registration system for user accounts.
•	View Saved Books: Display a list of all books saved by the user.

## Technologies

•	Node.js: Backend framework used to build the application.
•	Apollo Server: For building the GraphQL API.
•	MongoDB: NoSQL database for storing user and book data.
•	Mongoose: ODM for MongoDB to manage relationships between data.

## License

This project is licensed under the MIT license.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests to improve the functionality or fix bugs.

## Tests

This project does not currently include automated test suites, but you can manually test it by interacting with the application or by setting up testing frameworks like Jest if desired.

## Questions

If you have any questions, feel free to reach out:

- GitHub: [wilsacker](https://github.com/wilsacker)
- Email: williamsuttona@gmail.com

## Sources

This project was completed with the help of the following resources:

- [ChatGPT](https://chat.openai.com) - Used for guidance and assistance in building and troubleshooting parts of the application.
- [Node.js Documentation](https://nodejs.org/en/docs/) - For understanding the setup and use of 
Node.js.
- [MongoDB Documentation](https://www.mongodb.com/docs/) - For database setup and queries.
- [MDN Web Docs](https://developer.mozilla.org/) - For information on JavaScript functions and web development.