
const cards = [{
    "image": "img/browser.png",
    "title": "ANSPRECHENDES DESIGN",
    "text": "Funktionalität begleitet von Schlichtheit und Usability. Der Benutzer wird bei der Prozessabwicklung begleitet und unterstützt. Informationen werden gezielt und auf den aktuellen Kontext bezogen dargestellt."
},
{
    "image": "img/browser2.png",
    "title": "BUSINESS-LOGIK",
    "text": "Nicht nur die Schnittstellen, sondern auch der Zusammenhang zum eigenen Datenmodell und der Business-Logik ist für fehlerfreie und effiziente Automatisierungen relevant."
},
 {
    "image": "img/browser3.png",
    "title": "DATENVERWALTUNG",
    "text": "Für eine professionelle Administration deiner Kundendaten, der Debitorenbuchhaltung und Allem was sonst zur Verwaltung deines Unternehmens gehört, braucht es ein dafür ausgelegtes Datenmodell."
}];

const Features = () => {
	let delay = -100;
	return(
	<div className="featureContainerMain">
		<div className="featureContainer" id="Features">
			<div className="header">
				<h2>FEATURES</h2>

				<img src="img/divider.png" className="dividerImage"/>
			
				<div className="headerTitle">
						<p className="headerTitleText" >Die passende Software für die Digitalisierung deiner Prozesse existiert nicht? Gemeinsam können wir diese aber mit den folgenden Features erschaffen.</p>
				</div>

			</div>

			<div className="cardContainer">
				{cards.map((card, i) =>{
					delay += 100;
					return (
						<div className="card" key={i} data-aos='fade-in' data-aos-once="true" data-aos-delay={delay} data-aos-duration='800'>

							<div className="imageContainer">
								<img src={card.image} alt={card.title}/>
							</div>

							<div className="cardText">
								<h3 className="titleText">{card.title}</h3>
								<p className="cardDescription">{card.text}</p>
							</div>

						</div>
					)
				})
				}
			</div>
				<div className="viewImage">
					<img src="img/features_view.png" alt="Feature View" className="featuresImage"/>
				</div>
		</div>
		<style jsx>{`
			.dividerImage {
				width: 5%;
				height: auto;
			}
			.viewImage {
				display: flex;
				justify-content: center;
				z-index: -500;
			}
			.featuresImage {
				width: 35%;
				height: auto;
			}
			.imageContainer {
				margin-left: 30px;
				margin-right: 30px;
				padding-top: 35px;
			}
			.featureContainerMain {
				background-color: #f5f7fb;
			}
			.featureContainer {
				padding-top: 100px;
				padding-bottom: 100px;
			}
			.header {
				text-align: center;
				color: #4c5462;
				font-size: 24px;
			}
			.headerTitle {
				display: flex;
				justify-content: center;
				font-size: 15px;
			}
			.headerTitleText {
				width: 50%;
			}
			.cardDescription {
				font-size: 16px;
				font-weight: 200;
			}
			.titleText {
				font-size: 20px;
				font-weight: 800;
				color: #4c5462;
			}
			.cardText {
				padding: 10px;
				color: #4c5462;
			}
			img {
				object-fit: cover;
			}
			.card {
				display: flex;
				flex-direction: row;
				padding-top: 10px;
				margin-left: 20px;
				margin-right: 20px;
				height: auto;
				width: 520px;
				transition: box-shadow .4s;
				border-bottom: 1px solid transparent;
			}
			.card:hover {
				box-shadow: 0 0 11px rgba(33,33,33,.2); 
				background-color: white;
			}
			.cardContainer {
				display: flex;
				align-items: row;
				justify-content: center;
				flex-shrink: 1;
				padding-left: 100px;
				padding-right: 100px;
				padding-top: 30px;
			}

			@media screen and (max-width: 1370px) {
				.headerTitle {
					font-size: 13px;
				}
				.cardDescription {
					font-size: 14px;
				}
				.titleText {
					font-size: 15px;
					font-weight: 800;
					color: #4c5462;
				}
				.card {
					height: auto;
					width: 620px;
				}
				.featuresImage {
					width: 45%;
					height: auto;
				}
			}
			
			@media only screen and (max-width: 1000px) {
				.dividerImage {
					width: 20%;
				}
				.headerTitleText {
					width: 90%;
				}
				.cardContainer {
					display: block;
					align-items: row;

					padding-left: 0;
					padding-right: 10px;
					padding-top: 20px;
				}
				.imageContainer {
					margin-left: 10px;
					margin-right: 10px;
					padding-top: 15px;
				}
				.card {
					width: 90%;
				}
				.featuresImage {
					display: none;
				}
				#particles canvas{
						width: 50%;
						height: 50%;
				}
			}
			@media (min-width: 1500px) {
				.featureContainer {
					margin-left: 15%;
					margin-right: 15%;
				}
			}
		`}</style>
	</div>
	)
}

export default Features
