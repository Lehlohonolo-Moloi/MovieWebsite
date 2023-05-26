let params = {};

    let regex = /([^&=]+)=([^&]*)/g, m;

    //get url info 
    while(m = regex.exec(location.href)){
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    //check if user is logged in
    if(Object.keys(params).length > 0){
      localStorage.setItem('authInfo',JSON.stringify(params));
      let info = JSON.parse(localStorage.getItem('authInfo'));
      localStorage.setItem('state', info['http://127.0.0.1:5500/site/index.html#state']);
      
      fetch("https://www.googleapis.com/oauth2/v3/userinfo",{ 
        headers:{ "Authorization":`Bearer ${info['access_token']}` 
      } }) 
      .then((data) => data.json()) 
      .then((userInfo) => { 
        localStorage.setItem('username',userInfo['name']);
      });

    }
    if (localStorage.getItem('state') !== 'LoggedIn'){
        location.href = "http://127.0.0.1:5500/site/login.html";
    }

    document.getElementById("userInfoHome").innerText = localStorage.getItem('username');

    //hide access token (mask url)
    window.history.pushState({}, document.title, "/site/index.html");
 
    function logout(){
      let info = JSON.parse(localStorage.getItem('authInfo'));
      fetch("https://oauth2.googleapis.com/revoke?token=" + info['access_token'], {
        method:'POST',
        headers:{
          'Content-type':'application/x-www-form-urlencoded'
        }
      })
      .then((data) => {
        location.href = "http://127.0.0.1:5500/site/login.html";
      })

      localStorage.setItem('state', "LoggedOut");
    }
