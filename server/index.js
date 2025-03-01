const App = require("./app");
const port = 3001;

App.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
