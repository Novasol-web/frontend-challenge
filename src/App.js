import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import PropertyList from './components/PropertyList';
import BaseMap from './api/OpenLaysers';
import './App.scss';
import './queries.scss';

class App extends React.Component {
  
  render() {
    return (
      <Router>
      <Route path='/' exact render={
        () => {
          return (
            <div>
              <header>
                <nav>
                  <div className='row'>
                    <ul className='main-nav'>
                      <li>
                        <Link to='/'>Home</Link>
                      </li>
                      <li>
                        <Link to='/map'>Map</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </header>
              <PropertyList />
            </div>
            )
          }
        }/>
        <Route path='/map' exact render={
          () => {
            return (
              <div>
                <header>
                  <nav>
                    <div className='row'>
                      <ul className='main-nav'>
                        <li>
                          <Link to='/'>Home</Link>
                        </li>
                        <li>
                          <Link to='/map'>Map</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </header>
                <BaseMap />
              </div>
              )
            }
          }/>
          </Router>
          )
        }
      }
      export default App;
      