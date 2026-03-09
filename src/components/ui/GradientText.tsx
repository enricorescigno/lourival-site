import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';
import './GradientText.css';

export default function GradientText({
    children,
    className = '',
    colors = ['#F5E4AE', '#B3936C', '#A0A0A0'],
    animationSpeed = 5,
    showBorder = false,
    direction = 'horizontal',
    pauseOnHover = false,
    yoyo = true,
}: {
    children: React.ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
    direction?: 'horizontal' | 'vertical';
    pauseOnHover?: boolean;
    yoyo?: boolean;
}) {
    const [isPaused, setIsPaused] = useState(false);
    const progress = useMotionValue(0);
    const lastTimeRef = useRef<number>(0);
    const elapsedRef = useRef(0);

    const animationDuration = animationSpeed * 1000;

    useAnimationFrame((t) => {
        if (isPaused) {
            lastTimeRef.current = 0;
            return;
        }

        if (lastTimeRef.current === null) {
            lastTimeRef.current = t;
            return;
        }

        const deltaTime = t - lastTimeRef.current;
        lastTimeRef.current = t;
        elapsedRef.current += deltaTime;

        if (yoyo) {
            const cycle = elapsedRef.current % (animationDuration * 2);
            const fullCycle = elapsedRef.current % (animationDuration * 2);

            if (fullCycle < animationDuration) {
                progress.set((fullCycle / animationDuration) * 100);
            } else {
                progress.set(100 - ((fullCycle - animationDuration) / animationDuration) * 100);
            }
        } else {
            progress.set((elapsedRef.current / animationDuration) * 100);
        }
    });

    useEffect(() => {
        elapsedRef.current = 0;
        progress.set(0);
    }, [animationSpeed, progress, yoyo]);

    const backgroundPosition = useTransform(progress, (p) => {
        if (direction === 'horizontal') {
            return `${p}% 50%`;
        } else if (direction === 'vertical') {
            return `50% ${p}%`;
        } else {
            return `${p}% ${p}%`;
        }
    });

    const handleMouseEnter = useCallback(() => {
        if (pauseOnHover) setIsPaused(true);
    }, [pauseOnHover]);

    const handleMouseLeave = useCallback(() => {
        if (pauseOnHover) setIsPaused(false);
    }, [pauseOnHover]);

    const gradientStyle =
        direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right';
    const gradientColors = [...colors, colors[0]].join(', ');

    const gradientBgStyle = {
        backgroundImage: `linear-gradient(${gradientStyle}, ${gradientColors})`,
        backgroundSize: direction === 'horizontal' ? '300% 100%' : direction === 'vertical' ? '100% 300%' : '300% 300%',
        backgroundRepeat: 'repeat',
    };

    return (
        <motion.span
            className={`animated-gradient-text ${showBorder ? 'with-border' : ''} ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {showBorder && <motion.span className="gradient-overlay" style={{ ...gradientBgStyle, backgroundPosition }} />}
            <motion.span className="text-content" style={{ ...gradientBgStyle, backgroundPosition }}>
                {children}
            </motion.span>
        </motion.span>
    );
}
