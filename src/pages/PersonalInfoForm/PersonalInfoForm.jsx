import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalInfoForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const [usernameStyle, setUsernameStyle] = useState('form-input');
  const [emailStyle, setEmailStyle] = useState('form-input');
  const [phoneStyle, setPhoneStyle] = useState('form-input');

  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  function validateUsername(username) {
    if (username === '') {
      setSubmitting(false);
      setError('This field is required.');
      setUsernameStyle('form-input error');
    } else {
      setUsernameStyle('form-input');
    }
  }

  function validateEmail(email) {
    if (email === '') {
      setSubmitting(false);
      setError('This field is required.');
      setEmailStyle('form-input error');
    } else {
      setEmailStyle('form-input');
    }
  }

  function validatePhone(phone) {
    if (phone === '') {
      setSubmitting(false);
      setError('This field is required.');
      setPhoneStyle('form-input error');
    } else {
      setPhoneStyle('form-input');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateUsername(username);
    validateEmail(email);
    validatePhone(phone);

    if (username !== '' && email !== '' && phone !== '') {
      setSubmitting(true);
      navigate('plan', true);
      setSubmitting(false);
      setError('');
      sessionStorage.setItem('user', JSON.stringify({ username, email, phone }));
    }
  };

  return (
    <section className='section-wrapper'>
      <div className='section-container'>
        <div className='section-title'>
          <h2 className='section-header'>Personal info</h2>
          <p className='section-rules'>Please provide your name, email address, and phone number.</p>
        </div>

        <form className='form' onSubmit={handleSubmit}>
          <div className='form-content'>
            <label htmlFor='username' className='form-label'>
              Name {username === '' ? <span className='form-error'>{error}</span> : null}
            </label>
            <input id='username' type='text' placeholder='e.g. Stephen King' autoComplete='username' className={usernameStyle} onChange={e => { validateUsername(e.target.value); setUsername(e.target.value); }} value={username} />

            <label htmlFor='email' className='form-label'>
              Email Address {email === '' ? <span className='form-error'>{error}</span> : null}
            </label>
            <input id='email' type='email' placeholder='e.g. stephenking@lorem.com' autoComplete='email' className={emailStyle} onChange={e => { validateEmail(e.target.value); setEmail(e.target.value); }} value={email} />

            <label htmlFor='phone' className='form-label'>
              Phone Number {phone === '' ? <span className='form-error'>{error}</span> : null}
            </label>
            <input id='phone' type='tel' placeholder='e.g. +1 234 567 890' autoComplete='tel' className={phoneStyle} onChange={e => { validatePhone(e.target.value); setPhone(e.target.value); }} value={phone} />
          </div>

          <div className='form-btn-container'>
            <button type='submit' className='form-btn'>{submitting ? 'Submitting form...' : 'Next Step'}</button>
          </div>
        </form >
      </div>
    </section>
  );
};

export default PersonalInfoForm;