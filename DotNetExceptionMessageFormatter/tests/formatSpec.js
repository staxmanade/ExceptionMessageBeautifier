require('approvals').configure({
        reporters:  ["visualstudio"]
    }).mocha(__dirname);

var formatException = require("../src/DotNetExceptionMessageFormatter.js").format;

describe('When prettyifying DotNet Exception Messages', function () {

    it('formats a basic exception', function () {
        var data = "System.Exception: Hello Exception!   at TestExceptionGenerator.Spike.GetException() in c:\\Code\\personal\\DotNetExceptionMessageFormatter\\TestExceptionGenerator\\Spike.cs:line 22   at TestExceptionGenerator.Spike.<GenericException>b__0() in c:\\Code\\personal\\DotNetExceptionMessageFormatter\\TestExceptionGenerator\\Spike.cs:line 13   at TestExceptionGenerator.Extensions.GetExceptionString(Action action) in c:\\Code\\personal\\DotNetExceptionMessageFormatter\\TestExceptionGenerator\\Spike.cs:line 34";

        var result = formatException(data);

        this.verify(result);
    });


    it('formats an exception with an inner exception', function(){
        var data = 'System.Exception: Test outer exception ---> System.Exception: Hello Exception!   at TestExceptionGenerator.Spike.GetException() in c:\\Code\\personal\\DotNetExceptionMessageFormatter\\TestExceptionGenerator\\Spike.cs:line 29   at TestExceptionGenerator.Spike.GetInnerException() in c:\\Code\\personal\\DotNetExceptionMessageFormatter\\TestExceptionGenerator\\Spike.cs:line 36   --- End of inner exception stack trace ---   at TestExceptionGenerator.Spike.GetInnerException() in c:\\Code\\personal\\DotNetExceptionMessageFormatter\\TestExceptionGenerator\\Spike.cs:line 41   at TestExceptionGenerator.Spike.<GenericExceptionWithInnerException>b__1() in c:\\Code\\personal\\DotNetExceptionMessageFormatter\\TestExceptionGenerator\\Spike.cs:line 21   at TestExceptionGenerator.Extensions.GetExceptionString(Action action) in c:\\Code\\personal\\DotNetExceptionMessageFormatter\\TestExceptionGenerator\\Spike.cs:line 56'

        var result = formatException(data);

        this.verify(result);
    });

});
