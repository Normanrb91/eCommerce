
const productFetchApi = async (endPoint, method, contentType, body) => {
    const BASE_URL = 'https://technical-frontend-api.bokokode.com/api';
 
    return fetch(`${ BASE_URL }/${ endPoint }`, {
        method,
        headers: {
            'Content-Type': contentType,
            'Accept': 'application/json',
        },
        body
    });
}

export default productFetchApi