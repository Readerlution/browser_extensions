(() => {
    window.addEventListener("keypress", function (e) {
        if (e.key === "+") {
            document.querySelector('video').playbackRate = 16;
        } else if (e.key === "-") {
            document.querySelector('video').playbackRate = 1;
        }
    })
})();