
using System;
using Xunit;
namespace TestExceptionGenerator
{

	public class Spike
	{

		[Fact]
		public void GenericException()
		{
			Action action = () => { GetException(); };
			var x = action.GetExceptionString();
		}


		[Fact]
		public void GenericExceptionWithInnerException()
		{
			Action action = () => { GetInnerException(); };
			var x = action.GetExceptionString();
		}



		public void GetException()
		{
			throw new Exception("Hello Exception!");
		}

		public void GetInnerException()
		{
			try
			{
				GetException();
			}
			catch (Exception ex)
			{

				throw new Exception("Test outer exception", ex);
			}

			
		}

	}


	public static class Extensions
	{
		public static string GetExceptionString(this Action action)
		{
			try
			{
				action();
			}
			catch (Exception ex)
			{
				return ex.ToString();
			}

			throw new Exception("Expected an exception, but there wasn't any");
		}

	}
}
