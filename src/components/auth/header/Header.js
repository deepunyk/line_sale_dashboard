import React, { useState } from 'react';
import * as S from './HeaderStyled';
import * as C from '../../common/common';
import {  useHistory  } from 'react-router-dom';
import Logo from '../../../assets/illustrations/logo.png';
import {Menu} from '@styled-icons/boxicons-regular/Menu';
import styled from 'styled-components';
import color from '../../../constants/color';
import { Drawer} from 'antd';


const MenuIcon = styled(Menu)`
    height: 40px;
    color: ${color.primary};
    display: none;

    @media only screen and (max-width: 600px) {
      display: block;

    }
` 

const Header = (props) => {
    let history = useHistory();
    
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };

    const MenuData = [{
        'tap': ()=>history.push('/'),
        'title':'Home',
    },{
        'tap': ()=>{},
        'title':'About Line Sale',
    },{
        'tap': ()=>{},
        'title':'User Guide',
    },{
        'tap': ()=>history.push('/plans'),
        'title':'Pricing',
    },{
        'tap': ()=>{},
        'title':'FAQ',
    },{
        'tap': ()=>{},
        'title':'Contact',
    }]

    const MenuItems = MenuData.map((e)=><S.MenuItem onClick = {()=>{
        e.tap();
        onClose();
    }}>{e.title}</S.MenuItem>)

    return (
        <S.Wrapper>
            <S.SubWrapper>
                <S.Image src = {Logo}/>
                <C.LineHead>Line Sale</C.LineHead>
            </S.SubWrapper>
            <S.Menu>
                {MenuItems}
            </S.Menu>
            <MenuIcon onClick={showDrawer}/>

            <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}

                width	= '80%'
            >
                <S.SubWrapper drawer>
                    <S.Image src = {Logo}/>
                    <C.LineHead>Line Sale</C.LineHead>
                </S.SubWrapper>
                {MenuItems}

            </Drawer>
        </S.Wrapper>

    );
}

export default Header;