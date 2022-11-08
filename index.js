import express from 'express'
import session from 'express-session'

const app = express();

app.use(session({
    secret: 'keyboard cat',
    cookie: {}
}))

app.get('/route1', (res, req) => {
    req.session.favoriteColor = 'red';
    res.end();
})
app.get('/route2', (res, req) => {
    res.send(req.session.favoriteColor || 'no favorite color')
})
app.listen(8080);