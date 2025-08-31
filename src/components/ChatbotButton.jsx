import { getAssetPath } from "../config";

const ChatbotButton = ({ onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`${className ?? ""} cta-wrapper`}
        >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">Essayer notre chatbot</p>
                <div className="arrow-wrapper">
                    <img src={getAssetPath("/images/chat.png")} alt="chat" className="w-5 h-5" />
                </div>
            </div>
        </button>
    );
};

export default ChatbotButton;
