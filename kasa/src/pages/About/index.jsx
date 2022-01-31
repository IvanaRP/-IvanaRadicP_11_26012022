import "../../styles/About.css";
import aboutImg from "../../assets/background-about.png";

function About() {
  return (
    <div className="aboutWrapper">
      <div className="aboutContainer">
        <div>
          <img src={aboutImg} alt="" className="aboutImg" />
        </div>
      </div>
      <div className="aboutWrapperlinks">
        <h3 className="aboutFiabilite">Fiabilite</h3>
        <h3 className="aboutFiabilite">Respect</h3>
        <h3 className="aboutFiabilite">Service</h3>
        <h3 className="aboutFiabilite">Responsabilite</h3>
      </div>
    </div>
  );
}

export default About;
