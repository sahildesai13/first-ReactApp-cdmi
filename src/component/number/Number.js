import './Number.css'
function Number () {
  return (
    <section className='stb-120 counterCover'>
      <div className='container'>
        <div className='d-grid auto4 j-between t-center counter align-center stb-70'>
          <div className='counterNumber '>
            <img src={require(`./img/counterIcon1.png`)}/>
            <h2>18000+</h2>
            <h3>HAPPY STUDENT</h3>
          </div>
          <div className='counterNumber'>
            <img src={require(`./img/counterIcon2.png`)}/>
            <h2>10+</h2>
            <h3>CERTIFICATION APPROVAL</h3>
          </div>
          <div className='counterNumber'>
            <img src={require(`./img/counterIcon3.png`)}/>
            <h2>100+</h2>
            <h3>CERTIFIED TEACHERS</h3>
          </div>
          <div className='counterNumber'>
            <img src={require(`./img/counterIcon4.png`)}/>
            <h2>12000+</h2>
            <h3>STUDENT PLACED</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Number
