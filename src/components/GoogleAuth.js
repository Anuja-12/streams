import React from 'react';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:
                '722436120742-kv4894r4jqk05uq2hjlt5vk1hoqmpf90.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render(){
        return <div>Google Auth</div>
    }
}
export default GoogleAuth;