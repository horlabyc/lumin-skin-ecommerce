import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import './App.scss';
import NavBar from './components/navbar/navbar';
import Routes from './routes';

const apolloClient = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Routes/>
        </React.Fragment>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
