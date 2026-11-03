export default function Header() {
  return (
    <header className="header">
      <img src="react.svg" alt="React Logo" className="logo" />
      <nav>
        <ul className="nav-items">
          <li><a href="#Pricing" className="nav-link">Pricing</a></li>
          <li><a href="#About" className="nav-link">About</a></li>
          <li><a href="#Contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}