import { createContext } from 'react';
import { initialUser } from './UserContextState';

export const UserContext = createContext(initialUser);