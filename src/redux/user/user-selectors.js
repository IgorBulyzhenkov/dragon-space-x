export const getInLoggedIn = (state) => state.user.isLoggedIn;
export const getName = (state) => state?.user?.user?.name;
export const getUserMail = (state) => state?.user?.email;
export const getIsFetchingCurrent = (state) => state.user.isRefreshing;

export const getVerify = (state) => state?.user?.user?.verify;
export const getVerifyToken = (state) => state?.user?.verificationToken;
export const getVerifyMail = (state) => state.user.verifyMail;
