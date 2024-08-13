import { TokenRetrievalInterface } from "./interface";

/**
 * Retrieves the token from either session or local storage.
 * If the token is found in session storage, it will be returned with type 'session'.
 * If the token is found in local storage, it will be returned with type 'local'.
 * If the token is not found in either, it will be returned with type 'none'.
 * @returns {TokenRetrievalInterface} An object with a type and token.
 */
function getToken(): TokenRetrievalInterface {
    const sessionToken = sessionStorage.getItem("token");
    const localStorageToken = localStorage.getItem("token");

    // If the token is found in session storage, return it with type 'session'.
    if (sessionToken) {
        return { type: 'session', token: sessionToken };
    }

    // If the token is found in local storage, return it with type 'local'.
    if (localStorageToken) {
        return { type: 'local', token: localStorageToken };
    }

    // If the token is not found in either, return it with type 'none'.
    return { type: 'none', token: null };
}

export { getToken }