require('dotenv').config()
const express= require('express')
const session= require('express-session')
const massive = require('massive')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, SERVER_EMAIL, SERVER_PASSWORD}= process.env
const app = express()
const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: SERVER_EMAIL,
        pass: SERVER_PASSWORD
    }
})

app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60}
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db assaulting through objective')
    app.set('transporter', transporter)
    
    app.listen(SERVER_PORT, () => console.log(`server is raiding ports on ${SERVER_PORT}`))
}).catch(err => console.log(err))

const authCtrl = require('./controllers/authController')
const drillCtrl = require('./controllers/drillController')
const trainerCtrl = require('./controllers/trainersController')
const myDrillCtrl = require('./controllers/myDrillsController')
const myTrainerCtrl = require('./controllers/myTrainersController')







//auth endpoints

app.get('/api/user', authCtrl.getUser)
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth/logout', authCtrl.logout)


//drills endpoints

app.get('/api/drills', drillCtrl.getAllDrills)
app.get('/api/drill/:drill_id', drillCtrl.getSingleDrill)
// app.get('/api/singledrill/:drill_id', drillCtrl.getSingleDrill)

// to use the useAxios hook, the endpoints need to look like these below.  the hook creates the urls for them

// app.get("/api/posts", postCtrl.getPosts)
// app.get('/api/post/:id', postCtrl.getPost)
// app.post("/api/post", postCtrl.createPost)
// app.put("/api/post/:id", postCtrl.editPost)
// app.delete("/api/post/:id", postCtrl.delete



//trainer endpoints


app.get('/api/trainers', trainerCtrl.getAllTrainers)


//mydrills endpoints

app.get('/api/myDrills', myDrillCtrl.getMyDrills)
app.get('/api/mydrill/:drill_id', myDrillCtrl.getMySingleDrill)
app.post('/api/create', myDrillCtrl.createDrill)
app.post('/api/post', myDrillCtrl.postDrill)

app.delete('/api/remove/:drill_id', myDrillCtrl.removeDrill)


//myscores endpoints

app.get('/api/scores', myDrillCtrl.getScores)
app.put('/api/edit/:drill_id', myDrillCtrl.editScore)
app.get('/api/stats/:mydrill_id', myDrillCtrl.getStats)



//mytrainers endpoints

app.get('/api/myTrainers', myTrainerCtrl.getMyTrainers)
app.post('/api/postTrainer', myTrainerCtrl.addTrainer)
app.delete('/api/removeTrainer/:trainer_id', myTrainerCtrl.removeTrainer)


              