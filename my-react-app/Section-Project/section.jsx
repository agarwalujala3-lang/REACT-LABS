import { createRoot } from "react-dom/client"
import Header from "./Header"
import Main from "./Main"
const root = createRoot(document.getElementById("root"))
root.render(
  <Section />
)

function Section() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}
