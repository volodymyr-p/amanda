
import React from 'react';

const cards = [{
    "image": "img/manuel.png",
    "name": "Manuel Gysin",
    "designation": "Application Engineer, Architekt, CI/CD",
    "description": "Von der Softwarearchitektur, über Schnittstellenverbindungen und der Softwareentwicklung. hin zur Integration und Deployment. Er ist ein absoluter Spezialist auf seinem Gebiet und scheut keine Herausforderung."
},
{
    "image": "img/philip.png",
    "name": "Philip Näf",
    "designation": "Application und Requirments Engineer, BA",
    "description": "Bedarfsaufnahme, Spezifikation und Vision. Er ist ein absoluter Spezialist um deine Bedürfnisse zu verstehen und auf die nächste Stufe zu bringen. Er hat stehts den Gesamtüberblick und bietet Rat und Tat. In der Softwareentwicklung ist er ein unschlagbares Naturtalent."
},
 {
    "image": "img/alisa.png",
    "name": "ALISA SAKKARAVEJ",
    "designation": "Grafik, UI/UX, Design, Konzeption, Marketing",
    "description": "Grafikerin, Illustratorin und Kommunikationsdesignerin. Sie ist unser herausragendes Talent um die Perfektion in die Anwendung zu bringen. Visuelle Benutzerführung, zielgerichtete Visualisierung und abgestimmte Darstellung sind ihre Spezialität. Abgerundet durch ein unschlagbares Talent für Marketing und Konzeption."
}];

class Team extends React.Component {

