var user =new Map([["2950160434","123123..."]])

function login(){
    var UserName = document.getElementById("login-username").value;
    var PassWord = document.getElementById("login-password").value;

    if(user.get(UserName)==PassWord){
        window.location.href="first_url.html";
    }else{
        alert("用户名或密码错误");
    }
}