import Map from './map';
import KontaktForm from './kontaktForm';
import React from 'react';

class Kontakt extends React.Component {	

	componentDidMount() {

	}
  render() {
		
    return(
			<div className="kontaktContainer" id="Kontakt">
						<div className="map">
							<Map id="maps"/>
						</div>
						<div className="kontaktFormContainer">
							<KontaktForm/>
						</div>
					<div className="footer">
						<p className="footerText">© 2020 AMANDA Technology. All right reserved.</p>
					</div>
						<style jsx>{`
							.footerText {
								text-align: center;
								margin-bottom: 50px;
								color: #fff
							}
							.kontaktFormContainer{ 
								position: absolute;
								z-index: 10;
								width: 90%
							}
							.map {
								height: 800px;
								width: 100%
							}
							.kontaktContainer {
								width: 100%;
								position: relative;
								display: flex;
								justify-content: center;
								align-items: center;
								flex-direction: column
							}
							.footer {
								width: 100%;
								padding-top: 240px;
								background-color: #2b323f;
							}
							@media (min-width: 1500px) {
								.kontaktFormContainer {
									width: 70%
								}
							}
							@media (min-width: 768px) and (max-width: 1367px) {
								.kontaktFormContainer {
									width: 85%
								}
							}
							@media (max-width: 768px) {
								.kontaktFormContainer {
									position: static;
									width: 95%
								}
								.map {
									height: 400px;
								}
								.footer {
									padding-top: 40px;
								}
							}

						`}</style>
			</div>
		)
	}
}
export default Kontakt
