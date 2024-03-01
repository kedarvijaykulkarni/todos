# Todos Command Line Tool

## Overview

The Todos Command Line Tool is a Node.js application designed to fetch and display the first 20 even numbered TODOs from a remote API. It provides a simple and efficient way to access and view this data.

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project.
3. Run `npm install` to install the required dependencies.

## Running the Tests

To run the tests for the application, use the following command:

```
npm test
```

This command will execute the test suites defined in the `index.test.js` file.

## Main Function

The main function of the application, located in the `index.js` file, is responsible for orchestrating the fetching and printing of TODO data. It consumes the `fetchEvenNumberedTodos` function from the controller module and prints the title and completion status of each TODO item.

## Test Cases

The test suite in `index.test.js` covers four main test cases:

1. Fetching a single TODO item by ID.
2. Handling errors when fetching a TODO item fails.
3. Fetching the first 20 even numbered TODOs and verifying their correctness.
4. Handling errors when fetching even numbered TODOs fails.

## File Structure

```
./src
│   ├── controllers
│   │   └── todo.js
│   ├── data.js
│   ├── index.js
│   └── index.test.js
```

- `controllers/todo.js`: Contains functions to fetch and print TODO data.
- `data.js`: Provides fake data for testing purposes.
- `index.js`: Main application file.
- `index.test.js`: Test suite for the application.

---
