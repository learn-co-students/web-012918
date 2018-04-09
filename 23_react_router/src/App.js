import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Link, Switch } from 'react-router-dom';

// import Home from './Home.js'
import { NotFound } from './NotFound.js'
import { Scary } from './spice-girls/Scary.js'
import Baby from './spice-girls/Baby.js'
import { Ginger } from './spice-girls/Ginger.js'
import { Posh } from './spice-girls/Posh.js'
import { Sporty } from './spice-girls/Sporty.js'
import SpiceGirl from "./SpiceGirl"

class App extends Component {


  state = {
    spiceGirls: [
      {
        adjective: "Scary",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        path: "mel-b",
        component: Scary
      },
      {
        adjective: "Baby",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        path: "emma-b",
        component: Baby
      },
      {
        adjective: "Ginger",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        path: "geri-h",
        component: Ginger
      },
      {
        adjective: "Posh",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        path: "victoria-b",
        component: Posh
      },
      {
        adjective: "Sporty",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        path: "mel-c",
        component: Sporty
      },
    ]
  }


  buildSidebar = () => {
    return this.state.spiceGirls.map((spice) => {
      return (<li>
        <Link to={ "/spice-girl/" + spice.path }>{ spice.adjective }</Link>
      </li>)
    });
  }


  routeRender = (renderProps) => {

    const slug = renderProps.match.params.slug;

    const spice = this.state.spiceGirls.find((spiceGirl) => {
      return spiceGirl.path == slug;
    })

    console.log(spice)

    return <SpiceGirl adjective={ spice.adjective } />
  }


  doTheRoutes(){
    return this.state.spiceGirls.map((spice) => {
      return <Route path="/spice-girl/:slug" render={ this.routeRender } />
    })
  }

    // <Route path="/emma-b" component={ Baby } exact />
    //         <Route path="/mel-b" component={ Scary } exact />
    //         <Route path="/mel-c" component={ Sporty } exact />
    //         <Route path="/victoria-b" component={ Posh } exact />

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Spice Force Five</h1>
          <aside className="sidebar">
            <ul>
              { 
                this.buildSidebar()
              }
            </ul>
          </aside>
          <Switch>
            { this.doTheRoutes() }
            <Route>
              <NotFound />
            </Route>





          </Switch>
        </header>
      </div>
    );
  }

  // renderBeef(banana) {

  //   console.log(banana.match.params.beeftype)

  //   return <h1>BEEEEEEEEEEEEEF</h1>
  // }

}

export default App;
