import './Partner.css'
function Partner () {
  return (
    <div className='partner'>
      <div className='container'>
        <div className='partner-container'>
          <div className='partnerTitle'>
            <div className='titleCenter'>
              <span>STUDENT PLACEMENT</span>
            </div>
            <h2>OUR RECRUITMENT PARTNERS</h2>
          </div>
          <div className='partnerDtl d-grid auto6 j-center align-center'>
            <div className='partnerImg'>
              <img src={require(`./img/rs1.png`)} />
            </div>
            <div className='partnerImg'>
              <img src={require(`./img/rs2.png`)} />
            </div>
            <div className='partnerImg'>
              <img src={require(`./img/rs3.png`)} />
            </div>
            <div className='partnerImg'>
              <img src={require(`./img/rs4.png`)} />
            </div>
            <div className='partnerImg'>
              <img src={require(`./img/rs5.png`)} />
            </div>
            <div className='partnerImg'>
              <img src={require(`./img/rs6.png`)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Partner
