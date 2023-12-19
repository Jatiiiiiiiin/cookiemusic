const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

let users = {}; // This is a placeholder for your user storage

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users[username] = { password: hashedPassword };
    res.status(201).send('User created');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users[username];
    if (user) {
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (isPasswordCorrect) {
            const token = jwt.sign({ username }, 'your-secret-key');
            res.status(200).send({ token });
        } else {
            res.status(401).send('Invalid credentials');
        }
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
