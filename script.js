function currentTime() {
    var date = new Date(); 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  currentTime(); /* calling currentTime() function to initiate the process */


  $(document).ready(function(){
    $(document).on('click','.new-to-do-button',function(){
       var vrednost = $('.new-to-do').val();
        var newValue = `<div class="add-to-do">
        <div class="select">
            <input type="checkbox" class="checkboxToDo">
        </div>
        <div class="textToDo">${vrednost}</div>
        <div class="remove"><i class="fas fa-trash-alt"></i></div>
    </div>`;
    if(vrednost){
        $('.toDoBody').append(newValue);
        $('.new-to-do').val('');
        $('.new-to-do').attr("placeholder", "Add a task...");
    }else{
        $('.new-to-do').val();
        $('.new-to-do').attr("placeholder", "Can't be blank...");
    }

//Select element
    $(document).on('click','.checkboxToDo',function(){
        $(this).closest('.add-to-do').find('.textToDo').toggleClass('textUnderline');
       });
//Remove element
    $(document).on('click','.remove',function(){
        $(this).closest('.add-to-do').remove();
      });

    });
  });
// Add element with eneter
        $(document).on('keypress', function(e) {
            var vrednost = $('.new-to-do').val();
            if (e.which == 13) {
                if (vrednost) {
                  var newValue = `<div class="add-to-do">
                  <div class="select">
                      <input type="checkbox" class="checkboxToDo">
                  </div>
                  <div class="textToDo">${vrednost}</div>
                  <div class="remove"><i class="fas fa-trash-alt"></i></div>
                   </div>`;

              $('.toDoBody').append(newValue);
              $('.new-to-do').val('');
              $('.new-to-do').attr("placeholder", "Add a task...");
                }else{
                  $('.new-to-do').val();
                  $('.new-to-do').attr("placeholder", "Can't be blank...");
                }

            }
        });

// $(document).on('click','.setings',function(){
//   $( ".small-modal" ).slideDown( "slow", function() {
//     // Animation complete.
//   });
// });


//Modal

$(".setings" ).click(function() {
  $(".small-modal" ).toggle(2000);
});

$(".fa-times-circle" ).click(function() {
  $(".small-modal" ).hide();
});

