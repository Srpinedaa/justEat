$(document).ready(function() {
  console.log("Document ready");
  var hotel = document.querySelector('.hotel');
  var coche = document.querySelector('.auto');
  $("#checkboxinp").change(function() {
      if ($(this).is(":checked")) {
          $("#domicilio").hide(); 
          $("#recogida").show();  
          $("#domicilioMostrado").hide();
      } else {
          $("#domicilio").show(); 
          $("#recogida").hide();  
          $("#domicilioMostrado").show();
          $("#recogidaMostrada").show();
      }
  });
});