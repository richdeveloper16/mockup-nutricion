import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../modules/auth/page/Login';
import DashboardPage from '../modules/dashboard/page/Dashboard';

/** Perfil Nutriologo */
import PrincipalNutriologo from '../modules/nutriologo/page/PrincipalNutriologo';
import NutriologoRegistararPaciente from '../modules/paciente/page/RegistararPaciente';


/** Perfil Paciente */
import PrincipalPaciente from '../modules/paciente/page/PrincipalPaciente';

/** Perfil Recepcionista */
import PrincipalRecepcion from '../modules/recepcionista/page/PrincipalRecepcionista';
import CrearCita from '../modules/citas/page/RegistrarCita';

/** Perfil Administrador */
import PrincipalAdmin from '../modules/administrador/page/PrincipalAdministrador';
/* import AdministradorRegistrarPersonal from '../modules/administrador/page/AdministradorRegistroPersonal';
import GestionPromociones from '../modules/administrador/page/AdministradorGestionPromociones';
import CrearPromocion from '../modules/administrador/page/CrearPromocion'; */

/** Perfil Reportes */
import PantallaReportes from '../modules/reportes/page/PrincipalReportes';

/** Gestion Cobros */
import GestionCobros from '../modules/gestor-cobro/page/GestionCobros';
import RegistrarPago from '../modules/gestor-cobro/page/RegistrarPago';

/** Gestion Inventario */
import GestionInventario from '../modules/inventario/page/GestionInventario';

/** Modulo Personal */
import RegistrarEmpleado from '../modules/empleado/page/RegistroPersonal';

/** Modulo Promociones */
import GestionPromociones from '../modules/promocion/page/AdministradorGestionPromociones';
import CrearPromocion from '../modules/promocion/page/CrearPromocion';

/** Modulo Dieta  */
import CrearDieta from '../modules/dieta/pages/RegistrarDieta';
import DetalleDieta from '../modules/dieta/pages/DetalleDieta';
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Ruta principal */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashboardPage />} />

            {/* Perfil Nutriologo */}
            <Route path="/perfil-nutriologo" element={<PrincipalNutriologo />} />
            <Route path="/registrar-paciente" element={<NutriologoRegistararPaciente />} />
            
            {/* Perfil Paciente  */}
            <Route path="/perfil-paciente" element={<PrincipalPaciente />} />

            {/* Perfil  Recepcionista */}
            <Route path="/recepcionista/perfil-recepcionista" element={<PrincipalRecepcion />} />
            <Route path="/recepcionista/nueva-cita" element={<CrearCita />} />

            {/* Perfil Administrador */}
            <Route path="/perfil-administrador" element={<PrincipalAdmin />} />
      

             {/* Modulo DIeta */}
           <Route path="/crear-dieta" element={<CrearDieta />} />
          <Route path="/detalle-dieta" element={<DetalleDieta />} />


/** Gestion Cobros */
            <Route path="/gestionar-cobros" element={<GestionCobros />} />
            <Route path="/registrar-cobro" element={<RegistrarPago />} />

            /** Gestion Inventario */
            <Route path="/inventario/gestor" element={<GestionInventario />} />

     /** Modulo Empleado */
            <Route path="/peresonal/registro-empleado" element={<RegistrarEmpleado />} />

               /** Modulo Promociones */
           <Route path="/promocion/registrar-promociones" element={<GestionPromociones />} />
            <Route path="/promocion/nueva-promocion" element={<CrearPromocion />} />

            <Route path="/menu-reportes" element={<PantallaReportes />} />
        </Routes>
    );
};

export default AppRoutes;