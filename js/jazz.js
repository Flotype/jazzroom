$(document).ready(function(){
  
});


now.drawMark = function(){

  var mark = $("<div></div>").addClass("mark");

  $("#disp").append(mark);
    
  mark.animate({left: "696px"}, 3000, 'linear', function(){
    $(this).fadeOut(200);
  });
  

}

now.createNote = function (type) {

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