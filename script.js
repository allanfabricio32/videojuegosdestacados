// Función para filtrar los juegos por plataforma
function filterGames(platform) {
    // Primero, ocultamos todas las tarjetas
    const allGames = document.querySelectorAll('.game-card');
    allGames.forEach(game => {
        game.style.display = 'none';
    });

    // Luego, mostramos las tarjetas correspondientes a la plataforma seleccionada
    const selectedGames = document.querySelectorAll(`.${platform}`);
    selectedGames.forEach(game => {
        game.style.display = 'inline-block';
    });
}







// Mostrar el modal con información del juego
function showDetails(title, description, imageSrc) {
    // Obtener elementos del modal
    const modal = document.getElementById('gameModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');

    // Asignar valores
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imageSrc;

    // Mostrar modal
    modal.style.display = 'flex';
}

// Cerrar el modal
function closeModal() {
    const modal = document.getElementById('gameModal');
    modal.style.display = 'none';
}










function showTrailer(trailerId) {
    // Ocultar cualquier trailer que esté mostrando
    const trailers = document.querySelectorAll('.trailer-container');
    trailers.forEach(trailer => {
        if (trailer.style.display !== 'none') {
            trailer.style.display = 'none';
        }
    });

    // Mostrar el trailer correspondiente
    const trailer = document.getElementById(trailerId);
    trailer.style.display = 'block';
}





















