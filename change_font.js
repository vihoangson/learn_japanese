
var changefont = {

    init: function () {

        $("body").prepend('<div class="text-center"><button class="btn btn-default changefont">Change font</button></div>');
        $("body").prepend('<div class="text-center"><div class="label label-success ">Press F2 to change font</div></div>');

        $(".changefont").click(function(e){
            e.preventDefault();
            $("body").toggleClass('font-mincho','font-normal');
        })

        $(document).keydown(function(event){
            if(event.which==113){
                $(".changefont").trigger("click");
                return false;
            }
        })

    },

};