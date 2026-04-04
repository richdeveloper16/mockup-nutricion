import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../modules/auth/page/Login';
import DashboardPage from '../modules/dashboard/page/Dashboard';

/**Perfil Nutriologo*/
import PrincipalNutriologo from '../modules/nutriologo/page/PrincipalNutriologo';

/**Perfil Paciente*/
import PrincipalPaciente from '../modules/paciente/page/PrincipalPaciente';

/**Perfil Recepcionista*/
import PrincipalRecepcion from '../modules/recepcionista/page/PrincipalRecepcionista';

/**Perfil Administrador*/
import PrincipalAdmin from '../modules/administrador/page/PrincipalAdministrador';

/**Perfil Reportes*/
import PantallaReportes from '../modules/reportes/page/PrincipalReportes';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Ruta principal */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/perfil-nutriologo" element={<PrincipalNutriologo />} />
            <Route path="/perfil-paciente" element={<PrincipalPaciente />} />
            <Route path="/perfil-recepcionista" element={<PrincipalRecepcion />} />
            <Route path="/perfil-administrador" element={<PrincipalAdmin />} />
            <Route path="/menu-reportes" element={<PantallaReportes />} />
        </Routes>
    );
};

export default AppRoutes;