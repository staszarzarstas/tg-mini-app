import React, {useState} from "react";
import {PiPokerChipLight} from "react-icons/pi";
import {FaDice, FaFutbol, FaTags, FaUser} from "react-icons/fa";
import "./styles/footer.css";

const Footer: React.FC = () => {
    const [active, setActive] = useState<string>("");

    const handleClick = (item: string) => {
        setActive(item);
    };

    return (
        <footer className="footer">
            {/* Секции ссылок */}
            <div className="footer-links">
                <div className="links-column">
                    <a href="#">About</a>
                    <a href="#">Auction Terms</a>
                    <a href="#">Casino Bonus Terms</a>
                    <a href="#">Sportsbook Bonus Terms</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Security & Privacy</a>
                </div>
                <div className="links-column">
                    <a href="#">Payments</a>
                    <a href="#">Certificates</a>
                    <a href="#">Game Explanations</a>
                    <a href="#">Responsible Gaming</a>
                    <a href="#">Condor-Affiliates</a>
                </div>
            </div>

            {/* Секция предупреждения */}
            <div className="footer-warning">
                <p>"GAMBLING CAN BE ADDICTIVE, PLEASE PLAY RESPONSIBLY."</p>
                <div className="footer-icons">
                    {/* Иконки предупреждения */}
                    <span>
                        <img
                            className="logopng"
                            src="/tg-mini-app/1img%20-%20MGA%20logo.svg"
                            alt=""
                        />
                    </span>
                    <span>
                        <img
                            className="rating"
                            src="/tg-mini-app/img%20-%2018+.svg"
                            alt=""
                        />
                    </span>
                    <span>
                        <img
                            className="logogamcare"
                            src="/tg-mini-app/imgGamcareLogo.svg"
                            alt=""
                        />
                    </span>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
                <p>Copyright © 2024</p>
            </div>

            {/* Нижнее меню */}
            <nav className="footer-nav">
                <div
                    className={`footer-nav-item ${
                        active === "slots" ? "active" : ""
                    }`}
                    onClick={() => handleClick("slots")}
                >
                    <FaDice size={24}/>
                    <p>Slots</p>
                </div>
                <div
                    className={`footer-nav-item ${
                        active === "casino" ? "active" : ""
                    }`}
                    onClick={() => handleClick("casino")}
                >
                    <PiPokerChipLight size={24}/>
                    <p>Casino</p>
                </div>
                <div
                    className={`footer-nav-item ${
                        active === "promo" ? "active" : ""
                    }`}
                    onClick={() => handleClick("promo")}
                >
                    <FaTags size={24}/>
                    <p>Promo</p>
                </div>
                <div
                    className={`footer-nav-item ${
                        active === "sport" ? "active" : ""
                    }`}
                    onClick={() => handleClick("sport")}
                >
                    <FaFutbol size={24}/>
                    <p>Sport</p>
                </div>
                <div
                    className={`footer-nav-item ${
                        active === "profile" ? "active" : ""
                    }`}
                    onClick={() => handleClick("profile")}
                >
                    <FaUser size={24}/>
                    <p>Profile</p>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
