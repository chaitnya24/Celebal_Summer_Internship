const express = require('express');
const app = express();
const PORT = 3000;

const userRoute = require("./routes/user.js");
const commentRoutes = require("./routes/comment.js");
app.use("/user", userRoute);
app.use("/comment", commentRoutes);


app.listen(PORT, () => {
    console.log("Server Running");
});