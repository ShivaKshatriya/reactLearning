import AjaxBase from './ajax-base';
import * as $ from 'jquery';

class AjaxXhr extends AjaxBase {
    public loadAjax() {
        let { method, url } = this.props;
        $.ajax(url, {
            method
        })
        .done((result: any) => {
            alert(result);
        })
        .fail(() => {
            alert('There was a problem with the request');
        });
    }
}

export default AjaxXhr;