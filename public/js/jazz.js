var now = {};

var isConnected = false;

var keymap = {
  a: 'c',
  w: 'cs',
  s: 'd',
  e: 'ds',
  d: 'e',
  f: 'f',
  t: 'fs',
  g: 'g',
  y: 'gs',
  h: 'a',
  u: 'as',
  j: 'b'
}

var id;


function connected() {
  $(document).keyup(function(e){
    var note = keymap[String.fromCharCode(e.keyCode).toLowerCase()];
    if(note){
     
      now.sendNote(instrument, note);
      
      now.receiveNote(instrument, note);
    }
  });
  
  $("#vailmsg").fadeOut(200, function(){
    $(this).text("You're playing the " + instrument);
    $(this).fadeIn(300, function(){
      $("#vail").delay(1000).fadeOut(300).remove();
    });
  });
  
}

$(document).ready(function() {

  id = (new Date()).getTime();
  now.id = id;
  now.room = room;
  
  $('#players > div').each(function(index, el){
    var id = $(el).attr('id');
    var instrument = id.split('-')[0];
    var note = id.split('-')[1];
    $(el).jPlayer( {
      ready: function () {
        $(this).jPlayer("setMedia", { mp3: "http://ericzhang.com/sounds/"+instrument+"/"+note+".mp3"});
      },
      preload: 'auto'
    });
  });
  
  
  
});

now.receiveNote = function (type, note) {
  $("#"+type+"-"+note).jPlayer("play", 0);
  
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

now.receiveTick = function() {
  
  if(!isConnected) {
    connected();
    isConnected = true;
  }
  
  var mark = $("<div></div>").addClass("mark");

  $("#disp").append(mark);
    
  mark.animate({left: "696px"}, 3000, 'linear', function(){
    $(this).fadeOut(200);
  });
  
}