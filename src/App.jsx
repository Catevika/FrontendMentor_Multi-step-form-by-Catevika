import { Route, Routes } from 'react-router-dom';
import BasicLayout from './components/BasicLayout/BasicLayout';
import PersonalInfoForm from './pages/PersonalInfoForm/PersonalInfoForm';
import SelectPlanForm from './pages/SelectPlanForm/SelectPlanForm';
import AddonsForm from './pages/AddonsForm/AddonsForm';
import Summary from './pages/Summary/Summary';
import SummaryMain from './pages/Summary/SummaryMain/SummaryMain';
import SummaryThanks from './pages/Summary/SummaryThanks/SummaryThanks';
import NoMatch from './pages/NoMatch/NoMatch';
import { UserContextProvider } from './context/UserContext/UserContextProvider';
import { PlanContextProvider } from './context/PlanContext/PlanContextProvider';
import { AddonListContextProvider } from './context/AddonListContext/AddonListContextProvider';
import './App.css';

function App() {
  return (
    <UserContextProvider>
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
    </UserContextProvider>
  );
}

export default App;
