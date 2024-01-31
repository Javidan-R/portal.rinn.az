import type { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getUserRole } from '../../utils';
import { Role } from '../../models';

interface ProtectedRouteProps {
	expectedRole: Role | null;
	redirectPath?: string;
	children?: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
	expectedRole,
	redirectPath = '/',
	children,
}) => {
	const currentRole = getUserRole();
	console.log('currentRole',currentRole);
	
	if (currentRole === expectedRole) {
		return children;
	}

	switch (currentRole) {
		case Role.ADMIN:
			return <Navigate to='/admin/dashboard' />;
		case Role.GUEST:
			return <Navigate to='/' />;
		case null:
			return <Navigate to='/' />;
		default:
			return <Navigate to={redirectPath} />;
	}
};
