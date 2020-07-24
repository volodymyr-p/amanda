import React, { Component } from 'react';

const cards =   {
  "first_group" : [
    {
        "image": "img/bootstrap.png",
        "title": "BOOTSTRAP",
        "text": "Klar, verständlich und natürlich. Bootstrap garantiert ein perfektes und einzigartiges Erlebnis mit deiner Anwendung."
    },
      {
        "image": "img/csharp.png",
        "title": "C#",
        "text": "Etabliert, erprobt und vielfach im Einsatz. C# garantiert eine optimierte Entwicklung mit Fokus auf Sicherheit, Stabilität und Performance."
    },
    {
        "image": "img/sql.png",
        "title": "SQL-SERVER",
        "text": "Sichere Speicherung der Daten, Skalierung und Performanz. SQL-Server ist seit Jahrzehnten im Herzen der Datenspeicherung ein verlässlicher Keyplayer."
    },
    {
        "image": "img/docker.png",
        "title": "DOCKER",
        "text": "Optimierte Entwicklung, vereinheitlichte Lieferung von Release und nahtlose Integration in die eigene Infrastruktur."
    }
  ],
  "second_group" : [
    {
        "image": "img/blazor.png",
        "title": "BLAZOR",
        "text": "Die Zukunft der professionellen Webentwicklung. Vorbei sind die Zeiten von Fremdkörper wie JavaScript und deren Abhängigkeits Hölle."
    },
    {
        "image": "img/netCore.png",
        "title": ".NET CORE",
        "text": "Tausende von Bibliotheken, Millionen von Entwicklern, .NET Core ist stehts ein verlässliches Werkzeug zur erfolgreichen Meisterung aller Herausforderungen."
    },
    {
        "image": "img/postgre.png",
        "title": "POSTGRE-SQL",
        "text": "Zuverlässig, Performant und weltweit etabliert, ist PostrgeSQL eine freie Alternative, mit der keine Kompromisse eingegangen werden müssen."
    },
    {
        "image": "img/azure.png",
        "title": "AZURE",
        "text": "Die richtige Infrastruktur, die nötige Rechenleistung und dies zur richtigen Zeit sind heute ein absolutes Muss. Die Azure Cloud bietet dies und ist ein Enabler für die Zukunft der Digitalisierung."
    }
  ]
};


const createCards = (cards) => {
      return (
        cards.map((card, i) =>{
          return(
              <div className="card" key={i} >

                <div className="cardImage">
                  <img src={card.image} alt={card.title}/>
                </div>

                <div className="cardText">
                  <h3 className="titleText">{card.title}</h3>
                  <p className="cardDescription">{card.text}</p>
                </div>

              <style jsx>{`
                .cardDescription {
                  font-weight: 200;
                  line-height: 1.5em;
                }
                .titleText {
                  font-weight: 800;
                  text-align: center;						
                  padding-left: 10px;
                  padding-right: 10px;
                }
                .img {
                  object-fit: cover;
                }
                .cardText {
                  text-size-adjust: auto;
                  text-align: center;
                  padding: 10px;
                  color: #4c5462;
                }
                .card {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  height: auto;
                  transition: box-shadow .4s;
                  border-bottom: 1px solid transparent;
                  padding-top: 40px;
                  padding-bottom: 40px;
                }
                .card:hover {
                  box-shadow: 0 0 11px rgba(33,33,33,.2); 
                  border-bottom: 1px solid #ff8f00;
                  background-color: white;
                }

                @media (max-width: 767px) {
                  .cardImage {
                    display: flex;
                    justify-content: center;
                    align-items:center;
                    width: 50px;
                    height: auto;
                  }
                  .card {
                    margin-right: 0;
                    margin-top: 50px;
                  }
                  .titleText {
                    font-size: 14px;
                  }
                  .cardDescription {
                    font-size: 12px;
                  }
                }

                @media (min-width: 768px) and (max-width: 1367px) {
                  .titleText {
                    font-size: 14px;
                  }
                  .cardDescription {
                    font-size: 14px;
                  }
                  .card {
                    width: 100%;
                  }
                }	
                @media (min-width: 1368px) {
                  .titleText {
                    font-size: 16px;
                  }
                  .card {
                    width: 300px;
                    padding-left: 30px;
                    padding-right: 30px;
                  }
                  .cardDescription {
                    font-size: 14px;
                  }
                }
              `}</style>

            </div>
          )
        })
    )
}

const Technology = () => {
  return(
    <div className="technologyContainer" id="Technology">

      <div className="header">

        <h2>TECHNOLOGY</h2>

        <img src="img/divider.png" className="dividerImage"/>
      
        <div className="headerTitle">
            <p className="headerTitleText">Damit deine Anwendung das Maximum ihrer Leistung entfaltet kann, setzen wir ausschliesslich auf die besten Technologien. Damit erreichen wir atemberaubende Qualität, Performance und effektive Umsetzungszeiten.</p>
        </div>

      </div>

      <div className="cardContainer" >
          <div className="groups">
            {createCards(cards.first_group)}
          </div>

          <div className="groups">
            {createCards(cards.second_group)}
          </div>
      </div>

      <style jsx>{`
      .groups {
        display: flex;
        justify-content: center;
        align-items: center;
      }
			.dividerImage {
				width: 5%;
				height: auto;
			}
			.technologyContainer {
        background: linear-gradient(rgba(245, 247, 251, 0.92), rgba(245, 247, 251, 0.92)), transparent url(img/mountains.jpg) center center/cover no-repeat scroll;
				padding-top: 100px;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
			}
			.header {
				text-align: center;
				color: #4c5462;
			}
			.headerTitle {
				display: flex;
				justify-content: center;
				font-size: 15px;
			}
			.headerTitleText {
				width: 50%;
			}

      .cardContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding-top: 200px;
        padding-bottom: 300px;
      }

      @media (max-width: 767px) {
        .cardContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 50px;
				  padding-left: 10px;
				  padding-right: 10px;
          padding-bottom: 100px;
          margin-left: 0;
          margin-right: 0;
          height: auto;
          transition: box-shadow .4s;
          border-bottom: 1px solid transparent;
          width: 90%;
        }
        .groups {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction:column;
          align-items: center;
        }
        .dividerImage {
          width: 20%;
          height: auto;
        }
        .headerTitleText {
          width: 90%;
        }
      }

      @media (min-width: 768px) and (max-width: 1367px) {
				.headerTitle {
					font-size: 13px;
				}
				.cardDescription {
					font-size: 14px;
				}
        .cardContainer {
          padding-left: 10px;
				  padding-right: 10px;
          padding-top: 50px;
          padding-bottom: 50px;
я
        }
				.titleText {
					font-size: 15px;
					font-weight: 800;
					color: #4c5462;
				}
      }	
      @media (min-width: 1368px) {
        .titleText {
          font-size: 16px;
        }
        .cardDescription {
          font-size: 14px;
        }
        .headerTitleText {
          width: 55%;
          font-size: 12px;
          line-height: 20px;
        }
        .cardContainer {
          padding-top: 100px;
          padding-bottom: 100px;
        }
      }
			@media (min-width: 1500px) {
				.cardContainer {
					margin-left: 15%;
					margin-right: 15%;
				}
			}

		`}</style>
    </div>
  )
}

 
export default Technology;

