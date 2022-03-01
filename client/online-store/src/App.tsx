import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import './App.css';
import Navigation from './Navigation/Navigation';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Home from './containers/Home';
import { Routes, Route, Link } from "react-router-dom";
import Article from './containers/Article';
import Cart from './containers/Cart';
import { FilterContext, FilterContextType } from './state/FilterContext'


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});



function App() {
  const [searchBar, setSearchBar] = useState<string>("");
  const [categoryIds, setCategoryIds] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0.00);
  const [maxPrice, setMaxPrice] = useState<number>(1000000);
  const [sortByClmn, setSortByClmn] = useState<string>("");
  const [sortDir, setSortDir] = useState<string>("")


  const filtersInitialState: FilterContextType = {
    searchBar: searchBar,
    setSearchBar: setSearchBar,
    categories: categoryIds,
    setCategories: setCategoryIds,
    minPrice: minPrice,
    setMinPrice: setMinPrice,
    maxPrice: maxPrice,
    setMaxPrice: setMaxPrice,
    sortByClmn: sortByClmn,
    setSortByClmn: setSortByClmn,
    sortDir: sortDir,
    setSortDir: setSortDir
  }

  return (
    <div className="App">
      <FilterContext.Provider
        value={filtersInitialState}
      >
        <ApolloProvider client={client}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:params" element={<Article />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ApolloProvider>
      </FilterContext.Provider>
    </div>
  );
}

export default App;
