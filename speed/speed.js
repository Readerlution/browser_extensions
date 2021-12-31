(() => {
    window.addEventListener("keypress", function (e) {
        if (e.key === "+") {
            document.querySelector('video').playbackRate = 20;
        } else if (e.key === "-") {
            document.querySelector('video').playbackRate = 1;
        }
    })
})();