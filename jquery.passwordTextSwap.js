/*!
 * jQuery Password - Text Swap Plugin
 *
 * Copyright 2010, Peter Galiba
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function ($) {

  /**
   * "Swap" a `password` field with a `text` field, so one can insert
   * placeholder text for the field.
   *
   * The `text` field is going to be hidden on focus, and setting the focus
   * to the now visible `password` field.
   *
   * @returns {Object}
   *   The original jQuery object for chaining.
   */
  $.fn.passwordTextSwap = function () {
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

      // Need to clean up `undefined` attributes to keep IE6 happy.
      attributes = $.grep(attributes, function () {
        return this !== u;
      })

      // If the password field if left and is empty
      // restore the textfield.
      $(pw).hide().bind('blur', function () {
        if (!this.value) {
          ph.show();
          $(this).hide()
        }
      });

      // Insert the text field just before the password.
      ph = $('<input>').attr(attributes).bind('focus', function (event) {
        $(pw).show();
        $(this).hide()
        pw.focus();
        event.preventDefault();
      }).insertBefore(this);
    });
    return this;
  };
}(jQuery));
