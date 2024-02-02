import './Footer.css'
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaHandPointRight
} from 'react-icons/fa';
import { BsBank2 } from "react-icons/bs";
function Footer () {
  return (
    <footer>
      <div className='container'>
        <div className='footerContainer plr-100 ptb-50'>
          <div className='footerGrid d-grid auto3 ptb-50'>
            <div className='cdmiDtl '>
              <div className='cdmiDtlimg'>
                <img src={require(`./img/footerLogo.png`)} width={'80%'} />
              </div>
              <div className='cdmiText'>
                <p>
                  Creative Design and Multimedia Institute is leading computer
                  training institute in surat. We offers government approved
                  computer training courses in Surat.
                </p>
                <span>FOLLOW US ON </span>
              </div>
              <div className='cdmiFollow d-flex align-center '>
                <div className='logoCOver'>
                  <FaFacebookF className='Clogo' />
                </div>
                <div className='logoCOver'>
                  <FaTwitter className='Clogo' />
                </div>
                <div className='logoCOver'>
                  <FaGooglePlusG className='Clogo' />
                </div>
                <div className='logoCOver'>
                  <FaLinkedin className='Clogo' />
                </div>
                <div className='logoCOver'>
                  <FaInstagram className='Clogo' />
                </div>
                <div className='logoCOver'>
                  <FaWhatsapp className='Clogo' />
                </div>
              </div>
            </div>
            <div className='cdmiLink'>
              <div className='cdmiHead'>
                <h3>FEATURE LINK</h3>
              </div>
              <div className="linkList">
                <ul className="cdmilinkList">
                    <li className="liCdmi">
                    <FaHandPointRight /> <a href=""> About Us</a>
                    </li>
                    <li className="liCdmi">
                    <FaHandPointRight /> <a href=""> Blogs</a>
                    </li>
                    <li className="liCdmi">
                    <FaHandPointRight /> <a href=""> Join Us</a>
                    </li>
                    <li className="liCdmi">
                    <FaHandPointRight /> <a href=""> Company Login</a>
                    </li>
                    <li className="liCdmi">
                    <FaHandPointRight /> <a href=""> Certification Validation</a>
                    </li>
                </ul>
              </div>
            </div>
            <div className="ContactUs">
                <div className="UsTitle">
                    <h3>CONTACT US</h3>
                </div>
                <div className='Address'>
                    <h4>HEAD OFFICE - YOGI CHOWK</h4>
                    <p>401-404,4th Floor, City Center,Yogi chowk,<br/>Varachha,surat.</p>
                    <p>Mo : <span>+91 9737834842</span></p>
                </div>
                <div className="branch">
                    <h4>OTHER BRANCHES</h4>
                    <ul className="branchList">
                        <li className="BranchName">
                            <span><BsBank2/> Mota Varachha</span>
                        </li>
                        <li className="BranchName">
                            <span><BsBank2/> Katargam</span>
                        </li>
                        <li className="BranchName">
                            <span><BsBank2/> Adajan</span>
                        </li>
                        <li className="BranchName">
                            <span><BsBank2/> Navsari</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
