import { Route, Routes } from 'react-router-dom';
import BasicLayout from './components/BasicLayout/BasicLayout';
import PersonalInfoForm from './pages/PersonalInfoForm/PersonalInfoForm';
import SelectPlanForm from './pages/SelectPlanForm/SelectPlanForm';
import AddonsForm from './pages/AddonsForm/AddonsForm';
import Summary from './Pages/Summary/Summary';
import SummaryMain from './Pages/Summary/SummaryMain/SummaryMain';
import SummaryThanks from './Pages/Summary/SummaryThanks/SummaryThanks';
import NoMatch from './pages/NoMatch/NoMatch';
import { AddonListContextProvider } from './context/AddonListContext/AddonListContextProvider';
import { PlanContextProvider } from './context/PlanContext/PlanContextProvider';
import './App.css';

// TODO: Voir pourquoi ça ne marche pas sur Iphone...

function App() {
  return (
    <PlanContextProvider>
      <AddonListContextProvider>
        <Routes>
          <Route path='/' element={<BasicLayout />} end>

            <Route path='/' element={<PersonalInfoForm />} />
            <Route path='plan' element={<SelectPlanForm />} />
            <Route path='addons' element={<AddonsForm />} />
            <Route path='summary' element={<Summary />}>
              <Route path='main' element={<SummaryMain />} />
              <Route path='thanks' element={<SummaryThanks />} />
            </Route>
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </AddonListContextProvider>
    </PlanContextProvider>
  );
}

export default App;
