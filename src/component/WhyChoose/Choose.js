import './Choose.css'
function Choose () {
  return (
    <div className='WhyChoose stb-70 ptb-50'>
      <div className='container'>
        <div className='ChooseTitle'>
        <div className="titleCenter">
          <span>READ OUR DIFFERENCE</span>
        </div>
          <h2>WHY CHOOSE CREATIVE</h2>
        </div>
        <div className='chooseDtl'>
          <div className='chooseGrid d-grid gap50 auto3 j-center align-center'>
            <div className='choosePart'>
              <div className='ImgCover d-flex align-center j-center'>
                <img src={require(`./Img/whychoose1.png`)}></img>
              </div>
              <div className='choosePartDtl'>
                <h2>Industry Expert As Trainers</h2>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
            <div className='choosePart'>
              <div className='ImgCover d-flex align-center j-center' id='ic2'>
                <img src={require(`./Img/whychoose2.png`)}></img>
              </div>
              <div className='choosePartDtl'>
                <h2>Industry Expert As Trainers</h2>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
            <div className='choosePart'>
              <div className='ImgCover d-flex align-center j-center' id='ic3'>
                <img src={require(`./Img/whychoose3.png`)}></img>
              </div>
              <div className='choosePartDtl'>
                <h2>Industry Expert As Trainers</h2>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
            <div className='choosePart'>
              <div className='ImgCover d-flex align-center j-center' id='ic4'>
                <img src={require(`./Img/whychoose4.png`)}></img>
              </div>
              <div className='choosePartDtl'>
                <h2>Industry Expert As Trainers</h2>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
            <div className='choosePart'>
              <div className='ImgCover d-flex align-center j-center' id='ic5'>
                <img src={require(`./Img/whychoose5.png`)}></img>
              </div>
              <div className='choosePartDtl'>
                <h2>Industry Expert As Trainers</h2>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
            <div className='choosePart'>
              <div className='ImgCover d-flex align-center j-center' id='ic6'>
                <img src={require(`./Img/whychoose6.png`)}></img>
              </div>
              <div className='choosePartDtl'>
                <h2>Industry Expert As Trainers</h2>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Choose
