import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Proposal = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);

    const handleAccept = async () => {
        setIsSubmitting(true);
        try {
            // Save the response to Firestore
            await addDoc(collection(db, "responses"), {
                answer: "Yes, Insha'Allah",
                timestamp: serverTimestamp(),
                deviceInfo: navigator.userAgent // Optional: captures basic device info
            });
            setIsAccepted(true);
            alert("Alhamdulillah! May Allah bless us and shower His mercy upon us.");
        } catch (error) {
            console.error("Error saving response: ", error);
            // Fallback alert even if db fails due to permissions etc.
            setIsAccepted(true);
            alert("Alhamdulillah! May Allah bless us and shower His mercy upon us.");
        }
        setIsSubmitting(false);
    };

    return (
        <section className="section section-transparent">
            <div className="proposal-box float-slow">
                <h2 className="love-font glow-text" style={{ fontSize: 'clamp(2.5rem, 9vw, 3.2rem)', marginBottom: '20px', lineHeight: '1.2' }}>A Special Question</h2>
                <p style={{ fontSize: 'clamp(1rem, 4.5vw, 1.2rem)', lineHeight: '1.8', marginBottom: '30px' }}>
                    My dearest, your presence brings peace to my heart. Your taqwa (consciousness of God) and your
                    beautiful character have completely captivated me. I cherish our friendship more than words can say.
                    But as I look to the future, I cannot imagine walking the path of life, seeking Jannah, without you
                    by my side as my partner.
                </p>
                <p style={{ fontSize: 'clamp(1.1rem, 5vw, 1.4rem)', fontWeight: 'bold', color: 'var(--secondary-color)', marginBottom: '40px' }}>
                    Will you do me the absolute honor of accepting my proposal to be my beloved wife?
                </p>

                {isAccepted ? (
                    <div style={{ padding: '15px 40px', fontSize: '1.5rem', color: 'var(--secondary-color)', fontWeight: 'bold' }}>
                        ❤️ Alhamdulillah ❤️
                    </div>
                ) : (
                    <button
                        disabled={isSubmitting}
                        style={{
                            padding: '15px 40px',
                            fontSize: '1.2rem',
                            backgroundColor: 'var(--secondary-color)',
                            color: 'var(--primary-color)',
                            border: 'none',
                            borderRadius: '30px',
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            fontWeight: 'bold',
                            transition: 'transform 0.3s ease',
                            fontFamily: 'inherit',
                            opacity: isSubmitting ? 0.7 : 1
                        }}
                        onMouseOver={(e) => { if (!isSubmitting) e.target.style.transform = 'scale(1.1)' }}
                        onMouseOut={(e) => { if (!isSubmitting) e.target.style.transform = 'scale(1)' }}
                        onClick={handleAccept}
                    >
                        {isSubmitting ? "Sending..." : "Yes, Insha'Allah"}
                    </button>
                )}
            </div>
        </section>
    );
};

export default Proposal;
