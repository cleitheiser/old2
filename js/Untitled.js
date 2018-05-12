$('path').hover(function() {
    var currState = $(this).attr('id');
  var currStateInfo = info.filter(function(x) {return x.id == currState});
    if (currStateInfo[0])
    console.log(currStateInfo[0].population);
});