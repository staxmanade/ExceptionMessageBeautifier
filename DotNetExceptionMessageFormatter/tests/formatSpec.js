require('approvals').configure({
        reporters:  ["visualstudio"]
    }).mocha(__dirname);


var formatException = function(exceptionMessage){
    exceptionMessage = exceptionMessage || '';
    return exceptionMessage.replace(/   at/g, '\r\n   at');
};

describe('When prettyifying DotNet Exception Messages', function () {

    it('should handle a basic exception', function () {
        var data = "System.Exception: Hello Exception!   at TestExceptionGenerator.Spike.GetException() in c:\Code\personal\DotNetExceptionMessageFormatter\TestExceptionGenerator\Spike.cs:line 22   at TestExceptionGenerator.Spike.<GenericException>b__0() in c:\Code\personal\DotNetExceptionMessageFormatter\TestExceptionGenerator\Spike.cs:line 13   at TestExceptionGenerator.Extensions.GetExceptionString(Action action) in c:\Code\personal\DotNetExceptionMessageFormatter\TestExceptionGenerator\Spike.cs:line 34";

        var result = formatException(data);

        this.verify(result);
    });

});
