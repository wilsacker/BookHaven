const User = require('../models/User'); // Adjust the import based on your actual user model

const resolvers = {
Query: {
    me: async (parent, args, context) => {
        if (context.user) {
        return User.findById(context.user._id).populate('savedBooks');
        }
        throw new AuthenticationError('You need to be logged in!');
    },
    },
    Mutation: {
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
        throw new AuthenticationError('Incorrect credentials');
        }
        const correctPassword = await user.isCorrectPassword(password); // Ensure this method exists
        if (!correctPassword) {
        throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(user); // Generate token
        return { token, user };
    },

    addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user); // Generate token
        return { token, user };
    },

    saveBook: async (parent, { book }, context) => {
        if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
            context.user._id,
            { $addToSet: { savedBooks: book } }, // Add book to savedBooks array
            { new: true }
        ).populate('savedBooks'); // Populate savedBooks if you want book details in the response
        return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
    },

    removeBook: async (parent, { bookId }, context) => {
        if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
            context.user._id,
            { $pull: { savedBooks: { bookId } } }, // Remove book by bookId
            { new: true }
        ).populate('savedBooks'); // Populate savedBooks for the updated user
        return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
    },
    },
};

module.exports = resolvers;