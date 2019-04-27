var audiospeak = {
    init: function () {

        $("#list-char li").click(function () {
            console.log($(this).prop("class"));
            //audiospeak.speak(romanji_char);
        });
    },
    speak: function (romanji_char) {
        $("#audio-speak").attr('src', 'audio_hiragana/' + romanji_char + '.mp3');
        $("#audio-speak")[0].play();
    }

};