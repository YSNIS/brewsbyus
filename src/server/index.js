const express = require('express');
const os = require('os');

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    console.log('Express: production');
} else {
    app.use(express.static('dist'));
    console.log('Express: dist');    
}
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}`));
