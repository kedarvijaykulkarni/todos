const axios = require("axios");
const { fetchTodoById, fetchEvenNumberedTodos } = require("./controllers/todo");
const { fetchEvenNumberedTodosData } = require("./data");

// Mocking axios get function
jest.mock("axios");

describe("fetchTodoById", () => {
  it("fetches a single TODO item by ID", async () => {
    // Mocked TODO data
    const mockTodo = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };
    axios.get.mockResolvedValueOnce({ data: mockTodo });

    const todo = await fetchTodoById(1);

    expect(todo).toEqual(mockTodo);
  });

  it("throws an error when fetching a TODO item fails", async () => {
    // Error message to expect
    const errorMessage = "Failed to fetch TODO with ID 1: Not found";
    // Mocking axios.get to reject with an error
    axios.get.mockRejectedValueOnce(new Error("Not found"));

    await expect(fetchTodoById(1)).rejects.toThrow(errorMessage);
  });
});

describe("fetchEvenNumberedTodos", () => {
  it("fetches the first 20 even numbered TODOs", async () => {
    // Fake data from data.js
    const mockTodos = await fetchEvenNumberedTodosData();

    // Mocking axios.get to return a promise wrapping the mockTodos
    axios.get.mockImplementation((url) => {
      if (url.startsWith("https://jsonplaceholder.typicode.com/todos/")) {
        const id = parseInt(url.split("/").pop());
        return Promise.resolve({ data: mockTodos[id - 1] });
      }
      return Promise.reject(new Error("Invalid URL"));
    });

    // Fetching even numbered TODOs using the mocked ./data.js 
    const evenNumberedTodos = await fetchEvenNumberedTodosData(20); 

    // Assertion
    expect(evenNumberedTodos).toHaveLength(20);
    evenNumberedTodos.forEach((todo, index) => {
      expect(todo).toEqual(mockTodos[index]);
    });
  });

  it("throws an error when fetching even numbered TODOs fails", async () => {
    // Error message to expect
    const errorMessage =
      "Failed to fetch even numbered TODOs: Failed to fetch TODO with ID 2: Not found";
    // Mocking axios.get to reject with an error
    axios.get.mockRejectedValueOnce(new Error("Not found"));

    // Assertion using expect.toThrow
    await expect(fetchEvenNumberedTodos(20)).rejects.toThrow(errorMessage);
  });
});
