import styled from 'styled-components'

const MyDiv = styled.div`
.page_heading{
    margin-bottom: 24px;
}
.flex_header{
    align-items: center;
    justify-content: space-between;
}
.card-wrapper{
    background: #EEF3FB;
    padding: 10px 15px;
    border-radius: 8px;
}
.notification-button{
    column-gap: 10px;
    padding: 5px 10px;
}
.avatar-icon{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.avatar-icon .chakra-avatar__initials{
    font-size: 16px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
}
.accordion-scroll{
    height: 280px;
    overflow-y: scroll;
}
`
export default MyDiv
