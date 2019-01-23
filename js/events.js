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

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key === 71) {
      alert("You have pressed the 'g' key")
    }
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
});
