const app=require("./app");
const connectDatabase = require("./config/database");


// Config env
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}

// Database connection
connectDatabase();

// Server running
app.listen(process.env.PORT,()=>{
    console.log("server is running at port "+process.env.PORT);
});