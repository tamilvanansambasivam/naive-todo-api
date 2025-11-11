const express = require("express");
const app = express();

app.use(express.json()); // Allows JSON body parsing

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
