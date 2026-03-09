import React, { useRef, useState } from 'react';
import './GlareHover.css';

interface GlareHoverProps {
    children: React.ReactNode;
    width?: string;
    height?: string;
    background?: string;
    borderRadius?: string;
    glareColor?: string;
    glareOpacity?: number;
    glareAngle?: number;
    glareSize?: number;
    transitionDuration?: number;
    playOnce?: boolean;
    className?: string;
}

const GlareHover: React.FC<GlareHoverProps> = ({
    children,
    width = '100%',
    height = '100%',
    background = 'none',
    borderRadius = '0px',
    glareColor = '#f5e4ae',
    glareOpacity = 0.5,
    glareAngle = -30,
    glareSize = 500,
    transitionDuration = 1100,
    playOnce = false,
    className = '',
}) => {
    const styles: { [key: string]: string } = {};

    // Parse hex color to rgba
    let hex = glareColor.replace('#', '');
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    const rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;

    const rootVars = {
        '--gh-width': width,
        '--gh-height': height,
        '--gh-bg': background,
        '--gh-br': borderRadius,
        '--gh-angle': `${glareAngle}deg`,
        '--gh-size': `${glareSize}%`,
        '--gh-rgba': rgba,
        '--gh-accent': glareColor,
        '--gh-duration': `${transitionDuration}ms`,
    } as React.CSSProperties;

    return (
        <div
            className={`glare-hover ${playOnce ? 'glare-hover--play-once' : ''} ${className}`}
            style={rootVars}
        >
            {children}
        </div>
    );
};

export default GlareHover;
