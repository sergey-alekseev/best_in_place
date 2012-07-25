/*
 Shadow animation jQuery-plugin 1.7
 http://www.bitstorm.org/jquery/shadow-animation/
 Copyright 2011 Edwin Martin <edwin@bitstorm.org>
 Contributors: Mark Carver, Xavier Lepretre
 Released under the MIT and GPL licenses.
*/
jQuery(function(e,i){function j(){var a=e("script:first"),b=a.css("color"),c=false;if(/^rgba/.test(b))c=true;else try{c=b!=a.css("color","rgba(0, 0, 0, 0.5)").css("color");a.css("color",b)}catch(d){}return c}function k(a,b,c){var d=[];a.c&&d.push("inset");typeof b.left!="undefined"&&d.push(parseInt(a.left+c*(b.left-a.left),10)+"px "+parseInt(a.top+c*(b.top-a.top),10)+"px");typeof b.blur!="undefined"&&d.push(parseInt(a.blur+c*(b.blur-a.blur),10)+"px");typeof b.a!="undefined"&&d.push(parseInt(a.a+c*
(b.a-a.a),10)+"px");if(typeof b.color!="undefined"){var g="rgb"+(e.support.rgba?"a":"")+"("+parseInt(a.color[0]+c*(b.color[0]-a.color[0]),10)+","+parseInt(a.color[1]+c*(b.color[1]-a.color[1]),10)+","+parseInt(a.color[2]+c*(b.color[2]-a.color[2]),10);if(e.support.rgba)g+=","+parseFloat(a.color[3]+c*(b.color[3]-a.color[3]));g+=")";d.push(g)}return d.join(" ")}function h(a){var b,c,d={};if(b=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(a))c=[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],
16),1];else if(b=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(a))c=[parseInt(b[1],16)*17,parseInt(b[2],16)*17,parseInt(b[3],16)*17,1];else if(b=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a))c=[parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10),1];else if(b=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(a))c=[parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10),parseFloat(b[4])];d=(b=/(-?[0-9]+)(?:px)?\s+(-?[0-9]+)(?:px)?(?:\s+(-?[0-9]+)(?:px)?)?(?:\s+(-?[0-9]+)(?:px)?)?/.exec(a))?
{left:parseInt(b[1],10),top:parseInt(b[2],10),blur:b[3]?parseInt(b[3],10):0,a:b[4]?parseInt(b[4],10):0}:{left:0,top:0,blur:0,a:0};d.c=/inset/.test(a);d.color=c;return d}e.extend(true,e,{support:{rgba:j()}});var f;e.each(["boxShadow","MozBoxShadow","WebkitBoxShadow"],function(a,b){a=e("html").css(b);if(typeof a=="string"&&a!=""){f=b;return false}});if(f)e.fx.step.boxShadow=function(a){if(!a.init){a.b=h(e(a.elem).get(0).style[f]||e(a.elem).css(f));a.end=e.extend({},a.b,h(a.end));if(a.b.color==i)a.b.color=
a.end.color||[0,0,0];a.init=true}a.elem.style[f]=k(a.b,a.end,a.pos)}});

