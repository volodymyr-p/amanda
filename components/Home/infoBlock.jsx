import React from "react";

class InfoBLock extends React.Component {	
  render() {
    return(

				<div className="infoBLock">
						<p className="p1" data-aos='fade-down' data-aos-once="true" data-aos-delay='200'>
							Massgeschneiderte
						</p >

						<p className="p2" data-aos='fade-down' data-aos-once="true" data-aos-delay='500'	>
							Prozessdigitalisierung
						</p >
					
						<p className="p3" data-aos='fade-down'  data-aos-once="true" data-aos-delay='800'	>
							Automatisierung für dich und mit dir speziell für die Bedürfnisse deines <br /> Unternehmens entwickelt
						</p>
				
						<img src="img/automation.png" width="50%" height="auto" className="automationImage"/>

					<style jsx>{`
						.img {
							object-fit: cover;
						}
						.automationImage {
							object-fit: cover;
						}
						.infoBLock {
							text-align:center;
							color: white;
							width: 100%;
						}
						p {
							font-family: "Raleway", serif;
						}
						.p1 {
							letter-spacing: 10px;
							font-size: 32px;
						}
						.p2 {
							font-size: 80px;
							line-height: 3px;
						}
						.p3 {
							font-size: 16px;
							font-weight: 500;
						}

						@media (max-width: 769px) {
							.p1 {
								letter-spacing: 8px;
								font-size: 20px;
								line-height: 20px;
							}
							.p2 {
								font-size: 34px;
								line-height: 50px;
							}
							.p3 {
								font-size: 16px;
								font-weight: 500;
								line-height: 25px;
							}
						}
						@media (min-width: 768px) and (max-width: 900px){
							.p2 {
								font-size: 70px;
							}
						}
						@media only screen and (max-width: 1000px) {
						.automationImage {
							margin-top: 70px;
							width: 90%
						}

						@media (min-width: 571px) and (max-width: 768px){
							.homeContainer {
								height: 700px;
							}
							.p1 {
								letter-spacing: 8px;
								font-size: 28px;
								line-height: 15px;
							}
							.p2 {
								font-size: 54px;
								line-height: 40px;
							}
							.p3 {
								line-height: 20px;
							}
						}

					`}</style>
				</div>
		)
	}
}

export default InfoBLock

						// @media screen and (max-width: 1370px) {
						// 	.p1 {
						// 		font-size: 28px;
						// 	}
						// 	.p2 {
						// 		font-size: 76px;
						// 	}
						// 	.p3 {
						// 		font-size: 12px;
						// 	}
						// }
						// @media only screen and (max-width: 1000px) {
						// 	.automationImage {
						// 		width: 80%
						// 	}
						// 	.p1 {
						// 		font-size: 16px;
						// 		letter-spacing: 5px;
						// 		line-height: 10px;
						// 	}
						// 	.p2 {
						// 		font-size: 34px;
						// 	}
						// 	.p3 {
						// 		font-size: 14px;
						// 	}
						// }

						// @media only screen and (max-width: 350px) {
						// 	.p1 {
						// 		font-size: 14px;
						// 	}
						// 	.p2 {
						// 		font-size: 30px;
						// 	}
						// 	.p3 {
						// 		font-size: 12px;
						// 	}
						// }