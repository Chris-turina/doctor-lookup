import { Doctor } from "./../js/form-input.js";

$(document).ready(function() {
  $("#button").click(function(event) {
    event.preventDefault();
    let doctorName = new Doctor();
    let nameInput = $('#input').val();
    doctorName.getName(nameInput);
  });
});
