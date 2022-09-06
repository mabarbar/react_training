import "./App.css";
import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Contents />
        <Footer />
      </header>
    </div>
  );
}

export default App;
