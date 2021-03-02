import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NotificationWrapper = styled.div`
    position: fixed;
    bottom: 16px;
    left: 16px;
    right: 16px;
    display: flex;
    background-color: #fff;
    height: 40px;
    border-left: 8px solid;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-right: 1px solid;
    border-color: ${(props) => (props.kind === 'error' ? '#da1e28' : 'white')};
    background-color: ${(props) => (props.kind === 'error' ? '#FEF0F0' : 'white')};
    cursor:pointer;
    line-height: 40px;
`;

const Title = styled.h5`
    font-weight: 600;
    display: inline-flex;
    font-size: 16px;
    margin-left: 8px;
`;

const Message = styled.p`
    font-size: 14px;
    display: inline-flex;
    font-weight: 500;
    margin-left: 8px;
`;

const Notification = ({ title, kind, message, handleClick }) => {
    return (
        <NotificationWrapper data-testid='Notification' onClick={() => handleClick()} kind={kind}>
            <Title>{title}</Title>
            <Message>{message}</Message>
        </NotificationWrapper>
    );
};

Notification.propTypes = {
    title: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    handleClick : PropTypes.func
}

export default Notification;
