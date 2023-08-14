import { UserInfoStyled, UserNameStyled, UserPhoto } from './UserInfo.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAccount } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { useEffect } from 'react';

const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUserAccount());
  }, [dispatch]);

  return (
    <UserInfoStyled>
      <UserNameStyled>{user.name}</UserNameStyled>
      <UserPhoto></UserPhoto>
    </UserInfoStyled>
  );
};

export default UserInfo;
