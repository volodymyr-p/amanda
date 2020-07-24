
const HamburgerMenu = () => (
  <div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" htmlFor="menu__toggle">
      <span>
        <img className="menu__icon" src="img/menu_icon.jpg" alt="=" height="30px" width="35px"/>
      </span>
    </label>

    <ul className="menu__box">
      <li><a className="menu__item" href="#Home">Home</a></li>
      <li><a className="menu__item" href="#Benefits">Benefits</a></li>
      <li><a className="menu__item" href="#Features">Features</a></li>
      <li><a className="menu__item" href="#Services">Services</a></li>
      <li><a className="menu__item" href="#Technology">Technology</a></li>
      <li><a className="menu__item" href="#Team">Team</a></li>
      <li><a className="menu__item" href="#FAQ">FAQ</a></li>
      <li><a className="menu__item" href="#Kontakt">Kontakt</a></li>
    </ul>

    <style jsx>{`
      .hamburger-menu {
        display: none;
      }
      .img {
        object-fit: cover;
      }

      @media (max-width: 1155px) {
        .hamburger-menu {
          display: flex;
        }

        .menu__icon {
          border-radius: 3px
        }

        #menu__toggle {
          opacity: 0;
        }

        #menu__toggle:checked ~ .menu__box {
          visibility: visible;
          top: 6%
        }

        .menu__item:hover {
          background-color: #CFD8DC;
        }

        .menu__btn {
          display: flex;
          align-items: center;
          position: fixed;
          top: 10px;
          right: 20px;
          width: 26px;
          height: 26px;
        }

        .menu__btn > span,
        .menu__btn > span,
        .menu__btn > span {
          display: block;
          position: absolute;

          width: 100%;
          height: 2px;

          background-color: #616161;

        }
        
        .menu__btn > span::before {
          content: '';
          top: -8px;
        }
        .menu__btn > span::after {
          content: '';
          top: 8px;
        }

        .menu__box {
          position: fixed;
          visibility: hidden;
          top: 10%;
          right: 3%;
          border-radius: 1px;
          width: 250px;
          height: auto;
          padding-left: 0;

          list-style: none;

          background-color: #ECEFF1;
          box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);

        }

        .menu__item {
          display: block;
          padding: 10px;
          color: #333;

          font-family: 'Raleway ', sans-serif;
          font-size: 16px;
          font-weight: 500;

          text-decoration: none;

          transition-duration: 500;
        }
      }
    `}</style>
</div>
)

export default HamburgerMenu;