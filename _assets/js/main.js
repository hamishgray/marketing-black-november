// general js for the project that wouldn't be a reuseable component



/* ======================================================================
   Query string searcher
   ====================================================================== */

function queryString(sParam){
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++){
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam){
      return sParameterName[1];
    }
  }
}



/* ======================================================================
   Assign URL params to SE links, and form for tracking through affiliate
   ====================================================================== */

$(document).ready(function(){

  var urlParams = window.location.search.substring(1);

  if( queryString('affiliate') ){
    $('.js-add-affiliate').each(function(){
      var oldUrl = $(this).attr("href");
      var newUrl = oldUrl + "?" + urlParams;
      $(this).attr("href", newUrl);
    });
  }else if( urlParams ){
    $('.js-add-affiliate').each(function(){
      var oldUrl = $(this).attr("href");
      var newUrl = oldUrl + "?" + urlParams + "&affiliate=blacknov-comp-de";
      $(this).attr("href", newUrl);
    });
  }else{
    $('.js-add-affiliate').each(function(){
      var oldUrl = $(this).attr("href");
      var newUrl = oldUrl + "?affiliate=blacknov-comp-de";
      $(this).attr("href", newUrl);
    });
  }

});




///////////////////////////////////////
//   BOKEH PARALLAX EFFECT
///////////////////////////////////////

function parallax(){
	var scrolled = $(document).scrollTop();
  var windowHeight = $(window).height();
  $('.js-bokeh').each(function(){
    var speed  = $(this).data('speed');
    var offset = (scrolled/10) * speed;
    $(this).css({
      "margin-top": offset,
      "opacity": 1-(scrolled / windowHeight)
    });
  });
}

parallax();
$(document).scroll(function() {
	parallax();
});


