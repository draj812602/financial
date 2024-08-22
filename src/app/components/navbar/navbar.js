"use client";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavMenus } from "../../staticdata/data";
import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md  bsb-navbar bsb-navbar-hover bsb-navbar-caret">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src="./image/companyLogo.jpeg"
              alt="BootstrapBrain Logo"
              width="100"
              height="70"
            />
          </a>
          <div className="offcanvas-body fs-5">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              {NavMenus.map((li, ind) => {
                return (
                  <li
                    className={
                      !li.subMenuData.length > 0
                        ? "nav-item dropdown"
                        : "nav-item"
                    }
                  >
                    <a
                      className={
                        !li.subMenuData.length > 0
                          ? "nav-link active"
                          : "nav-link dropdown-toggle"
                      }
                      aria-current="page"
                      href="#!"
                    >
                      {li.menu}
                    </a>
                    <ul
                      className="dropdown-menu border-0 shadow bsb-zoomIn"
                      aria-labelledby="accountDropdown"
                    >
                      {li.subMenuData.length > 0 &&
                        li.subMenuData.map((sli, sind) => {
                          return (
                            <li>
                              <a className="dropdown-item fs-6" href="#!">
                                {sli.subMenu}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                );
              })}
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  id="accountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              className="hover-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
}
