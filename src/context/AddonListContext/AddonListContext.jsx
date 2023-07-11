import { createContext } from 'react';
import { initialAddonList } from './AddonListContextState';

export const AddonListContext = createContext(initialAddonList);

