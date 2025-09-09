import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './LoadingBlobs.css'

const LoadingBlobs = () => {
    const blobRefs = useRef([]);

    useEffect(() => {
        const blobs = blobRefs.current;

        blobs.forEach((blob, i) => {
            if (blob) {
                gsap.to(blob, {
                    x: () => 70,
                    y: () => 70 * Math.random() / 10,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 0
                });
            }
        });
    }, []);

    return (
        <div className='LoadingBlobs'>
            <div ref={el => blobRefs.current[0] = el} className="blob"></div>
            <div ref={el => blobRefs.current[1] = el} className="blob"></div>
            <div ref={el => blobRefs.current[2] = el} className="blob"></div>
        </div>
    );
};

export default LoadingBlobs;