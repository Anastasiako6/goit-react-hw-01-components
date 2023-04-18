import PropTypes from 'prop-types';
import { UserProf } from './Profile.styled';
import { InfoCard } from './InfoCard.styled';
import { StatsList } from './Stats.styled';
import { StatisItem } from './StatsItem';
import { PhotoCard } from './PhotoCard.styled';
// import { UserName } from './UserName';

export const Profile = ({ 
  items: { username, tag, location, avatar, stats: {
    followers, views, likes
  }},
 }) => {
  return (
      <UserProf>
  <InfoCard>
    <PhotoCard
      src={avatar}
      alt={username}
      width="240px"
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </InfoCard>

  <StatsList>
    <StatisItem>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </StatisItem>
    <StatisItem>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </StatisItem>
    <StatisItem>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
    </StatisItem>
  </StatsList>
    </UserProf>
  )
}

Profile.propTypes = {
  items: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
