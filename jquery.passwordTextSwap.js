(function ($) {
  $.fn.extend({
    passwordTextSwap : function () {
      this.filter('input:password').each(function () {
        var pw = this,
            u, // Serves as undefined
            attributes = {
              type: 'text',
              value: '',
              id: u,        // Undefined attributes will not be added
              name: u
            },
            al = pw.attributes.length,
            i = 0,
            attr, ph;

        // Copy attributes over
        for (; i < al; i += 1) {
          attr = pw.attributes[i];
          // Copy those fields that don't already exist.
          if (!(attr.name in attributes)) {
            attributes[attr.name] = attr.value;
          }
        }

        // If the password field if left and is empty
        // restore the textfield..
        $(pw).hide().blur(function () {
          if (!this.value) {
            ph.show();
            $(this).hide()
          }
        });

        // Insert the text field just before the password.
        ph = $('<input>').attr(attributes).focus(function (event) {
                $(pw).show();
                $(this).hide()
                pw.focus();
                event.preventDefault();
              }).insertBefore(this);
      });
      return this;
    }
  });
}(jQuery));
