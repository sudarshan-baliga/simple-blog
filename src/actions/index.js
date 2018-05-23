import axios from "../../node_modules/axios"
const url = 'http://localhost:4000/api/signin'

export default function Login(data) {   
  var loginData = {'name':data.name,'password':data.password};
  return (dispatch,getState) =>{
      axios({
        method: 'post',
        url: url,
        data:loginData,
        config: { headers: {'Content-Type': 'application/json' }}
      }).then(function (response) {
          dispatch(success(response));
        })
      .catch(function (response) {
          dispatch(error(response));
        });
    }
  
    function success(data){
      return{
        type: 'LOGIN_SUCCESS',
        payload: data
      }
    }
    function error(data){
      return{
        type: 'LOGIN_FAILURE',
        payload:data
      }
    }
  }