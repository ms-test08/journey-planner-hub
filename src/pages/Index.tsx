// src/pages/Index.tsx - Redirects to search
import { Navigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../core/constants/routes';

const Index = () => <Navigate to={ROUTE_PATHS.HOME} replace />;
export default Index;
