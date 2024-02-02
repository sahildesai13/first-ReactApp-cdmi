import './Header.css';
import { IoIosArrowDown } from "react-icons/io";
function Header () {
  return (
    <header>
      <div className='headerBar'>
        <div className='container d-flex j-center align-center'>
          <div className='leftPart'>
            <a href=''>
              <img src={require(`./img/logo1.png`)}></img>
            </a>
          </div>
          <div className='rightPart'>
            <ul className='NavBar d-flex '>
              <li className='list'><a className='d-flex align-center'>HOME <IoIosArrowDown className='arrow'/></a></li>
              <li className='list'><a className='d-flex align-center'>COURSE <IoIosArrowDown className='arrow'/></a></li>
              <li className='list'><a className='d-flex align-center'>ACTIVITES <IoIosArrowDown className='arrow'/></a></li>
              <li className='list'><a className='d-flex align-center'>BLOG <IoIosArrowDown className='arrow'/></a></li>
              <li className='list'><a className='d-flex align-center'>KNOW US <IoIosArrowDown className='arrow'/></a></li>
              <li className='list'><a className='d-flex align-center'>GET IN TOUCH <IoIosArrowDown className='arrow'/></a></li>
              <li className='list'><a className='d-flex align-center'>STUDENT ZONE <IoIosArrowDown className='arrow'/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
