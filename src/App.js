import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Error from './Pages/Home/Error'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact component={Error}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
