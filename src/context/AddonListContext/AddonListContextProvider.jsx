import { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import AddonListReducer from './AddonListReducer.jsx';
import { initialAddonList } from './AddonListContextState.jsx';
import { AddonListContext } from './AddonListContext.jsx';


export const AddonListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AddonListReducer, initialAddonList);

  useEffect(() => {
    sessionStorage.setItem('addonList', JSON.stringify(state.addonList));
  }, [state.addonList]);

  return (
    <AddonListContext.Provider
      value={{
        addonList: state.addonList,
        dispatch
      }}
    >
      {children}
    </AddonListContext.Provider>
  );
};

AddonListContextProvider.propTypes = {
  children: PropTypes.node
};