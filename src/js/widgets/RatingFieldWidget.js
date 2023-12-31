// Rating field widget
import FieldWidget from "./FieldWidget.js";

export default class RatingFieldWidget extends FieldWidget {
    getHtmlId() {
        return "RatingFieldWidget";
    }

    replaceTag(html) {
        html = super.replaceTag(html);

        var script = `<script>
            var rating_`+this.id+` = new Rating($('.rating-`+this.id+`'));
        </script>`;
        
        html = html.replace(/\[SCRIPT\]/g, script);

        return html;
    }
}