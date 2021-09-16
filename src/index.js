const express = require("express")
const helmet = require("helmet")
const postgre = require("./database/postgre")

const RestApiRoutes = require("./routes/rest-api")

const app = express()

app.use(helmet())
app.use("/", RestApiRoutes)

app.listen(6677, async () => {
  await postgre()
  console.log("connected to port 6677")
})