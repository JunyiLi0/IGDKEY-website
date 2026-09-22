import { motion } from "framer-motion";
import BotAvatar from "./BotAvatar";
import { Send } from "lucide-react";

const ChatButton = ({ onClick, variant = "floating" }) => {

    // =====================================================
    // VERSION HERO
    // =====================================================

    if (variant === "hero") {
        return (
            <motion.div
                className="w-full flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >

                {/* Titre */}
                <h2
                    className="
                        text-2xl
                        md:text-3xl
                        font-bold
                        bg-gradient-to-r
                        from-pale-sky
                        via-white
                        to-dusty-grape
                        bg-clip-text
                        text-transparent
                        mb-4
                    "
                >
                    Assistant IGDKEY
                </h2>


                {/* Barre chatbot */}
                <motion.button
                    onClick={onClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                        relative
                        w-full
                        max-w-4xl
                        h-24
                        md:h-20
                        rounded-full
                        border-4
                        border-pale-sky/50
                        bg-slate-300/80
                        shadow-[0_0_30px_rgba(125,211,252,0.15)]
                        flex
                        items-center
                        justify-between
                        px-6
                        md:px-7
                        cursor-pointer
                        overflow-hidden
                    "
                    aria-label="Ouvrir l'assistant IGDKEY"
                >

                    {/* Avatar */}
                    <div
                        className="
                            w-16
                            h-16
                            md:w-18
                            md:h-18
                            rounded-full
                            bg-onyx
                            border-2
                            border-dusty-grape/40
                            flex
                            items-center
                            justify-center
                            shrink-0
                        "
                    >
                        <BotAvatar size={34} />
                    </div>


                    {/* Texte indicatif */}
                    <span
                        className="
                            flex-1
                            text-left
                            ml-5
                            text-onyx/60
                            text-base
                            md:text-lg
                        "
                    >
                        Posez votre question...
                    </span>


                    {/* Bouton envoyer */}
                    <div
                        className="
                            w-14
                            h-14
                            md:w-16
                            md:h-16
                            flex
                            items-center
                            justify-center
                            shrink-0
                            text-onyx
                        "
                    >
                        <Send
                            className="
                                w-9
                                h-9
                                md:w-10
                                md:h-10
                                fill-onyx
                            "
                        />
                    </div>

                </motion.button>

            </motion.div>
        );
    }


    // =====================================================
    // VERSION FLOTTANTE ACTUELLE
    // =====================================================

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >

            {/* Pulse ring */}
            <motion.div
                className="absolute inset-0 rounded-full bg-pale-sky/20"
                animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.5, 0, 0.5]
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Second ring */}
            <motion.div
                className="absolute inset-0 rounded-full bg-pale-sky/10"
                animate={{
                    scale: [1, 1.9, 1],
                    opacity: [0.3, 0, 0.3]
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8
                }}
            />

            <motion.button
                onClick={onClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className="
                    relative
                    w-14
                    h-14
                    rounded-full
                    shadow-lg
                    shadow-dusty-grape/30
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    bg-onyx
                    border
                    border-dusty-grape/50
                    hover:border-pale-sky/50
                    transition-colors
                "
                aria-label="Ouvrir le chat"
            >
                <BotAvatar size={32} />
            </motion.button>

        </motion.div>
    );
};

export default ChatButton;
