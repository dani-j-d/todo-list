const express = require("express");
const app = express();
const port = 3001;

const dummyTodoItem = {
  title: "Title Test",
  description: "Description of Test",
  createdOn: "11/11/2011",
  completed: false,
};

app.get("/api", (req, res) => {
  res.send(dummyTodoItem);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
