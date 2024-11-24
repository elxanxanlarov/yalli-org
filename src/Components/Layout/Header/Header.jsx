import { Link, NavLink } from "react-router-dom";
import navLogo from "../../../../src/Assets/Image/navLogo.svg";
import { useContext, useState } from "react";
import { YalliContext } from "../../../Context/YalliContext";
import "./Header.css";
import { IoIosMenu } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import HeaderMenu from "./Components/HeaderMenu";
const Header = () => {
  const { currentUser } = useContext(YalliContext);
  const [isOpenMenu, setIsOpenMenu] = useState();
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-con dp-beetween">
            <div className="nav logo">
              <img src={navLogo} alt="" />
            </div>
            <div className="links rp-none">
              <ul className="dp-align">
                <li>
                  <NavLink className="link" to={"/"}>
                    Əsas səhifə
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to={"/ss"}>
                    Haqqımızda
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to={"/"}>
                    Üzvlər
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to={"/"}>
                    İcmalar
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to={"/"}>
                    Tədbirlər
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to={"/"}>
                    Mentorlar
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="rp-none">
                {currentUser ? (
                  <div>P</div>
                ) : (
                  <div className="right-btns dp-align">
                    <button className="login-btn">Giriş</button>
                    <button className="singUp-btn">Qeydiyyat</button>
                  </div>
                )}
              </div>
              <div className="dp-none">
                {currentUser ? (
                  <IoPersonCircleOutline className="profile-icon"/>
                ) : (
                  <div className="right-btns dp-align">
                    <button className="login-btn">Giriş</button>
                    <button className="singUp-btn">Qeydiyyat</button>
                  </div>
                )}
                <IoIosMenu onClick={()=>setIsOpenMenu(true)} className="menu-icon " />
                <HeaderMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
