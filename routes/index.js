const fs = require("fs");
const router = require("express").Router();
let dbjson = require("../db.json");
// getting the information from notes and creating it in json form.
router.get("/notes", (req, res) => {
  dbjson = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  res.json(dbjson);
});
// this is posting your note as well pushing to json file.
router.post("/notes", (req, res) => {
  let noteModel = {
    title: req.body.title,
    text: req.body.text,
    id: Math.floor(Math.random() * 1000),
  };
  dbjson.push(noteModel);
  fs.writeFileSync("./db.json", JSON.stringify(dbjson));
  res.json(dbjson);
});
// attempt at creating the delete note but couldn't seem to understand it.
router.delete("/notes", (req, res) => {
  let;
});
module.exports = router;
