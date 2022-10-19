import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UsersListing from './components/UsersListing';
import axios from 'axios';
import token from './token';

const DEFAULT_URL = "https://api.github.com/users?per_page=2";

function App() {
  const [url, setUrl] = useState(DEFAULT_URL);
  const [users, setUsers] = useState([
    {
      "login": "mojombo",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mojombo",
      "html_url": "https://github.com/mojombo",
      "followers_url": "https://api.github.com/users/mojombo/followers",
      "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
      "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
      "organizations_url": "https://api.github.com/users/mojombo/orgs",
      "repos_url": "https://api.github.com/users/mojombo/repos",
      "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mojombo/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "defunkt",
      "id": 2,
      "node_id": "MDQ6VXNlcjI=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/defunkt",
      "html_url": "https://github.com/defunkt",
      "followers_url": "https://api.github.com/users/defunkt/followers",
      "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
      "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
      "organizations_url": "https://api.github.com/users/defunkt/orgs",
      "repos_url": "https://api.github.com/users/defunkt/repos",
      "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
      "received_events_url": "https://api.github.com/users/defunkt/received_events",
      "type": "User",
      "site_admin": false
    }
  ]);

  // useEffect(() => {
  // axios.get(url, { 'auth': token })
  // .then(response => {
  // let tmpUsers = []
  // if (url.includes('search')) {
  // tmpUsers = response.data.items;
  // } else {
  // tmpUsers = response.data;
  // }
  // setUsers(tmpUsers);
  // })
  // .catch(err => {
  // alert(err);
  // });
  // }, []);

  return (
    <div className="App">
      <Header />
      <UsersListing users={users} />
      <Footer />
    </div>
  );
}

export default App;
