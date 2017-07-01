$(document).ready(function(){
    $('#altA').hide();
    
    $('#A').click(function(){
   $(this).hide(function(){
      $('#altA').show();
   });
});
   $('#altA').click(function(){
     $(this).hide(function(){
      $('#A').show();
   });
});
    
   $('#altB').hide();
    
   $('#B').click(function(){
      $(this).hide(function(){
        $('#altB').show();
      }); 
   }); 
    
   $('#altB').click(function(){
     $(this).hide(function(){
      $('#B').show();
   });
});
    
});