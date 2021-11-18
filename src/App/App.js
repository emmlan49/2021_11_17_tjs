import React from "react";
import Flexlayout from "./components/Flexlayout/Flexlayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, value2: 0 };
  }

  /**
   * fonction appelée après le dernier rendu du composant
   */
  componentDidUpdate() {
    //console.log(arguments); // affiche les arguments reçus en paramètre

    // Bonus : avec style dans la console
    console.log(
      "%c%s",
      "font-size:42px;color:red;",
      "le changement est prêt et effectif : " + this.state.counter
    ); // affiche les arguments reçus
  }

  render() {
    return (
      <>
        <Header />
        <div className="App">
          <Flexlayout>
            <MemeViewer
              meme={{
                titre: "mon premie même",
                text: "Arrête de tricher",
                x: 380,
                y: 500,
                fontSize: 18,
                color: "tomato",
                fontWeight: "200",
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
        </div>
      </>
    );
  }
}

export default App;
