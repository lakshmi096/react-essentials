import './App.css';

function Header(props) {
  return (
    <header>
      <h1>Its {props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>
        Get {props.description} Receipes
      </p>
    </section>
  )
}

function Footer(props) {
  return(
    <footer>
      <p>&copy;{props.year}  Just Kidding</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="Lakshmi"/>
      <Main description="delicious"/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
