import React from 'react';
import About from './components/about/About';
import Tech from './components/tech/Tech';
import Header from './components/header/Header';
// import Navbar from './components/navbar/Navbar';
import Courses from './components/courses/Courses';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar2 from './components/navbar2/Navbar2';

const App = () => {
	return (
		<>
			{/* <Navbar /> */}
			<Navbar2 />
			<Header />
			<About />
			<Tech />
			<Services />
			<Courses />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
