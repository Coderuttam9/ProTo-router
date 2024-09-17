import React from "react";
import { RiFacebookLine, RiLinkedinLine, RiTwitterXLine} from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content py-4 ">
          <div className="container">
            <div className="row ">
              <div className="col-md-2 ">
                <div className="log flex justify-center align-middle ">
                  <div className="logo-content pt-4">
                    <img
                      src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/themes/porto/images/logo/logo_black.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-10">
                <div className="top-manu flex justify-end gap-3 ">
                  <ul className="top-menu-1 flex justify-end gap-3 ">
                    <li >
                      <IoIosArrowForward /> <Link to="">About Us</Link>
                    </li>
                    <li>
                      <IoIosArrowForward /> <Link to="">Contact Us</Link>
                    </li>
                  </ul>

                  <ul className="top-menu-2 flex">
                    <li className="flex">
                      <IoCall />
                    </li>{" "}
                    <Link to="">(234) 456-789</Link>
                  </ul>
                  <ul className="flex top-menu-3 ">
                    <li>
                    <CiSearch />

                    </li>
                   
                  </ul>
                </div>

                <div className="buttom-manu pt-3">
                  <div className="manu-header flex justify-end gap-4">
                    <ul className="flex gap-3">
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog">Blog</NavLink>
                      </li>
                      <li>
                        <NavLink to="/team">Team</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">About</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Contact</NavLink>
                      </li>
                    </ul>
                    <div className="socail-icon">
                      <ul className="d-flex align-middle justify-center gap-2">
                        <li>
                          <Link to="">
                            <RiFacebookLine />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            {" "}
                            <RiTwitterXLine />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            {" "}
                            <RiLinkedinLine />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
