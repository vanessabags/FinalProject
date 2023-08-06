import React from 'react';
import Container from 'react-bootstrap/Container';

import HomeCarousel from './HomeCarousel';
import HomeCards from './HomeCards';
import Article from './Article';
import Form from './Form';
import Footer from './Footer';

export default function Home() {
	
		return (
			<Container>
				<HomeCarousel />
				<hr />
				<HomeCards />
				<hr />
				<Article />
				<hr />
				<div className='form-container'>
					<h4>For More Information, Sign Up for Our Newsletter!</h4>
					<Form />
				</div>
				<Footer />
			</Container>
			
		)
	
}


