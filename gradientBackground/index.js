function createGradientBackground(targetElement, color1, color2) {
    let posX = targetElement.clientWidth / 2;
    let posY = targetElement.clientHeight / 2;

    targetElement.style.background = `radial-gradient(circle at ${posX}px ${posY}px, ${color1}, ${color2})`;

    targetElement.addEventListener('mousemove', function(event) {
        const rect = targetElement.getBoundingClientRect();

        posX = event.clientX - rect.left;
        posY = event.clientY - rect.top;

        targetElement.style.background = `radial-gradient(circle at ${posX}px ${posY}px, ${color1}, ${color2})`;
    });
}