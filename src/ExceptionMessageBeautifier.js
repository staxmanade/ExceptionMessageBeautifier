

var formatException = function(exceptionMessage){
    result = exceptionMessage || '';

    var searchReplaces = [
        {
            find:/   at/g,
            repl: '\r\n   at'},
        {
            find:/ ---> /g,
            repl: '\r\n ---> '},
        {
            find:/\) at /g,
            repl: ')\r\n at '},
        {
            find:/ --- End of inner exception stack trace ---/g, 
            repl: '\r\n   --- End of inner exception stack trace ---'}            
    ]

    searchReplaces.forEach(function(item){
        result = result.replace(item.find, item.repl);
    });

    return result;
};


exports.format = formatException;
