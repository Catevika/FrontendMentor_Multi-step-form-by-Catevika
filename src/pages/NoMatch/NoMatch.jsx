import { useNavigate } from 'react-router-dom';
import nomatch from '../../assets/images/404.jpg';

const NoMatch = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <section className='section-wrapper'>
      <div className='section-container'>
        <div className="section-title">
          <h2 className='section-header'>404 - Page not found !</h2>
        </div>
        <div className='card-wrapper'>
          <div className='card-container'>

            <div className='noMatch-card'>
              <img src={nomatch} alt="404 page" />
            </div>
          </div>
        </div>
      </div>
      <div className='plan-btn-container'>
        <button type='button' className='back-btn' onClick={handleBack}>Go Back</button>
      </div>
    </section>
  );
};

export default NoMatch;