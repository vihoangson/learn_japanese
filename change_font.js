
var changefont = {

    init: function () {
        $("body").prepend('<div class="text-center"><button class="btn btn-default changefont">Change font</button></div>');

        $(".changefont").click(function(e){
            e.preventDefault();
            $("body").toggleClass('font-mincho','font-normal');
        })

    },

};