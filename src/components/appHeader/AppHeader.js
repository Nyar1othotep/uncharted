import "./AppHeader.scss";
import logo from "../../resources/img/logo.png";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
   const [windowWidth, setWindowWidth] = useState(0);
   const [activeBurger, setActiveBurger] = useState(false);
   const [activeMenu, setActiveMenu] = useState(false);
   const [lockBody, setLockBody] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   const onHandleClick = () => {
      if (windowWidth <= 630) {
         setActiveBurger((activeBurger) => !activeBurger);
         setActiveMenu((activeMenu) => !activeMenu);
         setLockBody((lockBody) => !lockBody);
      }
   };

   const clazz = activeBurger && activeMenu ? " active" : "";
   lockBody
      ? document.body.classList.add("lock")
      : document.body.classList.remove("lock");

   return (
      <header className="header">
         <div className="header__container _container">
            <div className="header__body">
               <Link className="header__logo" to="/">
                  <img src={logo} alt="logo" />
               </Link>
               <nav
                  className={"header__nav nav-header header__menu menu" + clazz}
               >
                  <ul className="nav-header__list">
                     <li className="nav-header__item">
                        <NavLink
                           end
                           to="/"
                           className="nav-header__link"
                           onClick={onHandleClick}
                           style={({ isActive }) => ({
                              color: isActive ? "#9f0013" : "white",
                           })}
                        >
                           Главная
                        </NavLink>
                     </li>
                     <li className="nav-header__item">
                        <NavLink
                           end
                           to="/character"
                           className="nav-header__link"
                           onClick={onHandleClick}
                           style={({ isActive }) => ({
                              color: isActive ? "#9f0013" : "white",
                           })}
                        >
                           Герои
                        </NavLink>
                     </li>
                     <li className="nav-header__item">
                        <NavLink
                           end
                           to="/collection"
                           className="nav-header__link"
                           onClick={onHandleClick}
                           style={({ isActive }) => ({
                              color: isActive ? "#9f0013" : "white",
                           })}
                        >
                           Легендарные места
                        </NavLink>
                     </li>
                  </ul>
               </nav>
               <div
                  className={"header__burger" + clazz}
                  onClick={onHandleClick}
               >
                  <span></span>
               </div>
            </div>
         </div>
      </header>
   );
};

export default AppHeader;
