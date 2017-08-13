$(document).ready(function(){

        //click for coordinates
        $('#subtable1').on('click','td', function () {

        console.log($(this).attr('data-xAxis'));
        console.log($(this).attr('data-yAxis'));
        })
        $('#subtable2').on('click','td', function () {
        console.log($(this).attr('data-xAxis'));
        console.log($(this).attr('data-yAxis'));
        })
        let yline = 10, xline = 10, row = $('<tr>'), unit = $('<td>');
        let table1 = $('#subtable1'), table2 = $('#subtable2');

  function tenByTen(yline, xline) {
    //defining grid for player 1
      for (let i = 0; i < xline; i++) {
        row = $('<tr>');
        table1.append(row) //10 rows make up a table
        for (let j = 0; j < yline; j++) {
            unit = $('<td>');
            unit.attr('data-xAxis', i); //unit x coordinates
            unit.attr('data-yAxis', j); //unit y coordinates
            row.append(unit); //10 unit make up a row
          }
       }//defining grid for player 2
      for (let i = 0; i < xline; i++) {
        row = $('<tr>');
        table2.append(row)
        for (let j = 0; j < yline; j++) {
            unit = $('<td>');
            unit.attr('data-xAxis', i);
            unit.attr('data-yAxis', j);
            row.append(unit);
          }
        }
      }
      tenByTen(yline, xline);

        $('button#start').click(startBuild);
        let player1 = this.player1 = prompt("Please enter names of player one.");
        let player2 = this.player2 = prompt("Please enter names of player two.");

        $('h1#player1name').text(this.player1);
        $('h1#player2name').text(this.player2);
        $('h2#playerTurn').text(player1+'\'s TURN');

  function startBuild (){
      //fleet 17 hitpoints, carrier 5 hitpoints, battleship 4 hitpoints, cruiser 3 hitpoints, destroyer 3 hitpoints and submarine 2 hipoints
      alert('Welcome ' + player1 + ', start building your fleet!  To start building your ships, you must select the beginning and ending coordinates for your ship.  For your carrier, it must be 5 spaces long.');
        //covers player2 screen
          $('div#table2').addClass('fogofwar');

      firstPart(); let numship = 4;

    function firstPart (){

      $('div#table1').one('click','td', function(){
      if($(this).attr('class')=='ship'){
        alert('please select another space');
      }else{
        $(this).addClass('ship');
        firstX = parseFloat($(this).attr('data-xAxis'));
        firstY = parseFloat($(this).attr('data-yAxis'));
          //alert('Your X: ' + firstX + ' and Y: ' + firstY);
            secPart();
           }
        })
    function secPart (){

        $('div#table1').one('click','td', function(){
        let secX = parseFloat($(this).attr('data-xAxis'));
        let secY = parseFloat($(this).attr('data-yAxis'));

      if((firstX==secX)&&(Math.abs(firstY-secY)===numship)&&firstY<secY){
        for(j=firstY; j <= secY; j++){
          $('div#table1').find(`[data-xaxis='${firstX}'][data-yaxis='${j}']`).addClass('ship');
            tripFunc(); }
      }else if((firstX==secX)&&(Math.abs(firstY-secY)===numship)&&secY<firstY){
        for( j=secY; j < firstY; j++){
          $('div#table1').find(`[data-xaxis='${firstX}'][data-yaxis='${j}']`).addClass('ship');
            tripFunc(); }
      }else if((firstY==secY)&&(Math.abs(firstX-secX)===numship)&&firstX<secX){
        for(j=firstX; j <= secX; j++){
          $('div#table1').find(`[data-yaxis='${firstY}'][data-xaxis='${j}']`).addClass('ship');
            tripFunc(); }
      }else if((firstY==secY)&&(Math.abs(firstX-secX)===numship)&&secX<firstX){
        for(j=secX; j < firstX; j++){
          $('div#table1').find(`[data-xaxis='${j}'][data-yaxis='${firstY}']`).addClass('ship');
            tripFunc(); }
      }else{
            secPart(); alert('Please select other coordinates.');
           }
        })
    function tripFunc () {
      // count how many ships have been placed.
      let tripNum = $('div#table1').find($('.ship')).length;
      if(tripNum === 5){ alert( player1 + ' your carrier is complete. Please select the coordinates for your battleship, it must be 4 spaces long.'); numship = 3; firstPart();
      }
      if(tripNum === 9){ alert( player1 + ' your battleship is complete. Please select the coordinates for your cruiser, it must be 3 spaces long.'); numship = 2; firstPart();
      }
      if(tripNum === 12){ alert( player1 + ' your cruiser is complete. Please select the coordinates for your destroyer, it must be 3 spaces long.'); numship = 2; firstPart();
      }
      if(tripNum=== 15){ alert( player1 + ' your destroyer is complete. Please select the coordinates for your submarine, it must be 2 spaces long.'); numship = 1; firstPart();
      }
      if(tripNum=== 17){ setTimeout(goodNight, 1000); alert( player1 + ' your submarine is complete. Your fleet is ready. ' + player2 + ' get ready.');
      }
     }
    }
   }
  }

  function goodNight (){
    $('div#table1').addClass('fogofwar');
    $('h2#playerTurn').text(player2+'\'s TURN');
      playerTwoBuild();
      //$('div#table2').addClass('fogofwar');
      //plyTime = setTimeout(ctdown,5000);
      //$('h2#playerTurn').text(plyTime);
      }

  function playerTwoBuild (){
      //fleet 17 hitpoints, carrier 5 hitpoints, battleship 4 hitpoints, cruiser 3 hitpoints, destroyer 3 hitpoints and submarine 2 hipoints
      alert('Welcome ' + player2 + ', start building your fleet!  To start building your ships, you must select the beginning and ending coordinates for your ship.  For your carrier, it must be 5 spaces long.');

      $('div#table2').removeClass('fogofwar');
          secFirstPart(); let snum = 4;

    function secFirstPart (){

      $('div#table2').one('click','td', function(){
      if($(this).attr('class')=='ship'){
          alert('please select another space');
      }else{
        $(this).addClass('ship');
        oneX = parseFloat($(this).attr('data-xAxis'));
        oneY = parseFloat($(this).attr('data-yAxis'));
        //alert('Your X: ' + oneX + ' and Y: ' + oneY);
        secPlayerPart();
       }
     })
   function secPlayerPart (){

      $('div#table2').one('click','td', function(){
        let twoX = parseFloat($(this).attr('data-xAxis'));
        let twoY = parseFloat($(this).attr('data-yAxis'));

      if((oneX==twoX)&&(Math.abs(oneY-twoY)===snum)&&oneY<twoY){
        for(j=oneY; j <= twoY; j++){
          $('div#table2').find(`[data-xaxis='${oneX}'][data-yaxis='${j}']`).addClass('ship');
            trFunc(); }
      }else if((oneX==twoX)&&(Math.abs(oneY-twoY)===snum)&&twoY<oneY){
        for( j=twoY; j < oneY; j++){
          $('div#table2').find(`[data-xaxis='${oneX}'][data-yaxis='${j}']`).addClass('ship');
            trFunc(); }
      }else if((oneY==twoY)&&(Math.abs(oneX-twoX)===snum)&&oneX<twoX){
        for(j=oneX; j <= twoX; j++){
          $('div#table2').find(`[data-yaxis='${oneY}'][data-xaxis='${j}']`).addClass('ship');
            trFunc(); }
      }else if((oneY==twoY)&&(Math.abs(oneX-twoX)===snum)&&twoX<oneX){
        for(j=twoX; j < oneX; j++){
          $('div#table2').find(`[data-xaxis='${j}'][data-yaxis='${oneY}']`).addClass('ship');
            trFunc(); }
      }else{
          secPlayerPart(); alert('Please select other coordinates.');
         }
      })
   function trFunc () {
      //count how many ships have been placed.
      let trNum = $('div#table2').find($('.ship')).length;
      if(trNum === 5){ alert( player2 + ' your carrier is complete. Please select the coordinates for your battleship, it must be 4 spaces long.'); snum = 3; secFirstPart();
      }
      if(trNum === 9){ alert( player2 + ' your battleship is complete. Please select the coordinates for your cruiser, it must be 3 spaces long.'); snum = 2; secFirstPart();
      }
      if(trNum === 12){ alert( player2 + ' your cruiser is complete. Please select the coordinates for your destroyer, it must be 3 spaces long.'); snum = 2; secFirstPart();
      }
      if(trNum=== 15){ alert( player2 + ' your destroyer is complete. Please select the coordinates for your submarine, it must be 2 spaces long.'); snum = 1; secFirstPart();
      }
      if(trNum=== 17){ setTimeout(startGame, 1000); alert( player2 + ' your submarine is complete. Your fleet is ready. ' + player1 + ' get ready.');
      }
     }
    }
   }
  }
        let playerCounter = 1;
  //start of game
  function startGame (){
    $('div#table2').addClass('fogofwar');
    setTimeout(PlayerOneStart, 1000);
    $('h2#playerTurn').text(player1+'\'s TURN');
  }

    function PlayerOneStart (){
      //if playerCounter is even, player 1's turn
      playerCounter++;
      alert(player1 + ' get Ready!');
      $('div#table1').removeClass('fogofwar');
      $('div#table2').one('click','td', hitorMiss);
  }

    function PlayerTwoStart (){
      //if playerCounter is odd, player 2's turn
      playerCounter++;
      alert(player2 +' get Ready!');
      $('div#table2').removeClass('fogofwar');
      $('div#table1').one('click','td', hitorMiss);
  }

    function hitorMiss(){

      if(($(this).attr('class')=='miss')||($(this).attr('class')=='hit')){
          alert('Select another space.'); hitorMiss();
      }else{

      if(($(this).attr('class')=='ship')){
         $(this).removeClass('ship');
         $(this).addClass('hit');
          alert('Hit! Player Get Ready!');
            setTimeout(switcher, 1000);
            hitFire(); winner(); commandconsole();
      }else{
         $(this).addClass('miss');
          alert('Miss! Player Get Ready!');
            setTimeout(switcher, 1000);
            winner(); commandconsole();
          }
        }
      }

    function switcher (){
      //even number switch to player 1
      //$('h2#playerTurn').text(`${player1}`)===true;
          returnPic();
      if(playerCounter%2===0){
         $('div#table1').addClass('fogofwar');
         $('h2#playerTurn').text(player2+'\'s TURN');
           setTimeout(PlayerTwoStart, 1000);
      }else{//odd number switch to player 2
         $('div#table2').addClass('fogofwar');
         $('h2#playerTurn').text(player1+'\'s TURN');
           setTimeout(PlayerOneStart, 1000);
        }
      }

  function winner(){

    let totalHitsPlayerOne = $('div#table1').find($('.hit')).length;
    let totalsHitsPlayerTwo = $('div#table2').find($('.hit')).length;
      $('div#onehits').text('HIT ' + totalHitsPlayerOne);
      $('div#twohits').text('HIT ' + totalsHitsPlayerTwo);
      if( totalHitsPlayerOne === 17 ){ fogLift(); alert( player2 + ' You Won! ' + player1 + ' has been sunk!'); location.reload();
         }
      if( totalsHitsPlayerTwo === 17 ){ fogLift(); alert( player1 + ' You Won! ' + player2 + ' has been sunk!'); location.reload();
         }
        }

  function commandconsole (){

      let missesOne = $('div#table1').find($('.miss')).length;
      let missesTwo = $('div#table2').find($('.miss')).length;
      let winOne = 0, winTne = 0;
    //$('div#onescore').text('WIN ' + winOne);
    $('div#onemiss').text('MISS ' + missesOne);
    $('div#twomiss').text('MISS ' + missesTwo);
    //$('div#twoscore').text('WIN ' + winTwo);
  }

  function fogLift (){

    $('div#table1').removeClass('fogofwar');
    $('div#table2').removeClass('fogofwar');
  }

  function hitFire (){

    $('header').css('background-image', 'url(img/fire.jpg)');
  }

  function returnPic (){

    $('header').css('background-image', 'url(img/back.jpg)');
  }
    //rules button
    $('button#rules').click(function() {
    document.location = 'rules.html', target="_blank";
  });




  //   .click(gameRules);
  // function gameRules(){

    //reloads page
    $('button#nuke').click(nukeSite);
  function nukeSite(){

    alert('Site nuked!');
      location.reload();
  }

//not working correctly in test trials
// $('button#reset').click(gameReset);
// function gameReset (){
// alert('test for reset');
// }
});
