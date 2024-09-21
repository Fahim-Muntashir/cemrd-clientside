import { authKey } from "../../constants/authKey";
import { decodedToken } from "../utils/jwt";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "../utils/local-storage";


export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
    console.log(accessToken);
      return setToLocalStorage(authKey,accessToken)
}

export const getUserInfo= () => {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
        const decodedData: any = decodedToken(authToken);
        return {
            ...decodedData.userData,
            role:decodedData?.userData?.role.toLowerCase(),
    }
    }
}


export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
        return !!authToken;
    }
}



export const removeUser = () => {


    return removeFromLocalStorage(authKey);
}