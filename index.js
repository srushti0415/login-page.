function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

        if(username=="srushti" && password=="12345")
        {
location.assign("file:///media/fuse/crostini_716aae3388346a01837d507a6fea63559e050640_termina_penguin/login%20page/index1.html")
        }
        else{
            window.alert("Login Failed")
        }
}