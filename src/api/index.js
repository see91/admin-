import axios from 'axios';

axios.defaults.baseURL = 'http://45.40.243.125:7001/';

axios.interceptors.response.use(
	(response) => {
		return response.data.data;
	},
	(error) => {}
);

const getCaptcha = () => {
	return axios.get('http://45.40.243.125:7001/');
};

export { getCaptcha };
