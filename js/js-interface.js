import { Doctor } from "./../js/form-input.js";

$(document).ready(function() {
  let doctorName = new Doctor();
  $("#button").click(function(event) {
    event.preventDefault();
    let nameInput = $('#input').val();
    doctorName.getName(nameInput);
  });

  $("#symptom-button").click(function(event) {
    event.preventDefault();
    let symptomInput = $('#input-symptom').val();
    doctorName.getSymptom(symptomInput);
  });
});
