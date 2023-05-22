function signIn(){
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    let form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', oauth2Endpoint);

    let params = {
        "client_id":"910075582560-bnqcom7c276kc5iliev9b2o6a0uo6b3a.apps.googleusercontent.com",
        "redirect_uri":"http://127.0.0.1:5500/site/index.html",
        "response_type":"token",
        "scope": "https://www.googleapis.com/auth/userinfo.profile",
        "include_granted_scopes":'true',
        'state':'LoggedIn'
    }

    for(var p in params){
        let input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
}