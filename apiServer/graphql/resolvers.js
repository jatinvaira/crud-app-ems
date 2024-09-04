const User = require('../models/User');

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error('Error fetching users');
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        const newUser = await User.create(input);
        return newUser;
      } catch (error) {
        throw new Error('Error creating user');
      }
    },
    
  },
};

module.exports = resolvers;
