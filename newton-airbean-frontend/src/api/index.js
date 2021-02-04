const getBaseUrl = (path = '') => `http://127.0.0.1:5000/api/beans${path}`;

/**
 * GET menu from endpoint
 */
export const getMenuItems = async () => await fetch(getBaseUrl()).then(res => res.json().menu);

/**
 * POST to endpoint
 * @param {Object} fejkData
 * @returns {Object} orderData
 */
export const postOrder = async (fejkData = { fejk: 123 }) =>
    await fetch(getBaseUrl(), { method: 'POST', data: { fejkData } }).then(res => res.json());


export const getOrder = async function (id) {
    console.log({ id })
    // fetch('url', method = {'POST'})
}