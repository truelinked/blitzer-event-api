const app = require('./app')

const port = process.env.APP_PORT || '3000'

app.listen(port, function () {
    console.log('app listening at port %s', port);
});