import Particles from 'react-particles-js';
import InfoBlock from "./infoBlock";

class Home extends React.Component {	
	constructor(props) {
		super(props);
		this.state = {
			translateYValue: 0
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

  handleScroll = () => {

		if(window.scrollY < 500) {
			const itemTranslate = window.scrollY/4;
			this.setState({
				translateYValue: itemTranslate
			})
		}
  }

  render() {
		const {translateYValue} = this.state;

    return(
		<div className="homeContainer" style={{"transform": `translateY(${-translateYValue}px)`}} >
			<div className="particlesContainer" style={{"transform": `translateY(${-translateYValue}px)`}}> 
					<Particles
						params={{
							"particles": {
								"line_linked": {"color":"#FFFFFF"},
								"number": {"value": 75},
								"size": {"value": 3}
							},
							"interactivity": {
								"events": {
									"onhover": {
										"enable": true,
										"mode": "repulse"
									}
								}
							},
						}}
						style={{
							background: `rgb(39,45,58, 0.1)`,
							position : 'absolute', 
						}}
					/>
			</div>
			
			<div className='infoBlock'>
				<InfoBlock></InfoBlock>
			</div>

			<style jsx>{`
				.homeContainer {
					width:100%;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.infoBlock {
					padding-top: 200px;
					width: 50% 
					z-index: 40;
				}
				.particlesContainer {
					position: absolute;
					z-index: -25;
					height: 100%;
					width: 100%;
					transition: transform 0.1s;
					background: #ffffff url(img/particles_background.jpg) center center/cover no-repeat scroll;
					background-size: cover;
				}
				.backgroundImage {
					position:absolute;
					width: 100%;
					top: 0;
					z-index: -2;
					transition: transform 0.1s;
				}
				.img {
					object-fit: cover;
				}
				@media (max-width: 769px) {
					.homeContainer {
						height: 620px;
					}
					.infoBlock {
						padding-top: 150px;
					}
				}
				@media (min-width: 400px) and (max-width: 570px){
					.homeContainer {
						height: 650px;
					}
				}
				@media (min-width: 571px) and (max-width: 660px){
					.homeContainer {
						height: 700px;
					}
				}
				@media (min-width: 661px) and (max-width: 768px){
					.homeContainer {
						height: 750px;
					}
				}
				@media (min-width: 769px) and (max-width: 1000px){
					.homeContainer {
						height: 950px;
					}
				}
				@media (min-width: 1550){
					.homeContainer {
						height: 1150px;
					}
				}
			`}</style>
		</div>
	)
}
}

export default Home
