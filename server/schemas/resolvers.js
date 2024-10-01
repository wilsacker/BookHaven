const User = require('./models/User'); // Adjust the import based on your actual user model

const resolvers = {
  Query: {
    users: async () => {
        return User.find().populate('thoughts');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('thoughts');
      },
      thoughts: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Thought.find(params).sort({ createdAt: -1 });
      },
      thought: async (parent, { thoughtId }) => {
        return Thought.findOne({ _id: thoughtId });
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('thoughts');
        }
        throw AuthenticationError;
      },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // Check if the email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists with this email address.');
      }

      // Create a new user
      const newUser = await User.create({
        username,
        email,
        password, // You should hash this password before saving it!
      });

      // Return the created user (or any relevant info)
      return {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      };
    },
    login: async (parent, { email, password }) => {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('No user found with this email address.');
      }

      // Validate password (you should compare hashed passwords)
      const isValid = await user.validatePassword(password);
      if (!isValid) {
        throw new Error('Incorrect password.');
      }

      // Return user info or token (implement token generation if needed)
      return {
        id: user._id,
        username: user.username,
        email: user.email,
        // You can return a token here if you implement JWT or similar
      };
    }
  }
};

module.exports = resolvers;