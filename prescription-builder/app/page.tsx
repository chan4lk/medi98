import NewPage from '@/app/pages/PatientManagementSystem';
import Med from '@/app/pages/MedicationCal';

import React from 'react';

const App: React.FC = () => {
    return (
        <div>
            <NewPage />
            <Med />
        </div>
    );
};

export default App;
