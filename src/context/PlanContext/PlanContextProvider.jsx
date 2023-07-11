import { useReducer } from 'react';
import PropTypes from 'prop-types';
import PlanReducer from './PlanReducer.jsx';
import { initialPlan } from './PlanContextState.jsx';
import { PlanContext } from './PlanContext.jsx';


export const PlanContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PlanReducer, initialPlan);

  return (
    <PlanContext.Provider
      value={{
        selectedPlan: state.selectedPlan,
        dispatch
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

PlanContextProvider.propTypes = {
  children: PropTypes.node
};