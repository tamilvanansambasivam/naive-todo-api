const express = require("express");
const app = express();

app.use(express.json()); // Allows JSON body parsing

let todos = [
  { id: 1, title: "Learn API basics", completed: false },
  { id: 2, title: "Build ToDo API", completed: true },
];

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running : http://localhost:${PORT}`)
);
