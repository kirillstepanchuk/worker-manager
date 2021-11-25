import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { HeaderContainer, Heading, Link } from './style'

const Header = () => {
    const location = useLocation();
    
    return (
        <HeaderContainer>
            <Heading>
                Сотрудники
            </Heading>

            <Link to={{
                pathname:`/worker-add`,
                state: { background: location },
            }}>
                Добавить
            </Link>
            
            
        </HeaderContainer>
    )
}

Header.propTypes = {
    setIsAddModalOpen: PropTypes.func,
}


export default Header
