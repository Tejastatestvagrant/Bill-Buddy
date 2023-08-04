const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up the Express middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (CSS and client-side JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', (req, res) => {
  const { username, password, confirmPassword } = req.body;

  // Basic form validation
  if (password !== confirmPassword || password.length < 8) {
    const errorMessage = password !== confirmPassword
      ? 'Passwords do not match'
      : 'Password must be at least 8 characters long';

    return res.send(
      `<script>alert('${errorMessage}'); window.location.href='/';</script>`
    );
  }

  const userData = {
    username,
    password, // In a real application, passwords should be hashed before storing.
  };

  // Load existing users from the JSON file
  let users = [];
  const usersFilePath = path.join(__dirname, 'users.json');

  try {
    const existingUsersData = fs.readFileSync(usersFilePath, 'utf8');
    users = JSON.parse(existingUsersData);
  } catch (err) {
    // Ignore if the file does not exist or is empty
  }

  // Check if the username is already taken
  if (users.some(user => user.username === userData.username)) {
    return res.send(
      `<script>alert('Username already taken'); window.location.href='/';</script>`
    );
  }

  // Add the new user to the list
  users.push(userData);

  // Save the updated users data to the JSON file
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  // After successful registration, redirect to the login page
  return res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Load existing users from the JSON file
  const usersFilePath = path.join(__dirname, 'users.json');
  const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

  // Check if the username and password match any registered user
  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    // If credentials match, redirect to the home page
    return res.redirect(`/home.html?username=${encodeURIComponent(username)}`);
  } else {
    // If credentials do not match, show an error message on the login page
    return res.send(
      `<script>alert('Invalid credentials'); window.location.href='/login';</script>`
    );
  }
});

app.get('/home', (req, res) => {
  const { username } = req.query;
  res.send(`<h2>Welcome, ${username}!</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
