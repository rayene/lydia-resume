document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('lang-toggle');
    const langFr = document.getElementById('lang-fr');
    const langEn = document.getElementById('lang-en');
    let currentLang = 'fr';

    const setActiveLanguage = (lang) => {
        currentLang = lang;
        document.documentElement.lang = lang;

        const activeClass = 'opacity-50';
        const inactiveClass = 'opacity-100';

        if (lang === 'fr') {
            langFr.classList.add(activeClass);
            langFr.classList.remove(inactiveClass);
            langEn.classList.remove(activeClass);
            langEn.classList.add(inactiveClass);
        } else {
            langEn.classList.add(activeClass);
            langEn.classList.remove(inactiveClass);
            langFr.classList.remove(activeClass);
            langFr.classList.add(inactiveClass);
        }
    };

    setActiveLanguage(currentLang);

    langToggle.addEventListener('click', function() {
        const nextLang = currentLang === 'fr' ? 'en' : 'fr';
        setActiveLanguage(nextLang);

        // Update all elements with data-lang-fr or data-lang-en
        document.querySelectorAll('[data-lang-fr], [data-lang-en]').forEach(el => {
            const text = el.getAttribute(`data-lang-${nextLang}`);
            if (text) {
                el.innerHTML = text;
            }
        });
    });
});
