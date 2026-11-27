const express = require("express");
const connectDB = require("./components/Config/dbConnect");
const app = express();
connectDB();
const userRouter = require("./components/router/userRouter");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRouter);

app.get("/", (request, response) => {
  response.status(200).send("Jose is here ");
});

app.post("/salutations", (request, response) => {
    const {name, course, section} = request.body;
    response.status(200).json({
        name: name,
        course: course,
        section: section,
        message: `Welcome! Name: ${name}, Course: ${course}, Section: ${section}`
    });
});

app.listen(8000, (error) => {
  if (error) {
    console.error("Error starting server: ", error);
    process.exit(1);
  }
  console.log("Server is running on port: ", 8000);
});
