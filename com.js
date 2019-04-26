var romanji = [];
var hiragana = []
var katakana = [];

var arrConcat = [];

var min = 0;
var max = 0;

var currentKey = '';
var currentArray = [];

var result_default = '<span style="font-size:11px">click Ä‘á»ƒ xem Ä‘Ă¡p Ă¡n </span>';


var getData = function(){
    var url = 'data.json';
    // var url = 'http://localhost/study_japanese/data.php';
    $.ajax({
        url:url,
        type:'GET',
        dataType:'json',
        beforeSend:function(){
            $('#loading').show();
        },
        complete:function(){
            $('#loading').hide();
            init();
        },
        success:function(data){

            //console.log(data)

            if(  data.romanji != undefined){
                romanji = data.romanji
            }
            else{
                alert('not found data');
                $('#practice').hide();
                $('#setup-range').hide();
            }

            if(data.katakana != undefined){
                katakana = data.katakana
            }

            if( data.hiragana != undefined){
                hiragana = data.hiragana
            }
            // console.log(katakana);

        }
    })
}

var init = function(){
    arrConcat = hiragana.concat(katakana);
    $('#input-from').val(getCookie('inputFrom'));
    $('#input-to').val(getCookie('inputTo'))
    prevList();
    $('#setup-range').show();
    coloring_element.setValue({
        selectorElement:'li.active',
        selectorInputFrom:'#input-from',
        selectorInputTo:'#input-to',
    });
    coloring_element.init();
}

var startPratice = function(){
    resetPracice();
    $('#practice').show();
    $('#setup-range').hide();
    listChar();
    random_char();
}

var resetPracice = function(){
    $('#result-typing').html('');
    $('#show-result').html(result_default);
    $('#show-result').removeClass('bg-success bg-danger')
    $('.group-typing').show();
    $('#typing').focus();
    $('#message-result').text('');
}

var resetData = function(){
    var inputFrom = parseInt($('#input-from').val());
    var inputTo = parseInt($('#input-to').val());
    // console.log(arrConcat.length)
    currentArray = arrConcat.slice(inputFrom-1,inputTo)
    max = currentArray;
    // console.log(currentArray)
    startPratice();


}



var check_char = function(x){
    var input_value = $('#typing').val().trim().toLowerCase();
    if(input_value == ''){
        showMessage('danger','HĂ£y gĂµ chá»¯ Ä‘i nĂ o !');
        return;
    }

    var class_status = '';
    var romanji_char = currentArray[currentKey][0]
    var char_type= currentArray[currentKey][2];
    loadResult()

    if(input_value == romanji_char){
        $('#message-result').html('<i class="far fa-grin-beam"></i> : '+input_value);
        class_status = 'bg-success';
        currentArray.splice(currentKey,1)
        max = currentArray.length - 1;
        //console.log(max)

    }
    else{
        $('#message-result').html('<i class="far fa-frown"></i> : '+input_value);
        class_status = 'bg-danger';

    }

    $('#show-result').addClass(class_status);

    $('#list-char li.char-'+char_type+romanji_char).addClass('active').addClass(class_status)


    //console.log($('#list-char').find('li.katakana-'+romanji[currentKey]))

    $('#typing').val('');
    $('#typing').focus();
    if(max < 0){
        $('.group-typing').hide();
        $('#btn-reset').focus()
        showMessage('success','Báº¡n Ä‘Ă£ hoĂ n thĂ nh bĂ i táº­p ')
    }
}

var loadResult = function(class_status){
    var romanji_char = currentArray[currentKey][0]
    var jp_char = currentArray[currentKey][1];

    $('#show-result').html( jp_char+' = '+romanji_char );
    $('#show-result').removeClass('bg-success bg-danger')
    showMessage();

}

var random_char = function(){
    if(max > 0){
        currentKey = Math.floor(Math.random() * (max - min) + min);
    }
    else{
        currentKey = 0;
    }
    //alert(currentKey)

    $('#show-char').text(currentArray[currentKey][1]);
    console.log(max)
    console.log(currentKey)
}

var listChar = function(){
    var html = '';
    for(var i=0;i< currentArray.length;i++){
        html+='<li class="char-'+currentArray[i][2]+currentArray[i][0]+'">'+currentArray[i][1]+'<br/><span class="romanji">'+currentArray[i][0]+'</span>'+'</li>';
    }
    $('#list-char').html(html)
}

var prevList = function(){
    var html = '';
    for(var i=0;i< hiragana.length;i++){
        html+='<li class="active" >'+hiragana[i][1]+'<br/>'+hiragana[i][0]+'<br/><span class="number">'+(i+1)+'</span>'+'</li>';
    }
    $('#prev-hiragana').html(html)

    var html = '';
    for(var i=0 ;i< katakana.length;i++){
        html+='<li class="active" >'+katakana[i][1]+'<br/>'+katakana[i][0]+'<br/><span class="number">'+(i+1+hiragana.length)+'</span>'+'</li>';
    }
    $('#prev-katakana').html(html)
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var showMessage = function(type,message){
    if(!type){
        $('#message').text('');
        return;
    }
    $('#message').html('<div class="alert alert-'+type+'">'+message+'</div>');
}

$(function(){
    getData();

    $('#typing-form').submit(function(e){
        e.preventDefault()
        check_char(this);
        random_char();
    })

    $('#typing').keyup(function(e){
        if(e.keyCode != 13){
            $('#show-result').html(result_default);
            $('#message-result').text('');
            $('#show-result').removeClass('bg-success bg-danger')
            showMessage();
        }

    })

    $('#btn-reset').click(function(){
        resetData();
    });

    $('#start').click(function(){
        var inputFrom = parseInt($('#input-from').val());
        var inputTo = parseInt($('#input-to').val());

        if(!inputFrom || !inputTo){
            alert('Vui lĂ²ng nháº­p sá»‘ !')
            return;
        }

        if(inputTo > 142){
            inputTo =  142;
        }
        setCookie('inputFrom',inputFrom);
        setCookie('inputTo',inputTo);
        // console.log(arrConcat.length)
        currentArray = arrConcat.slice(inputFrom-1,inputTo)
        max = currentArray.length;
        // console.log(currentArray)
        startPratice();
    })

    $('#setup').click(function(){
        $('body').remove();
        window.location.reload();
    })


    $('#show-result').click(function(){
        loadResult();
    })
})