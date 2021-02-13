import './App.css';

function Header() {
  return (
    <header>
      <h1>Its Lakshmi's Kitchen</h1>
    </header>
  )
}

function Main() {
  return (
    <section>
      <p>
        Get Delicious Receipes
      </p>
    </section>
  )
}

function Footer() {
  return(
    <footer>
      <p>&copy;Just Kidding</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
