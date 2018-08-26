# indian-numbers
Quickly convert numbers between various languages including various Indian languages.

## Install
npm install indian-numbers

## Example
The following function shows how to convert a number from Telugu to Hindi.

Note: Definition of the function is ```convert(number, from, to, callback)```
Check the next section for currently supported languages.

```javascript
const indian = require('indian-numbers');


indian.convert('౭౩౧౫', 'telugu', 'hindi', function(err, res) {
    if(err)
        console.log(err);
    else
        console.log(res);
});
```

## Supported Languages
You can perform the conversion amongst any of the following languages:

- bengali
- english
- gujarati
- hindi
- kannada
- konkani
- malayalam
- punjabi
- tamil
- telugu

## How to add support for your own language

Suppose you want to add conversion for English language (already added, this is just an example!)
1. Open ```node_modules > indian-numbers > index.js```
2. Append the new language at the end in ```numberMap``` array i.e. ```english: "0123456789"```

Please note the way the new language is added, first ***name of language*** and then all the **digits in sequence starting from 0 to 9**.
