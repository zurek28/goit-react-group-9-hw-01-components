import PropTypes from 'prop-types';

export const FriendListItem = props => {
  const { avatar, name, isOnline, id } = props;

  return (
    <li className="item" key={id}>
      <span
        className={(isOnline && 'status isOnline') || (!isOnline && 'status')}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
