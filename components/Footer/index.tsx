import Image from "next/image";
import { Button, Form } from "react-bootstrap";

import logo from "../../public/image/logo.svg";
import paymentLogo from "../../public/image/sslcom.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-section context-dark bg-image  border-top">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-4 col-xl-5">
            <div className="pe-xl-4">
              <a className="brand" href="index.html">
                <Image
                  className="brand-logo-light"
                  src={logo}
                  alt=""
                  width="230"
                  height="50"
                />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Contacts</h5>
            <dl className="contact-list">
              <dt>Address:</dt>
              <dd>Road#34, Street#102, Newyork, United State</dd>
            </dl>
            <dl className="contact-list">
              <dt>email:</dt>
              <dd>
                <a href="mailto:#">usabomb@gmail.com</a>
              </dd>
            </dl>
            
          </div>
          <div className="col-md-4 col-xl-3">
            <h5>Social</h5>
            <div className="social-icons">
              <a
                className="btn btn-primary border-0 me-2"
                style={{ backgroundColor: "#234ca1" }}
                href="#"
                role="button"
              >
                <FaFacebook />
              </a>

              <a
                className="btn btn-primary border-0 me-2"
                style={{ backgroundColor: "#06a5d1" }}
                href="#"
                role="button"
              >
                <FaTwitter />
              </a>

              <a
                className="btn btn-primary border-0 me-2"
                style={{ backgroundColor: "#dd4b39" }}
                href="#"
                role="button"
              >
                <FaGoogle />
              </a>

              <a
                className="btn btn-primary border-0 me-2"
                style={{ backgroundColor: "#0082ca" }}
                href="#"
                role="button"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <footer className="container">
          <div className="row py-5">
            <div className="col-12">
              <div className="row align-items-center text-center">
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <p className="social text-muted bold-text">
                    {" "}
                    <span className="mx-2">
                      <FaFacebookSquare />
                    </span>{" "}
                    <span className="mx-2">
                      <FaLinkedin />
                    </span>{" "}
                    <span className="mx-2">
                      <FaTwitterSquare />
                    </span>{" "}
                    <span className="mx-2">
                      <FaInstagramSquare />
                    </span>{" "}
                  </p>
                  <small className="center">
                    <span>&#174;2023</span> All Rights Reserved By bombardier jets.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
