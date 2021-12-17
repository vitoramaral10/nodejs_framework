const env = require('./envoriments');

module.exports = app => {
    app.listen(env.PORT, () => {
        console.log(`Server is running at localhost:${env.PORT}`)
    })
}