// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

let currentSection = 0;
let isScrolling = false;

// Audio Management
const audioElements = {
    ironman: document.getElementById('audio-ironman'),
    spiderman: document.getElementById('audio-spiderman'),
    thor: document.getElementById('audio-thor')
};

let currentAudio = null;

function playAudio(character) {
    if (currentAudio) {
        gsap.to(currentAudio, {
            volume: 0,
            duration: 0.5,
            onComplete: () => currentAudio.pause()
        });
    }
    
    const audio = audioElements[character];
    if (audio) {
        audio.volume = 0;
        audio.play().catch(() => {});
        gsap.to(audio, { volume: 0.2, duration: 1 });
        currentAudio = audio;
    }
}

// Loader Animation
gsap.to('.loader-title', { opacity: 1, duration: 1, ease: 'power2.out', delay: 0.3 });
gsap.to('.loader-bar::after', { left: '100%', duration: 1.8, ease: 'power2.inOut', delay: 0.8 });
gsap.to('.loader', {
    opacity: 0,
    duration: 0.6,
    delay: 2.5,
    onComplete: () => {
        document.querySelector('.loader').style.display = 'none';
        initApp();
    }
});

// Initialize App
function initApp() {
    const sections = document.querySelectorAll('.page-section');
    
    // Hero Animation
    gsap.from('.hero-title', { opacity: 0, y: 100, duration: 1.2, ease: 'power3.out' });
    gsap.from('.hero-subtitle', { opacity: 0, y: 50, duration: 1.2, ease: 'power3.out', delay: 0.3 });
    
    // Setup each section
    sections.forEach((section, index) => {
        if (index === 0) return; // Skip hero
        
        const character = section.dataset.character;
        const characterImage = section.querySelector('.character-image');
        const particles = section.querySelector('.particles');
        const chars = section.querySelectorAll('.character-name .char');
        const desc = section.querySelector('.character-desc');
        const stats = section.querySelectorAll('.stat');
        
        createParticles(particles);
        
        // Glow pulse
        gsap.to(section.querySelector('.character-glow'), {
            scale: 1.15,
            opacity: 0.5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    });
    
    // Scroll snap navigation
    let touchStartY = 0;
    
    function handleScroll(direction) {
        if (isScrolling) return;
        
        const newSection = currentSection + direction;
        if (newSection < 0 || newSection >= sections.length) return;
        
        isScrolling = true;
        currentSection = newSection;
        
        // Scroll to section
        gsap.to(window, {
            scrollTo: { y: sections[currentSection], autoKill: false },
            duration: 1.2,
            ease: 'power3.inOut',
            onComplete: () => {
                setTimeout(() => { isScrolling = false; }, 300);
            }
        });
        
        // Animate section
        if (currentSection > 0) {
            animateSection(sections[currentSection]);
        }
    }
    
    // Mouse wheel
    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        handleScroll(e.deltaY > 0 ? 1 : -1);
    }, { passive: false });
    
    // Touch
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });
    
    window.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;
        if (Math.abs(diff) > 50) {
            handleScroll(diff > 0 ? 1 : -1);
        }
    });
    
    // Keyboard
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
            e.preventDefault();
            handleScroll(1);
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            handleScroll(-1);
        }
    });
}

function animateSection(section) {
    const character = section.dataset.character;
    const characterImage = section.querySelector('.character-image');
    const chars = section.querySelectorAll('.character-name .char');
    const desc = section.querySelector('.character-desc');
    const stats = section.querySelectorAll('.stat');
    
    playAudio(character);
    
    // Image entrance
    gsap.fromTo(characterImage,
        { opacity: 0, scale: 0.7, x: 200, filter: 'blur(30px)', rotationY: 20 },
        { opacity: 1, scale: 1, x: 0, filter: 'blur(0px)', rotationY: 0, duration: 1.5, ease: 'power3.out' }
    );
    
    // Text animation
    gsap.fromTo(chars,
        { opacity: 0, y: 100, rotateX: -90 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.04, delay: 0.3, ease: 'power3.out' }
    );
    
    gsap.fromTo([desc, stats],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, delay: 0.6, ease: 'power3.out' }
    );
}

// Create Particles
function createParticles(container) {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 2;
        
        Object.assign(particle.style, {
            position: 'absolute',
            width: size + 'px',
            height: size + 'px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.4)',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            filter: 'blur(1px)',
            boxShadow: '0 0 8px rgba(255,255,255,0.4)'
        });
        
        container.appendChild(particle);
        
        gsap.to(particle, {
            y: (Math.random() - 0.5) * 200,
            x: (Math.random() - 0.5) * 200,
            opacity: Math.random() * 0.5 + 0.3,
            scale: Math.random() + 0.5,
            duration: Math.random() * 5 + 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 2
        });
    }
}

// Mouse parallax
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
    
    document.querySelectorAll('.character-image').forEach(img => {
        gsap.to(img, {
            x: mouseX,
            y: mouseY,
            rotationY: mouseX * 0.2,
            rotationX: -mouseY * 0.2,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});
