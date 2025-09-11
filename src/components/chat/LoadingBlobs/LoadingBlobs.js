import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './LoadingBlobs.css'

const LoadingBlobs = () => {
    const blobRefs = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const blobs = blobRefs.current;
        const container = containerRef.current;

        // Fade in the container
        if (container) {
            gsap.fromTo(container, 
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power2.out" }
            );
        }

        // Animate the blobs
        blobs.forEach((blob, i) => {
            if (blob) {
                gsap.to(blob, {
                    x: () => 200 * -.5,
                    y: () => 200 * -.3,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * .3
                });
            }
        });
    }, []);

    return (
        <div className='LoadingBlobs' ref={containerRef}>
            <div ref={el => blobRefs.current[0] = el} className="blob"></div>
            <div ref={el => blobRefs.current[1] = el} className="blob"></div>
            <div ref={el => blobRefs.current[2] = el} className="blob"></div>
        </div>
    );
};

export default LoadingBlobs;