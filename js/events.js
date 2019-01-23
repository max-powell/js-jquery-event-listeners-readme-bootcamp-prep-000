function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    e.addClass('tasty')
  })
}

$(document).ready(function(){
  getIt()
  fameIt()

});
