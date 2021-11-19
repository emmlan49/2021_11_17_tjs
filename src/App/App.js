import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header/Header";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import Flexlayout from "./components/Flexlayout/Flexlayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <MemeThumbnail />

          {/* <Flexlayout>
            <MemeViewer
              meme={this.props.current}
              image={this.props.images.find(
                (e) => e.id === this.props.current.imageId
              )}
            />
            <MemeForm />
          </Flexlayout> 
          <Navbar />*/}
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
