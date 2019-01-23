function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $(document).on('keydown', function(key) {
    alrt(key.which)
    //if (key.which == 71) {
      //console.log("You have pressed the 'g' key")
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
  submitIt()
});
