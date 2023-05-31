import React from "react";
import {
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";

const Footer = (): JSX.Element => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Social Media</h5>
          <div className={styles.icon}>
            <a href="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.pinterest.com/" target="_blank">
              <FontAwesomeIcon icon={faPinterestP} />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2023 Copyright:
      <a href="https://github.com/MadsBerg92/react-app">Mads Berg </a>
    </div>
  </footer>
);

export default Footer;
