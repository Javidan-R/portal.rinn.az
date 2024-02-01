
import { useRouteError } from 'react-router-dom';
import ErrorPage from '../../pages/Error';

export function ErrorBoundary() {
	const error = useRouteError();
	console.error(error);

	return <><ErrorPage/></>;
}
