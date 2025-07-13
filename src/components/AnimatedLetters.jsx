import React from 'react';

const IGDKeyLogo = () => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <img
                src={import.meta.env.BASE_URL + "images/igdkey-nobg.png"}
                alt="IGDKEY logo"
                style={{ maxWidth: '320px', width: '100%', height: 'auto', objectFit: 'contain' }}
            />
        </div>
    );
};

export default IGDKeyLogo; 