const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = 3000;

// Mock database of college emails and user data
const collegeEmails = ["student1@college.edu", "student2@college.edu"];
const users = [];

// Endpoint to check if email is valid
app.post("/api/checkEmail", (req, res) => {
  const { email } = req.body;
  if (collegeEmails.includes(email)) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});

// Endpoint to save user data on sign-up
app.post("/api/signup", (req, res) => {
  const { email, password, idCardImage } = req.body;
  users.push({ email, password, idCardImage });
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
