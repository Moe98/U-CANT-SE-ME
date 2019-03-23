const express = require("express");
const mongoose = require("mongoose");

//Require Route Handlers
const investors = require("./routes/api/investors");
const lawyers = require("./routes/api/lawyers");
const reviewers = require("./routes/api/reviewers");
const admins = require("./routes/api/admins");
const cases = require("./routes/api/cases");
const companies = require("./routes/api/companies");
const notifications = require("./routes/api/notifications");
const externalEntities = require("./routes/api/externalEntities");

//To be removed
// const investorActions = require("./userStories/investorActions");
// const investorFillForm = require("./userStories/investorFillForm");
// const lawyerActions = require("./routes/api/lawyerActions");
// const reviewerActions = require("./userStories/reviewerActions");
// const lawyerGetAllCases=require("./userStories/lawyerGettingAllCases");
// const adminGetAllCases=require("./userStories/adminGettingAllCases");
// const reviewerGetAllCases=require("./userStories/reviewerGettingAllCases");
// const trackMyCompany = require("./userStories/trackMyCompany")


const app = express();

//Getting Mongo's connection URI
const db = require("./config/keys").mongoURI;

//Connecting to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Homepage
app.get("/", (req, res) => res.send("HomePage"));

//Use Route Handlers
app.use("/api/investors", investors);
app.use("/api/lawyers", lawyers);
app.use("/api/reviewers", reviewers);
app.use("/api/admins", admins);
app.use("/api/companies", companies);
app.use("/api/cases", cases);
app.use("/api/notifications", notifications);
app.use("/api/externalEntities", externalEntities);

//To be Removed
// app.use("/api/investorActions", investorActions);
// app.use("/api/investorFillForm", investorFillForm);
// app.use("/api/lawyerActions",lawyerActions);
// app.use("/api/reviewerActions", reviewerActions);
// app.use("/api/lawyerGettingAllCases",lawyerGetAllCases);
// app.use("/api/adminGettingAllCases",adminGetAllCases);
// app.use("/api/reviewerGettingAllCases",reviewerGetAllCases);
// app.use("/api/trackMyCompany", trackMyCompany);


// Handling 404
app.use((req, res) => {
  res.status(404).send({ err: "We can not find what you are looking for" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));