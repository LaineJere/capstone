import { Link } from "react-router-dom";
import biglogo from "../images/BigLogo.png";


const Footer = () => {
    return (
        <footer id="contact">
            <img src={biglogo} alt="Little Lemon logo" width="95" />
            <div className="navigation">
                <ul>
                    <li><b>Doormat</b></li>
                    <li><b>Navigation</b></li>
                    <li><Link to="/booking-page">Reserva</Link></li>
                    <li><Link to="/order-online">Reserva on-line</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="*">Home</Link></li>
                </ul>
                </div>
            <div className="contacts">
                <ul>
                    <li><b>Contatos</b></li>
                    <li>Florence Str 17</li>
                    <li>Florence, Italy</li>
                    <li>+380 0000 0000</li>
                    <li>info@littlelemon.com</li>
                </ul>
            </div>
            <div className="social-media">
                <ul>
                    <li><b>Social Media Links</b></li>
                    <li><a href="#facebook">Facebook</a></li>
                    <li><a href="#instagram">Instagram</a></li>
                    <li><a href="#tiktok">TikTok</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;