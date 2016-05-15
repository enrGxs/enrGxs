

// Get a database reference to our posts
var ref = new Firebase("https://sizzling-heat-9963.firebaseio.com/users/user1");
// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


var siteDescription = {
  maxLoadReq: 111,
  maxSimultaneousLoadReq: 17.89
};

var enrgxs = {
  formData: {},
  spreadsheetParams: {},
  spreadsheetArray: [],
  systemDesHandleSubmit: function () {
    $( "form" ).submit(function( event ){
      event.preventDefault();
      $(this).serializeArray().forEach(function(input){
        enrgxs.formData[input.name] = input.value;
      });
      enrgxs.createSpreadsheetParams();
    });
  },
  createSpreadsheetParams: function() {
    var formData = enrgxs.formData;
    var spreadsheetParams = enrgxs.spreadsheetParams;

    spreadsheetParams.panel_size_watt = parseInt(formData.panel_size);
    spreadsheetParams.number_of_panels = (parseInt(formData.num_panels) * parseInt(formData.num_strings))*(parseInt(formData.num_arrays));
    spreadsheetParams.battery_size_kwh = formData.ind_batt_size;
    spreadsheetParams.inverter_size_kwh = formData.inverter_power;
    spreadsheetParams.number_of_inverters = formData.num_inverter_chargers;


    // var numOfArrays =
    // spreadsheetParams.size_of_solar_array = spreadsheetParams.total_num_of_pannels * spreadsheetParams.panel_size / 1000;
    // spreadsheetParams.individual_battery_voltage = formData.ind_batt_voltage;

    spreadsheetParams = JSON.stringify(spreadsheetParams);


  },
  postToSpreadsheet: function(){


    $.ajax({
      url: 'https://sheetsu.com/apis/v1.0/547d2ae5/name/panel_size_watt',
      data: {'score':},
      dataType: 'json',
      type: 'PATCH',
      success: function(data) {
        console.log(data);
        console.log('success');
      },
      error: function (msg) {
        console.log(msg);
      }
    });


  }


};

$(document).ready(function () {
  // enrgxs.systemDesHandleSubmit();
});
