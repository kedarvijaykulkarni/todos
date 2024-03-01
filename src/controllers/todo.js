const axios = require('axios');

/*
 * Function to fetch a TODO by its ID from the JSONPlaceholder API.
 * @param {number} id - The ID of the TODO to fetch.
 * @returns {Object} - The TODO object.
 * @throws {Error} - If fetching the TODO fails.
 */
const fetchTodoById = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch TODO with ID ${id}: ${error.message}`);
  }
};

/*
 * Function to fetch the first 'count' even numbered TODOs.
 * @param {number} count - The number of even numbered TODOs to fetch.
 * @returns {Array} - An array containing the even numbered TODO objects.
 * @throws {Error} - If fetching the even numbered TODOs fails.
 */
const fetchEvenNumberedTodos = async (count) => {
  const evenNumberedTodos = [];
  let index = 2; // Start from index 2 (the first even number)

  console.log("Please wait while we fetch the API response.");
  try {
    while (evenNumberedTodos.length < count) {
      const todo = await fetchTodoById(index);
      if (todo.id % 2 === 0) {
        evenNumberedTodos.push(todo);
      }
      index++;
    }
    console.log("The API response has been successfully fetched. Thank you for your patience!");
    return evenNumberedTodos;
  } catch (error) {
    throw new Error(`Failed to fetch even numbered TODOs: ${error.message}`);
  }
};

/*
 * Function to print the information of a TODO.
 * @param {Object} todo - The TODO object to print.
 * @param {number} index - The index of the TODO in the list.
 */
const printTodoInfo = (todo, index) => {
  console.log(`${index}. ${todo.title} - Completed: ${todo.completed}`);
};

module.exports = { fetchTodoById, fetchEvenNumberedTodos, printTodoInfo };