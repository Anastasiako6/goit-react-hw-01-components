import css from './TransactionHistory.module.css'

export const THead = () => {
    return (
        <thead className={css.thead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead> 
    )
}