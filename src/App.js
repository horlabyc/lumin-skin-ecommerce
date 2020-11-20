import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import './App.scss';
import NavBar from './components/navbar/navbar';
import Routes from './routes';
import CartContextProvider from './contexts/cartcontext';
import Cart from './components/cart/cart';

const apolloClient = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <CartContextProvider>
          <React.Fragment>
            <NavBar />
            <Cart />
            <Routes/>
          </React.Fragment>
        </CartContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
