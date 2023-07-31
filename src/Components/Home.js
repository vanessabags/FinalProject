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
				<h2>Home</h2>
				<HomeCarousel />
				<hr />
				<HomeCards />
				<hr />
				<Article />
				<hr />
				<h4>For more information, Sign Up for Our Newsletter!</h4>
				<Form />
				<Footer />
			</Container>
			
		)
	
}


