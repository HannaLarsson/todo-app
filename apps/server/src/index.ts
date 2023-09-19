import { createServer } from "./server";

const server = createServer();

const port = parseInt(process.env.PORT || "3000");

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
