const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Home Page (/)
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is the Home Page");
    res.end();
  }
  // About Page (/about)
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is the About Page");
    res.end();
  }
  // Contact Page (/contact)
  else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is the Contact Page");
    res.end();
  }
  // File Write (/file-write)
  else if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error writing to file");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write('File "demo.txt" created with content "hello world"');
        res.end();
      }
    });
  }
  // Handle unknown routes
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
  }
});

const PORT = 5500;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
