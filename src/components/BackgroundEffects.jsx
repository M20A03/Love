import React, { useEffect, useState } from 'react';

const BackgroundEffects = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Generate random properties for stars once on mount
        const newStars = Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * -50}vh`,
            duration: `${Math.random() * 5 + 8}s`,
            delay: `${Math.random() * 10}s`,
            height: `${Math.random() * 15 + 10}px`
        }));
        setStars(newStars);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            {/* Falling Stars */}
            {stars.map((star) => (
                <div
                    key={`star-${star.id}`}
                    className="falling-star"
                    style={{
                        left: star.left,
                        top: star.top,
                        animationDuration: star.duration,
                        animationDelay: star.delay,
                        height: star.height
                    }}
                />
            ))}

            {/* Floating Background Islamic Elements */}
            <div className="floating-islamic" style={{ top: '10%', left: '5%', fontSize: '3rem', animationDelay: '0s' }}>🌙</div>
            <div className="floating-islamic" style={{ top: '20%', right: '10%', fontSize: '2rem', animationDelay: '1s' }}>✨</div>
            <div className="floating-islamic" style={{ top: '60%', left: '15%', fontSize: '2.5rem', animationDelay: '2s' }}>🏮</div>
            <div className="floating-islamic" style={{ top: '80%', right: '5%', fontSize: '3rem', animationDelay: '0.5s' }}>🕌</div>
            <div className="floating-islamic" style={{ top: '35%', right: '25%', fontSize: '1.5rem', animationDelay: '1.5s' }}>✨</div>
            <div className="floating-islamic" style={{ top: '70%', right: '20%', fontSize: '2rem', animationDelay: '3s' }}>🌙</div>
            <div className="floating-islamic" style={{ top: '15%', left: '30%', fontSize: '1.5rem', animationDelay: '2.5s' }}>✨</div>
            <div className="floating-islamic" style={{ top: '85%', left: '25%', fontSize: '2rem', animationDelay: '1.2s' }}>🏮</div>
        </div>
    );
};

export default BackgroundEffects;
