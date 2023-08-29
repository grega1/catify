import './App.css';
import Header from './components/Header'
import AllCats from './pages/AllCats';
import Home from './pages/Home'
import { CatsProvider } from './contexts/CatContext';
function App() {
  return (
    <CatsProvider>
    <div className="App">
      <h1>Hello World!</h1>
      <Header />
      <Home />
      <AllCats />
    </div>
    </CatsProvider>
  );
}

export default App;
