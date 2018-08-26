"use strict";

module.exports = {
    convert: function (number, from, to, callback) {
        return new Promise((resolve, reject) => {
            const numberMap = {
                bengali: "০১২৩৪৫৬৭৮৯",
                english: "0123456789",
                gujarati: "૦૧૨૩૪૫૬૭૮૯",
                hindi: "०१२३४५६७८९",
                kannada: "೦೧೨೩೪೫೬೭೮೯",
                konkani: "०१२३४५६७८९",
                malayalam: "൦൧൨൩൪൫൬൭൮൯",
                punjabi: "੦੧੨੩੪੫੬੭੮੯",
                tamil: "௰௧௨௩௪௫௬௭௮௯",
                telugu: "౦౧౨౩౪౫౬౭౮౯"

            };
            var res = "", toLanguageString = numberMap[to];
            if (toLanguageString === undefined) {
                reject('To language invalid');
                return callback('To language invalid');
            }

            for (var i = 0; i < number.length; i++) {
                var index = numberMap[from].indexOf(number[i]);
                if (index == -1) {
                    reject('Invalid input');
                    return callback('Invalid input');
                }
                res = res + toLanguageString[index];
            }
            resolve(res);
            return callback(null, res);
        }).catch(() => { });
    }
}