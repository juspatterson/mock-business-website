//main function
$(function () {
    fillOrderTable()
});

//function for filling out order table
function fillOrderTable() {
    $('#full-name').text(getUrlParameter('FullName'));
    $('#email').text(getUrlParameter('email'));
    $('#plant').text(getUrlParameter('available-plants'));
    $('#plant-stage').text(getUrlParameter('plant-stage'));
    $('#message').text(getUrlParameter('message'));
}

//function for getting information out of the url based off of chosen parameter
function getUrlParameter(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    
    return results = (results === null) ? " " : results[1].split("+").join(" ").replace('%40', '@');
}