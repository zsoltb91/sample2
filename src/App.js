import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";
import Background from "./components/Background/Background";
import Contact from "./components/Contact/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Background>
        <Main />
        <Work />
        <Contact />
      </Background>
    </div>
  );
}

export default App;
