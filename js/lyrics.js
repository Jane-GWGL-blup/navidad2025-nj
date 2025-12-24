
const music = document.getElementById("bgMusic");
const lyricsBox = document.getElementById("lyrics");

export function lyricsSong() {
    if (!lyricsBox || !music) return;

    lyricsBox.classList.add("show");

    const lyricsTimeline = [
        { time: 0, text: "♪♫♬♪-" },
        { time: 3, text: "Te-te-te-te-te-te necesi-" },
        { time: 5, text: "Te necesito" },
        { time: 7, text: "Te-te-te-te-te-te necesi-" },
        { time: 9, text: "Te necesito" },
        { time: 11, text: "Te-te-te-te-te-te necesi-" },
        { time: 13, text: "Te necesito" },
        { time: 14, text: "Nunca dije que no se lo iba a decir a nadie" },
        { time: 19, text: "No bebé..." },
        { time: 22, text: "Pero este buen amor," },
        { time: 24, text: "no puedo guardarmelo para mi misma" },
        { time: 27, text: "Oh no" },
        { time: 29, text: "Cuando estamos juntos" },
        { time: 30, text: "Es como brazas ardiendo en calor" },
        { time: 34, text: "Oh, bebé" },
        { time: 37, text: "Mi cuerpo esta deseoso, asi que," },
        { time: 39, text: "presta atención a mi deseo" },
        { time: 42, text: "Vamos, vamos" },
        { time: 44, text: "Dos corazones" },
        { time: 46, text: "Dos corazones que laten como uno" },
        { time: 48, text: "Dos corazones" },
        { time: 49, text: "Te necesito," },
        { time: 50, text: "Te necesito, te necesito" },
        { time: 51, text: "Dos corazones" },
        { time: 53, text: "Dos corazones que laten como uno" },
        { time: 55, text: "Dos corazones" },
        { time: 57, text: "Vamos," },
        { time: 58, text: "Vamos, vamos" },
        { time: 59, text: "La gente se ponse celosa porque siempre estamos juntos" },
        { time: 63, text: "Si, carino" },
        { time: 66, text: "Supongo que realmente quieren un amor como" },
        { time: 68, text: "El tuyo y el mio" },
        { time: 71, text: "Juntos, por siempre" },
        { time: 73, text: "Nunca pensé que algún dia me pondría tan feliz" },
        { time: 78, text: "Si, carino" },
        { time: 81, text: "Mis oraciones fueron respondidas," },
        { time: 83, text: "llegaste justo a tiempo 💗⌛" },
        { time: 87, text: "♪♫♬♪" },
        { time: 88, text: "Tengo el presentimiento de que te vas a quedar" },
        { time: 92, text: "Nunca imaginé que podría pasar de esta manera" },
        { time: 95, text: "Antes de conocerte me caía a pedazos" },
        { time: 99, text: "Pero ahora, por fín, realmente sé que somos..." },
        { time: 103, text: "Dos corazones" },
        { time: 105, text: "Dos corazones que laten como uno" },
        { time: 107, text: "Dos corazones" },
        { time: 108, text: "Te necesito," },
        { time: 109, text: "Te necesito, te necesito" },
        { time: 110, text: "Dos corazones" },
        { time: 112, text: "Dos corazones que laten como uno" },
        { time: 114, text: "Dos corazones" },
        { time: 116, text: "Vamos," },
        { time: 118, text: "♪♫♬♪" },

        { time: 120, text: "♫♬♪♪" },
        { time: 121, text: "Te-te-te-te-te-te necesi-" },
        { time: 123, text: "Te necesito" },
        { time: 125, text: "Te-te-te-te-te necesi-" },
        { time: 126, text: "Te-te-te-te-te-te necesi-" },
        { time: 128, text: "Te necesi-" },
        { time: 130, text: "Te  necesi-" },
        { time: 131, text: "Te necesito" },
        { time: 133, text: "♪♫♬♪" },
        { time: 140, text: "Nunca dije que no se lo iba a decir a nadie" },
        { time: 145, text: "No bebé..." },
        { time: 147, text: "Pero este buen amor," },
        { time: 159, text: "no puedo guardarmelo para mi misma" },
        { time: 162, text: "Oh no" },
        { time: 163, text: " " },
        { time: 164, text: "Cuando estamos juntos" },
        { time: 166, text: "Es como brazas ardiendo en calor" },
        { time: 169, text: " " },
        { time: 170, text: "Oh, bebé" },
        { time: 171, text: " " },
        { time: 172, text: "Mi cuerpo esta deseoso, asi que," },
        { time: 174, text: "presta atención a mi deseo" },
        { time: 177, text: "♪♫♬♪" },
        { time: 180, text: "Tengo el presentimiento de que te vas a quedar" },
        { time: 183, text: "Nunca imaginé que podría pasar de esta manera" },
        { time: 187, text: "Antes de conocerte me caía a pedazos" },
        { time: 190, text: "Pero ahora, por fín, realmente sé que somos..." },
        { time: 194, text: "Dos corazones" },
        { time: 196, text: "Dos corazones que laten como uno" },
        { time: 197, text: "Dos corazones" },
        { time: 199, text: "Te necesito," },
        { time: 210, text: "Te necesito, te necesito" },
        { time: 211, text: "Dos corazones" },
        { time: 213, text: "Dos corazones que laten como uno" },
        { time: 215, text: "Dos corazones" },
        { time: 217, text: "Vamos," },
        { time: 218, text: "Vamos, vamos" },
        { time: 219, text: "Dos corazones" },
        { time: 221, text: "Dos corazones que laten como uno" },
        { time: 222, text: "Dos corazones" },
        { time: 224, text: "Te necesito," },
        { time: 225, text: "Te necesito, te necesito" },
        { time: 226, text: "Dos corazones" },
        { time: 228, text: "Dos corazones que laten como uno" },
        { time: 230, text: "Dos corazones" },
        { time: 232, text: "Vamos," },
        { time: 233, text: "Vamos, vamos" },
        { time: 234, text: "♪♫♬♪" },
        { time: 250, text: " " },
    ];

    lyricsBox.textContent = lyricsTimeline[0].text;

    let scaledTimeline = [];
    let factor = 1;

    function prepareTimeline() {
        const duration = music.duration;
        const lastTime = lyricsTimeline[lyricsTimeline.length - 1].time;

        factor = duration / lastTime;

        scaledTimeline = lyricsTimeline.map(item => ({
            time: item.time * factor,
            text: item.text
        }));
    }

    // Si ya cargó metadata antes
    if (music.readyState >= 1) {
        prepareTimeline();
    } else {
        music.addEventListener("loadedmetadata", prepareTimeline, { once: true });
    }

    music.addEventListener("timeupdate", () => {
        const t = music.currentTime;

        for (let i = scaledTimeline.length - 1; i >= 0; i--) {
            if (t >= scaledTimeline[i].time) {
                lyricsBox.textContent = scaledTimeline[i].text;
                break;
            }
        }
    }, { once: false });
}

/* BOTÓN */
const giftBtn = document.getElementById("giftMusicToggle");

export function btnStop() {
    giftBtn.classList.remove("hidden");

    giftBtn.onclick = () => {
        if (music.paused) {
            music.play();
            giftBtn.textContent = "⏸️ Pausar canción";
        } else {
            music.pause();
            giftBtn.textContent = "▶️ Reanudar canción";
        }
    };
}

/* CUANDO TERMINA */
export function stopMusicUI() {
    music.addEventListener("ended", () => {
        if (giftBtn) giftBtn.style.display = "none";
        if (lyricsBox) lyricsBox.textContent = "";
    });
}
