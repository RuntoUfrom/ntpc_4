import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostList from '../list/PostList';
import Button from '../ui/Button';
import data from '../../data.json';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 800px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const Footer = styled.div`
    width : 100%
    margin : 80px;
    height : 40px;
`;

function MainPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <img src="/title_image.png" alt="타이틀이미지" width="100%" height="50%" />
                    <Button
                        title="목표 추가"
                        onClick={() => {
                            navigate('/post-write');
                        }}
                    /> 
                    <Button
                        title="로그인"
                        onClick={() => {
                            navigate('/post-login');
                        }}
                    />
                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
            <Footer/>    
        </Wrapper>
    
    );
}

export default MainPage;
