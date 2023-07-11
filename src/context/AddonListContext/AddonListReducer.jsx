const AddonListReducer = (state, action) => {
  const index = state.addonList.findIndex(
    (addonListItem) => addonListItem.id === action.id
  );

  let newAddonList = [...state.addonList];

  if (index >= 0) {
    newAddonList.splice(index, 1);
  } else {
    newAddonList;
  }

  console.log(action);
  switch (action.type) {
    case 'ADD_TO_ADDONLIST':
      return {
        ...state,
        addonList: [...state.addonList, action.addon]
      };

    case 'REMOVE_FROM_ADDONLIST':
      return {
        ...state,
        addonList: newAddonList,
      };

    default:
      throw new Error('Unhandled action type: ' + action.type);
  }
};

export default AddonListReducer;
