import React from "react";

import Flexlayout from "./components/Flexlayout/Flexlayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <Flexlayout>
            <MemeViewer
              meme={{
                titre: "mon premier meme",
                text: "Hello",
                x: 380,
                y: 500,
                fontSize: 18,
                color: "black",
                fontWeight: "900",
                underline: true,
                italic: true,
                frameX: 0,
                frameY: 0,
              }}
              image={{
                id: 0,
                url: "img/meme_1.jpg",
                titre: "meme_1",
                h: 778,
                w: 736,
              }}
            />
            <MemeForm />
          </Flexlayout>
          <Navbar />
        </div>
      </>
    );
  }
}

export default App;
