import './Alumni.css'
function Alumni () {
  return (
    <div className='Alumni'>
      <div className='container AlumniSlider d-flex align-center'>
        <div className='SpeakPart pl-100'>
          <p>HAPPY STUDENT</p>
          <h2>ALUMNI SPEAK</h2>
          <div className='QImg d-flex j-between'>
            <img src={require(`./img/quote.png`)} width={'100px'} />
            <div className='btnTag'>
              <input type='button' value='<' className='SliderBtn' />
              <input type='button' value='>' className='SliderBtn' />
            </div>
          </div>
          <div className='review'>
            <p>
              Good Institute and excellent presentation skill and if any doubt
              regarding topic they will clear immediately
            </p>
          </div>
          <div className="profile d-flex align-center">
            <div className="profileLogo ">
              <img src={require(`./img/SahiLImg.jpg`)} width={'100px'} />
            </div>
            <div className='logoName'>
              <h3>SAHIL DESAI</h3>
            <div className="logoDtl d-flex align-center">
              <p>Full-Stack Developer & CEO <span>DC India inc.</span> </p>
            </div>
            </div>
          </div>
        </div>
        <div className='SliderImgPart pr-100'>
          <img src={require(`./img/SahiLImg.jpg`)} />
        </div>
      </div>
    </div>
  )
}
export default Alumni
