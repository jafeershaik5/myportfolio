import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ContactMe from './Components/ContactMe/ContactMe';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import './Styles.css';
import Footer from './Components/Footer';
import PreLoader from './Components/PreLoader';

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loading ? (<PreLoader />
            ) : (
                <>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contactme' element={<ContactMe />} />
                        <Route path='/resume' element={<Resume />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='*' element={<Home />} />
                    </Routes>
                    <Footer />
                </>
            )}

        </>
    );
}

export default App;
