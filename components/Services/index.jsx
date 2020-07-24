
const cards = {
  "basic" : [{
        "image": "img/basic1.png",
        "title": "Risikofreie Bedarfsaufnahme",
        "text": "Umfangreich und unverbindlich"
    },
    {
        "image": "img/basic2.png",
        "title": "Agiles Projektcoaching",
        "text": "Für eine optimale Zusammenarbeit"
    },
    {
        "image": "img/basic3.png",
        "title": "Transparente Umsetzung",
        "text": "Kontinuierliche Updates für optimales Feedback und die gemeinsame Planung"
    },
    {
        "image": "img/basic4.png",
        "title": "Source-Code-Zugriff",
        "text": "Als Absicherung und für eine höhere Transparenz"
    }	
  ],
  "nextLevel" : [{
        "image": "img/nextLevel1.png",
        "title": "Infrastruktur",
        "text": "Betrieb in der Cloud oder On-Site"
    },
    {
        "image": "img/nextLevel2.png",
        "title": "CI/CD-Pipeline",
        "text": "Nahtlose Weiterentwicklung"
    },
    {
        "image": "img/nextLevel3.png",
        "title": "Testautomation",
        "text": "Für eine höhere und stabile Qualität"
    }
  ],
  "coaching" : [{
        "image": "img/coaching1.png",
        "title": "Produktschulung",
        "text": "Für Klarheit im Alltag des Anwenders"
    },
    {
        "image": "img/coaching2.png",
        "title": "Experten-Support",
        "text": "Kompetente Techniker, jederzeit Verfügbar"
    },
    {
        "image": "img/coaching3.png",
        "title": "Wartungsvertrag",
        "text": "Für eine gelungene Partnerschaft"
    },
    {
        "image": "img/coaching4.png",
        "title": "SCRUM-Schulung",
        "text": "Für eine besseres Verständnis der agilen Projektmethode"
    }
  ]
};

const createCards = (cards) => {
      return (
        cards.map((card, i) =>{
          return(
            <div className="card" key={i}>

              <div className="imageContainer">
                <img src={card.image} alt={card.title}/>
              </div>

              <div className="cardText">
                <h3 className="titleText">{card.title}</h3>
                <p className="cardDescription">{card.text}</p>
              </div>

              <style jsx>{`
                .card {
                  display: flex;
                  flex-direction: row;
                  padding-top: 10px;
                  margin-left: 10px;
                  margin-right: 10px;
                  height: auto;
                  width: 100%;
                  transition: box-shadow .4s;
                  border-bottom: 1px solid transparent;
                }
                .imageContainer {
                  margin-left: 30px;
                  margin-right: 30px;
                  padding-top: 35px;
                }		
                .cardDescription {
                  font-size: 14px;
                  font-weight: 200;
                }
                .titleText {
                  font-size: 15px;
                  color: #4c5462;
                  font-weight: 700;
                }
                .cardText {
                  padding: 10px;
                  color: #4c5462;
                }
                .card:hover {
                  box-shadow: 0 0 11px rgba(33,33,33,.2); 
                  border-bottom: 1px solid #ff8f00;
                }
              `}</style>

            </div>
          )
        })
    )
}

const Services = () => {
	return(
	<div className="servicesContainer" id="Services">

		<div className="header">

			<h2>SERVICES</h2>

			<img src="img/divider.png" className="dividerImage"/>
		
			<div className="headerTitle">
					<p className="headerTitleText">Dein Unternehmen ist nicht wie jedes andere, daher bieten wir keine Lösungen „von der Stange“. In enger Absprache und Zusammenarbeit erschaffen wir das Automatisierungstool perfekt auf deine Bedürfnisse zugeschnitten.</p>
			</div>

		</div>

		<div className="cardContainer" data-aos="fade-up" data-aos-delay="300" data-aos-duration='1600' data-aos-once="true">
        <div className="groups basicGroup">
          <h3 className="groupTitleText">BASIC</h3>
          {createCards(cards.basic)}
        </div>

        <div className="groups nextLevelGroup">
          <h3 className="groupTitleText">NEXT LEVEL</h3>
          {createCards(cards.nextLevel)}
        </div>

        <div className="groups coachingGroup">
          <h3 className="groupTitleText">COACHING</h3>
          {createCards(cards.coaching)}
        </div>

		</div>

		<style jsx>{`
      .groups {
        width: 30%;
      }
      .groupTitleText {
        font-size: 24px;
        font-weight: 800;
        color: #4c5462;
      }
			.dividerImage {
				width: 5%;
				height: auto;
			}
			.servicesContainer {
				padding-top: 100px;
				padding-bottom: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
			}
      .img {
        object-fit: cover;
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
				align-items: row;
				justify-content: center;
				flex-shrink: 1;
				padding-left: 100px;
				padding-right: 100px;
				padding-top: 30px;
        width: 80%;
			}

      @media (max-width: 767px) {
        .cardContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 50px;
				  padding-left: 10px;
				  padding-right: 10px;
          margin-left: 0;
          margin-right: 0;
          height: auto;
          width: 320px;
          transition: box-shadow .4s;
          border-bottom: 1px solid transparent;
          width: 90%;
        }
        .groups {
          width: auto;
        }
        .headerTitle {
          display: flex;
          justify-content: center;
          font-size: 15px;
        }
        .headerTitleText {
          width: 100%;
        }
        .dividerImage {
          width: 20%;
          height: auto;
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
          width: 99%;
          padding-left: 10px;
				  padding-right: 10px;
        }
				.titleText {
					font-size: 15px;
					font-weight: 800;
					color: #4c5462;
				}
				.card {
					height: auto;
					width: 90%;
				}
				.featuresImage {
					width: 45%;
					height: auto;
				}
      }	
			@media (min-width: 1500px) {
				.featureContainer {
					margin-left: 20%;
					margin-right: 20%;
				}
			}
		`}</style>
	</div>
	)
}

export default Services
