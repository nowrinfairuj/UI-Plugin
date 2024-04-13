 $( function() {
    $( "#draggable" ).draggable();
  } );

 //dopp
  $( function() {
    $( "#dragg" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

  //resighable
  $( function() {
    $( "#resizable" ).resizable();
  } );

  //selectable
  $( function() {
    $( "#selectable" ).selectable();
  } );

  //sortable
   $( function() {
    $( "#sortable" ).sortable();
  } );

   //accordian
    $( function() {
    $( "#accordion" ).accordion();
  } );
    //auto complete
     $( function() {
    var availableTags = [
      "Paper",
      "Book",
      "Pencil",
      "Eareser",
      "Sharpner",
      "Marker",
      "Chalk",
      "Duster",
      "pin",
      "pen",
      "Colour",
      "Story",
     
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

     //checkbox
      $( function() {
    $( "input" ).checkboxradio();
  } );

 $( function() {
    $( "#menu" ).menu();
  } );