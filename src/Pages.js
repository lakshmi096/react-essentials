
import {
    Link,
    useLocation
  } from "react-router-dom";

export function About() {
    return (
      <header>
        <h1>[Company About]</h1>
      </header>
    )
}
  
export function Home() {
    return (
      <header>
        <h1>[Company Home]</h1>
        <nav>
          <ul style={{listStyle:'none'}}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export function Events() {
    return (
      <header>
        <h1>[Company Events]</h1>
      </header>
    )
}

export function Contact() {
    return (
      <header>
        <h1>[Company Contact]</h1>
      </header>
    )
}


export function PageNotFound() {
    const location = useLocation()
    return (
      <header>
        <h1>Resource not found at {location.pathname} </h1>
      </header>
    )
}