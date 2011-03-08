$(document).ready(function(){
  
  setInterval(function(){
    
    var mark = $("<div></div>").addClass("mark");

    $("#disp").append(mark);
    
    mark.animate({left: "696px"}, 3000, 'linear', function(){
      $(this).fadeOut(200);
    });
  
  }, 2000);
  
});

function createNote(type) {

  var note = $("<div></div>").addClass("note");

  if(type == 'piano') {
    note.css("top", "50px");
  } else if(type == 'bass') {
    note.css("top", "190px");
  } else if(type == 'drum') {
    note.css("top", "325px");
  }  
  
  note.animate({left: "696px"}, 3000, 'linear', function(){
      $(this).fadeOut(200);
  });
  
  $("#disp").append(note);
  
}