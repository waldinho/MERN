export const updateUser = (state, user) => {
    return {
        type: "UPDATE_USER",
        payload: user,
        state,
    };
};