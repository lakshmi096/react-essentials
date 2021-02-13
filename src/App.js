import './App.css';

function Header(props) {
  return (
    <header>
      <h1>Its {props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  console.log("props main ", props)
  return (
    <section>
      <p>
        Get {props.description} Receipes
      </p>
      <ul>
          {props.dishes.map(dish => 
            <li key={dish.id} style={{listStyle:'none', lineHeight:'2em'}}>
              {dish.title}
            </li>
          )}
        </ul>
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
  const dishes = [
    "Puri Sabzi",
    "Masala Dosa",
    "Rajma Chawal",
    "Dhokla"
  ]
  const dishesObject = dishes
  .map((dish, i) => ({
      id: i,
      title: dish
    })
  )
  console.log("dishesObject ",dishesObject)
  return (
    <div className="App">
      <Header name="Lakshmi"/>
      <Main description="delicious" dishes={dishesObject} />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
