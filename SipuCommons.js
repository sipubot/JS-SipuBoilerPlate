var SipuCommons = (function(SipuCommons, undefined) {
  "use strict";
  SipuCommons.init = {
    VALUE : "this is basic structure"
  };

  function getEvent() {
    console.dir(window);
  }

  SipuCommons.start = function() {
    console.log(SipuCommons.init.VALUE);
    getEvent();
  };
  return SipuCommons;
})(window.SipuCommons || {});
SipuCommons.start();
