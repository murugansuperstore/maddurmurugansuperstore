
const thirukkural = [
            { verse: "அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு" },
            { verse: "கற்றதனால் ஆய பயனென்கொல் வாலறிவன்" },
            { verse: "அன்பே ஒரு நோயே, அன்பிற்கே போதுமானது" },
            { verse: "பழியினின்று பிறந்தால் காதல் ஆளும்" },
            { verse: "எண்ணம் கற்றல் தெய்வம் என்பான் அன்பா" },
            { verse: "அவனைப் போற்றுவர் என்பவன் அறிவுக்கு ஈறு" },
            { verse: "பெருவேலின் கடவுள் யார், பேசும் எல்லாம்" },
            { verse: "கண்மணியே வல்வேர் துணைவனை கொண்டால்" },
            { verse: "அந்தியுறவே எழிலியான் ஆதியுள்" },
            { verse: "பொருளினும் உயர் செயல் ஏனையர் வாழ்ந்தாலும்" },
            // Add the rest of the 1,330 Thirukkural verses here...
        ];

        // Get the current day of the year (1 to 365)
        const today = new Date();
        const start = new Date(today.getFullYear(), 0, 0);
        const diff = today - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Display the corresponding Thirukkural (use modulus to loop every 1330 days)
        const kuralIndex = dayOfYear % thirukkural.length;

        // Get the current Thirukkural verse
        const currentVerse = thirukkural[kuralIndex].verse;

        // Split the verse into words
        const words = currentVerse.split(" ");
        const firstLine = words.slice(0, 4).join(" "); // First 4 words
        const secondLine = words.slice(4).join(" "); // Remaining words

        // Get the element to display the Thirukkural
        document.getElementById('kural-verse').innerHTML = `
            <div>${firstLine}</div>
            <div>${secondLine}</div>
        `;
        const menuBtn = document.getElementById('menu-btn');
        const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the active class
});

