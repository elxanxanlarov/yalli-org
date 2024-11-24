import { IoIosCloseCircleOutline } from "react-icons/io";

const HeaderMenu = ({isOpenMenu,setIsOpenMenu}) => {
  return (
    <>
      <div className={isOpenMenu?"header-menu active":"header-menu"}>
        <div className="menu-con">
          <div onClick={()=>setIsOpenMenu(false)} className="close-btn">
            <IoIosCloseCircleOutline />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
