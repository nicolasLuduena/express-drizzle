import express from "express";
import db from "../drizzle/connection";
import { users } from "../drizzle/schema";

const app = express();
const port = process.env.PORT || 3000;

app.get("/barbie", async (req, res) => {
  try {
    const barbies = await db.select().from(users);
    res.send(barbies);
  } catch (err) {
    res.send("Something is wrong. If only Ken was here.");
  }
});

app.post("/barbie", async (req, res) => {
  try {
    await db.insert(users).values({ fullName: "Barbie", phone: "555-1234" });
    res.send("Barbie is in the house!");
  } catch (err) {
    res.send("Something is wrong. If only Ken was here.");
  }
});

app.get("/oppenheimer", (req, res) => {
  res.send("BOOM 💥");
});

app.listen(port, () => {
  return console.log("Server is listening on port: ", port);
});
