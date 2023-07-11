const PlanReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_PLAN':
      return {
        ...state,
        selectedPlan: action.selectedPlan
      };

    default:
      throw new Error('Unhandled action type: ' + action.type);
  }
};

export default PlanReducer;
