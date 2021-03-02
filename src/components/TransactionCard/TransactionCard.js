import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TransactionWrapper = styled.div`
    margin-bottom: 16px;
    width: 240px;
    background-color: #e0e0e0;
    padding: 16px;
    margin-right: 16px;
`;

const TransactionItem = styled.span`
    margin-right: 16px;
`;

const TransactionCategory = styled.p`
    font-size: 12px;
`;

const TransactionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const Cost = styled.p`
    margin-top: 8px;
`;

const TransactionCard = ({ date, currency, value, description, category }) => {
    const renderCost = (value, currency) => `${value} ${currency}`
    return (
        <TransactionWrapper data-testid="TransactionCard">
            <TransactionHeader>
                <TransactionCategory>{category}</TransactionCategory>
                <TransactionCategory>{date}</TransactionCategory>
            </TransactionHeader>
            <TransactionItem>{description}</TransactionItem>
            <Cost>{renderCost(value, currency)}</Cost>
        </TransactionWrapper>
    );
};

TransactionCard.propTypes = {
    date: PropTypes.string.isRequired, 
    currency: PropTypes.string.isRequired, 
    value: PropTypes.number.isRequired, 
    description: PropTypes.string.isRequired, 
    category: PropTypes.string.isRequired
}

export default TransactionCard;
