function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').className = 'tasty'
  })
}

$(document).ready(function(){
  getIt()
  frameIt()

});
