export const LeftShapeSVG = ({ className = "" }) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="80" 
            height="16" 
            viewBox="0 0 80 16"
            className={`svg-img left-side ${className}`}
        >
            <path className="cls-1" d="M9,9V7H67V9H9Z"></path>
            <path className="cls-2" d="M71.713,1.787L77.9,7.972l-6.185,6.185L65.528,7.972Z"></path>
            <circle className="cls-3" cx="6" cy="8" r="4"></circle>
        </svg>
    );
};

export const RightShapeSVG = ({ className = "" }) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="80" 
            height="16" 
            viewBox="0 0 80 16"
            className={`svg-img right-side ${className}`}
        >
            <path className="cls-1" d="M70.906,9V7h-58V9h58Z"></path>
            <path className="cls-2" d="M8.194,1.787L2.009,7.972l6.185,6.185,6.185-6.185Z"></path>
            <circle className="cls-3" cx="73.906" cy="8" r="4"></circle>
        </svg>
    );
};

export const BannerShape = ({ type = "left", className = "" }) => {
    if (type === "left") {
        return <LeftShapeSVG className={className} />;
    }
    return <RightShapeSVG className={className} />;
};