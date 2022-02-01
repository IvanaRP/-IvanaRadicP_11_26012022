import Gallery from '../../components/Gallery'
import '../../styles/Home.css'
import brandImg from '../../assets/background-home.png'


function Home() {  
  return (
      <div className="homeWrapper">
          <div className='homeContainer'>           
              <div className="brandContainer">
                  <h1 className="brandCTA">Chez vous, partout et ailleurs</h1>
                  <img src={brandImg} alt="" className="brandImg" />
              </div>
              <Gallery />
          </div>
     </div>        
  )
}

export default Home