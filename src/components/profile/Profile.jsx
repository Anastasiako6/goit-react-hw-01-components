import PropTypes from 'prop-types';
import { UserProf } from './Profile.styled';
import { InfoCard } from './InfoCard.styled';
import { PhotoCard } from './PhotoCard.styled';
import { NamePar } from './NamePar';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
      <UserProf>
  <InfoCard>
    <PhotoCard src={avatar} alt={username} />
        <NamePar>{username }</NamePar>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </InfoCard>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</UserProf>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};