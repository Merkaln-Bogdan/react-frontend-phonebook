import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div>
    <NavLink to="/">Главная</NavLink>

    <NavLink to="/auth/signin">LogIn</NavLink>

    <NavLink to="/auth/register">Регистрация</NavLink>

    <NavLink to="/api/contacts">Контакты</NavLink>
  </div>
);

export { NavBar };
