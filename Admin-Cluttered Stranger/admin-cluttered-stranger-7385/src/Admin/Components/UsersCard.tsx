import React from 'react'

import users from "../Images/user.png";
import { styled } from 'styled-components';
import { Button } from '@chakra-ui/react';

interface Users {
   el: any;
   handleDelete : (id: any)=> void
}

const UsersCard = ({el,handleDelete}:Users) => {

    
    
  return (
    <DIV>
        <div className='maindiv'>
        <img  src={users}/>
        <h1><span>Username: </span>{el.username}</h1>
        <h2><span>Password:</span> ******</h2>
        <div>
        <Button className='btn'>Edit</Button>

        <Button className='btn' onClick={()=>handleDelete(el.id)}>Delete</Button>
        </div>
        </div>
    </DIV>
  )
}

export default UsersCard


const DIV = styled.div`

.maindiv{
    // border: 1px solid;
    width: 80%;
    padding: 20px;
    margin-top:30px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin-left:20px;
    
}
span{
    font-weight: bold;
    color: #5c6bc0;
}
.maindiv div{
    display: flex;
    margin: auto;
    justify-content: space-between;
    margin-top:30px;
}

.btn:hover{
    background-color: red;
    color: white;
}

img{
    width: 100%;
}


`