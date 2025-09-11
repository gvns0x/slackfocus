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

        // Animate the blobs with changing positions
        blobs.forEach((blob, i) => {
            if (blob) {
                // Create a timeline for each blob to control the changing positions
                const tl = gsap.timeline({ repeat: -1 });
                
                // Define multiple different positions for variety
                const positions = [
                    { x: 200 * -0.5, y: 200 * -0.3 },
                    { x: 200 * 0.3, y: 200 * -0.4 },
                    { x: 200 * -0.5, y: 200 * 0.2 },
                    { x: 200 * 0.1, y: 200 * 0.4 },
                    { x: 200 * -0.2, y: 200 * -0.3 },
                    { x: 200 * 0.4, y: 200 * 0.1 }
                ];
                
                // Add each position as a separate animation in the timeline
                positions.forEach((pos, index) => {
                    tl.to(blob, {
                        x: pos.x,
                        y: pos.y,
                        duration: 1.8,
                        ease: "sine.inOut"
                    });
                });
                
                // Start the timeline with a delay for each blob
                tl.delay(i * 0.3);
            }
        });
    }, []);

    return (
        <div className='LoadingBlobs' ref={containerRef}>
            <div ref={el => blobRefs.current[0] = el} className="blob"></div>
            <div ref={el => blobRefs.current[1] = el} className="blob"></div>
            <div ref={el => blobRefs.current[2] = el} className="blob"></div>
            {/* <div ref={el => blobRefs.current[3] = el} className="blob"></div> */}
        </div>
    );
};

export default LoadingBlobs;