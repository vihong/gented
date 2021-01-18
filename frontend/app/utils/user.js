import _ from 'lodash';

export function getUsername(route) {
	return _.isEmpty(route.params) ? 'Danny' : route.params.username;
}
