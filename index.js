"use strict";

module.exports = {
    convert: function (number, from, to) {
        
        const numberMap = {
            english : "0123456789",
            gujarati: "૦૧૨૩૪૫૬૭૮૯",
            hindi : "०१२३४५६७८९",
            telugu: "౦౧౨౩౪౫౬౭౮౯"

        };
        var res = "", toLanguageString= numberMap[to];
        for(var i=0 ; i<number.length ; i++) {
            var index = numberMap[from].indexOf(number[i]);
            res = res + toLanguageString[index];
        }
        console.log(res);
    }
}