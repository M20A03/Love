import React from 'react';

const Story = () => {
    return (
        <section className="section section-transparent">
            <h2 className="glow-text" style={{ fontSize: 'clamp(2rem, 8vw, 2.8rem)', marginBottom: '40px', textAlign: 'center' }}>Our Beautiful Journey</h2>

            <div className="decorative-border">
                <div style={{ margin: '40px 0', padding: '20px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '15px' }}>
                    <h3 style={{ fontSize: 'clamp(1.5rem, 6vw, 1.8rem)', color: 'var(--accent-color)' }}>A Bond Written in the Stars</h3>
                    <p className="story-container">
                        From the moment our paths crossed, it felt as though our friendship was meant to be—a beautiful decree.
                        Through every shared laugh, every late-night conversation, and every moment of silent understanding,
                        you have been a beacon of kindness, modesty, and strength. Your faith inspires me, and your heart
                        is the most precious gift to everyone who knows you.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Story;
