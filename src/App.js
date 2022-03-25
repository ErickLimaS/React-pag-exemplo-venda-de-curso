import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='first-content'>
        <div className='content'>
          <div className='overlay-text'>
            <h1 className='jap-text'>こんにちは</h1>
            <h1 className='ptbr-text'>Olá</h1>
          </div>
          <div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
