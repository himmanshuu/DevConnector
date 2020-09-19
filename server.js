const express = require('express');
const ConnectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;

//Connect Database
ConnectDB();
app.get('/', (req, res) => res.send('API running'));
// Init Middleware
app.use(express.json({ extended: false }));
//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.listen(PORT, () => console.log(`server listening on port:${PORT}`));