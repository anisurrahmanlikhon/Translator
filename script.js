
$(function() {
    // Supported Languages
    var lang = [
        "en",
        "bn",
        "hi",
        "ur",
        "ar",
    ];
    
    // Main Elements
    var elm = {
        "lang": $("#lang1, #lang2"),
        "user": $("#lang1"),
        "output": $("#lang2"),
        "userInput": $("#user"),
        "langOutput": $("#output")
    }
    
    // Importing Options
    for (let i in lang) {
        elm.lang.append(
            "<option value='" +
            lang[i] +
            "'>" +
            lang[i] +
            "</option>"
        );
    }
    
    // Google Translate API
    function translate() {
    
        // Formatting Text for URL
        var format = elm
            .userInput
            .val()
            .replace(/ /g , '%20');
    
        // Calling JSON
        $.getJSON(
           "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + elm.user.val() + "&tl=" + elm.output.val() + "&dt=t&dt=t&q=" + format,
            function(JSON) {
                var convert =
                    JSON.toString();
                var temp =
                    convert.split(",");
                
                
                elm.langOutput.val(temp[0]);
            }
        );
    }
    
    // Interactive Elements
    $("#translate").on("click", function() {
        translate();
    });
    
    $("#clear").on("click", function() {
        elm.userInput.val(null);
        elm.langOutput.val(null);
    });
    
    setInterval(function() {
        $("#from").text(
            $("#lang1").val()
        );
        
        $("#to").text(
            $("#lang2").val()
        );
    }, 10);
});