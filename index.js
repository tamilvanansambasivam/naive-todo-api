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

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
