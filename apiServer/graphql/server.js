const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const app = express();

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Apply middleware before starting the server
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3000;

  try {
    // Connect to MongoDB before starting the server
    await mongoose.connect(
      "mongodb+srv://mern:1234@cluster.hlcyjqk.mongodb.net/?retryWrites=true&w=majority"
    );

    // Start the Apollo Server after MongoDB connection is established
    await server.start();
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
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer();
