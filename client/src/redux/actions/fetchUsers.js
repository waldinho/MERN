export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:5000/employee/`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const data = await response.json();
            dispatch({
                type: 'GET_USERS',
                payload: data
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
};