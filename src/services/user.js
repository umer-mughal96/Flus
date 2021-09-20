import axios from 'axios'




export const emailForCode = (data) => {
    return axios.post("https://yearnwalletbackend.herokuapp.com/yearn/api/v1/auth/email-verify", data);
}


export const mobileForCode = (data) => {
    return axios.post("https://yearnwalletbackend.herokuapp.com/yearn/api/v1/auth/mobile-verify", data);
}




export const signupUser = (data) => {
    return axios.post("https://yearnwalletbackend.herokuapp.com/yearn/api/v1/auth/register", data);
}