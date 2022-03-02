import './App.css';
import Navigation from './compontents/navigation/Navigation';
import { ApolloProvider } from "@apollo/client";
import { client } from './server/ApolloServer';
import Home from './containers/Home';
import { Routes, Route } from "react-router-dom";
import Article from './containers/Article';
import Cart from './containers/Cart';
import CtxProvider from './state/FilterContext'

function App() {
  return (
    <div className="App">
      <CtxProvider>
        <ApolloProvider client={client}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:params" element={<Article />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ApolloProvider>
      </CtxProvider>
    </div>
  );
}

export default App;
