import PropTypes from 'prop-types';
import { UserProf } from './Profile.styled';
import { InfoCard } from './InfoCard.styled';
import { StatsList } from './Stats.styled';
import { StatisItem } from './StatsItem.styled';
import { PhotoCard } from './PhotoCard.styled';
import { UserName } from './UserName.styled';
import { ParInfo } from './TagLocation.styled';
import { StatisSpan } from './StatisSpan.styled';
import { SpanNumbers } from './SpanNumbers.styled';
import { InfoTag } from './InfoTag.styled';

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
    <UserName>{username}</UserName>
    <InfoTag>@{tag}</InfoTag>
    <ParInfo>{location}</ParInfo>
  </InfoCard>

  <StatsList>
    <StatisItem>
      <StatisSpan>Followers</StatisSpan>
      <SpanNumbers>{followers}</SpanNumbers>
    </StatisItem>
    <StatisItem>
      <StatisSpan>Views</StatisSpan>
      <SpanNumbers>{views}</SpanNumbers>
    </StatisItem>
    <StatisItem>
      <StatisSpan>Likes</StatisSpan>
      <SpanNumbers>{likes}</SpanNumbers>
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
