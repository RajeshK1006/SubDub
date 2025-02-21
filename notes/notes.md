// things i learned in this project

1. creae an express app using a express generator -- npx exprss-generator --no-view (flag to prevent the front end stuff) --git (to initialize the repo) ./ (to create files in the current folder)

2. orm - mongoose

aysnc and await for db connection

monggose.connect(db_url)

What is Middleware?
Middleware is like a helper function that runs in between receiving a request and sending a response in a Node.js application (especially when using frameworks like Express). It can:

Do something with the request (e.g., check if the user is logged in).

Do something with the response (e.g., add headers or modify the response).

Decide whether to pass the request to the next middleware or stop it.

Think of it as a chain of functions that the request passes through before reaching the final destination (your route handler).
