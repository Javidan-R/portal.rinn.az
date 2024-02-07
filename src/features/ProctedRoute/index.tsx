import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserRole } from '../../utils';
import { Role } from '../../models';

interface ProtectedRouteProps {
	expectedRole: Role | null;
	redirectPath?: string;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
	expectedRole,
	redirectPath = '/',
}) => {
	const currentRole = getUserRole();
	console.log('currentRole',currentRole);
	
	if (currentRole === expectedRole) {
		return <Outlet />
	}

	switch (currentRole) {
		case Role.USER:
			return <Navigate to='/auth/login' />;
		case Role.GUEST:
			return <Navigate to='/' />;
		case null:
			return <Navigate to='/' />;
		default:
			return <Navigate to={redirectPath} />;
	}
};
