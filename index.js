var instilled=0;
var rabbit=1;
var n,cot,tor,img,drug,rdm=0;
var ipad=0;

if($(window).width()<=1180){
    ipad=1;
}


$(".r0").draggable({containment:".restrict",stop:function(){
    $(".r0").css({"top":"24.9%","left":"18.6%"});
}});

$(".r1").draggable({containment:".restrict1",stop:function(){
    $(".r1").css({"top":"24.9%","left":"78%"});
}});

$(".instill").on("click",function(){
    instilled=1;
    if(rdm){
        n=Math.ceil(5*Math.random());
        $(".new").removeAttr('disabled');
    }
    else{
        n=parseInt($("#ddmenu").val());
    }
    instill();
    $(".instill").attr('disabled','disabled');
})

function instill(){
    if(n==1){
        $(".txt").html("Low");
        drug="epinephrine";
        img="image/Drug1-instill-change (1).jpeg";
        $(".green1").html("Epinephrine");
       
    }
    else if(n==2){
        $(".txt").html("Normal");
        drug="atropine";
        img="image/Drug2-instill-change.png";
        $(".green1").html("Atropine");
    }
    else if(n==3){
        $(".txt").html("Normal");
        drug="ephidrine";
        img="image/Drug3-instill-change.png";
        $(".green1").html("Ephidrine");
    }
    else if(n==4){
        $(".txt").html("Low");
        drug="physostigmine";
        img="image/Drug4-instill-change.png";
        $(".green1").html("Physostigmine");
        //Done
    }
    else if(n==5){
        $(".txt").html("Normal");
        drug="lignocaine";
        img="image/Drug5-instill-change.png";
        $(".green1").html("Lignocaine");
    }
    else if(n==6){
        drug="saline";
        // img="Images/eyes-before1.png";
        $(".green1").html("Saline");
    }
    if(rdm){
        $(".green1").html("Unkown");
    }
    $("#right-eye").attr("src",img);
    $(".saline").html("Saline");
}

$("#inv1").mouseover(function(){
    if((tor||cot)&&instilled){
        switch (n){
            case 1:
                if(tor){
                    $("#right-eye").attr("src","image/Drug1-torch.png");
                    //alert(n+" torch");
                }
                else{
                    $("#right-eye").attr("src","Images/closed-eye.jpg");
                }
                
                break;
            case 2:
                if(tor){
                    // alert(n+" torch");
                   
                }
                else{
                    $("#right-eye").attr("src","Images/closed-eye.jpg");
                }
                break;
            case 3:
                if(tor){
                    $("#right-eye").attr("src","image/Drug3-torch.png");
                }
                else{
                    $("#right-eye").attr("src","Images/closed-eye.jpg");
                }
                break;
            case 4:
                if(tor){
                    $("#right-eye").attr("src","image/Drug4-torch.png");
                }
                else{
                    $("#right-eye").attr("src","Images/closed-eye.jpg");
                }
                
                break;
            case 5:
                if(tor){
                    $("#right-eye").attr("src","image/Drug5-torch.png");
                }
                else{
                    
                }
                
                break;
            case 6:
                if(tor){
                    $("#right-eye").attr("src","image/Drug6-torch.png");
                }
                else{
                    $("#right-eye").attr("src","Images/closed-eye.jpg");
                }
                
                break;
        }
    }
    else if(!instilled){
        img="Images/eyes-before1.png";
        if(tor){
            $("#right-eye").attr("src","image/Drug6-torch.png");
        }
        else if(cot){
            $("#right-eye").attr("src","Images/closed-eye.jpg");
        }
    } 
    //tor=0;cot=0;
});

$(".next").on("click",function(){
    rdm=1;
    if(instilled){
        rabbit++;
        $(".rab").html("Rabbit "+rabbit);
    }
    $(".instill").removeAttr('disabled');
    $("#ddmenu").attr('disabled','disabled');
    $(".new").html("Answer");
    $(".new").attr('disabled','disabled');
})

$(".new").click(function(){
    event.stopPropagation();
    if(rdm){
        $("#box").css({"display":"block"});
        // $("body > *:not(#box)").css("filter","blur(3px)");  
    }
    else{
        instilled=0;rabbit++;tor=0;cot=0;
        $(".rab").html("Rabbit "+rabbit);
        $(".green1").html("None");
        $(".txt").html("Normal");
        $(".saline").html("None");
        $(".instill").removeAttr('disabled');
        img="Images/eyes-before1.png";
        $("#right-eye").attr("src",img);    
    }      
})

// $("#box").focus();
var m;

$(".check").on("click",function(){
    event.stopPropagation();
    m=parseInt($(".custom-select").val());
    if(m==n){
        alert("Hurray...  right answer");
    }
    else{
        alert("The right answer is: "+drug);
    }
    rabbit++;
    $(".rab").html("Rabbit "+rabbit);
    $(".instill").removeAttr('disabled');
    img="Images/eyes-before1.png";
    $("#right-eye").attr("src",img);
    $(".green1").html("None");
    rdm=0;
    $(".txt").html("Normal");
    $(".saline").html("None");
    $("#ddmenu").removeAttr('disabled');
    $(".new").html("New");
    $("#box").css({"display":"none"});
    // $("body > *:not(#box)").css("filter","blur(0px)");
    // $(".r0").css({"top":"16.2%"});
    // $(".r1").css({"top":"16.2%"});
})

$("#inv1").mouseout(function(){
    $("#right-eye").attr("src",img);
})

$("#inv2").mouseover(function(){
    if(tor){
        $("#left-eye").attr("src","image/left-eye-torch.png");
    }
    if(cot){
        $("#left-eye").attr("src","image/left-eye-cotton.png");
    }
})

$("#inv2").mouseout(function(){
    $("#left-eye").attr("src","Images/eyes-before.png");
})

$("#box").on("click",function(){
    event.stopPropagation();
})