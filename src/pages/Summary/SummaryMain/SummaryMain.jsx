import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlanContext } from '../../../context/PlanContext/PlanContext';
import { AddonListContext } from '../../../context/AddonListContext/AddonListContext';

const SummaryMain = () => {
  const navigate = useNavigate();

  const { selectedPlan } = useContext(PlanContext);
  const { addonList } = useContext(AddonListContext);

  const periodicitySummary = (sessionStorage.getItem('periodicity') ?? sessionStorage.getItem('periodicity')) || 'Monthly';

  const addonSummary = addonList ? addonList : null;

  const addonSummaryPrice = periodicitySummary === 'Monthly' ? (addonSummary ? addonSummary.map(addon => addon.monthlyAddon) : 0) : (addonSummary ? addonSummary.map(addon => addon.yearlyAddon) : 0);

  const addonSummaryTotalPrice = addonSummary !== null ? addonSummaryPrice.reduce((acc, currentValue) => acc + currentValue, 0) : 0;

  const handleBack = () => {
    navigate('/addons');
  };

  const handleConfirm = () => {
    navigate('/summary/thanks');
  };

  return (
    <section className='section-wrapper'>
      <div className='section-container'>
        <div className='section-title'>
          <h2 className='section-header'>Finishing up</h2>
          <p className='section-rules'>Double-check everything looks OK before confirming.</p>
        </div>

        <div className='summary-container'>
          <div className='summary'>
            <div className={addonSummary !== null && addonSummary.length > 0 ? 'summary-info  underlined' : 'summary-info'}>
              <h3 className='summary-title'><span>{selectedPlan.name} ({periodicitySummary === 'Monthly' ? 'Monthly' : 'Yearly'})</span><span className='summary-title-price'>{periodicitySummary === 'Monthly' ? `+$${selectedPlan.priceMonthly}/mo` : `+$${selectedPlan.priceYearly}/yr`}</span></h3>
              <Link to={'/plan'} className='summary-link'>Change</Link>
            </div>
            {
              addonSummary !== null ? (addonSummary.map((addon, i) => (
                <div key={i}>
                  <div className='summary-info summary-title'>
                    <p>{addon.title}</p>
                    <h3 className='summary-price summary-title-price'>{periodicitySummary === 'Monthly' ? `+$${addon.monthlyAddon}/mo` : `+$${addon.yearlyAddon}/yr`}</h3>
                  </div>
                </div>
              ))) : null
            }
          </div>

          <div className='summary-title'>
            <p className='summary-total-text'>Total (per {periodicitySummary === 'Monthly' ? 'month' : 'year'})</p><h3 className='summary-total-price'>{periodicitySummary === 'Monthly' ? `$${selectedPlan.priceMonthly + addonSummaryTotalPrice}/mo` : `$${selectedPlan.priceYearly + addonSummaryTotalPrice}/yr`}</h3>
          </div>
        </div>
      </div>

      <div className='summary-btn-container'>
        <button type='button' onClick={handleBack} className='back-btn'>Go Back</button>
        <button type='button' onClick={handleConfirm} className='summary-btn'>Confirm</button>
      </div>
    </section>
  );
};

export default SummaryMain;