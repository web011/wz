const express = require("express");

const app = express();

app.set('secret','weajkwhjfhwhdhqh2')

app.use(require('cors')())

app.use(express.json())

app.use('./upload',express.static(__dirname + '/upload'))

require("./plugins/db")(app)
require("./routes/admin")(app)
require("./routes/web")(app)

app.listen(3000, ()=>{
    console.log("http://127.0.0.1:3000")
})