import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MedicationCal from './pages/MedicationCal';
import PatientManagementSystem from './pages/PatientManagementSystem';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
            <Route path="/PatientManagementSystem" exact={true} component={PatientManagementSystem} />
<Route path="/MedicationCal" exact={true} component={MedicationCal} />

            </Switch>
        </Router>
    );
};

export default App;
