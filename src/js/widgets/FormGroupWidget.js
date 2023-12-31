import Widget from "./Widget.js";

export default class FormGroupWidget extends Widget {
    getHtmlId() {
        return "FormGroupWidget";
    }

    name() {
        return getI18n('input_form');
    }

    icon() {
        return 'fal fa-th-list';
    }
    init() {
        super.init();
    }
}