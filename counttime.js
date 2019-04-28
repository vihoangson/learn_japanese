var counttime = {
    start: 0,
    cur: 0,
    countrun: 0,
    timebefore: 0,
    timeafter: 0,
    setInternval: null,
    init: function () {
        this.run();

        $("#message").after('<div id="clock" class="hidden"><span>Clock: </span><number></number></div>')
        $("#message").after('<div id="couttime" class="hidden"><span>Count time:</span><number></number>s</div>')
        $("#message").after('<div id="result-counttime" class="hidden well"><span>Thời gian trung bình mỗi từ: </span><number></number></div>')

    },
    complete_counttime() {
        // Hiển thị ô result
        $("#result-counttime").removeClass('hidden');
        // Set giá trị ô result
        $("#result-counttime number").text(Math.round((counttime.countrun / $("#list-char li").length)));

        $.each(this.allStorage(), function (key, value ) {
            if (value.match(/speed/)) {
                console.log(value.replace("speed:",""));
            }
        })
        localStorage.clear();
    },
    catchtime: function (romanji_char) {

        $("#result-counttime").addClass('hidden');
        $("#couttime").removeClass('hidden');
        $("#clock").removeClass('hidden');

        this.timeafter = this.cur;
        var count_t = this.timeafter - this.timebefore;
        if (count_t < 0) count_t = 0;
        $("#couttime number").text(count_t + "  = (" + Math.round((count_t) / 100) + ")");
        this.timebefore = this.cur;

        localStorage.setItem("speed:" + romanji_char, count_t);

    },
    allStorage: function () {

        var archive = [],
            keys = Object.keys(localStorage),
            i = 0, key;

        for (; key = keys[i]; i++) {
            archive.push(key + '=' + localStorage.getItem(key));
        }

        return archive;
    },
    resettime: function () {
        this.timebefore = 0;
        this.countrun = 0;
        $("#couttime").addClass('hidden');
        $("#clock").addClass('hidden');
    },

    run: function () {

        this.setInternval = setInterval(function () {
            counttime.countrun += 1;
            counttime.cur = counttime.countrun;
            $("#clock number").text(counttime.cur);
        }, 10);

    }

};