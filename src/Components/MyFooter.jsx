import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faTwitter,faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons";
export default function MyFooter() {
  return (
    <footer className="py-5">
      <div className="container px-5">
        <div className="row mb-5 pb-4">
          <div className="col-md-6">
            <h3>Tastebite</h3>
            <p className="disc pe-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati praesentium pariatur saepe vero consequatur? Qui
              inventore eaque natus.
            </p>
          </div>
          <div className="col-md-2 ps-5">
            <ul className="list-unstyled">
              <h6 className="fw-bold">Tastebite</h6>
              <li>About us</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div className="col-md-2 ps-5">
            <ul className="list-unstyled">
              <h6 className="fw-bold">Legal</h6>
              <li>Terms</li>
              <li>Conditions</li>
              <li>Cookies</li>
              <li>Copyright</li>
            </ul>
          </div>
          <div className="col-md-2 ps-5">
            <ul className="list-unstyled">
              <h6 className="fw-bold">Follow</h6>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <hr className="mb-2 mt-5 py-1"/>
        <div className="d-flex justify-content-between">
          <p className="copyrights">
            <span>&copy; 2020 Tastebite - All rights reserved</span>
          </p>
          <ul className="list-unstyled d-flex social-icons">
            <li><FontAwesomeIcon icon={faFacebookF} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faYoutube} /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
