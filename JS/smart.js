document.addEventListener("DOMContentLoaded", function() {
    const featureBoxes = document.querySelectorAll(".feature-box");

    function showFeaturesOnScroll() {
        featureBoxes.forEach((box, index) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < window.innerHeight - 100) {
                setTimeout(() => {
                    box.classList.add("show");
                }, index * 200); // Staggered appearance
            }
        });
    }

    // Ripple Effect
    document.querySelectorAll(".feature-box").forEach(box => {
        box.addEventListener("click", function(e) {
            let ripple = document.createElement("span");
            ripple.classList.add("ripple");
            this.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    window.addEventListener("scroll", showFeaturesOnScroll);
    showFeaturesOnScroll(); // Initial check
});
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll(".feature-card");

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-card");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        observer.observe(card);
    });
});
