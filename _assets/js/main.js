// general js for the project that wouldn't be a reuseable component



/* ======================================================================
   Assign URL params to SE links, and form for tracking through affiliate
   ====================================================================== */

$(document).ready(function(){

  var urlParams = window.location.search.substring(1);

  $('.js-add-affiliate').each(function(){
    var oldUrl = $(this).attr("href");
    var newUrl = oldUrl + "?" + urlParams;
    $(this).attr("href", newUrl);
  });

  $('.js-affiliate-field').val( queryString('affiliate') );
  $('.js-saff-field').val( queryString('saff') );
  $('.js-utm-medium-field').val( queryString('utm_medium') );
  $('.js-utm-source-field').val( queryString('utm_source') );
  $('.js-utm-content-field').val( queryString('utm_content') );
  $('.js-utm-campaign-field').val( queryString('utm_campaign') );

});
