import axios from 'axios';

export const iAxios = axios.create( {
    baseURL: 'http://localhost:3001',
} );
