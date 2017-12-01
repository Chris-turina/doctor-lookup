import { Doctor } from "./../js/form-input.js";

$(document).ready(function() {
  let doctorName = new Doctor();
  $("#button").click(function(event) {
    event.preventDefault();
    let nameInput = $('#input').val();
    doctorName.getName(nameInput);
  });

  $('.title').click(function(event) {
    event.preventDefault();
    let docName = $(event.target).html();
    console.log("docName");
  })
});
