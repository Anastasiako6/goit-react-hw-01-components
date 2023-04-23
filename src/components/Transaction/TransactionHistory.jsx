import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
import { THead } from './THead';
import { TBody } from './TBody';

export const TransactionHistory= ({ items }) => {
  return (
      <table className={css.transaction_history}>
        <THead/>
        <TBody items={items}/>
      </table>
    );
}

TransactionHistory.prototype = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};
