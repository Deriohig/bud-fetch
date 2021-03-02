import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fetchTransactions from '../../api/fetchTransactions.js';
import Skeleton from '../../components/SkeletonState/index';
import TransactionCard from '../../components/TransactionCard/index';
import Notifcation from '../../components/Notification/index';

const Title = styled.h3`
    font-weight: 500;
    font-size: 18px;
    color: #161616;
    font-family: Helvetica, Sans-Serif;
    margin-bottom: 24px;
`;

const PageWrapper = styled.section`
    margin: 0 auto;
    max-width: 65%;
    background-color: #fff;
    padding: 16px;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const TransactionPage = () => {
    const [loading, setLoading] = useState(true);
    const [showNotification, setShowNotification] = useState(false);
    const [notification, setNotification] = useState({});
    const [transactionsList, setTransactionsList] = useState([]);

    useEffect(() => {
        getTransactions();
    }, []);

    const filterResults = (transations) => {
        const filteredTransactions  = transations.filter((transation)=> transation.amount.value < 0);
        const sortedTransactions = filteredTransactions.sort((a, b) => b.amount.value - a.amount.value );
        if (filteredTransactions.length > 10) {
            const truncatedTransaction = sortedTransactions.splice(0, 10);
            return truncatedTransaction;
        } else return sortedTransactions;
    };

    const getTransactions = async () => {
        try {
            const response = await fetchTransactions();
            const data = await response.json();
            const filteredData = data.transactions.length ? filterResults(data.transactions) : [];
            setTransactionsList(filteredData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setNotification({ title: error.title ? error.title : 'An error occured', kind: 'error', message: error.message });
            setShowNotification(error.message);
        }
    };

    const renderTransactionCards = () => {
        return transactionsList.map((transaction, index) => (
            <TransactionCard
                key={index}
                date={transaction.date}
                currency={transaction.amount.currency_iso}
                value={transaction.amount.value}
                description={transaction.description}
                category={transaction.category_title}
            />
        ));
    };

    return (
        <PageWrapper data-testid="TransactionPage">
            <Title>Smallest transactions</Title>
            {loading && (
                <>
                    <Skeleton width={'30%'} />
                    <Skeleton width={'70%'} />
                </>
            )}
            {!loading && (
                <CardWrapper data-testid="CardWrapper"> {renderTransactionCards()} </CardWrapper>
            )}
            {showNotification && (
                <Notifcation
                    title={notification.title}
                    handleClick={() => setShowNotification(false)}
                    message={notification.message}
                    kind={notification.kind}
                />
            )}
        </PageWrapper>
    );
};

export default TransactionPage;
