
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Japanese studing</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <script
            src="https://code.jquery.com/jquery-3.4.0.min.js"
            integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg="
            crossorigin="anonymous"></script>


    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">



    <!-- Latest compiled and minified JavaScript -->
    <script src="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <script src="com.js"></script>
    <link rel="stylesheet" href="http://study-japanese.vinaweber.com/style.css">
<style>
    li.active{
        cursor: pointer;
    }
    .coloring{
        background: #effdff;
    }
</style>
</head>
<body>

<div id="loading" class="margin-top-20 text text-danger">Đang tải data ...</div>

<header>

</header>
<section class="container setup-range" id="setup-range">
    <div class="row">
        <h3 class="text-center">Vui lòng chọn dãy ký tự muốn thực hành</h3>
        <div class="col-sm-12">
            <h4 class="text-center">Hiragana</h4>
            <ul class="list margin-top-20 list-char" id="prev-hiragana">

            </ul>
            <h4 class="text-center">Katakana</h4>
            <ul class="list margin-top-20 list-char" id="prev-katakana">

            </ul>
        </div>

        <div class="col-sm-12">
            <label class="col-sm-2 text-right">Chọn từ số : </label>
            <div class="col-sm-1 form-group">
                <input value="1" id="input-from" type="number" class="form-control"/>
            </div>
            <label class="col-sm-1 text-right">đến số : </label>
            <div class="col-sm-1  form-group">
                <input value="10" id="input-to" type="number" maxlength="142" class="form-control"/>
            </div>
            <div class="col-sm-2">
                <button id="start" class="btn btn-primary">Start</button>
            </div>
        </div>
    </div>
</section>


<section class="container practice" id="practice">
    <div class="row">
        <ul class="list margin-top-20 list-char" id="list-char">

        </ul>

    </div>
    <div class="row">
        <div class="col-sm-4 col-xs-6 col-sm-offset-2 result-header">
            <h3> Nhập ký tự dưới</h3>
        </div>
        <div class="col-sm-4 col-xs-6 result-header">
            <h3>Đáp án</h3>
        </div>

    </div>
    <div class="row">

        <div class="col-sm-4  col-xs-6 col-sm-offset-2 ">
            <div class="result-style " id="show-char"></div>
        </div>
        <div class="col-sm-4  col-xs-6 result-relative">
            <div class="result-style show-result" id="show-result"></div>
            <div class="result-absolute"><span id="message-result"></span>  </div>
        </div>


    </div>

    <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
            <form id="typing-form" action="" autocomplete="off">
                <div class="margin-top-20" id="message"></div>
                <div class="form-group">
                    <div class="group-typing">
                        <label class="col-sm-3 col-xs-6 text-right">Nhập ký tự romanji</label>
                        <div class="col-sm-3  col-xs-6 form-group">
                            <input id="typing" class="form-control"/>
                        </div>

                        <div class="col-sm-2 col-xs-4 text-center clear-both-xs">
                            <button class="btn btn-primary" id="check-char">Check</button>
                        </div>
                    </div>
                    <div class="col-sm-2  col-xs-4 text-center">
                        <button class="btn btn-info" id="btn-reset">Làm lại</button>
                    </div>
                    <div class="col-sm-2  col-xs-4 text-center">
                        <button class="btn btn-info" id="setup">Thiết lập</button>
                    </div>


                </div>


            </form>
        </div>
    </div>

</section>

</body>
</html>