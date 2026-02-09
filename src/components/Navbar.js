import "../style/style.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="navTitle">Silent Hill</Link>
      <ul>
        <li>
          <NavLink to="/games" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Games</NavLink>
        </li>
        <li>
          <NavLink to="/teamSilent" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Team Silent</NavLink>
        </li>
        <li>
          <NavLink to="/bts" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Behind The Scenes</NavLink>
        </li>
      </ul>
    </nav>
  );
}
