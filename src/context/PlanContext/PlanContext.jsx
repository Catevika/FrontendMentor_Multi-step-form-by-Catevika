import { createContext } from 'react';
import { initialPlan } from './PlanContextState';

export const PlanContext = createContext(initialPlan);

