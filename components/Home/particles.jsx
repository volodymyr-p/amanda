import Particles from 'react-particles-js';
import InfoBlock from "./infoBlock";

class ParticlesBackground extends React.Component {	
	constructor(props) {
		super(props);
		this.state = {
			initialIBlocks: null,
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);

		const canvas = document.getElementsByTagName('canvas')[0];
		const infoBlockHeight = document.getElementsByClassName('infoBlock')[0].clientHeight;
		const image = document.getElementsByClassName('backgroundImage')[0];
		const particlesContainer = document.getElementById('tsparticles');
	

		particlesContainer.style.height = `${infoBlockHeight}px`;
		image.style.height = `${infoBlockHeight}px`;
		canvas.height = 416;
		canvas.width = window.innerWidth;

		//image.style.transform ='scaleX(2.5)';

		const blocksHeight = particlesContainer.clientHeight;
		this.setState({
			initialIBlocks: blocksHeight
		})
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

  handleScroll = () => {
		const image = document.getElementsByClassName('backgroundImage')[0];
		const particlesContainer = document.getElementById('tsparticles');

		if(window.scrollY < 500) {
			let itemTranslate = window.scrollY/4;
			particlesContainer.style.transform = `translateY(-${itemTranslate}px)`;
			image.style.transform = `translateY(-${itemTranslate}px)`;
			//image.style.transform ='scaleX(2.5)';
		}
  }

  render() {
    return(
		<div className="homeContainer">

			<div className="backgroundImage"> 
				<img src="img/particles_background.jpg" className="image" width="100%" height="100%"/>
			</div>

			<div className="particlesContainer"> 
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
							position : 'relative', 
							zIndex: '-1',
							height: '100%'
						}}
						height={'100%'}
						width={'100%'}
					/>
			</div>
			
			<div className='infoBlock'>
				<InfoBlock></InfoBlock>
			</div>

			<style jsx>{`
				.infoBlock {
						padding-top: 200px 
				}
				.particlesContainer {
					position: absolute;
					transition: transform 0.1s;
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
				 @media (max-width: 350px) {
				 	.infoBlock {
				 		padding-top: 100px 
				 	}
				@media (max-height: 500px) {
						.infoBlock {
								padding-top: 100px 
						}
				}
			`}</style>
		</div>
	)
}
}

export default ParticlesBackground
