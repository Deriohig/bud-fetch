class NotificationError extends Error {
    constructor(message) {
        super(message);
        this.title = 'An Error occured';
    }
}

const fetchTransactions = async() => {
    try {
        const data = await fetch('http://www.mocky.io/v2/5c62e7c33000004a00019b05');
        return data;
    } catch {
        throw new NotificationError('Something went wrong when trying to get the data.');
    }
}

export default fetchTransactions;