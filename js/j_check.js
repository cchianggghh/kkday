//document.getElementById("j_submit1").addEventListener("click", function(){
window.onload = function(){
document.getElementById("j_submit1").onclick = function(){
    //console.log("YYYYYYYYY")
    let j_login_mail = document.getElementById("j_login_mail1").value;
    let j_result = document.getElementById("j_result");
    //console.log(score);   

    if(j_login_mail==""){
    //top.document.location.href="resource.shtml";
    //location.reload();
    j_result.textContent = "請輸入BBB您的電子信箱";
    //document.getElementById("j_result").textContent = "請輸入您的電子信箱";
    //j_result.innerText = "請輸入您的電子信箱";
    //window.histrory.go(0);
    }

    else{
    document.location.href="j_request.html";
    }
    
            
};  //大括號裡頭是要做的動作
//});
}
