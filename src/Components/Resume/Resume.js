import React, { useEffect, useState } from 'react';
import Particle from '../Particle';
import { BsDownload } from 'react-icons/bs';
import resume from '../../Assets/jafeerShaikResume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let scale = 1; // Default scale for width > 1024

    if (width <= 768) {
        scale = 0.55;
    } else if (width <= 1024) {
        scale = 1;
    } else {
        scale = 1.7;
    }

    return (
        <>
            <Particle />
            <section className='container resume-container flex'>
                <div>
                    <a href={resume} className='download-btn' download>
                        {<BsDownload />} Download CV
                    </a>
                </div>
                <div className='resume'>
                    <Document file={resume} className='document'>
                        <Page pageNumber={1} scale={scale} />
                    </Document>
                </div>
                <div>
                    <a href={resume} className='download-btn' download>
                        {<BsDownload />} Download CV
                    </a>
                </div>
            </section>
        </>
    );
};

export default Resume;
