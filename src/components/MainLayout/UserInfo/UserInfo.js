import { UserInfoStyled, UserNameStyled, UserPhoto } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const UserInfo = () => {
  const user = useSelector(selectUser);
  return (
    <UserInfoStyled>
      <UserNameStyled>{user.name}</UserNameStyled>
      <UserPhoto></UserPhoto>
    </UserInfoStyled>
  );
};
export default UserInfo;
