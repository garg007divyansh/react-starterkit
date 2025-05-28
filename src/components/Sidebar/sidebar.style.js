import styled from 'styled-components'

const MyDiv = styled.div`
.sidebar_wrapper{
    background-color: #EEF3FB;
    height: 100%;
    position: fixed;
    width: 300px;
    // overflow: hidden;
    z-index: 1;
    display: block;
    transition: 0.5s;
    overflow-y: scroll;
    padding-bottom: 20px;
    @media(max-width:767px){
        display: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.top_header{
    align-items: center;
    padding: 10px 14px 10px 24px;
}
.logo{
    width: 100%;
}
.sidebar_box{
    padding: 0px 12px;
    margin-top: 24px;
    @media(max-width:767px){
        padding: 0px;
        margin-top: 0px;
    }
}
.icon_size{
    width: 24px;
    height: 24px;
    object-fit: contain;
}
.menu_box{
    margin-top: 24px;
    // padding: 0px 16px;
}
.menu_item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    cursor: pointer;
}
.menu_item svg{
    width: 25px;
    height: 25px;
    cursor: pointer;
}
.menu_item svg path{
    fill: #98a2b3
}
.menu_item a{
    display: flex;
    align-items: center;
    column-gap: 12px;
    font-size: 16px;
    line-height: 24px;
    height: 30px;
    width: 100%;
    font-weight: 400;
}
.active_menu{
    background-color: #fff;
    border-radius: 6px;
    transition: 0.2s;
    border-left: 4px solid #D63237;
}
.active_menu a{
    color: #D63237!important;
    font-weight: 500;
}
`
export default MyDiv
