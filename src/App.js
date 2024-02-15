import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProduitList from "./components/ProduitList";
import VendeurList from "./components/VendeurList";
import Produit from "./components/Produit";
import Vendeur from "./components/Vendeur";

function App() {
  const styles = {
    main: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
    },
  };
  return (
    <div className="App">
      <Navbar />
      <div style={styles.main}>
        <ProduitList />
        <VendeurList />
      </div>
    </div>
  );
}

export default App;
