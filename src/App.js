import './App.css';
import restaurant from "./assets/restaurant.jpg"

function SecretComponent() {
  return(
    <h1>Secret information</h1>
  )
}

function PublicComponent() {
  return(
    <h1>Public information</h1>
  )
}


function App({authorized}) {
  const [,,thirdItem] = ["boots", "tents", "hatcamps"]
  return (
    <>
      {authorized? <SecretComponent/> : <PublicComponent/>}
      <p>Array Destructing: Third Item - {thirdItem}</p>
    </>
  );
}

export default App;
