/*
 * Entry point of the command line tool.
 * Fetches the first 20 even numbered TODOs and prints their information.
 */
const { fetchEvenNumberedTodos, printTodoInfo } = require("./controllers/todo");

async function main() {
  try {
    console.log("Press enter to start");

    const evenNumberedTodos = await fetchEvenNumberedTodos(20);

    evenNumberedTodos.map((todo, index) => {
      printTodoInfo(todo, index);
    });
  } catch (error) {
    console.error(error.message);
  }
}

main();
