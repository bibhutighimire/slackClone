import React from 'react'
import styled from 'styled-components';
import {sidebarItemsData} from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';

function Sidebar({rooms}) {

    const AddChannel = () => {
        const promptName=prompt("Enter Channel Name");
        db.collection('rooms').add({
            name:promptName
        })
    }

   
    return (
        <Container>
            <OptionsInSlack>
            {
            sidebarItemsData.map(item => (
                <>
            <div>{item.icon}</div>
            <div>{item.text}</div>
            </>
            ))
            }
            </OptionsInSlack>

            <ChannelList>
                <AddIcon onClick={AddChannel}/>
{
    rooms.map(item => (
      <ChannelName> {item.name}</ChannelName> 
    ))
}
            </ChannelList>
        </Container>
    )
}

export default Sidebar

const Container= styled.div`
`
const OptionsInSlack= styled.div`
`
const ChannelList= styled.div`
`
const ChannelName= styled.div`
`
