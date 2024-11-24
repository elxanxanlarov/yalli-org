import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import { countryData } from "../../../Data/CountryData/CountryData";

const Hero = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countryData);
  const containerRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setFilteredCountries(
      searchTerm
        ? countryData.filter((country) =>
            country.toLowerCase().startsWith(searchTerm.toLowerCase())
          )
        : countryData
    );
  }, [searchTerm]);

  const toggleDropdown = (value) => {
    setIsOpenDropDown(value);
    if (!value) {
      setSearchTerm("");
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
    toggleDropdown(true);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      toggleDropdown(false);
    }
  };

  return (
    <div className="hero">
      <div className="container">
        <div>
        <img className="buta-left" src="../../../../src/Assets/Image/buta-img-left.png" alt="" />
        <img  className="buta-right" src="../../../../src/Assets/Image/buta-img-right.png" alt="" />
        </div>
        <div className="hero-con">
          <div>
            <div className="text-con">
              <div>
                <h1>World Azerbaijanis Hub</h1>
                <p>
                  Birləşmək başlanğıcdır, birliyi davam etdirmək inkişaf,
                  birlikdə işləmək isə müvəffəqiyyətdir!
                </p>
              </div>
            </div>
            <div className="country-con">
              <h4>Yaşadığın ölkədə yerlilərini tap</h4>
              <div className="country-search dp-cloumn">
                <div
                  ref={containerRef}
                  onClick={() => toggleDropdown(!isOpenDropDown)}
                  className="search-input w-100 dp-align"
                >
                  <TfiWorld className="world-icon" />
                  <input
                    ref={inputRef}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    value={searchTerm}
                    onClick={handleInputClick}
                  />
                  {!isOpenDropDown && (
                    <p className="info-text">
                      Ölkəni seç, orada yaşayan azərbaycanlılarla asanlıqla
                      tanış ol!
                    </p>
                  )}
                  {isOpenDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {isOpenDropDown && (
                  <div className="search-dropDown">
                    {filteredCountries.map((country, index) => (
                      <p key={index} onClick={() => toggleDropdown(false)}>
                        {country}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
