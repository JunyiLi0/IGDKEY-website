import React, { useRef, useState } from 'react';

const TiltCard = ({ children, className = "" }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10 deg
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });
        setMousePosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative transform-gpu transition-all duration-300 ease-out group ${className}`}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
        >
            {/* Background with simple border style */}
            <div className="absolute inset-0 bg-onyx rounded-2xl border-2 border-dusty-grape shadow-xl overflow-hidden transition-colors duration-300 group-hover:border-pale-sky">

                {/* Glow effect following mouse */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(138, 148, 166, 0.15), transparent 40%)`
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </div>
    );
};

export default TiltCard;
