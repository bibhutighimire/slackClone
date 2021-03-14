import React from 'react'
import styled from 'styled-components';

function ChatSection({rooms}) {
    return (
        <Container>
{rooms.name}
        </Container>
    )
}

export default ChatSection
const Container= styled.div`
`