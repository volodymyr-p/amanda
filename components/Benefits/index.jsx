import React, { Component } from 'react';

const cards = [{
    "image": "img/gear.png",
    "title": "AUTOMATISIERUNG",
    "text": "Repetitive und fehleranfällige Abläufe werden automatisch oder auf Knopfdruck erledigt"
},
{
    "image": "img/person.png",
    "title": "EINFACHE  BEDIENUNG",
    "text": "Selbsterklärende Oberflächen und simple Programmabläufe für eine optimale Usability"
},
 {
    "image": "img/clock.png",
    "title": "MINIMIERTER AUFWAND",
    "text": "Durch Reduzierung der manuellen Fleissarbeiten, können sich Mitarbeiter auf wesentlichere Dinge fokussieren"
},
{
    "image": "img/medal.png",
    "title": "QUALITÄTSSTEIGERUNG",
    "text": "Klar definierte Prozesse können vom System fehlerfrei abgearbeitet werden. Flüchtigkeitsfehler und Unachtsamkeit kennt es nicht"
},
{
    "image": "img/share.png",
    "title": "SCHNITTSTELLEN",
    "text": "Optimierte Schnittstellen zu vorhandenen digitalen Systemen erweitern die Einsatzmöglichkeiten"
}];

class Benefits extends React.Component {
  render() {
		let delay = -100;
    return(
			<div className="cardContainer" id="Benefits">
				
				{cards.map((card, i) => {
					delay += 100;
					return (
					<div className="card" data-aos='fade-in' key={i} data-aos-once="true" data-aos-delay={delay} data-aos-duration='300'>

						<div className="cardImage">
							<img src={card.image} alt={card.title} className='img'/>
						</div>

						<div className="cardText">
							<h3 className="titleText">{card.title}</h3>
							<p className="cardDescription">{card.text}</p>
						</div>
					</div>
					)
				}
				)}

				<style jsx>{`
					.img {
						object-fit: cover
					}
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
						padding-top: 50px;
						margin-left: 20px;
						margin-right: 20px;
						height: auto;
						width: 320px;
						transition: box-shadow .4s;
						border-bottom: 1px solid transparent;
					}
					.card:hover {
						box-shadow: 0 0 11px rgba(33,33,33,.2); 
						border-bottom: 1px solid #ff8f00;
					}
					.cardContainer {
						display: flex;
						align-items: row;
						justify-content: center;
						flex-shrink: 1;
						padding-left: 100px;
						padding-right: 100px;
						padding-top: 300px;
						padding-bottom: 100px;
					}

					@media (max-width: 767px) {
						.cardContainer {
							width: 100%;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items:center;
							padding-top: 100px;
							padding-bottom: 100px;
							padding-left: 0;
							padding-right: 0;
						}
						.cardImage {
							display: flex;
							justify-content: center;
							align-items:center;
							width: 50px;
							height: auto;
						}
						.card {
							width: 80%;
						}
						.titleText {
							font-size: 14px;
						}
						.cardDescription {
							font-size: 12px;
						}
					}

					@media (min-width: 768px) and (max-width: 1367px) {
						.card {
							width: 18%;
						}
						.titleText {
							font-size: 14px;
						}
						.cardDescription {
							font-size: 12px;
						}
						.cardContainer {
							padding-top: 150px;
							padding-bottom: 150px;
						}
					}	
					@media (min-width: 1368px) {
						.titleText {
							font-size: 16px;
						}
						.cardDescription {
							font-size: 14px;
						}
						.cardContainer {
							padding-top: 150px;
							padding-bottom: 150px;
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
}
 
export default Benefits;

