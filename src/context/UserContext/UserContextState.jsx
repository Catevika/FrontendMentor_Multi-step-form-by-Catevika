export const initialUser = {
  user: JSON.parse(sessionStorage.getItem('user')) || {
    usernmae: '',
    email: '',
    phone: '',
  }
};