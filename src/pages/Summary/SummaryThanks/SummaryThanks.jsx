import iconThanks from '../../../assets/images/icon-thank-you.svg';

const Thanks = () => {
  return (
    <section className='section-wrapper'>
      <div className='card-thanks-container'>
        <div className='card-thanks'>
          <img src={iconThanks} alt='Thanks icon' />
          <p className='card-thanks-text-big'>Thank you!</p>

          <p className='card-thanks-text'>
            Thanks for confirming your subscription! We hope you have fun
            using our platform. If you ever need support, please feel free
            to email us at support@loremgaming.com.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Thanks;