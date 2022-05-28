const app = require('express')();
const mongoose = require('mongoose');
const config = require('config');
const PORT = config.get('port') || 5000;

app.use('/api/users', require('./routes/users_routes'))

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