import "./App.css";
import Header from "./components/Header";
import AllCats from "./pages/AllCats";
import Home from "./pages/Home";
import { CatsProvider } from "./contexts/CatContext";
import { useState } from "react";
import Footer from "./components/Footer";
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
        <Header showHomeComponent={showHomeComponent} showHome={showHome}showAllCatsComponent={showAllCatsComponent}/>
        {showHome && <Home />}
        {showAllCats && <AllCats />}
        <Footer />
      </div>  
    </CatsProvider>
  );
}

export default App;
