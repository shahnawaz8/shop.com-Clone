const express = require("express");

const path = require("path");

app.listen(port, async function (req, res) {
  await connect();
  console.log(`listening at port ${port}`);
});