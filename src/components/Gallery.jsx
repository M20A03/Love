import React, { useState } from 'react';

const Gallery = () => {
    // Ordered memories in sequence
    const memories = [
        { id: 1, text: "Alhamdulillah, yahan se hamare safar ka aaghaz hua... 1 saal aur 1 mahine se zyada ka arsa. Yehi wo jagah thi jahan hum pehli martaba mile, aur hum ne 20 se 25 lobbies tak sath khela aur dher sari baatein kein. MashaAllah!" },
        { id: 2, text: "Pehli dafa main tumhare pyaar mein pareshan hua jab tum sab ke samne meri fake girlfriend banne ko tayyar thi. Lekin jab tumne mujhe lori ga kar sulaaya, to uske baad main puri tarah tumhara ho gaya." },
        { id: 3, text: "Main maanta hoon ke aapne yeh baat mujhse waqti taur par (spontaneously) keh di thi, par Alhamdulillah ab aap 18 ki ho chuki hain aur hum isse haqeeqat bana sakte hain. Agar aap bas ek qadam aage badhaayein, toh Allah gawah hai, main apni aakhri saans aur apne khoon ke aakhri qatre tak aap par qurban ho jaunga." },
        { id: 4, text: "SubhanAllah, main drive karta hua bhi bas aapse hi baat karta tha. Mujhe is baat ka hargiz farq nahi padta tha ke main kitni speed mein hoon, 100 ho ya us se bhi zyada... par afsos, aapko mere woh efforts kabhi nazar hi nahi aaye." },
        { id: 5, text: "Main toh samne theek se dekhta tak nahi tha, mera saara dhyan bas aapke upar hi rehta tha. Aur main saari raat bas aapke liye hi jagta tha... kahan wo 10 baje sone wala ladka, aur kahan aapke liye poori poori raat jagne laga. MashaAllah, ye mohabbat hi thi." },
        { id: 6, text: "Kya aapko yaad hai main aapki zindagi mein shamil hone ke liye kaisa blackmail karta tha? Aur wo shakhs kitna ghalat aur na-maqool nikla, jiske baad meri aapki zindagi mein entry hui. Uske baad se humne kitni baatein ki, aur Alhamdulillah, silsila aaj bhi barkarar hai." },
        { id: 7, text: "Meri jaan, kya aapko yaad hai aapne mujhe kitni baar apni fake photos bheji theen? Lekin dekhiye is dil ka haal... maine aapko dekhe bina hi aapse beintehaa mohabbat kar li thi. MashaAllah, aapki rooh se pyar tha mujhe." },
        { id: 8, text: "Aapko yaad hai in dino mein maine aapse kitni baar maafi mangi hai? Agar aage aane wale waqt mein bhi mujhse koi galat ho jaye aur main maafi mangu, toh please apni is jaan ko is baar bhi maaf kar dena na ji. Allah gawah hai meri niyat ki." },
        { id: 9, text: "Shukriya meri jaan, mere itne saare messages padhne ke liye, meri saari baaton ko dhyan se sunne aur yaad rakhne ke liye. Aur mujhe maaf karna agar main aapko utna nahi sun paata, par isme meri koi ghalti nahi... aap khud hi toh itna kam bolti hain. Aur kitni baar maine aapko tang kiya, pareshan kiya, aur aisi situations banayi ke aap mujhe chhod kar chali jaayen... par shukriya mere paas rukne ke liye, itna sabr rakhne ke liye, aur mujhe apne paas hamesha mehfooz aur apne pyaar ki qaid mein rakhne ke liye." },
        { id: 10, text: "Dua hai Allah Ta'ala se ke wo aapki zindagi ka ek saal bhi kam na kare, balke aapki zindagi mein aur barkat ataa farmaaye. Allah kare aap Mayank ki biwi banein aur poori zindagi use sambhale rakhein. Happy Birthday meri pyari si jaan! Aur haan, ab aap 18 ki ho gayi hain, toh thodi respect diya karein mujhe... main 4 mahine aur 13 din pehle bada ho chuka hoon aapse. ❤️" }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % memories.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? memories.length - 1 : prev - 1));
    };

    return (
        <section className="section section-transparent">
            <h2 style={{ fontSize: 'clamp(1.8rem, 7vw, 2.8rem)', marginBottom: '10px', color: 'var(--accent-color)', fontFamily: "'Playfair Display', serif", position: 'relative', zIndex: 1, textAlign: 'center' }}>
                Chaaand aur Suraj ki Kahani
            </h2>

            {/* Sun & Moon Poem Section */}
            <div style={{
                margin: '20px auto 40px',
                padding: '25px',
                maxWidth: '600px',
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid var(--accent-color)',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}>
                <p style={{ fontSize: '1.1rem', color: '#fff', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '10px' }}>
                    "Meri zindagi ka aangan kitna bhi roshan kyun na ho,<br />
                    Ek Suraj ki chamak ke bina yeh Chaand hamesha adhoora lagta hai.<br />
                    Aap woh Suraj hain jo is Chaand ko mukammal karti hain,<br />
                    Mayank ka wajood uski Alish  ke bina kuch bhi nahi."
                </p>
                <div style={{ color: 'var(--accent-color)', fontSize: 'clamp(1.2rem, 5vw, 1.5rem)', marginTop: '10px' }}>
                    🌙 ❤️ ☀️
                </div>
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 7vw, 2.5rem)', marginBottom: '10px', textAlign: 'center' }}>Treasured Memories</h2>
            <ruby style={{ fontSize: 'clamp(1rem, 4.5vw, 1.2rem)', color: 'var(--accent-color)', marginBottom: '30px', display: 'inline-block' }}>
                Memories <rt>ذكريات</rt>
            </ruby>

            <p style={{ marginBottom: '20px', fontStyle: 'italic', fontSize: '0.9rem', textAlign: 'center' }}>
                One beautiful memory at a time.
            </p>

            {/* Required CSS property: image-orientation applied globally, and backface-visibility handled via transition */}
            <div
                style={{
                    position: 'relative',
                    width: '280px',
                    height: '380px',
                    perspective: '1000px',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        border: '5px solid var(--secondary-color)',
                        borderRadius: '15px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                        backfaceVisibility: 'hidden',
                        transition: 'opacity 0.5s ease',
                    }}
                >
                    <img
                        key={currentIndex}
                        className="carousel-image-active"
                        src={`/images/${memories[currentIndex].id}.jpg`}
                        alt={`Memory ${memories[currentIndex].id}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: memories[currentIndex].id === 9 ? 'top' : 'center'
                        }}
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/280x380/1b5b42/d4af37?text=Memory+' + memories[currentIndex].id;
                        }}
                    />
                </div>
            </div>

            {memories[currentIndex].text && (
                <div style={{ marginTop: '20px', padding: '0 20px', maxWidth: '400px', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', color: '#fff', lineHeight: '1.6' }}>
                        {memories[currentIndex].text}
                    </p>
                </div>
            )}

            <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
                <button
                    onClick={handlePrev}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: 'transparent',
                        color: 'var(--secondary-color)',
                        border: '2px solid var(--secondary-color)',
                        borderRadius: '25px',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        transition: 'all 0.3s ease'
                    }}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: 'var(--secondary-color)',
                        color: 'var(--primary-color)',
                        border: 'none',
                        borderRadius: '25px',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontFamily: 'inherit',
                        transition: 'all 0.3s ease'
                    }}
                >
                    Next
                </button>
            </div>

            <p style={{ marginTop: '15px', color: 'var(--accent-color)', fontSize: '0.9rem' }}>
                {currentIndex + 1} of {memories.length}
            </p>
        </section>
    );
};

export default Gallery;
