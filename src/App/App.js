import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header/Header";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import Flexlayout from "./components/Flexlayout/Flexlayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <h1>Bonjour et bienvenue</h1>
              Voici le nouveau générateur de meme versions 2021
            </Route>
            <Route path="/thumbnail">
              <MemeThumbnail />
            </Route>
            <Route path="/edit">
              <Flexlayout>
                <MemeViewer
                  meme={this.props.current}
                  image={this.props.images.find(
                    (e) => e.id === this.props.current.imageId
                  )}
                />
                <MemeForm />
              </Flexlayout>
            </Route>
            <Route path="/">
              <h1>404 not found</h1>
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

// on ajoute aux props les infos du store
// mapping champs
function mapStateToProps(state, own) {
  return {
    ...own,
    current: state.current,
    images: state.ressources.images,
  };
}

// dispatch
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
