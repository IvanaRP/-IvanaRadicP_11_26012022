import Gallery from '../../components/Gallery'
import '../../styles/Home.css'


function Home() {  
  return (
      <div className="homeWrapper">
          <div className='homeContainer'>           
              <div className="brandContainer">
                  <h1>Chez vous, partout et ailleurs</h1>
              </div>
              <Gallery />
          </div>
     </div>        
  )
}

export default Home
