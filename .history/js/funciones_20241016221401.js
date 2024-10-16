$(document).ready(function() {
  console.log("Document ready");
  var hotel = document.querySelector('.hotel');
  var coche = document.querySelector('.auto');
  $("#checkboxinp").change(function() {
      if ($(this).is(":checked")) {
          $("#domicilio").hide(); 
          $("#recogida").show();  
          $("#domicilioMostrado").hide();
          coche.style.display = "block";
          hotel.style.display = "none";
      } else {
          $("#domicilio").show(); 
          $("#recogida").hide();  
          $("#domicilioMostrado").show();
          hotel.style.display = "block";
          coche.style.display = "none";
      }
  });
});