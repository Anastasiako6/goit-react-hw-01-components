import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem'

export function FriendList ({ friends}){
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                < FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    className={css.item} />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired
};