  componentDidMount() {
    cards.map(card => {
      const imageContainer = document.getElementById(`${card.name}`);
      const description = document.getElementById(`description_${card.name}`);
      imageContainer.addEventListener("mouseover", function() {   
          description.style.opacity = '1';
      }, false);
      imageContainer.addEventListener("mouseout", function() {   
          description.style.opacity = '0';
      }, false);
    })
  }
  render() {
    return(
    <div className="teamContainerMain">
      <div className="teamContainer" id="Team">

        <div className="header">

          <h2>TEAM</h2>

          <img src="img/divider.png" className="dividerImage"/>
        
          <div className="headerTitle">
              <p className="headerTitleText" >Wir finden keine Lösungen für dich, wir finden sie mit dir. Du sagst uns, was dir in deinem Unternehmensalltag fehlt und wir finden die für dich am besten passende Lösungen – du und wir, gemeinsam als Team.</p>
          </div>

        </div>

        <div className="cardContainer">
          {cards.map((card, i) =>{
            return (
              <div className="card" id={`${card.name}`} key={i}>
                <img className="cardImage" src={card.image} alt=""/>
                
                <div className='memberDescription' id={`description_${card.name}`}>
                  <div className="memberDescriptionInner">
                    <h3 className="memberName">{card.name}</h3>
                    <p className="designation">{card.designation}</p>
                    <p className="shortDescription">{card.description}</p>
                    <div className="socials">
                      <div className="socialLinks">
                        <a href="#" className="socialLinks">
                          <img className="socialIcons" src="img/facebook.svg" alt=""/>
                        </a>
                      </div>
                      <div className="socialLinks">
                        <a href="#">
                          <img className="socialIcons" src="img/twitter.svg" alt=""/>
                        </a>
                      </div>
                      <div className="socialLinks">
                        <a href="#">
                          <img className="socialIcons" src="img/google-plus.svg" alt=""/>
                        </a>
                      </div>
                      <div className="socialLinks">
                        <a href="#">
                          <img className="socialIcons" src="img/instagram.svg" alt=""/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )
          })
          }
        </div>
      </div>
      <style jsx>{`
      .social{
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          line-height: 1.42857143;
          font-family: "Raleway",sans-serif;
          font-weight: 500;
          font-style: normal;
          font-size: 14px;
          color: #fff;
          text-align: center;
          box-sizing: border-box;
          padding: 0px;
          padding-left: 0;
          list-style: none;
          margin: 0;
          margin-top: 20px;
        }
        .cardImage {
          box-shadow: 0 2px 5px rgba(0,0,0,0.15);
          height: auto;
          max-width: 100%;
        }
        .img {
          object-fit: cover;
        }
        .memberDescription{
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          line-height: 1.42857143;
          font-family: "Raleway",sans-serif;
          font-weight: 500;
          font-style: normal;
          font-size: 14px;
          color: #fff;
          text-align: center;
          box-sizing: border-box;
          display: block;
          height: 100%;
          left: 35px;
          position: absolute;
          right: 0;
          opacity: 0;
          top: 45px;
          width: 100%;
          transition: all 0.5s;
          background: linear-gradient(90deg,rgba(255,143,0,.95),rgba(255,225,128,.95));
        }
        .memberDescriptionInner {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          line-height: 1.42857143;
          font-family: "Raleway",sans-serif;
          font-weight: 500;
          font-style: normal;
          font-size: 14px;
          color: #fff;
          text-align: center;
          box-sizing: border-box;
          display: block;
          left: 0;
          position: absolute;
          right: 0;
          top: 50%;
          height: auto;
          transform: translateY(-50%);
          padding: 15px 10px;
        }
        .designation {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          font-family: "Raleway",sans-serif;
          font-style: normal;
          text-align: center;
          box-sizing: border-box;
          margin: 0 0 10px;
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 15px;
          color: #fff;
          font-weight: 600;
        }
        .memberName {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          text-align: center;
          box-sizing: border-box;
          font-size: 24px;
          line-height: 32px;
          font-family: "Raleway",sans-serif;
          color: #4c5462;
          font-style: normal;
          margin-top: 15px;
          font-weight: 700;
          margin-bottom: 5px;
        }
        .shortDescription {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          font-family: "Raleway",sans-serif;
          font-style: normal;
          text-align: center;
          box-sizing: border-box;
          margin: 0 0 10px;
          font-size: 14px;
          font-weight: 500;
          line-height: 24px;
          margin-bottom: 15px;
          color: #fff;
        }
        .social {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          line-height: 1.42857143;
          font-family: "Raleway",sans-serif;
          font-weight: 500;
          font-style: normal;
          font-size: 14px;
          color: #fff;
          text-align: center;
          box-sizing: border-box;
          padding: 0px;
          padding-left: 0;
          list-style: none;
          margin: 0;
          margin-top: 15px;
        }
        .teamContainer {
          color: #fff;
          padding-top: 120px;
          padding-bottom: 120px;
        }
        .teamContainerMain {
          background: linear-gradient(90deg, #3c404d, #aeb6cf), transparent url(https://amanda-technology.ch/wp-admin/admin-ajax.php?action=kc_get_thumbn&type=filter_url&id=%2Fwp-content%2Fuploads%2F2017%2F07%2F3-1.jpg) center center/cover no-repeat scroll;
        }
        .dividerImage {
          width: 5%;
          height: auto;
        }
        .header {
          text-align: center;
          color: #fff;
          font-size: 24px;
        }
        .headerTitle {
          display: flex;
          justify-content: center;
          font-size: 15px;
        }
        .headerTitleText {
          width: 60%;
          line-height: 25px;
        }
        .card {
          position: relative;
          display: flex;
          flex-direction: row;
          padding-top: 10px;
          margin-left: 20px;
          margin-right: 20px;

          transition: box-shadow .4s;
          border-bottom: 1px solid transparent;
        }

        .card:hover + .memberDescription {
          opacity: 0.8
        }

        .cardContainer {
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: center;
          padding-left: 100px;
          padding-right: 100px;
          padding-top: 60px;
        }
        .socialIcons {
          height: 40%;
          width: 40%;
          border-radius: 100%;
          opacity: 0.9
        }
        .socials {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 15%;
          margin-right: 15%;
        }
        @media (max-width: 767px) {
        .dividerImage {
          width: 20%;
          height: auto;
        }
          .memberDescription {
            opacity: 0.9;
          }
          .headerTitleText {
            width: 80%;
          }
          .cardContainer {
            flex-direction: column;

            padding-left: 100px;
            padding-right: 100px;
            padding-top: 60px;
          }
          .memberDescription{
            position: static;
            width: 95%
          }
          .memberDescriptionInner {
            position: static;
            transform:translateY(0)
          }
          .card {
            position: static;
            display: flex;
            flex-direction: column;
          }
          .cardContainer {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
          @media (min-width: 900px) and (max-width: 1200px) { 
          .cardContainer {
            padding-left: 20px;
            padding-right: 20px;
          }
          .memberName{
            font-size: 13px;
          }
          .designation{
            font-size: 10px;
          }
          .shortDescription{
            font-size: 10px;
          }
        }
          @media (min-width: 768px) and (max-width: 899px) { 
          .cardContainer {
            padding-left: 5px;
            padding-right: 5px;
          }
          .memberName{
            font-size: 13px;
          }
          .designation{
            font-size: 10px;
          }
          .shortDescription{
            font-size: 10px;
            line-height: 18px;
          }
        }
        @media (min-width: 1500px) {
          .teamContainer {
            margin-left: 15%;
            margin-right: 15%;
          }
        }
      `}</style>
    </div>
    )
  }
}
export default Team
