$(document).ready(function(){

//eastereggs
    $('button#fun').click(partyStarter);

function partyStarter (){
    $('header').css('background-image', 'url(img/altback.jpg)');
    $('body').css('background-image', 'url(img/map.gif)');
    //$("div#table2").css("background-image", "url(img/us.jpg)");
    //$("div#table1").css("background-image", "url(img/nk.jpg)");
    $('button.topbutton').css("background-image", "url(img/usa.jpg)");
    $('div.bottomid').css("background-image", "url(img/star.png)");
    $('.h1').attr("font-size", "50px");
      player1 = 'Supreme Leader Kim Jong-Un';
      player2 = 'El Presidente Donald J Trump';
      $('h1#player1name').text(player1);
      $('h1#player2name').text(player2);
      partyMemberOnBoard();
    }
function partyMemberOnBoard (){
      //fleet 21 hitpoints, Kim Jong-Un's personal destroyer 3 hitpoints, frigate 2 hitpoints, Dennis Rodman frigate 2 hitpoints, corvette 2 hitpoints and submarine 2 hitpoints
      alert('Welcome ' + player1 + ', start building your fleet!  To start building your ships, you must select the beginning and ending coordinates for your ship.  For your personal destroyer, it must be 3 spaces long.');
        //covers player2 screen
          $('div#table2').addClass('fogofwar');
            let numship = 2;
              comradeOne();

    function comradeOne (){

      $('div#table1').one('click','td', function(){
      if($(this).attr('class')=='ship'){
        alert('please select another space');
      }else{
        $(this).addClass('ship');
        firstX = parseFloat($(this).attr('data-xAxis'));
        firstY = parseFloat($(this).attr('data-yAxis'));
          //alert('Your X: ' + firstX + ' and Y: ' + firstY);
            comradeTwo();
           }
        })
    function comradeTwo (){

        $('div#table1').one('click','td', function(){
        let secX = parseFloat($(this).attr('data-xAxis'));
        let secY = parseFloat($(this).attr('data-yAxis'));

      if((firstX==secX)&&(Math.abs(firstY-secY)===numship)&&firstY<secY){
        for(j=firstY; j <= secY; j++){
          $('div#table1').find(`[data-xaxis='${firstX}'][data-yaxis='${j}']`).addClass('ship');
            centralCommitteeCheck(); }
      }else if((firstX==secX)&&(Math.abs(firstY-secY)===numship)&&secY<firstY){
        for( j=secY; j < firstY; j++){
          $('div#table1').find(`[data-xaxis='${firstX}'][data-yaxis='${j}']`).addClass('ship');
            centralCommitteeCheck(); }
      }else if((firstY==secY)&&(Math.abs(firstX-secX)===numship)&&firstX<secX){
        for(j=firstX; j <= secX; j++){
          $('div#table1').find(`[data-yaxis='${firstY}'][data-xaxis='${j}']`).addClass('ship');
            centralCommitteeCheck(); }
      }else if((firstY==secY)&&(Math.abs(firstX-secX)===numship)&&secX<firstX){
        for(j=secX; j < firstX; j++){
          $('div#table1').find(`[data-xaxis='${j}'][data-yaxis='${firstY}']`).addClass('ship');
            centralCommitteeCheck(); }
      }else{
            comradeTwo(); alert('Please select other coordinates.');
           }
        })
    function centralCommitteeCheck () {
      // count how many ships have been placed.
      let tripNum = $('div#table1').find($('.ship')).length;
      if(tripNum === 3){ alert( player1 + ' your personal destroyer is complete. Please select the coordinates for your frigate, it must be 2 spaces long.'); numship = 1; comradeOne();
      }
      if(tripNum === 5){ alert( player1 + ' your frigate is complete. Please select the coordinates for the Dennis Rod Frigate, it must be 2 spaces long.'); numship = 1; comradeOne();
      }
      if(tripNum === 7){ alert( player1 + ' Dennis Rod Frigate is complete. Please select the coordinates for your corvette, it must be 2 spaces long.'); numship = 1; comradeOne();
      }
      if(tripNum=== 9){ alert( player1 + ' your corvette is complete. Please select the coordinates for your corvette, it must be 2 spaces long.'); numship = 1; comradeOne();
      }
      if(tripNum=== 11){ alert( player1 + ' your corvette is complete. Please select the coordinates for your corvette, it must be 2 spaces long.'); numship = 1; comradeOne();
      }
      if(tripNum=== 13){ alert( player1 + ' your corvette is complete. Please select the coordinates for your People\'s Party Corvette, it must be 2 spaces long.'); numship = 1; comradeOne();
      }
      if(tripNum=== 15){ alert( player1 + ' People\'s Party Corvette is complete. Please select the coordinates for your submarine, it must be 2 spaces long.'); numship = 1; comradeOne();
      }
      if(tripNum=== 17){ alert( player1 + ' your submarine is complete. Please select the coordinates for your submarine, it must be 2 spaces long.'); numship = 1; comradeOne();
      }
      if(tripNum=== 19){ alert( player1 + ' your submarine is complete. Please select the coordinates for your submarine, it must be 2 spaces long.'); numship = 1; comradeOne();
      }
      if(tripNum=== 21){ setTimeout(northKoreanNights, 700); alert( player1 + ' your submarine is complete. Your fleet is ready. ' + player2 + ' get ready.');
      }
     }
    }
   }
  }

  function northKoreanNights (){
    $('div#table1').addClass('fogofwar');
    $('h2#playerTurn').text(player2+'\'s TURN');
      Merica();
      //$('div#table2').addClass('fogofwar');
      //plyTime = setTimeout(ctdown,5000);
      //$('h2#playerTurn').text(plyTime);
      }

  function Merica (){
      //fleet 25 hitpoints, supercarrier 8 hitpoints, AEGIS cruiser 4 hitpoints, destroyer 3 hitpoints and ballastic submarine 3 hitpoints
      alert('Welcome ' + player2 + ', start building your fleet!  To start building your ships, you must select the beginning and ending coordinates for your ship.  For your supercarrier, it must be 8 spaces long.');

      $('div#table2').removeClass('fogofwar');
          madeInMerica(); let snum = 7;

    function madeInMerica (){

      $('div#table2').one('click','td', function(){
      if($(this).attr('class')=='ship'){
          alert('please select another space');
      }else{
        $(this).addClass('ship');
        oneX = parseFloat($(this).attr('data-xAxis'));
        oneY = parseFloat($(this).attr('data-yAxis'));
        //alert('Your X: ' + oneX + ' and Y: ' + oneY);
        builtInUsa();
       }
     })
   function builtInUsa (){

      $('div#table2').one('click','td', function(){
        let twoX = parseFloat($(this).attr('data-xAxis'));
        let twoY = parseFloat($(this).attr('data-yAxis'));

      if((oneX==twoX)&&(Math.abs(oneY-twoY)===snum)&&oneY<twoY){
        for(j=oneY; j <= twoY; j++){
          $('div#table2').find(`[data-xaxis='${oneX}'][data-yaxis='${j}']`).addClass('ship');
            ualityControl(); }
      }else if((oneX==twoX)&&(Math.abs(oneY-twoY)===snum)&&twoY<oneY){
        for( j=twoY; j < oneY; j++){
          $('div#table2').find(`[data-xaxis='${oneX}'][data-yaxis='${j}']`).addClass('ship');
            ualityControl(); }
      }else if((oneY==twoY)&&(Math.abs(oneX-twoX)===snum)&&oneX<twoX){
        for(j=oneX; j <= twoX; j++){
          $('div#table2').find(`[data-yaxis='${oneY}'][data-xaxis='${j}']`).addClass('ship');
            ualityControl(); }
      }else if((oneY==twoY)&&(Math.abs(oneX-twoX)===snum)&&twoX<oneX){
        for(j=twoX; j < oneX; j++){
          $('div#table2').find(`[data-xaxis='${j}'][data-yaxis='${oneY}']`).addClass('ship');
            ualityControl(); }
      }else{
          builtInUsa(); alert('Please select other coordinates.');
         }
      })
   function ualityControl () {
      //count how many ships have been placed.
      let trNum = $('div#table2').find($('.ship')).length;
      if(trNum === 8){ alert( player2 + ' your supercarrier is complete. Please select the coordinates for your AEGIS cruiser, it must be 4 spaces long.'); snum = 3; madeInMerica();
      }
      if(trNum === 12){ alert( player2 + ' your AEGIS cruiser is complete. Please select the coordinates for your AEGIS cruiser, it must be 4 spaces long.'); snum = 3; madeInMerica();
      }
      if(trNum === 16){ alert( player2 + ' your AEGIS cruiser is complete. Please select the coordinates for your destroyer, it must be 3 spaces long.'); snum = 2; madeInMerica();
      }
      if(trNum=== 19){ alert( player2 + ' your destroyer is complete. Please select the coordinates for your ballastic submarine, it must be 3 spaces long.'); snum = 2; madeInMerica();
      }
      if(trNum=== 22){ alert( player2 + ' your ballastic submarine is complete. Please select the coordinates for your ballastic submarine, it must be 3 spaces long.'); snum = 2; madeInMerica();
      }
      if(trNum=== 25){ setTimeout(eastSeaParty, 1000); alert( player2 + ' your ballastic submarine is complete. Your fleet is ready. ' + player1 + ' get ready.');
      }
     }
    }
   }
  }
        let playerzCounter = 1;
  //start of game
  function eastSeaParty (){
    $('div#table2').addClass('fogofwar');
    setTimeout(supremeLeaderisHere, 700);
    $('h2#playerTurn').text(player1+'\'s TURN');
  }

    function supremeLeaderisHere (){
      //if playerCounter is even, player 1's turn
      playerzCounter++;
      alert(player1 + ', get ready dear leader!');
      $('div#table1').removeClass('fogofwar');
      $('div#table2').one('click','td', flipper);
  }

    function trumpIce (){
      //if playerCounter is odd, player 2's turn
      playerzCounter++;
      alert(player2 +', Get \'er Done!');
      $('div#table2').removeClass('fogofwar');
      $('div#table1').one('click','td', flipper);
  }

    function flipper(){

      if(($(this).attr('class')=='miss')||($(this).attr('class')=='hit')){
          alert('Select another space.'); flipper();
      }else{

      if(($(this).attr('class')=='ship')){
         $(this).removeClass('ship');
         $(this).addClass('hit');
          alert('Hit! Player Get Ready!');
            setTimeout(flipFlopper, 700);
            winning(); commandnConquer(); boom();
      }else{
         $(this).addClass('miss');
          alert('Miss! Player Get Ready!');
            setTimeout(flipFlopper, 700);
            winning(); commandnConquer();
          }
        }
      }

    function flipFlopper (){
      //even number switch to player 1
      //$('h2#playerTurn').text(`${player1}`)===true;
          backPic();
      if(playerzCounter%2===0){
         $('div#table1').addClass('fogofwar');
         $('h2#playerTurn').text(player2+'\'s TURN');
           setTimeout(trumpIce, 700);
      }else{//odd number switch to player 2
         $('div#table2').addClass('fogofwar');
         $('h2#playerTurn').text(player1+'\'s TURN');
           setTimeout(supremeLeaderisHere, 700);
        }
      }

  function winning(){

    let kimsGreatestHits = $('div#table1').find($('.hit')).length;
    let fakeNewsHits = $('div#table2').find($('.hit')).length;
      $('div#onehits').text('HIT ' + kimsGreatestHits);
      $('div#twohits').text('HIT ' + fakeNewsHits);
      if( kimGreatestHits === 21 ){ foggy(); nukeSite(); alert( player2 + ' You Won! ' + player1 + ' has been sunk!');
         }
      if( fakeNewsHits === 25 ){ foggy(); nukeSite(); alert( player1 + ' You Won! ' + player2 + ' has been sunk!');
         }
        }

  function commandnConquer (){

    let missKim = $('div#table1').find($('.miss')).length;
    let missTrump = $('div#table2').find($('.miss')).length;
      $('div#onemiss').text('MISS ' + missKim);
      $('div#twomiss').text('MISS ' + missTrump);
  }

  function foggy (){
    $('div#table1').removeClass('fogofwar');
    $('div#table2').removeClass('fogofwar');
  }

  function boom (){
    $('header').css('background-image', 'url(img/altfire.jpg)');
  }
  function backPic (){
    $('header').css('background-image', 'url(img/altback.jpg)');
  }


  });
