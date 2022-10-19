import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UsersListing from './components/UsersListing';
import axios from 'axios';
import token from './token';

const MAX_USERS = 5;
const DEFAULT_URL = `https://api.github.com/users?per_page=${MAX_USERS}`;

function getSearchUrl(query) {
  return `https://api.github.com/search/users?q=${query}&per_page=${MAX_USERS}`;
}

function App() {
  const [url, setUrl] = useState(DEFAULT_URL);
  const [users, setUsers] = useState([]);

  function search(q) {
    setUrl(getSearchUrl(q));
  }

  useEffect(() => {
    axios.get(url, { 'auth': token })
      .then(response => {
        let tmpUsers = []
        if (url.includes('search')) {
          tmpUsers = response.data.items;
        } else {
          tmpUsers = response.data;
        }
        console.log(tmpUsers);
        setUsers(tmpUsers);
      })
      .catch(err => {
        alert(err);
      });
  }, [url]);

  return (
    <div className="App">
      <Header onSearch={(q) => search(q)} />
      <UsersListing users={users} />
      <Footer />
    </div>
  );
}

export default App;
