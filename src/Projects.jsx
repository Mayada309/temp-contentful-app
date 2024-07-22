import useFetchProjects from './fetchProjects'; './fetchProjects';

const Projects = () => {
	const { loading, projects } = useFetchProjects();

	if (loading) {
		return <section className='projects'>
			<h2>loading...</h2>
		</section>;
	}

	return (
		<section className='projects'>
			<div className="title">
				<h2>projects</h2>
				<div className="title-underline"></div>
			</div>
			<div className="projects-center">
				{
					projects.map((project) => {
						const { id, title, img, url } = project;
						return <a
							key={id}
							href={url}
							target='_balnk'
							rel='noreferrer'
							className="project"
							style={{ margin: '2rem' }}
						>
							<img className='img' src={img} alt={title} />
							<h5>{title}</h5>
						</a>;
					})
				}
			</div>
		</section>
	);
};

export default Projects;