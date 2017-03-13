
var novruzDate = new Date("March 20, 2017").getTime();


var x = setInterval(function() {

   
    var indi = new Date().getTime();
    
    var qalib = novruzDate - indi;
    
    var gun = Math.floor(qalib / (1000 * 60 * 60 * 24));
    var saat = Math.floor((qalib % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var deqiqe = Math.floor((qalib % (1000 * 60 * 60)) / (1000 * 60));
    var saniye = Math.floor((qalib % (1000 * 60)) / 1000);
    
     document.getElementById("demo").innerHTML ="Novruza Qalan ZAMAN:" + gun + "d " + saat + "h "
    + deqiqe + "m " + saniye + "s ";

    

});