import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

// Set up the main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Middleware to attach the JWT token to each request
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token'); // Get the token from local storage
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '', // Add authorization header if token exists
    },
  };
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Use authLink middleware before making requests
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;