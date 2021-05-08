 /*all*/
 $(document).ready(function(){
    $("#all").click(function(){
      $("#web1").show(1000);
      
        $("#web2").show(1000);
        $("#web3").show(1000);

        $("#app1").show(1000);
        $("#app2").show(1000);
        $("#app3").show(1000);

        $("#games1").show(1000);
        $("#games2").show(1000);
        $("#games3").show(1000);
        
    })
})
  /*website*/
$(document).ready(function(){
    $("#website").click(function(){
        $("#web1").show(1000)
        $("#web2").show(1000);
        $("#web3").show(1000);

        $("#app1").hide(1000)
        $("#app2").hide(1000)
        $("#app3").hide(1000)

        $("#games1").hide(1000)
        $("#games2").hide(1000)
        $("#games3").hide(1000)

    })
})
  /*app*/
$(document).ready(function(){
    $("#aapp").click(function(){
        $("#app1").show(1000)
        $("#app2").show(1000)
        $("#app3").show(1000)

        $("#web1").hide(1000)
        $("#web2").hide(1000);
        $("#web3").hide(1000);

        $("#games1").hide(1000)
        $("#games2").hide(1000)
        $("#games3").hide(1000)   
    })
})
  /*games*/
$(document).ready(function(){
    $("#gamess").click(function(){
        $("#games1").show(1000)
        $("#games2").show(1000)
        $("#games3").show(1000)

        $("#web1").hide(1000)
        $("#web2").hide(1000);
        $("#web3").hide(1000);

        $("#app1").hide(1000)
        $("#app2").hide(1000)
        $("#app3").hide(1000)
        
    })
})