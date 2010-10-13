# Introduction

jQuery plugin to swap password field with a text field. The text field on focus will hide and the focus is transfered to the now visible password field. The password field will be swapped back to the text field if left empty.

## Example:

    <!DOCTYPE HTML>
    <html lang="en-US">
    <head>
      <meta charset="UTF-8">
      <title></title>
    </head>
    <body>
      <form action=""><input type="password" id="password"><input type="submit" /></input></form>
      <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
      <script type="text/javascript" src="jquery.passwordTextSwap.js"></script>
      <script type="text/javascript">
        jQuery('#password').passwordTextSwap().prev('input:text').val('I am replaced');
      </script>
    </body>
    </html>

[see also](http://gist.github.com/623238)
