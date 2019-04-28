var audiospeak = {
    init: function () {
        $(document).on('click', '.list-char li', function () {
            str = $(this).attr('class').split(' ')[0];
            res = str.replace("char-h", "");
            res = str.replace("char-k", "");
            audiospeak.speak(res);
        });
    },
    speak: function (romanji_char) {
        $("#audio-speak").attr('src', 'audio_hiragana/' + romanji_char + '.mp3');
        $("#audio-speak")[0].play();
    }

};