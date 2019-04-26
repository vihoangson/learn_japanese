/*
### How to use

Include file
```html
    <script src="coloring_element.js"></script>
```

Add class css
```css
    <style>
        li.active{
            cursor: pointer;
        }
        .coloring{
            background: #effdff;
        }
    </style>
```

```js
    //Put in the end of function init();
    coloring_element.setValue({
        selectorElement:'li.active',
        selectorInputFrom:'#input-from',
        selectorInputTo:'#input-to',
    });
    coloring_element.init();
```
*/

var coloring_element = {
    num1: -1,
    num2: -1,
    selectorElement: "li.active",
    selectorInputFrom: "#input-from",
    selectorInputTo: "#input-to",
    init: function () {
        $(this.selectorElement).click(function () {
            e = $(this);
            var varObj = coloring_element;
            if (varObj.num2 != 0) {
                varObj.reset_coloring();
                varObj.num1 = parseInt(e.find(".number").first().html());
                varObj.num2 = 0;
            } else {
                varObj.num2 = parseInt(e.find(".number").first().html());
                if (varObj.num2 < varObj.num1) {
                    t = varObj.num2;
                    varObj.num2 = varObj.num1;
                    varObj.num1 = t;
                }
                varObj.set_value_for_input();
            }
            varObj.draw_coloring();
        })

    },
    setValue: function (value) {
        if (value.selectorElement) {
            this.selectorElement = value.selectorElement
        }

        if (value.selectorInputFrom) {
            this.selectorInputFrom = value.selectorInputFrom
        }

        if (value.selectorInputTo) {
            this.selectorInputTo = value.selectorInputTo
        }

    },
    reset_coloring: function () {
        $(this.selectorElement).removeClass('coloring');
    },
    draw_coloring: function () {
        $(this.selectorElement).each(function () {
            cur = parseInt($(this).find(".number").first().html());

            if (coloring_element.num2 == 0) {
                if (coloring_element.num1 <= cur && cur <= coloring_element.num1) {
                    $(this).addClass('coloring');
                }
            } else {
                if (coloring_element.num1 <= cur && cur <= coloring_element.num2) {
                    $(this).addClass('coloring');
                }
            }
        })
    },
    set_value_for_input: function () {
        $(this.selectorInputFrom).val(coloring_element.num1);
        $(this.selectorInputTo).val(coloring_element.num2);
    }
};