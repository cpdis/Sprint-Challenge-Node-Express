const express = require("express");
const db = require("../data/helpers/projectModel");

const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects." });

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

router.get("/:project_id", (req, res) => {
  const { project_id } = req.params;

  db.get(project_id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: "Failed to get project." });
      }
    })
    .catch(err => {
      res
        .status(404)
        .json({ message: `Project ${project_id} does not exist.` });

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

router.get("/:project_id/actions", (req, res) => {
  const { project_id } = req.params;

  db.getProjectActions(project_id)
    .then(projectActions => {
      if (projectActions) {
        res.json(projectActions);
      } else {
        res
          .status(404)
          .json({ message: "Failed to get actions for this project." });
      }
    })
    .catch(err => {
      res
        .status(404)
        .json({ message: `Project ${project_id} does not exist.` });

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
  const { name, description, completed } = req.body;
  const newProject = { name, description, completed };

  db.insert(newProject)
    .then(projectId => {
      const { id } = projectId;

      db.get(id).then(project => {
        if (project) {
          res.status(201).json(project);
        } else {
          res
            .status(400)
            .json({ message: "Missing required information for the project." });
        }
      });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create project." });

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

router.delete("/:project_id", (req, res) => {
  const { project_id } = req.params;

  db.remove(project_id)
    .then(deleted => {
      if (deleted) {
        res.json(deleted);
      } else {
        res.status(404).json({
          message: "The project with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      res
        .status(409)
        .json({ message: `Problem deleting project ${project_id}.` });

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
