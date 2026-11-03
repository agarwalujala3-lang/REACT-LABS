import { createElement } from "react"
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

// DECLARATIVE WAY OF RENDERING REACT ELEMENTS
// root.render(
// <h1 className="header">Hello React</h1>
// )

// const element = createElement("h1", { className: "header" }, "Hello React by createElement")

// const element = <h1 className="header">Hello React by JSX</h1>

// root.render(element)
// console.log(element)

// function MainContent() {
//   return <h1>React is Great!</h1> 
// }
// root.render(
//   <div>
//     <MainContent />
//   </div>
// )

// IMPERATIVE WAY OF RENDERING REACT ELEMENTS
// const header = document.createElement("h1")
// header.textContent = "Hello React by DOM"
// header.className = "header"
// document.getElementById("root").appendChild(header)

// INSERTING IMAGES IN REACT
const image = <img src="./src/assets/react.svg" alt="React Logo" />
root.render(
    <main>
        {image}
        <h1>React is Great!</h1>
    </main>
)