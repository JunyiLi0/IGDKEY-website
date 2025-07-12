import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedLetters = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const letters = ['I', 'G', 'D', 'K', 'E', 'Y'];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const letterVariants = {
        hidden: (i) => ({
            x: i < 3 ? -100 : 100,
            opacity: 0,
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <motion.div
            className="flex justify-start items-center h-full pl-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
        >
            <div className="flex gap-4">
                {letters.map((letter, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={letterVariants}
                        className="text-7xl font-bold text-white"
                        style={{
                            textShadow: '0 0 10px rgba(255,255,255,0.5)',
                        }}
                    >
                        {letter}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default AnimatedLetters; 