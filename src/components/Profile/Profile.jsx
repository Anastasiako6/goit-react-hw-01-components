import PropTypes from 'prop-types';
import {
  UserProf,
  InfoCard,
  StatsList,
  StatisItem,
  PhotoCard,
  UserName,
  ParInfo,
  StatisSpan,
  SpanNumbers,
  InfoTag,
} from './Profile.styled';


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