import axios from 'axios';
import CONSTANTS from '../constants';

const _ajax = ({ method, url, data = {} }) => {
  return axios({ method, url, data })
    .then(response => response)
    .catch(error => error.response);
};

const postData = (url, data) =>
  _ajax({ method: CONSTANTS.AXIOS_METHODS.POST, url, data });

const getData = (url, data) =>
  _ajax({ method: CONSTANTS.AXIOS_METHODS.GET, url, data });

const putData = (url, data) =>
  _ajax({ method: CONSTANTS.AXIOS_METHODS.PUT, url, data });

const deleteData = (url, data) =>
  _ajax({ method: CONSTANTS.AXIOS_METHODS.DELETE, url, data });

const patchData = (url, data) =>
  _ajax({ method: CONSTANTS.AXIOS_METHODS.PATCH, url, data });

export { postData, getData, putData, deleteData, patchData };
