var apiKey = require('./../.env').apiKey;


export class Doctor {
  constructor() {
    this.doc;
  }
  getName(name, showData, error) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?limit=10&user_key=92eabac06f3099882483789a6b1b7ad9&name=${name}&query=&location=45.5231, -122.6765, 200`).then(function(response) {
      showData(response)
    }).fail(function(error) {
      error(error)
    });
  }

  getSymptom(symptom, showDataSymptom, error) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?limit=20&user_key=92eabac06f3099882483789a6b1b7ad9&query=${symptom}&location=45.5231, -122.6765, 200`).then(function(response) {
      showDataSymptom(response)
    }).fail(function(error) {
      alert('There was an error on our part try again');
    });
  }
}
