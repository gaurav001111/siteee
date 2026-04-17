// Add a simple fade-in effect for skills
document.querySelectorAll('.skill-badge').forEach((badge, index) => {
    badge.style.opacity = "0";
    badge.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        badge.style.transition = "all 0.5s ease";
        badge.style.opacity = "1";
        badge.style.transform = "translateY(0)";
    }, 100 * index);
});