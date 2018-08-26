const indian = require('./index.js');
indian.convert('౭౩౧౫aaaaa', 'telugu', 'english', function(err, res) {
    if(err)
        console.log(err);
    else
        console.log(res);
});