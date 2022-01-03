const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "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"
);

//http://localhost:5001/shopit-3c338/us-central1/api
// hnoh-ybee-ueyx-fnan-mnct  ---- stripe

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) =>
  response.status(200).send("hello from cloud")
);

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "INR",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(app);
