const indian = require('./index.js');
indian.convert('౭౩౧౫', 'telugu', 'english', function(err, res) {
    if(err)
        console.log(err);
    else
        console.log(res);
});
