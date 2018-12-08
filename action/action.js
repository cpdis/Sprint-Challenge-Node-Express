const express = require("express");
const db = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then(actions => {
      res.json(actions);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get actions." });

      // Error
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", err.message);
      }
      console.log(err.config);
    });
});

router.get("/:action_id", (req, res) => {
  const { action_id } = req.params;

  db.get(action_id)
    .then(action => {
      if (action) {
        res.json(action);
      } else {
        res.status(404).json({ message: "Failed to get actions." });
      }
    })
    .catch(err => {
      res.status(404).json({ message: "Actions do not exist for this ID" });

      // Error
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", err.message);
      }
      console.log(err.config);
    });
});

router.post("/", (req, res) => {
  const { project_id, description, notes, completed } = req.body;
  const newAction = { project_id, description, notes, completed };

  db.insert(newAction)
    .then(actionId => {
      const { id } = actionId;

      db.get(id).then(action => {
        if (action) {
          res.status(201).json(action);
        } else {
          res.status(400).json({
            message: "Missing required information to create a new action."
          });
        }
      });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create action." });

      // Error
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", err.message);
      }
      console.log(err.config);
    });
});

module.exports = router;
