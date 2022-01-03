import styled from "styled-components";

export const Button = styled.button`
// css syntax
color:${(props)=>(props.theme=="white"? "black":"white")};
padding: 20px;
background-color:${(props)=>(props.theme=="white"? "white":"black")};
`;
export const Theme = styled.button`
// css syntax
color:black;
padding: 20px;
background-color:White;
`;


export const Div = styled.div`
// css syntax
display:flex;
justify-content:centre;
color:coral;
width:200px;
height:400px;
background-color:#FEECE9;
padding: 20px;
& > p{
    color:red
}
& >  p:hover{
    color:#2F3A8F;
}
`;

