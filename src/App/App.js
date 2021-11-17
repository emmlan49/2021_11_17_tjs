import React from "react";
import Button from "./components/Button/Button";

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
      <div className="App">
        counter : {this.state.counter}
        <br />
        <Button
          text="Soustraire"
          onButtonClicked={() => {
            this.setState({ counter: this.state.counter - 1 });
            console.log(this.state);
          }}
          bgColor="tomato"
        />
        <Button
          text="Ajouter"
          onButtonClicked={() => {
            this.setState({ counter: this.state.counter + 1 });
            console.log(this.state);
          }}
          bgColor="green"
        />
      </div>
    );
  }
}

export default App;
