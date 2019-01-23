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

function submitIt() {
  $('form').on('submit', function() {
    alert("You're form is going to be submitted now.")
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
});
