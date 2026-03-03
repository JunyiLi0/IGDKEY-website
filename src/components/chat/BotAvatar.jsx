const BotAvatar = ({ size = 32 }) => (
    <div
        className="rounded-full bg-gradient-to-br from-dusty-grape to-pale-sky flex items-center justify-center flex-shrink-0"
        style={{ width: size, height: size }}
    >
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-onyx"
            style={{ width: size * 0.55, height: size * 0.55 }}
        >
            {/* Head */}
            <rect x="4" y="8" width="16" height="12" rx="3" strokeWidth="1.5" />
            {/* Eyes */}
            <circle cx="9.5" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="14.5" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
            {/* Antenna */}
            <path d="M12 3v5" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="2.5" r="1.5" fill="currentColor" stroke="none" />
            {/* Mouth */}
            <path d="M9 17h6" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    </div>
);

export default BotAvatar;
