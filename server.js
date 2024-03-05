const app = require('./app')
const { api } = require('./config')

app.listen(api.port, function (error) {
    if (error) {
        console.error('Unable to listen for connections', error);
        process.exit(10);
    }
    console.log(`app listening at port ${api.port}`);
});