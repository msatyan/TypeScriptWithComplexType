'use strict';

class MyES6Class
{
    constructor()
    {
    }

    DisplayJsonData(TheJsonData)
    {
        var jsonObj = undefined;
        if (typeof TheJsonData === 'string' || TheJsonData instanceof String)
        {
            jsonObj = JSON.parse(TheJsonData);
        }
        else
        {
            jsonObj = TheJsonData;
        }
        
        var jsonPretty = JSON.stringify(jsonObj, null, ' ');
        $('#MyJsonResult').empty().append(jsonPretty);
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    }

}

const ES6Obj = new MyES6Class();

//$(document).ready(  function ()
$(() => {
    // jQuery document ready

    let JsonData = TestGame.PlayGame();
    ES6Obj.DisplayJsonData(JsonData);
});

