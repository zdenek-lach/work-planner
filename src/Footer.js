import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <a href="https://github.com/zdenek-lach" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="social-icon" />
                            </a>
                            <a href="https://cz.linkedin.com/in/zdeneklach?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="social-icon" />
                            </a>
                        </div>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; 2023 Zdeněk Lach</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
