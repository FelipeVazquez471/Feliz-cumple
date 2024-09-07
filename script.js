document.addEventListener('DOMContentLoaded', function() {
    // Crear y lanzar confeti
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * 100 + 'vh';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confettiContainer.appendChild(confetti);
    }

    const images = [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg',
        'images/6.jpg',
        'images/7.jpg',
        'images/8.jpg',
        'images/9.jpg',
        'images/10.jpg',
        'images/11.jpg',
        'images/12.jpg',
        'images/13.jpg',
        'images/14.jpg',
        'images/15.jpg',
        'images/16.jpg',
        'images/17.jpg',
        'images/18.jpg',
        'images/19.jpg',
        'images/20.jpg',
        'images/21.jpg',
        'images/23.jpg',
        'images/24.jpg',
        'images/25.jpg',
        'images/26.jpg',
        'images/27.jpg',
        'images/28.jpg',
        'images/29.jpg',
        'images/30.jpg',
        'images/31.jpg',
        'images/32.jpg',
        'images/33.jpg',
        'images/34.jpg',
        'images/35.jpg',
        'images/36.jpg',
        'images/37.jpg',
        'images/38.jpg',
        'images/39.jpg',
        'images/40.jpg',


    ];

    // Mensajes aleatorios para los popups
    const popupMessages = [
        '🎉 ¡Felicidades!',
        '🎂 ¡Disfruta tu día!',
        '🎊 ¡Feliz Cumpleaños!',
        '🥳 ¡A celebrar!',
        '🎁 ¡Sorpresa!',
        '🎆 ¡Que tengas un día mágico!',
        '🎈 ¡Por muchos más!',
        '🌟 ¡Brilla siempre!',
    ];

    function createPopup() {
        const popupsContainer = document.getElementById('popups-container');
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.style.top = Math.random() * 100 + 'vh';
        popup.style.left = Math.random() * 100 + 'vw';

        // Asignar un mensaje aleatorio al popup
        popup.innerText = popupMessages[Math.floor(Math.random() * popupMessages.length)];

        const initialDelay = Math.random() * 3000;

        setTimeout(() => {
            popupsContainer.appendChild(popup);

            setTimeout(() => {
                popup.remove();
                createPopup();
            }, 2500);
        }, initialDelay);
    }

    function createImage() {
        const imagesContainer = document.getElementById('images-container');
        const image = document.createElement('img');
        image.classList.add('image');
        
        const randomIndex = Math.floor(Math.random() * images.length);
        image.src = images[randomIndex];
        
        image.style.top = Math.random() * 100 + 'vh';
        image.style.left = Math.random() * 100 + 'vw';

        const initialDelay = Math.random() * 3000;

        setTimeout(() => {
            imagesContainer.appendChild(image);

            setTimeout(() => {
                image.remove();
                createImage();
            }, 3000);
        }, initialDelay);
    }

    // Configuración del reproductor de música
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const volumeControl = document.getElementById('volume-control');
    const currentSongDisplay = document.getElementById('current-song');

    const playlist = [
        'music/AS IF ITS YOUR LAST.mp3',
        'music/BOOMBAYAH.mp3',
        'music/DDUDU DDUDU.mp3',
        'music/FLOWER.mp3',
        'music/How You Like That.mp3',
        'music/Ice Cream.mp3',
        'music/Kill This Love.mp3',
        'music/Pink Venom.mp3',
        'music/Shut Down.mp3',

    ];

    let currentTrack = 0;

    // Establecer un volumen inicial más bajo (por ejemplo, 30%)
    const initialVolume = 0.1;
    audioPlayer.volume = initialVolume;
    volumeControl.value = initialVolume;

    function loadAndPlayTrack(trackIndex) {
        if (trackIndex >= 0 && trackIndex < playlist.length) {
            audioPlayer.src = playlist[trackIndex];
            audioPlayer.load();
            audioPlayer.play().then(() => {
                playPauseButton.textContent = '⏸️';
            }).catch(error => {
                console.error('Error al reproducir:', error);
                playPauseButton.textContent = '▶️';
            });
            updateCurrentSongDisplay();
        }
    }

    function updateCurrentSongDisplay() {
        const songName = playlist[currentTrack].split('/').pop().replace('.mp3', '');
        currentSongDisplay.textContent = `Reprodu ciendo: ${songName}`;
    }

    function playPause() {
        if (audioPlayer.paused) {
            audioPlayer.play().then(() => {
                playPauseButton.textContent = '⏸️';
            }).catch(error => {
                console.error('Error al reproducir:', error);
            });
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = '▶️';
        }
    }

    function prevTrack() {
        currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
        loadAndPlayTrack(currentTrack);
    }

    function nextTrack() {
        currentTrack = (currentTrack + 1) % playlist.length;
        loadAndPlayTrack(currentTrack);
    }

    playPauseButton.addEventListener('click', playPause);
    prevButton.addEventListener('click', prevTrack);
    nextButton.addEventListener('click', nextTrack);

    volumeControl.addEventListener('input', function() {
        audioPlayer.volume = this.value;
    });

    // Cargar la primera canción
    loadAndPlayTrack(currentTrack);
   
    // Reproducir la siguiente canción cuando termine la actual
    audioPlayer.addEventListener('ended', nextTrack);

    // Función para crear un efecto de texto que se escribe solo
    function typeWriter(element, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Aplicar efecto de texto que se escribe solo al mensaje principal
    const centerMessage = document.querySelector('.center-message');
    centerMessage.innerHTML = '';
    typeWriter(centerMessage, '¡Felices 2 décadas!', 40);

    // Iniciar la creación de popups y imágenes
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createPopup();
        });
    }
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createImage();
        });
    }
    
});
