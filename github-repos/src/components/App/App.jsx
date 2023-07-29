import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import Menu from '../Menu/Menu';
import Faq from '../Faq/Faq';
import MoreResults from '../MoreResults/MoreResults';

import logo from '../../assets/images/logo-github.png';

import './App.scss';

function App() {
  // Retrieve the list of all searched repositories using state variables.
  const [repos, setRepos] = useState([]);
  // retrieves the number of repos
  const [nbResults, setNbResults] = useState(0);
  // initializing empty input
  const [search, setSearch] = useState('');

  // API call using search inputs (load all repos)
  useEffect(() => {
    document.title = `Github search - ${search}`;
  }, [search]);
  const loadRepos = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=9`
      )
      .then((response) => {
        setRepos(response.data.items);
        setNbResults(response.data.total_count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Display more results when the "Plus de résultats" ("More results" in English) button is clicked, using the MoreResult component.
  const fetchMoreResults = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=${
          repos.length / 9 + 1
        }&per_page=9`
      )
      .then((response) => {
        setRepos([...repos, ...response.data.items]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="logo">
        <img src={logo} alt="" />
      </header>
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar
                value={search}
                setValue={setSearch}
                handleSubmit={loadRepos}
              />
              <Message nb={nbResults} />
              <ReposResults results={repos} />
              {repos.length !== nbResults && (
                <MoreResults fetchMore={fetchMoreResults} />
              )}
            </>
          }
        />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
