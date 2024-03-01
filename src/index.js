const axios = require("axios");

async function fetchTodoById(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch TODO with ID ${id}: ${error.message}`);
  }
}

async function fetchEvenNumberedTodos(count) {
  const evenNumberedTodos = [];
  let index = 2; // Start from index 2 (the first even number)

  try {
    while (evenNumberedTodos.length < count) {
      const todo = await fetchTodoById(index);
      if (todo.id % 2 === 0) {
        evenNumberedTodos.push(todo);
      }
      index++;
    }
    return evenNumberedTodos;
  } catch (error) {
    throw new Error(`Failed to fetch even numbered TODOs: ${error.message}`);
  }
}

function printTodoInfo(todo, index) {
  console.log(`${index}. ${todo.title} - Completed: ${todo.completed}`);
}

const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  try {
    readline.question(`What's your name?`, (name) => {
      console.log(`Hi ${name}!`);
      readline.close();
    });

    const evenNumberedTodos = await fetchEvenNumberedTodos(20);
    // evenNumberedTodos.forEach(printTodoInfo);
    evenNumberedTodos.map((todo, index) => {
      printTodoInfo(todo, index);
    });
  } catch (error) {
    console.error(error.message);
  }
}

main();
