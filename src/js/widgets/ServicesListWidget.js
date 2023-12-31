import Widget from "./Widget.js";

export default class ServicesListWidget extends Widget {
    getHtmlId() {
        return "ServicesListWidget";
    }

    name() {
        return getI18n('services_list');
    }

    icon() {
        return 'fal fa-question-circle';
    }
    init() {
        super.init();
    }
}