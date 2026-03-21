import React, { useRef, useEffect, useState, useCallback } from "react";

interface LogoLoopItem {
    text: string;
    boldText?: string;
}

interface LogoLoopProps {
    items: LogoLoopItem[];
    speed?: number;
    direction?: "left" | "right";
    hoverSpeed?: number;
    gap?: number;
    fadeOut?: boolean;
    scaleOnHover?: boolean;
    textClassName?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
    items,
    speed = 50,
    direction = "left",
    hoverSpeed = 0,
    gap = 60,
    fadeOut = true,
    scaleOnHover = true,
    textClassName = "",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [currentSpeed, setCurrentSpeed] = useState(speed);
    const positionRef = useRef(0);
    const animFrameRef = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);

    const animate = useCallback(
        (timestamp: number) => {
            if (!innerRef.current) return;

            if (!lastTimeRef.current) lastTimeRef.current = timestamp;
            const delta = (timestamp - lastTimeRef.current) / 1000;
            lastTimeRef.current = timestamp;

            const movement = currentSpeed * delta;
            if (direction === "left") {
                positionRef.current -= movement;
            } else {
                positionRef.current += movement;
            }

            const halfWidth = innerRef.current.scrollWidth / 2;

            if (direction === "left" && positionRef.current <= -halfWidth) {
                positionRef.current += halfWidth;
            } else if (direction === "right" && positionRef.current >= 0) {
                positionRef.current -= halfWidth;
            }

            innerRef.current.style.transform = `translateX(${positionRef.current}px)`;
            animFrameRef.current = requestAnimationFrame(animate);
        },
        [currentSpeed, direction]
    );

    useEffect(() => {
        animFrameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animFrameRef.current);
    }, [animate]);

    const handleMouseEnter = () => {
        setCurrentSpeed(hoverSpeed);
    };

    const handleMouseLeave = () => {
        setCurrentSpeed(speed);
    };

    // Duplicate items enough times to fill the screen
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Fade edges */}
            {fadeOut && (
                <>
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#A0A0A0] to-transparent" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#A0A0A0] to-transparent" />
                </>
            )}

            <div
                ref={innerRef}
                className="flex items-center whitespace-nowrap will-change-transform"
                style={{ gap: `${gap}px` }}
            >
                {duplicatedItems.map((item, i) => (
                    <span
                        key={i}
                        className={`inline-block transition-transform duration-300 ${scaleOnHover ? "hover:scale-110" : ""
                            } ${textClassName}`}
                    >
                        {item.text}
                        {item.boldText && <span className="font-bold"> {item.boldText}</span>}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default LogoLoop;
