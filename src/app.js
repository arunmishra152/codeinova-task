const express = require('express')
require('./db/mongoose')
const user = require('./routers/user')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(user)
app.listen(port,()=>{
    console.log('server is running on port ' + port)
})