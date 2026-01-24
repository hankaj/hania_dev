const firstName = document.getElementById('firstName');
let isHovering = false;

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
    firstName.textContent = 'HANIA';
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