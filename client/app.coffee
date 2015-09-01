express       = require('express')
path          = require('path')
cookieParser  = require('cookie-parser')
bodyParser    = require('body-parser')

app           = express()

app.use bodyParser.json()
app.use bodyParser.urlencoded {extended: false}
app.use cookieParser()
app.use express.static path.join __dirname, 'assets'
app.use express.static path.join __dirname, 'app'

app.use (req, res, next) ->
    err = new Error 'Not Found'
    err.status = 404
    next err

if app.get('env') == 'development'
    app.use (err, req, res, next) ->
        res.status err.status || 500
        res.render 'error', {
            message: err.message
            error: err
        }
        return

app.use (err, req, res, next) ->
    res.status err.status || 500
    res.render 'error', {
        message: err.message,
        error: {}
    }
    return

module.exports = app
