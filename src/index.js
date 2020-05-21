import React from 'react';
import ReactDOM from 'react-dom';
import SearchFilms from './searchFilms'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Film Search</h1>
        <SearchFilms/>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
