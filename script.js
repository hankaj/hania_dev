const firstName = document.getElementById('firstName');
let isHovering = false;
let autoPlayInterval;

function playSequence() {
    if (isHovering) return; // Don't auto-play if user is hovering
    
    // Step 1: IA
    firstName.innerHTML = 'HAN<span class="ai-highlight pixelate">IA</span>';
    
    // Step 2: AI (after 200ms)
    setTimeout(() => {
        if (!isHovering) {
            firstName.innerHTML = 'HAN<span class="ai-highlight pixelate">AI</span>';
        }
    }, 200);
    
    // Step 3: Back to AI → IA transition (after 1.5 seconds)
    setTimeout(() => {
        if (!isHovering) {
            firstName.innerHTML = 'HAN<span class="ai-highlight pixelate-reverse">AI</span>';
        }
    }, 1500);
    
    // Step 4: Show IA (after 1.7 seconds)
    setTimeout(() => {
        if (!isHovering) {
            firstName.innerHTML = 'HAN<span class="ai-highlight pixelate-reverse">IA</span>';
        }
    }, 1700);
    
    // Step 5: Return to plain HANIA (after 2.1 seconds)
    setTimeout(() => {
        if (!isHovering) {
            firstName.textContent = 'HANIA';
        }
    }, 2100);
}

// Start auto-play every 20 seconds (1.5 minutes)
autoPlayInterval = setInterval(playSequence, 20000);

// Manual hover interactions
firstName.addEventListener('mouseenter', () => {
    isHovering = true;
    // First show IA
    firstName.innerHTML = 'HAN<span class="ai-highlight pixelate">IA</span>';
    // Then after 200ms switch to AI with pixelation
    setTimeout(() => {
        if (isHovering) {
            firstName.innerHTML = 'HAN<span class="ai-highlight pixelate">AI</span>';
        }
    }, 200);
});

firstName.addEventListener('mouseleave', () => {
    isHovering = false;
    // Reverse transition: AI → IA with animation
    firstName.innerHTML = 'HAN<span class="ai-highlight pixelate-reverse">AI</span>';
    setTimeout(() => {
        firstName.innerHTML = 'HAN<span class="ai-highlight pixelate-reverse">IA</span>';
    }, 200);
    // Finally remove all formatting after animations complete
    setTimeout(() => {
        if (!isHovering) {
            firstName.textContent = 'HANIA';
        }
    }, 600);
});

function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Remove active class from all nav buttons
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));
    
    // Show selected page
    document.getElementById(pageName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}