import Link from "next/link";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";



const NavbarMenu = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <>
      <nav className="menu-nav navbar navbar-expand-lg navbar-dark bg-primary d-none d-md-block d-lg-block d-xl-block d-xxl-block">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item active"> <Link className="nav-link" href="/">Home </Link> </li>
              <li className="nav-item dropdown">
             
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">ABOUT</a>
                
                <ul className="dropdown-menu border-0 rounded">
                <div className="border-line"></div>
                  <li><Link className="dropdown-item " href="/about/president">Message From President</Link></li>
                  <li><Link className="dropdown-item" href="/about/secretry"> Message From General Secretry</Link></li>
                  <li><Link className="dropdown-item" href="/about/history"> History of Bombardier Jets</Link></li>
                  <li><Link className="dropdown-item" href="/about/vision"> Our Vision and Mission</Link></li>
                  <li><Link className="dropdown-item" href="/about/committee">Excutive Committee</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown">MEMBERSHIP LOGIN</a>
                <ul className="dropdown-menu border-0 rounded">
                <div className="border-line"></div>
                  <li><Link className="dropdown-item" href="/membership/prerequisite"> MemberShip Prerequisite</Link></li>
                  <li><Link className="dropdown-item" href="/membership/membership-form">Membership Form</Link></li>
                  <li><Link className="dropdown-item" href="#">Become a Member</Link></li>
                  <li><Link className="dropdown-item" href="/membership/newmember-login">Member Login</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown">ELECTION</a>
                <ul className="dropdown-menu border-0 rounded">
                <div className="border-line"></div>
                  <li><Link className="dropdown-item" href="/election/upcoming-election">Election News</Link></li>
                  <li><Link className="dropdown-item" href="/election/information"> Election Information</Link></li>
                  <li><Link className="dropdown-item" href="/election/voter-list"> Voter List</Link></li>

                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown">NEWS PORTAL</a>
                <ul className="dropdown-menu border-0 rounded">
                <div className="border-line"></div>
                  <li><Link className="dropdown-item" href="/news/ipoa-news">bombardier News</Link></li>
                  <li><Link className="dropdown-item" href="/news/notice"> Notice Board</Link></li>
                </ul>
              </li>

              <li className="nav-item"><Link className="nav-link" href="/albums"> GALLERY </Link></li>
              <li className="nav-item"><Link className="nav-link" href="/contact"> Contact US </Link></li>

            </ul>
          </div>
        </div>
      </nav>


       {/* ==============================MOBILE MENU ======================== */}
      <nav className="menu-nav mobile-nav navbar navbar-expand-lg navbar-dark bg-primary d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : 'hide'} navbar-collapse`} id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item active" onClick={handleNavCollapse}> <Link className="nav-link" href="/">Home </Link> </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">ABOUT</a>
                <ul className="dropdown-menu show bg-transparent border-0">
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/about/president">Message From President</Link></li>
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/about/secretry"> Message From General Secretry</Link></li>
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/about/history"> History of Bombardier Jets</Link></li>
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/about/vision"> Our Vision and Mission</Link></li>
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/about/committee">Excutive Committee</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown">MEMBERSHIP LOGIN</a>
                <ul className="dropdown-menu show bg-transparent border-0">
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/membership/prerequisite"> MemberShip Prerequisite</Link></li>
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/membership/membership-form">Membership Form</Link></li>
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="#">Become a Member</Link></li>
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/membership/newmember-login">Member Login</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown">ELECTION</a>
                <ul className="dropdown-menu show bg-transparent border-0">
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/election/upcoming-election">Election New</Link></li>
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/election/information"> Election Information</Link></li>
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/election/voter-list"> Voter List</Link></li>

                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown">NEWS PORTAL</a>
                <ul className="dropdown-menu show bg-transparent border-0">
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/news/ipoa-news">IPOA News</Link></li>
                  <li onClick={handleNavCollapse}><Link className="dropdown-item" href="/news/notice"> Notice Board</Link></li>
                </ul>
              </li>

              <li className="nav-item" onClick={handleNavCollapse}><Link className="nav-link" href="/albums"> GALLERY </Link></li>
              <li className="nav-item" onClick={handleNavCollapse}><Link className="nav-link" href="/contact"> Contact US </Link></li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMenu;
