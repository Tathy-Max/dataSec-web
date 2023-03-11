import React from 'react';
import About from './components/about/About';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
	return (
		<>
			<Header />
			<Navbar />
			<About />
			<Services />
			<Portfolio />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
