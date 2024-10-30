import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Resources } from "./components/Resources";
import { ImageArchive } from "./components/ImageArchive";
import { Add } from "./components/Add";
import { Footer } from "./components/Footer";
import { Newsletter } from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Resources />
      <ImageArchive />
      <Add />
      <Footer />
    </div>
  );
}

export default App;
