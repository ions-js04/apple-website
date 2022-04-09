const fade_in = document.querySelectorAll('.photo');
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function(
        entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    appearOptions);

fade_in.forEach(fader => {
    appearOnScroll.observe(fader);
});