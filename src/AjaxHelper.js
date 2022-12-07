
export default class AjaxHelper {
    url = null;
    xhr = new XMLHttpRequest();
    method = 'GET';
    onResponseOk = null;

    /**
     * @param url
     * @param method
     * @param onResponseOk
     */
    constructor(url, method, onResponseOk : null = null) {
        this.url = url;
        this.onResponseOk = onResponseOk;
        if (typeof  method === 'string') {
            this.method = method.length in ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] ? method : 'GET';
        }
    }

    send() {
        if (typeof url === 'string' && url.length > 0) {
            console.log("Méthode choisie: " + method);
            this.xhr.open(this.method, this.url);
            this.xhr.responseType = 'json';
            if (this.onResponseOk !== null) {
                this.xhr.onload = () =>this.onResponseOk(this.xhr.response);
            }
            this.xhr.send();
        }
        else {
            throw new Error("L'Url ne peut être vide");

        }
    }

}