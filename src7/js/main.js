$(document).ready(function() {

  $("select").styler();

  // steps

  function showNextStep(el) {
    let curr_step = el.closest(".step").data("step"),
    next_step = curr_step+1;

    $(".step").hide();
    $(".step[data-step='" + parseInt(next_step) + "']").show();
  }

  // show first step

  $(".step-1").show();

  $(".radio").on("change", function(that) {
    that = $(this);  
    showNextStep(that);
  });

  
  $(".js-btn_next").on("click", function(that) {
    that.preventDefault();
    that = $(this);

      showNextStep(that);
  });


});