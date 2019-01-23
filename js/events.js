function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    e.className = 'tasty'
  })
}

$(document).ready(function(){
  getIt()
  frameIt()

});
