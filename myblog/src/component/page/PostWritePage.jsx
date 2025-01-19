import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

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
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <Wrapper>
            <Container>
                <h2>What is your Goal?</h2>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <h2>What is the detail?</h2>
                <TextInput
                    height={20}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />
                <Button
                    title='등록'
                    onClick={() => {
                        //title과 content값이 저장되는 내용을 추가
                        navigate('/');
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;
