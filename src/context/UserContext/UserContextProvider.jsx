import { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialUser } from './UserContextState.jsx';
import UserReducer from './UserReducer.jsx';
import { UserContext } from './UserContext.jsx';

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialUser);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        dispatch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node
};