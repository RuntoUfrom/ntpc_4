import React from "react";
import{
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
import styled from "styled-components";

import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from "./component/page/PostViewPage";
import LoginPage from "./component/page/LoginPage";

const MainTitleText = styled.p`
  font-size: 80px;
  fond-weight: bold;
  text-align:center;
`;

function App(props){
  return(
    <BrowserRouter>
      <MainTitleText>PLANME</MainTitleText>
      <Routes>
        <Route index element = {<MainPage/>}/>
        <Route path = "post-write" element = {<PostWritePage/>}/>
        <Route path = "post/:postId" element = {<PostViewPage/>}/>
        <Route path = "post-login" element = {<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
