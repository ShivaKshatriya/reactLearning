import AjaxBase from './ajax-base';
import 'whatwg-fetch';

class AjaxFetch extends AjaxBase {
    public loadAjax() {
        let { method, url } = this.props;
        fetch(url, {
            method
        })
        .then((response: any) => {
            alert(response);
        })
        .catch(() => {
            alert('Something went wrong!');
        });
    }
}

export default AjaxFetch;