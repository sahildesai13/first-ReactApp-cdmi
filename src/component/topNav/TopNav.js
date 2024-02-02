import './TopNav.css';
import { FaRegEnvelope,FaFacebookF,FaTwitter,FaGoogle,FaLinkedinIn,FaInstagram,FaYoutube,FaWhatsapp } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
function TopNav() {
    return (
        <div className="TopNav">
            <div className='container d-grid auto3 j-center align-center'>
                <div className='partOne'>
                    <div className='info d-flex j-center align-center'>
                        <FaRegEnvelope/>
                        <a>info@gmail.com</a>
                        <MdVerified />
                        <a>verifiy certification</a>
                    </div>
                </div>
                <div className='partTwo'>
                    <a>HAVE ANY QUESTION ? +91 9737834842</a>  
                </div>
                <div className='partThree'>
                <FaFacebookF className='logo' />
                <FaTwitter className='logo' />
                <FaGoogle className='logo' />
                <FaLinkedinIn className='logo' />
                <FaInstagram  className='logo' />
                <FaYoutube className='logo' />
                <FaWhatsapp className='logo' />
                </div>
            </div>

        </div>
    );
}
export default TopNav;