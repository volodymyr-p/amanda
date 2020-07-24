import React, { Component } from 'react';
import HamburgerMenu from './HamburgerMenu'

class StickyMenu extends React.Component {

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

  handleScroll = (event) => {
		this.changeMenuItemColorOnScroll(window.scrollY);
		
		const logo = document.getElementById("logo");
		const links = document.getElementById("links");
		const topMenu = document.getElementById("topMenuContainer");
		
		if(window.scrollY > 10) {
  			logo.classList.add("smallLogo");
				links.classList.add("smallLinks");
				topMenu.classList.add("topMenuShadow");
			
		}
		if(window.scrollY === 0){
  			logo.classList.remove("smallLogo");
				links.classList.remove("smallLinks");
				topMenu.classList.remove("topMenuShadow");
		}
  }

	changeMenuItemColorOnScroll = (scroll) => {
		const white = '#f7f7f7',
		purple = '#ee0f6f',
		yellow = '#ff8f00';
		const MenuItem_Home = document.getElementById("MenuItem_Home"),
		MenuItem_Benefits = document.getElementById("MenuItem_Benefits"),
		MenuItem_Features = document.getElementById("MenuItem_Features"),
		MenuItem_Services = document.getElementById("MenuItem_Services"),
		MenuItem_Technology = document.getElementById("MenuItem_Technology"),
		MenuItem_Team = document.getElementById("MenuItem_Team"),
		MenuItem_FAQ = document.getElementById("MenuItem_FAQ"),
		MenuItem_Kontakt = document.getElementById("MenuItem_Kontakt");

		this.setWhiteColorToLinksText();

		if(scroll < 10 ) {
			MenuItem_Home.style.color = purple;
		} else if (scroll > 10 && scroll < 700) {
			MenuItem_Home.style.color = yellow;
		} else if (scroll > 700 && scroll < 1400) {
			MenuItem_Benefits.style.color = yellow;
		} else if (scroll > 1400 && scroll < 2200) {
			MenuItem_Features.style.color = yellow;
		} else if (scroll > 2200 && scroll < 3000) {
			MenuItem_Services.style.color = yellow;
		} else if (scroll > 3000 && scroll < 3800) {
			MenuItem_Technology.style.color = yellow;
		} else if (scroll > 3800 && scroll < 4600) {
			MenuItem_Team.style.color = yellow;
		} else if (scroll > 4600 && scroll < 5400) {
			MenuItem_FAQ.style.color = yellow;
		} else if (scroll > 5400 && scroll < 6200) {
			MenuItem_Kontakt.style.color = yellow;
		} 
	}
	setWhiteColorToLinksText = () => {
		const	linksText = document.getElementsByTagName("h4");
    for (var i = 0; i < linksText.length; i++) {
      linksText[i].style.color = '#f7f7f7';
    }
	}

  render() {
    return(
			<div className="topMenuContainer" id="topMenuContainer" data-aos='fade-in' data-aos-duration='800' data-aos-once="true">

				<img src="img/amanda_logo.png" alt="AMANDA Technology" className="logo" id="logo"/>

				<HamburgerMenu></HamburgerMenu>

				<div className="links" id="links">
					<a href='#'>
						<h4 id="MenuItem_Home">Home</h4>
					</a>
					<a href='#Benefits'>
						<h4 id="MenuItem_Benefits">Benefits</h4>
					</a>
					<a href='#Features'>
						<h4 id="MenuItem_Features">Features</h4>
					</a>
					<a href='#Services'>
						<h4 id="MenuItem_Services">Services</h4>
					</a>
					<a href='#Technology'>
						<h4 id="MenuItem_Technology">Technology</h4>
					</a>
					<a href='#Team'>
						<h4 id="MenuItem_Team">Team</h4>
					</a>
					<a href='#FAQ'>
						<h4 id="MenuItem_FAQ">FAQ</h4>
					</a>
					<a href='#Kontakt'>
						<h4 id="MenuItem_Kontakt">Kontakt</h4>
					</a>
				</div>

				<style jsx>{`
					.hamburger-menu {
						display: none;
					}
					.topMenuContainer{
						background-color: #272d3a;
						display: flex;
						flex-direction: row;
						position: fixed;
						width: 100%;
						top: 0;
						z-index: 100;
					}
					.img {
						object-fit: cover;
					}
					.topMenuShadow {
						box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
					}
					.links{
						display: flex;
						flex-direction: row;
						justify-content: flex-end;
						padding-top: 40px;
						width: 100%;
						padding-right: 50px;
						transition: all 0.4s ease-out;
					}
					.smallLinks{
						padding-top: 10px;
						transition: all 0.4s ease-out;
					}
					a {
						padding-right: 40px;
						font-family: 'Raleway', serif;
						font-size: 22px;
						text-decoration: none !important;
					}
					h4:hover { 
						color: #ff8f00; 
					}
					.logo {
						margin-left: 120px ;
						margin-top: 60px ;
						height: auto;
						width: 30%;
						transition: all 0.4s ease-out;
					}
					.smallLogo {
						margin-left: 120px ;
						margin-top: 5px ;
						margin-bottom: 5px ;
						height: auto;
						width: 20%;
						transition: all 0.4s ease-out;
					}
					h4 {
						color: #f7f7f7;
							-webkit-transition: color 0.2s;
							-moz-transition:    color 0.2ss;
							-ms-transition:     color 0.2ss;
							-o-transition:      color 0.2ss;
							transition:         color 0.2ss;
						font-weight: 500;
					}
					#MenuItem_Home {
						color: #ee0f6f;
					}
					@media (min-width: 768px) and (max-width: 1155px) {
						.logo {
							margin-left: 10px ;
							margin-top: 10px ;
							height: auto;
							width: 30%;
						}
						.links{
							display: none;
						}
						.smallLogo {
							margin-left: 5px ;
							margin-top: 5px ;
							height: auto;
							width: 20%;
							transition: all 0.4s ease-out;
						}
					}
					@media (max-width: 767px) {
						
						.logo {
							margin-left: 15px ;
							margin-top: 15px ;
							height: 91px;
							width: 275px;
						}
						.links{
							display: none;
						}
						.topMenuContainer {
							width: 100%;
						}
						.smallLogo {
							margin-left: 15px ;
							margin-top: 15px ;
							height: 50%;
							width: 50%;
							transition: all 0.4s ease-out;
						}
					}
					@media (min-width: 768px) and (max-width: 1367px) {
						h4 {
							font-size: 16px;
						}
					}	

					@media (min-width: 1367px) {
						.logo {
							margin-left: 200px ;
							-webkit-transform: translateY(10px);
							-moz-transform: translateY(10px);
							-ms-transform: translateY(10px);
							-o-transform: translateY(10px);
							transform: translateY(10px);
							transform: translateY(10px);
							height: auto;
							width: 25%;
						}
						.smallLogo {
							margin-left: 200px ;
							margin-top: 5px ;
							-webkit-transform: translateY(2px);
							-moz-transform: translateY(2px);
							-ms-transform: translateY(2px);
							-o-transform: translateY(2px);
							transform: translateY(2px);
							transform: translateY(2px);
							height: auto;
							width: 15%;

						}
						h4 {
							font-size: 18px;
						}
						.smallLinks{
							padding-top: 0px;
						}
						.links {
							padding-right: 120px;
						}
					}
					@media (min-width: 1500px) {
						.topMenuContainer {

						}
					}
				`}</style>
			</div>
		)
	}
}
 
export default StickyMenu;

