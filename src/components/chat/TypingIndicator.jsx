import { motion } from "framer-motion";

const TypingIndicator = () => (
    <div className="flex items-center gap-1 px-2 py-1">
        {[0, 1, 2].map((i) => (
            <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-pale-sky/60"
                animate={{ y: [0, -5, 0] }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                }}
            />
        ))}
    </div>
);

export default TypingIndicator;
