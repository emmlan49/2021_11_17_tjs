import React from "react";

import Flexlayout from "./components/Flexlayout/Flexlayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import Navbar from "./components/Navbar/Navbar";
import { REST_ADR, REST_RESSOURCE } from "./config/config.";

import { store } from "./store/store";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: {
        imageId: 0,
        titre: "mon premier meme",
        text: "Hello",
        x: 380,
        y: 500,
        fontSize: 18,
        color: "#000000",
        fontWeight: "900",
        underline: true,
        italic: true,
      },
      images: [],
    };
  }

  componentDidMount() {
    fetch(`${REST_ADR}${REST_RESSOURCE.images}`)
      .then((f) => f.json())
      .then((arr) => this.setState({ images: arr }));
  }

  render() {
    return (
      <>
        <Header />
        <div className="App">
          <Flexlayout>
            <MemeViewer
              meme={this.state.current}
              image={this.state.images.find(
                (e) => e.id === this.state.current.imageId
              )}
            />
            <MemeForm
              meme={this.state.current}
              onMemeChange={(meme) => {
                this.setState({ current: meme });
              }}
              images={this.state.images}
            />
          </Flexlayout>
          <Navbar />
        </div>
      </>
    );
  }
}

export default App;
