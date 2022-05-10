
export const userSignUp = async(loginData) => {

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'               
         },
        body: JSON.stringify(loginData)
    };  

    await fetch(`/api/users`, requestOptions)  
            .then(response => { 
                return response.json();  
            })                                  
            .catch(_error => alert('SignUp Error please try again'));
}