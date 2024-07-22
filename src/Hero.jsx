import heroImg from './assets/hero.svg';
const Hero = () => {
	return (
		<section className='hero'>
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						Lorem ipsum dolor sit amet
						consectetur adipisicing elit.
						Assumenda voluptatibus ut inventore
						praesentium maxime in, dignissimos
						officiis facere provident fuga a
						liquam iure amet, et modi id minima
						fugit magnam dolore.
					</p>
				</div>
				<div className="img-container">
					<img src={heroImg} alt="woman and the browser" />
				</div>
			</div>
		</section>
	);
};

export default Hero;