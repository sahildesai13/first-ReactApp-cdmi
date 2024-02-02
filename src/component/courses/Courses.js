import './Courses.css';
import { FaStar,FaArrowRightLong  } from "react-icons/fa6";
function Courses() {
    return (
        <div className='container'>
            <div className='titles'>
            <div className="titleCenter">
                <p className='t1'>CREATIVE COURSE</p>
            </div>
                <h2 className='t2'>OFFERED COURSES </h2>
            </div>
            <div className='CourseDtl'>
                <div className='d-grid auto3 dtlPart j-center'>
                    {/* ========================== 1 ========================= */}
                    <div className='courseParts' >
                        <div className='imgCover'>
                            <img src={require(`./img/t1.webp`)}></img>
                        </div>
                        <div className='dtlCover'>
                            <h3>Development Courses</h3>
                            <div className='d-flex j-space align-center'>
                                <p>
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                </p>
                                <button className='DtlBtn'>Konw More..!</button>
                            </div>
                        </div>
                    </div>
                    {/* ------------------ 2 --------------------- */}
                    <div className='courseParts' >
                        <div className='imgCover'>
                            <img src={require(`./img/t2.webp`)}></img>
                        </div>
                        <div className='dtlCover'>
                            <h3>Development Courses</h3>
                            <div className='d-flex j-space align-center'>
                                <p>
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                </p>
                                <button className='DtlBtn'>Konw More..!</button>
                            </div>
                        </div>
                    </div>
                    {/* --------------------  3 ------------------- */}
                    <div className='courseParts' >
                        <div className='imgCover'>
                            <img src={require(`./img/t3.webp`)}></img>
                        </div>
                        <div className='dtlCover'>
                            <h3>Development Courses</h3>
                            <div className='d-flex j-space align-center'>
                                <p>
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                </p>
                                <button className='DtlBtn'>Konw More..!</button>
                            </div>
                        </div>
                    </div>
                    {/* ------------------  4  --------------------- */}
                    <div className='courseParts' >
                        <div className='imgCover'>
                            <img src={require(`./img/t4.webp`)}></img>
                        </div>
                        <div className='dtlCover'>
                            <h3>Development Courses</h3>
                            <div className='d-flex j-space align-center'>
                                <p>
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                </p>
                                <button className='DtlBtn'>Konw More..!</button>
                            </div>
                        </div>
                    </div>
                    {/* -------------------  5  -------------------- */}
                    <div className='courseParts' >
                        <div className='imgCover'>
                            <img src={require(`./img/t5.webp`)}></img>
                        </div>
                        <div className='dtlCover'>
                            <h3>Development Courses</h3>
                            <div className='d-flex j-space align-center'>
                                <p>
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                </p>
                                <button className='DtlBtn'>Konw More..!</button>
                            </div>
                        </div>
                    </div>
                    {/* --------------------  6   ------------------- */}
                    <div className='courseParts' >
                        <div className='imgCover'>
                            <img src={require(`./img/t6.webp`)}></img>
                        </div>
                        <div className='dtlCover'>
                            <h3>Development Courses</h3>
                            <div className='d-flex j-space align-center'>
                                <p>
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                </p>
                                <button className='DtlBtn'>Konw More..!</button>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------------- */}  
                </div>
                <div className='btncover'>
                    <button className='btn d-flex align-center j-center'>View all Courses <FaArrowRightLong id='a1' /> </button>
                </div>
            </div>
        </div>
    );
}
export default Courses;