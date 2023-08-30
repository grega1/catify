import "./App.css";
import Header from "./components/Header";
import AllCats from "./pages/AllCats";
import Home from "./pages/Home";
import { CatsProvider } from "./contexts/CatContext";
import { useState } from "react";
function App() {
  const [showHome, setShowHome] = useState(true);
  const [showAllCats, setShowAllCats] = useState(false);

  const showHomeComponent = () => {
    setShowHome(true);
    setShowAllCats(false);
  };

  const showAllCatsComponent = () => {
    setShowHome(false);
    setShowAllCats(true);
  };

  return (
    <CatsProvider>
      <div className="Wrapper">
        <h1>Hello World!</h1>
        <Header showHomeComponent={showHomeComponent} showAllCatsComponent={showAllCatsComponent}/>
        {showHome && <Home />}
        {showAllCats && <AllCats />}
      </div>
    </CatsProvider>
  );
}

export default App;
