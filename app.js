const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const auth = require('./middleware/auth.middleware');
const PORT = config.get('port') || 5000;

app.use(express.json());
app.use('/api/users', auth, require('./routes/users_routes'));
app.use('/api/profile', auth, require('./routes/profile_routes'));
app.use('/api/auth', require('./routes/auth_routes'));

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'),{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {console.log(`App has been started on port ${PORT}...`)});
    } catch(e) {
        console.error('Server Error', e.message);
        process.exit(1);
    }
}

start();