import React from 'react'
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header({user}) {
    return (
        <Container>
            <Main>
              <AccessTimeIcon />  
              <SearchContainer>
                  <Search>
                      <input type="text" placeholder="Search..." />
                  </Search>
              </SearchContainer>
              <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>{user.name}</Name>
                <UserImage><img src={user.photo} /></UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container= styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`

const Main= styled.div`
display:flex;
justify-content:space-between;
`

const UserContainer= styled.div`
display:flex;
align-items:center;
`

const SearchContainer= styled.div`


`

const Search= styled.div`

`
const Name= styled.div`

`
const UserImage= styled.div`

`