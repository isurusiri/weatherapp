import moment from 'moment';

const getCurrentDateAndMonth = () => {
    const current = moment(new Date());

    return current.format('MMM Do')
}

export {getCurrentDateAndMonth};
