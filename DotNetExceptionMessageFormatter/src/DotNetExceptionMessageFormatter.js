

var formatException = function(exceptionMessage){
    exceptionMessage = exceptionMessage || '';
    return exceptionMessage.replace(/   at/g, '\r\n   at');
};


exports.format = formatException;
