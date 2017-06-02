import AjaxBase from './ajax-base';

class AjaxXhr extends AjaxBase {
    public loadAjax() {
        let httpRequest = new XMLHttpRequest();
        let { method, url } = this.props;

        if (httpRequest) {
            let alertContents = function() {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        alert(httpRequest.responseText);
                    } else {
                        alert('There was a problem with the request.');
                    }
                }
            };

            httpRequest.onreadystatechange = alertContents;
            httpRequest.open(method, url);
            httpRequest.send();
        }
    }
}

export default AjaxXhr;