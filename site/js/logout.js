let params = {};

    let regex = /([^&=]+)=([^&]*)/g, m;

    //get url info 
    while(m = regex.exec(location.href)){
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    //check if user is logged in
    if(Object.keys(params).length > 0){
      localStorage.setItem('authInfo',JSON.stringify(params));
      let data = JSON.parse(localStorage.getItem('authInfo'));
      localStorage.setItem('state', data['https://main.d2fwt90m9t08mu.amplifyapp.com/index.html#state']);
    }
    if (localStorage.getItem('state') !== 'LoggedIn'){
        location.href = "https://main.d2fwt90m9t08mu.amplifyapp.com/login.html";
    }

    //hide access token (mask url)
    window.history.pushState({}, document.title, "/site/index.html");

    let info = JSON.parse(localStorage.getItem('authInfo'));
 
    function logout(){
      fetch("https://oauth2.googleapis.com/revoke?token=" + info['access_token'], {
        method:'POST',
        headers:{
          'Content-type':'application/x-www-form-urlencoded'
        }
      })
      .then((data) => {
        location.href = "https://main.d2fwt90m9t08mu.amplifyapp.com/login.html";
      })

      localStorage.setItem('state', "LoggedOut");
    }

