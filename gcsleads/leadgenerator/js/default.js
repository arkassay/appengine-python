cloudObj = {};

cloudObj.processForm = function () {
    console.log('Processing Form');
};


cloudObj.initialize = function () {
    console.log('Initialized');
    $('#processForm').click(function(){
      console.log('Form Button Clicked');
      $('#formResultsSelect').html("")
      $('#formResultsCopy').html("")

      $('#formResultsSelect').append('<div><h3>Selected Values</h3></div>');
      $.each($('#cloudMDform select'),function(){
        var curVal = this.options[this.selectedIndex].text;
        $('#formResultsSelect').append('<div><h4>'+this.name+':</h4>'+curVal+'</div>');
      });
      $('#formResultsSelect').append('<br><br>');

      $('#formResultsCopy').append('<div><h3>Copy & Paste Content</h3></div>');
      $.each($('#cloudMDform .freeForm'),function(){
        var curVal = this.text;
        $('#formResultsSelect').append('<div><h4>'+this.name+':</h4>'+curVal+'</div>');
      });
      $('#formResultsSelect').append('<br><br>');
    });
};

$(document).ready(function() {
  cloudObj.initialize();
});
