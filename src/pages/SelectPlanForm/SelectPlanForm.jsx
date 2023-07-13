import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconArcade from '../../assets/images/icon-arcade.svg';
import iconAdvanced from '../../assets/images/icon-advanced.svg';
import iconPro from '../../assets/images/icon-pro.svg';
import { plans, paymentBasis } from '../../data/data';
import { PlanContext } from '../../context/PlanContext/PlanContext';

const SelectPlanForm = () => {
  const navigate = useNavigate();

  // GET selected plan from sessionStorage if exists - default plan = 'Arcade'
  const { selectedPlan, dispatch } = useContext(PlanContext);

  // GET selected plan index from sessionStorage if exists - default plan id = '0
  const selectedPlanId = selectedPlan.id || 0;
  const [selectedIndex, setSelectedIndex] = useState(selectedPlanId);

  // GET selected payment periodicity from sessionStorage if exists - default periodicity = 'Monthly'
  const checkedPeriod = sessionStorage.getItem('periodicity') || sessionStorage.setItem('periodicity', 'Monthly');

  // GET checkbox checked or not checked depending on periodicity - default checked = false
  const yearPlan = checkedPeriod === null ? false : checkedPeriod === 'Monthly' ? false : true;
  const [isChecked, setIsChecked] = useState(yearPlan);

  const selectPlan = (plan) => {
    dispatch({
      type: 'UPDATE_PLAN',
      selectedPlan: { id: plan.id, name: plan.name, priceMonthly: plan.monthly, priceYearly: plan.yearly }
    }
    );
  };

  // Change Payment Periodicity via Checkbox click
  const handleToggle = () => {
    setIsChecked(!isChecked);
    // SET selected payment periodicity in sessionStorage for choice persistence along navigation & summary page
    const periodicity = isChecked ? 'Monthly' : 'Yearly';
    sessionStorage.setItem('periodicity', periodicity);
  };

  // Change Payment Periodicity via Space bar
  const handleToggleKeyDown = (e) => {
    if (e.code === 'Space') {
      setIsChecked(!isChecked);
      const periodicity = isChecked ? 'Monthly' : 'Yearly';
      sessionStorage.setItem('periodicity', periodicity);
    }
  };

  // Navigate BACK to PersonalInfoForm
  const handleBack = () => {
    navigate('/');
  };

  // Navigate to NEXT form = AddonsForm
  const handleNext = () => {
    sessionStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));
    navigate('/addons');
  };

  const planList = plans.map((plan, i) => {
    return (
      <li key={i} tabIndex={0} className={i === (selectedIndex) ? 'card selected' : 'card'} role='tab' onClick={() => { setSelectedIndex(i); selectPlan(plan); }} onKeyDown={(e) => { if (e.code === 'Enter') { setSelectedIndex(i); selectPlan(plan); } }} >
        {
          plan.name === 'Arcade' ? <img src={iconArcade} alt='' className='card-icon' /> :
            plan.name === 'Advanced' ? <img src={iconAdvanced} alt='' className='card-icon' /> :
              <img src={iconPro} alt='' className='card-icon' />
        }
        < div className='card-info' >
          <h3 className='card-title'>{plan.name}</h3>
          <p className='card-price'>{isChecked ? `$${plan.yearly}/yr` : `$${plan.monthly}/mo`}</p>
          <p className={isChecked ? 'card-bonus' : 'card-bonus hidden'}>2 months free</p>
        </div >
      </li >
    );
  });

  return (
    <section className='section-wrapper'>
      <div className='section-container'>
        <div className='section-title'>
          <h2 className='section-header'>Select your plan</h2>
          <p className='section-rules'>You have the option of monthly or yearly billing.</p>
        </div>

        <div className='card-wrapper'>
          <ul className='card-container'>
            {planList}
          </ul>

          <fieldset tabIndex={0} className='toggle-circle' onKeyDown={handleToggleKeyDown}>
            <p className={isChecked ? 'toggle-text' : 'toggle-text checked'}>{paymentBasis[0]}</p>
            <input id='toggle' type='checkbox' name='checkbox' role='checkbox' onChange={handleToggle} checked={isChecked} />
            <label htmlFor='toggle'></label>
            <p className={!isChecked ? 'toggle-text' : 'toggle-text checked'}>{paymentBasis[1]}</p>
          </fieldset>
        </div>
      </div>

      <div className='plan-btn-container'>
        <button type='button' className='back-btn' onClick={handleBack}>Go Back</button>
        <button type='button' className='next-btn' onClick={handleNext}>Next Step</button>
      </div>
    </section >
  );
};

export default SelectPlanForm;