import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const postCred = async ({ username, password }) => {
  try {
    const data = {username, password}
    axios.post('http://localhost/tourist-php/user/save', data).then(function(response){
      console.log(response.data);
     // navigate('/login');
  });

    //alert(response.data);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};


