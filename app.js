const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);
server.listen(3000);

/* ASSIGNMENT */

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;

//     if (url === '/') {
//         res.write('<html> <h1> Hello World </h1>');
//         res.write('<form action="/create-user" method="POST"> <input type="text" name="username"> <button type="submit">Send</button> </form>');
//         res.write('</html>');
//         return res.end();
//     }

//     if (url === '/users') {
//         res.write('<html> <ul> <li> User 1 </li> <li> User 2 </li> </ul> </html>');
//         return res.end();
//     }

//     if (url === '/create-user' && method == 'POST') {

//         const body = [];

//         req.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         return req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const username = parsedBody.split('=')[1];
//             console.log(username);
//             res.writeHead(301, { "Location": "/users" });
//             return res.end();
//         });
//     }

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html> <h1> Hello Bad World </h1>');
//     res.end();
// });
// server.listen(3000);