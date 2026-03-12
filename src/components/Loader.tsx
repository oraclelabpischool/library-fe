import React from "react";

type LoaderProps = {
    size?: number;
    text?: string;
};

const Loader: React.FC<LoaderProps> = ({ size = 40, text }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <div
                className="border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"
                style={{ width: size, height: size }}
            ></div>

            {text && (
                <p className="text-sm text-gray-600 animate-pulse">{text}</p>
            )}
        </div>
    );
};

export default Loader;
