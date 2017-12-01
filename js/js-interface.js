import { Doctor } from "./../js/form-input.js";

$(document).ready(function() {
  let doctorName = new Doctor();
  $("#button").click(function(event) {
    event.preventDefault();
    let nameInput = $('#input').val();
    doctorName.getName(nameInput);
  });

  $('.new-doc-info').click(function(event) {
    event.preventDefault();
    let docName = $(event.target).text();
    console.log("docName");
  })
});
