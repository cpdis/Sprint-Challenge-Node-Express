# Review Questions

## What is Node.js?

`Node.js` is a runtime environment that is used to execute Javascript applications outside of the browser. This allows the developer to write all sorts of applications like command line utilities, native programs, networking software, web services and more.

## What is Express?

Express is a framework that sits on top of Node, much like React on the frontend. It adds extra functionality and is simpler to work with.

## Mention two parts of Express that you learned about this week.

We learned about routing and middleware.

## What is Middleware?

Middleware provides a method for extending the features provided by the Express framework. Arbitrary functions, authentication, and logging are good use cases of middleware.

## What is a Resource?

Everything is a resource. Each resource is accessible via a unique URI, can have multiple representations, communicated with over HTTP, and is managed with HTTP methods (GET, POST, etc.)

## What can the API return to help clients know if a request was successful?

A `200 OK` status code communicates that the operation was successfull.

## How can we partition our application into sub-applications?

Using Express Routers is a good way to split a large web application up into smaller constituent parts.

## What is express.json() and why do we need it?

`express.json()` tells the client that we intend to send data in the `JSON` format. In the past, the `bodyparser` package was necessary to interpret any data submitted by the user. `bodyparser` became so necessary and commonplace that it was added to the core Express software.
