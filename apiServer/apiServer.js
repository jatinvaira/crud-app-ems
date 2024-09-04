const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  mongoose.connect(
    "mongodb+srv://mern:1234@cluster.hlcyjqk.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = mongoose.connection;

  db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
  });
}

startServer();
