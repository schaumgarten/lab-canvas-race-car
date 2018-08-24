window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#008c0c";
    ctx.fillRect(0,0,400,600);
    ctx.fillStyle = "#7f7f7f";
    ctx.fillRect(30,0,340,600);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(50,0);
    ctx.lineTo(50,600);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(350,0);
    ctx.lineTo(350,600);
    ctx.stroke();
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.setLineDash([40,25]);
    ctx.moveTo(200,0);
    ctx.lineTo(200,600);
    ctx.stroke();
  }

};