/*
  Masked Input plugin for jQuery
  Copyright (c) 2007-2011 Josh Bush (digitalbush.com)
  Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license) 
  Version: 1.3
*/
(function(a){var b=(a.browser.msie?"paste":"input")+".mask",c=window.orientation!=undefined;a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn"},a.fn.extend({caret:function(a,b){if(this.length!=0){if(typeof a=="number"){b=typeof b=="number"?b:a;return this.each(function(){if(this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}})}if(this[0].setSelectionRange)a=this[0].selectionStart,b=this[0].selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}}},unmask:function(){return this.trigger("unmask")},mask:function(d,e){if(!d&&this.length>0){var f=a(this[0]);return f.data(a.mask.dataName)()}e=a.extend({placeholder:"_",completed:null},e);var g=a.mask.definitions,h=[],i=d.length,j=null,k=d.length;a.each(d.split(""),function(a,b){b=="?"?(k--,i=a):g[b]?(h.push(new RegExp(g[b])),j==null&&(j=h.length-1)):h.push(null)});return this.trigger("unmask").each(function(){function v(a){var b=f.val(),c=-1;for(var d=0,g=0;d<k;d++)if(h[d]){l[d]=e.placeholder;while(g++<b.length){var m=b.charAt(g-1);if(h[d].test(m)){l[d]=m,c=d;break}}if(g>b.length)break}else l[d]==b.charAt(g)&&d!=i&&(g++,c=d);if(!a&&c+1<i)f.val(""),t(0,k);else if(a||c+1>=i)u(),a||f.val(f.val().substring(0,c+1));return i?d:j}function u(){return f.val(l.join("")).val()}function t(a,b){for(var c=a;c<b&&c<k;c++)h[c]&&(l[c]=e.placeholder)}function s(a){var b=a.which,c=f.caret();if(a.ctrlKey||a.altKey||a.metaKey||b<32)return!0;if(b){c.end-c.begin!=0&&(t(c.begin,c.end),p(c.begin,c.end-1));var d=n(c.begin-1);if(d<k){var g=String.fromCharCode(b);if(h[d].test(g)){q(d),l[d]=g,u();var i=n(d);f.caret(i),e.completed&&i>=k&&e.completed.call(f)}}return!1}}function r(a){var b=a.which;if(b==8||b==46||c&&b==127){var d=f.caret(),e=d.begin,g=d.end;g-e==0&&(e=b!=46?o(e):g=n(e-1),g=b==46?n(g):g),t(e,g),p(e,g-1);return!1}if(b==27){f.val(m),f.caret(0,v());return!1}}function q(a){for(var b=a,c=e.placeholder;b<k;b++)if(h[b]){var d=n(b),f=l[b];l[b]=c;if(d<k&&h[d].test(f))c=f;else break}}function p(a,b){if(!(a<0)){for(var c=a,d=n(b);c<k;c++)if(h[c]){if(d<k&&h[c].test(l[d]))l[c]=l[d],l[d]=e.placeholder;else break;d=n(d)}u(),f.caret(Math.max(j,a))}}function o(a){while(--a>=0&&!h[a]);return a}function n(a){while(++a<=k&&!h[a]);return a}var f=a(this),l=a.map(d.split(""),function(a,b){if(a!="?")return g[a]?e.placeholder:a}),m=f.val();f.data(a.mask.dataName,function(){return a.map(l,function(a,b){return h[b]&&a!=e.placeholder?a:null}).join("")}),f.attr("readonly")||f.one("unmask",function(){f.unbind(".mask").removeData(a.mask.dataName)}).bind("focus.mask",function(){m=f.val();var b=v();u();var c=function(){b==d.length?f.caret(0,b):f.caret(b)};(a.browser.msie?c:function(){setTimeout(c,0)})()}).bind("blur.mask",function(){v(),f.val()!=m&&f.change()}).bind("keydown.mask",r).bind("keypress.mask",s).bind(b,function(){setTimeout(function(){f.caret(v(!0))},0)}),v()})}})})(jQuery)


/*
        BestInPlace (for jQuery)
        version: 0.1.0 (01/01/2011)
        @requires jQuery >= v1.4
        @requires jQuery.purr to display pop-up windows

        By Bernat Farrero based on the work of Jan Varwig.
        Examples at http://bernatfarrero.com

        Licensed under the MIT:
          http://www.opensource.org/licenses/mit-license.php

        Usage:

        Attention.
        The format of the JSON object given to the select inputs is the following:
        [["key", "value"],["key", "value"]]
        The format of the JSON object given to the checkbox inputs is the following:
        ["falseValue", "trueValue"]
*/

function BestInPlaceEditor(e) {
  this.element = e;
  this.initOptions();
  this.bindForm();
  this.initNil();
  if (this.always_display_edit == true) { return this.activate(); }
  jQuery(this.activator).bind('click', {editor: this}, this.clickHandler);
}

BestInPlaceEditor.prototype = {
  // Public Interface Functions //////////////////////////////////////////////

  activate : function() {
    var to_display = "";
    if (this.isNil) {
      to_display = "";
    }
    else if (this.original_content) {
      to_display = this.original_content;
    }
    else {
      to_display = this.element.html();
    }
    
    var elem = this.isNil ? "-" : this.element.html();
    this.oldValue = elem;
    this.display_value = to_display;
    jQuery(this.activator).unbind("click", this.clickHandler);
    this.activateForm();
    this.element.trigger(jQuery.Event("best_in_place:activate"));
  },

  abort : function() {
    if (this.always_display_edit == true) { return; }
    if (this.isNil) this.element.html(this.nil);
    else            this.element.html(this.oldValue);
    jQuery(this.activator).bind('click', {editor: this}, this.clickHandler);
    this.element.trigger(jQuery.Event("best_in_place:abort"));
    this.element.trigger(jQuery.Event("best_in_place:deactivate"));
  },

  abortIfConfirm : function () {
    if (confirm("Are you sure you want to discard your changes?")) {
      this.abort();
    }
  },

  update : function() {
    var editor = this;
    if (this.getValue() == this.oldValue)
    { // Avoid request if no change is made
      this.abort();
      return true;
    }
    if(this.formType == "select")
    {
       editor.elementId = editor.element.attr('id');

    } else {
      if(!editor.element.find('input,select,textarea').attr('id'))
      {
        editor.elementId = editor.element.find('input,select,textarea').attr('id', this.element.attr('id') + '_input').attr('id');
      } else {
        editor.elementId = editor.element.find('input,select,textarea').attr('id');
      }
    }

    var originalBoxShadow = $('#' + editor.elementId).css('box-shadow');
    if (this.always_display_edit == true) { 
      $('#' + editor.elementId).css('box-shadow', 'none');
      $('#' + editor.elementId).animate({boxShadow:'0px 0px 4px 2px rgb(255,215,0)'});
    };
    this.isNil = false;
    editor.ajax({
      "type"       : "post",
      "dataType"   : "text",
      "data"       : editor.requestData(),
      "success"    : function(data){ 
        $('#' + editor.elementId).animate(
          {boxShadow:'0px 0px 4px 2px rgb(50, 255, 85)'}, 
          1000,
          function () { 
            setTimeout("$('#" + editor.elementId + "').css('box-shadow', 'none')", 2000) 
          });
        editor.loadSuccessCallback(data); 
      },
      "error"      : function(request, error){ 
        editor.loadErrorCallback(request, error); 
        $('#' + editor.elementId).animate(
          {boxShadow:'0px 0px 4px 2px rgb(255, 50, 75)'}, 
          1000,
          function () { 
            setTimeout("$('#" + editor.elementId + "').css('box-shadow', 'none')", 2000) 
          });
      }
    });
    if (this.always_display_edit == true) { return this.oldValue = this.getValue(); }

    if (this.formType == "select") {
      var value = this.getValue();
      jQuery.each(this.values, function(i, v) {
        if (value == v[0]) {
          editor.element.html(v[1]);
        }
      }
    );
    } else if (this.formType == "checkbox") {
      editor.element.html(this.getValue() ? this.values[1] : this.values[0]);
    } else {
      editor.element.html(this.getValue() !== "" ? this.getValue() : this.nil);
    }
    editor.element.trigger(jQuery.Event("best_in_place:update"));
  },

  activateForm : function() {
    alert("The form was not properly initialized. activateForm is unbound");
  },

  // Helper Functions ////////////////////////////////////////////////////////

  initOptions : function() {
    // Try parent supplied info
    var self = this;
    self.element.parents().each(function(){
      $parent = jQuery(this);
      self.url           = self.url           || $parent.attr("data-url");
      self.collection    = self.collection    || $parent.attr("data-collection");
      self.formType      = self.formType      || $parent.attr("data-type");
      self.objectName    = self.objectName    || $parent.attr("data-object");
      self.attributeName = self.attributeName || $parent.attr("data-attribute");
      self.activator     = self.activator     || $parent.attr("data-activator");
      self.okButton      = self.okButton      || $parent.attr("data-ok-button");
      self.cancelButton  = self.cancelButton  || $parent.attr("data-cancel-button");
      self.nil           = self.nil           || $parent.attr("data-nil");
      self.mask          = self.mask          || $parent.attr("data-mask");
      self.always_display_edit = self.always_display_edit || $parent.attr("data-always-display-edit");
      self.inner_class   = self.inner_class   || $parent.attr("data-inner-class");
      self.html_attrs    = self.html_attrs    || $parent.attr("data-html-attrs");
      self.original_content    = self.original_content    || $parent.attr("data-original-content");
    });

    // Try Rails-id based if parents did not explicitly supply something
    self.element.parents().each(function(){
      var res = this.id.match(/^(\w+)_(\d+)$/i);
      if (res) {
        self.objectName = self.objectName || res[1];
      }
    });

    // Load own attributes (overrides all others)
    self.url           = self.element.attr("data-url")           || self.url      || document.location.pathname;
    self.collection    = self.element.attr("data-collection")    || self.collection;
    self.formType      = self.element.attr("data-type")          || self.formtype || "input";
    self.objectName    = self.element.attr("data-object")        || self.objectName;
    self.attributeName = self.element.attr("data-attribute")     || self.attributeName;
    self.activator     = self.element.attr("data-activator")     || self.element;
    self.okButton      = self.element.attr("data-ok-button")     || self.okButton;
    self.cancelButton  = self.element.attr("data-cancel-button") || self.cancelButton;
    self.nil           = self.element.attr("data-nil")           || self.nil      || "-";
    self.mask          = self.element.attr("data-mask")          || self.mask;
    self.always_display_edit = self.element.attr("data-always-display-edit") || self.always_display_edit || false;
    self.inner_class   = self.element.attr("data-inner-class")   || self.inner_class   || null;
    self.html_attrs    = self.element.attr("data-html-attrs")    || self.html_attrs;
    self.original_content  = self.element.attr("data-original-content") || self.original_content;

    if(self.always_display_edit == "true") { 
      self.always_display_edit = true;
    }

    if (!self.element.attr("data-sanitize")) {
      self.sanitize = true;
    }
    else {
      self.sanitize = (self.element.attr("data-sanitize") == "true");
    }

    if ((self.formType == "select" || self.formType == "checkbox") && self.collection !== null)
    {
      self.values = jQuery.parseJSON(self.collection);
    }
  },

  bindForm : function() {
    this.activateForm = BestInPlaceEditor.forms[this.formType].activateForm;
    this.getValue     = BestInPlaceEditor.forms[this.formType].getValue;
  },

  initNil: function() {
    if (this.element.html() === "")
    {
      this.isNil = true;
      this.element.html(this.nil);
    }
  },

  getValue : function() {
    alert("The form was not properly initialized. getValue is unbound");
  },

  // Trim and Strips HTML from text
  sanitizeValue : function(s) {
    if (this.sanitize)
    {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = s;
      s = jQuery.trim(tmp.textContent || tmp.innerText).replace(/"/g, '&quot;');
    }
   return jQuery.trim(s);
  },

  /* Generate the data sent in the POST request */
  requestData : function() {
    // To prevent xss attacks, a csrf token must be defined as a meta attribute
    csrf_token = jQuery('meta[name=csrf-token]').attr('content');
    csrf_param = jQuery('meta[name=csrf-param]').attr('content');

    var data = "_method=put";
    data += "&" + this.objectName + '[' + this.attributeName + ']=' + encodeURIComponent(this.getValue());

    if (csrf_param !== undefined && csrf_token !== undefined) {
      data += "&" + csrf_param + "=" + encodeURIComponent(csrf_token);
    }
    return data;
  },

  ajax : function(options) {
    options.url = this.url;
    options.beforeSend = function(xhr){ xhr.setRequestHeader("Accept", "application/json"); };
    return jQuery.ajax(options);
  },

  // Handlers ////////////////////////////////////////////////////////////////

  loadSuccessCallback : function(data) {
    var response = jQuery.parseJSON(jQuery.trim(data));
    if (this.always_display_edit != true && response !== null && response.hasOwnProperty("display_as")) {
      this.element.attr("data-original-content", this.element.html());
      this.original_content = this.element.html();
      this.element.html(response["display_as"]);
    }
    this.element.trigger(jQuery.Event("ajax:success"), data);
    if (this.always_display_edit == true) { return; }
    // Binding back after being clicked
    jQuery(this.activator).bind('click', {editor: this}, this.clickHandler);
    this.element.trigger(jQuery.Event("best_in_place:deactivate"));
  },

  loadErrorCallback : function(request, error) {
    if (this.always_display_edit == false) {
      this.element.html(this.oldValue);
    }
    // Display all error messages from server side validation
    if(request.responseText)
    {
      jQuery.each(jQuery.parseJSON(request.responseText), function(index, value) {
        if( typeof(value) == "object") {value = index + " " + value.toString(); }
        var container = jQuery("<span class='flash-error'></span>").html(value);
        container.purr();
      });
    } else {
      var container = jQuery("<span class='flash-error'></span>").html('unable to reach the server');
      container.purr();
    }
    this.element.trigger(jQuery.Event("ajax:error"));

    if (this.always_display_edit == true) { return; }
    // Binding back after being clicked
    jQuery(this.activator).bind('click', {editor: this}, this.clickHandler);
    this.element.trigger(jQuery.Event("best_in_place:deactivate"));
  },

  clickHandler : function(event) {
    event.preventDefault();
    event.data.editor.activate();
  },

  setHtmlAttributes : function() {
    var formField = this.element.find(this.formType);
    var attrs = jQuery.parseJSON(this.html_attrs);
    for(var key in attrs){
      formField.attr(key, attrs[key]);
    }
  }
};


// Button cases:
// If no buttons, then blur saves, ESC cancels
// If just Cancel button, then blur saves, ESC or clicking Cancel cancels (careful of blur event!)
// If just OK button, then clicking OK saves (careful of blur event!), ESC or blur cancels
// If both buttons, then clicking OK saves, ESC or clicking Cancel or blur cancels
BestInPlaceEditor.forms = {
  "input" : {
    activateForm : function() {
      var output = '<form class="form_in_place" action="javascript:void(0)" style="display:inline;">';
      output += '<input type="text" name="'+ this.attributeName + '" value="' + this.sanitizeValue(this.display_value) + '"';
      if (this.inner_class !== null) {
        output += ' class="' + this.inner_class + '"';
      }
      output += '>';
      if (this.okButton) {
        output += '<input type="submit" value="' + this.okButton + '" />';
      }
      if (this.cancelButton) {
        output += '<input type="button" value="' + this.cancelButton + '" />';
      }
      output += '</form>';
      this.element.html(output);
      this.setHtmlAttributes();
      this.element.find("input[type='text']")[0].select();
      if(this.mask)
      {
        this.element.find("input[type='text']").mask(this.mask);
      }

      this.element.find("form").bind('submit', {editor: this}, BestInPlaceEditor.forms.input.submitHandler);
      if (this.cancelButton) {
        this.element.find("input[type='button']").bind('click', {editor: this}, BestInPlaceEditor.forms.input.cancelButtonHandler);
      }
      this.element.find("input[type='text']").bind('blur', {editor: this}, BestInPlaceEditor.forms.input.inputBlurHandler);
      this.element.find("input[type='text']").bind('keyup', {editor: this}, BestInPlaceEditor.forms.input.keyupHandler);
      this.blurTimer = null;
      this.userClicked = false;
    },

    getValue : function() {
      return this.sanitizeValue(this.element.find("input").val());
    },

    // When buttons are present, use a timer on the blur event to give precedence to clicks
    inputBlurHandler : function(event) {
      if (event.data.editor.okButton) {
        event.data.editor.blurTimer = setTimeout(function () {
          if (!event.data.editor.userClicked) {
            event.data.editor.abort();
          }
        }, 500);
      } else {
        if (event.data.editor.cancelButton) {
          event.data.editor.blurTimer = setTimeout(function () {
            if (!event.data.editor.userClicked) {
              event.data.editor.update();
            }
          }, 500);
        } else {
          event.data.editor.update();
        }
      }
    },

    submitHandler : function(event) {
      event.data.editor.userClicked = true;
      clearTimeout(event.data.editor.blurTimer);
      event.data.editor.update();
    },

    cancelButtonHandler : function(event) {
      event.data.editor.userClicked = true;
      clearTimeout(event.data.editor.blurTimer);
      event.data.editor.abort();
      event.stopPropagation(); // Without this, click isn't handled
    },

    keyupHandler : function(event) {
      if (event.keyCode == 27) {
        event.data.editor.abort();
      }
    }
  },

  "date" : {
    activateForm : function() {
      var that = this,
        output = '<form class="form_in_place" action="javascript:void(0)" style="display:inline;">';
      output += '<input type="text" name="'+ this.attributeName + '" value="' + this.sanitizeValue(this.display_value) + '"';
      if (this.inner_class !== null) {
        output += ' class="' + this.inner_class + '"';
      }
      output += '></form>';
      this.element.html(output);
      this.setHtmlAttributes();
      this.element.find('input')[0].select();
      this.element.find("form").bind('submit', {editor: this}, BestInPlaceEditor.forms.input.submitHandler);
      this.element.find("input").bind('keyup', {editor: this}, BestInPlaceEditor.forms.input.keyupHandler);
      if (this.always_display_edit == true) {
        this.element.find('input')
          .datepicker({
              onClose: function() {
                that.update();
              }
            });
      } else {
        this.element.find('input')
          .datepicker({
              onClose: function() {
                that.update();
              }
            })
          .datepicker('show');

      }
    },

    getValue :  function() {
      return this.sanitizeValue(this.element.find("input").val());
    },

    submitHandler : function(event) {
      event.data.editor.update();
    },

    keyupHandler : function(event) {
      if (event.keyCode == 27) {
        event.data.editor.abort();
      }
    }
  },

  "select" : {
    activateForm : function() {
      var output = "<form action='javascript:void(0)' style='display:inline;'><select>";
      var selected = "";
      var oldValue = this.oldValue;
      jQuery.each(this.values, function(index, value) {
        selected = (value[1] == oldValue ? "selected='selected'" : "");
        output += "<option value='" + value[0] + "' " + selected + ">" + value[1] + "</option>";
       });
      output += "</select></form>";
      this.element.html(output);
      this.setHtmlAttributes();
      this.element.find("select").bind('change', {editor: this}, BestInPlaceEditor.forms.select.blurHandler);
      this.element.find("select").bind('blur', {editor: this}, BestInPlaceEditor.forms.select.blurHandler);
      this.element.find("select").bind('keyup', {editor: this}, BestInPlaceEditor.forms.select.keyupHandler);
      if (this.always_display_edit == true) { return; }
      this.element.find("select")[0].focus();
    },

    getValue : function() {
      return this.sanitizeValue(this.element.find("select").val());
    },

    blurHandler : function(event) {
      event.data.editor.update();
    },

    keyupHandler : function(event) {
      if (event.keyCode == 27) event.data.editor.abort();
    }
  },

  "checkbox" : {
    activateForm : function() {
      var newValue = Boolean(this.oldValue != this.values[1]);
      var output = newValue ? this.values[1] : this.values[0];
      this.element.html(output);
      this.setHtmlAttributes();
      this.update();
    },

    getValue : function() {
      return Boolean(this.element.html() == this.values[1]);
    }
  },

  "textarea" : {
    activateForm : function() {
      // grab width and height of text
      width = this.element.css('width');
      height = this.element.css('height');

      // construct the form
      var output = '<form action="javascript:void(0)" style="display:inline;"><textarea>';
      output += this.sanitizeValue(this.display_value);
      output += '</textarea>';
      if (this.okButton) {
        output += '<input type="submit" value="' + this.okButton + '" />';
      }
      if (this.cancelButton) {
        output += '<input type="button" value="' + this.cancelButton + '" />';
      }
      output += '</form>';
      this.element.html(output);
      this.setHtmlAttributes();

      // set width and height of textarea
      jQuery(this.element.find("textarea")[0]).css({ 'min-width': width, 'min-height': height });
      jQuery(this.element.find("textarea")[0]).elastic();
      if (this.always_display_edit != true) {
        this.element.find("textarea")[0].focus();
      }
      this.element.find("form").bind('submit', {editor: this}, BestInPlaceEditor.forms.textarea.submitHandler);
      if (this.cancelButton) {
        this.element.find("input[type='button']").bind('click', {editor: this}, BestInPlaceEditor.forms.textarea.cancelButtonHandler);
      }
      this.element.find("textarea").bind('blur', {editor: this}, BestInPlaceEditor.forms.textarea.blurHandler);
      this.element.find("textarea").bind('keyup', {editor: this}, BestInPlaceEditor.forms.textarea.keyupHandler);
      this.blurTimer = null;
      this.userClicked = false;
    },

    getValue :  function() {
      return this.sanitizeValue(this.element.find("textarea").val());
    },

    // When buttons are present, use a timer on the blur event to give precedence to clicks
    blurHandler : function(event) {
      if (event.data.editor.okButton) {
        event.data.editor.blurTimer = setTimeout(function () {
          if (!event.data.editor.userClicked) {
            event.data.editor.abortIfConfirm();
          }
        }, 500);
      } else {
        if (event.data.editor.cancelButton) {
          event.data.editor.blurTimer = setTimeout(function () {
            if (!event.data.editor.userClicked) {
              event.data.editor.update();
            }
          }, 500);
        } else {
          event.data.editor.update();
        }
      }
    },

    submitHandler : function(event) {
      event.data.editor.userClicked = true;
      clearTimeout(event.data.editor.blurTimer);
      event.data.editor.update();
    },

    cancelButtonHandler : function(event) {
      event.data.editor.userClicked = true;
      clearTimeout(event.data.editor.blurTimer);
      event.data.editor.abortIfConfirm();
      event.stopPropagation(); // Without this, click isn't handled
    },

    keyupHandler : function(event) {
      if (event.keyCode == 27) {
        event.data.editor.abortIfConfirm();
      }
    }
  }
};

jQuery.fn.best_in_place = function() {

  function setBestInPlace(element) {
    if (!element.data('bestInPlaceEditor')) {
      element.data('bestInPlaceEditor', new BestInPlaceEditor(element));
      return true;
    }
  }

  jQuery(this.context).delegate(this.selector, 'click', function () {
    var el = jQuery(this);
    if (setBestInPlace(el))
      el.click();
  });

  this.each(function () {
    setBestInPlace(jQuery(this));
  });

  return this;
};



/**
* @name             Elastic
* @descripton           Elastic is Jquery plugin that grow and shrink your textareas automaticliy
* @version            1.6.5
* @requires           Jquery 1.2.6+
*
* @author             Jan Jarfalk
* @author-email         jan.jarfalk@unwrongest.com
* @author-website         http://www.unwrongest.com
*
* @licens             MIT License - http://www.opensource.org/licenses/mit-license.php
*/

(function(jQuery){
  jQuery.fn.extend({
    elastic: function() {
      //  We will create a div clone of the textarea
      //  by copying these attributes from the textarea to the div.
      var mimics = [
        'paddingTop',
        'paddingRight',
        'paddingBottom',
        'paddingLeft',
        'fontSize',
        'lineHeight',
        'fontFamily',
        'width',
        'fontWeight'];

      return this.each( function() {

        // Elastic only works on textareas
        if ( this.type != 'textarea' ) {
          return false;
        }

        var $textarea = jQuery(this),
          $twin   = jQuery('<div />').css({'position': 'absolute','display':'none','word-wrap':'break-word'}),
          lineHeight  = parseInt($textarea.css('line-height'),10) || parseInt($textarea.css('font-size'),'10'),
          minheight = parseInt($textarea.css('height'),10) || lineHeight*3,
          maxheight = parseInt($textarea.css('max-height'),10) || Number.MAX_VALUE,
          goalheight  = 0,
          i       = 0;

        // Opera returns max-height of -1 if not set
        if (maxheight < 0) { maxheight = Number.MAX_VALUE; }

        // Append the twin to the DOM
        // We are going to meassure the height of this, not the textarea.
        $twin.appendTo($textarea.parent());

        // Copy the essential styles (mimics) from the textarea to the twin
        i = mimics.length;
        while(i--){
          $twin.css(mimics[i].toString(),$textarea.css(mimics[i].toString()));
        }


        // Sets a given height and overflow state on the textarea
        function setHeightAndOverflow(height, overflow){
          curratedHeight = Math.floor(parseInt(height,10));
          if($textarea.height() != curratedHeight){
            $textarea.css({'height': curratedHeight + 'px','overflow':overflow});

          }
        }


        // This function will update the height of the textarea if necessary
        function update() {

          // Get curated content from the textarea.
          var textareaContent = $textarea.val().replace(/&/g,'&amp;').replace(/  /g, '&nbsp;').replace(/<|>/g, '&gt;').replace(/\n/g, '<br />');

          // Compare curated content with curated twin.
          var twinContent = $twin.html().replace(/<br>/ig,'<br />');

          if(textareaContent+'&nbsp;' != twinContent){

            // Add an extra white space so new rows are added when you are at the end of a row.
            $twin.html(textareaContent+'&nbsp;');

            // Change textarea height if twin plus the height of one line differs more than 3 pixel from textarea height
            if(Math.abs($twin.height() + lineHeight - $textarea.height()) > 3){

              var goalheight = $twin.height()+lineHeight;
              if(goalheight >= maxheight) {
                setHeightAndOverflow(maxheight,'auto');
              } else if(goalheight <= minheight) {
                setHeightAndOverflow(minheight,'hidden');
              } else {
                setHeightAndOverflow(goalheight,'hidden');
              }

            }

          }

        }

        // Hide scrollbars
        $textarea.css({'overflow':'hidden'});

        // Update textarea size on keyup, change, cut and paste
        $textarea.bind('keyup change cut paste', function(){
          update();
        });

        // Compact textarea on blur
        // Lets animate this....
        $textarea.bind('blur',function(){
          if($twin.height() < maxheight){
            if($twin.height() > minheight) {
              $textarea.height($twin.height());
            } else {
              $textarea.height(minheight);
            }
          }
        });

        // And this line is to catch the browser paste event
        $textarea.live('input paste',function(e){ setTimeout( update, 250); });

        // Run update once when elastic is initialized
        update();

      });

        }
    });
})(jQuery);
