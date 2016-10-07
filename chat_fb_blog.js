jQuery(document).ready(function(){
  jQuery('.online-support').hide();
  jQuery('.support-icon-right h3').click(function(e){
    e.stopPropagation();
    jQuery('.online-support').slideToggle();
  });
  jQuery('.online-support').click(function(e){
    e.stopPropagation();
  });
  jQuery(document).click(function(){
    jQuery('.online-support').slideUp();
  });
});
