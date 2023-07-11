import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addons } from '../../data/data';
import { AddonListContext } from '../../context/AddonListContext/AddonListContext';

const Addons = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AddonListContext);

  const [isChecked, setIsChecked] = useState(false);
  const periodicity = sessionStorage.getItem('periodicity');

  const handleChange = (e) => {
    addons[e.target.id].checked = !addons[e.target.id].checked;
    // SET selected addon in sessionStorage for choice persistence along navigation & summary page
    sessionStorage.getItem(`addon-${e.target.id}`) ? sessionStorage.removeItem(`addon-${e.target.id}`) :
      sessionStorage.setItem(`addon-${e.target.id}`, JSON.stringify(addons[e.target.id]));

    if (addons[e.target.id].checked === true) {
      dispatch({
        type: 'ADD_TO_ADDONLIST',
        addon: addons[e.target.id]
      });
    } else {
      dispatch({
        type: 'REMOVE_FROM_ADDONLIST',
        id: addons[e.target.id].id
      });
    }

    setIsChecked(!isChecked);
  };

  const handleBack = () => {
    navigate('/plan');
  };

  const handleNext = () => {
    navigate('/summary/main');
  };

  return (
    <section className='section-wrapper'>
      <div className='section-container'>
        <div className='section-title'>
          <h2 className='section-header'>Pick add-ons</h2>
          <p className='section-rules'>Add-ons help enhance your gaming experience.</p>
        </div>

        <fieldset className='checkbox-fieldset'>
          <ul className='checkbox'>
            {
              addons.map((addon, i) => (
                <li className={sessionStorage.getItem(`addon-${i}`) !== null ? 'checkbox-input-container checked' : 'checkbox-input-container'} key={i}>
                  <input type='checkbox' id={i} name={addon.title} value={addon.title} className='checkbox-input' onChange={handleChange} />
                  <label htmlFor={i} className='checkbox-label'>
                    <h3 className='checkbox-label-title'>{addon.title}
                    </h3>
                    <p className='checkbox-label-description'>{addon.description}</p>
                  </label>
                  <div className='checkbox-price'>{periodicity === 'Monthly' ? `+$${addon.monthlyAddon}/mo` : ` +$${addon.yearlyAddon}/yr`}</div>
                </li>
              ))
            }
          </ul>
        </fieldset>
      </div>

      <div className='checkbox-btn-container'>
        <button type='button' onClick={handleBack} className='back-btn'>Go Back</button>
        <button type='button' onClick={handleNext} className='next-btn'>Next Step</button>
      </div>
    </section>
  );
};

export default Addons;