import SuperElement from "./SuperElement.js";

export default class AElement extends SuperElement {
    name() {
        return getI18n('link');
    }

    getControls() {
        var element = this;

        return [
            new ActionButtonControl(getI18n('action'), {name: element.obj.attr('name'), data_action: element.obj.attr('href')}, function(options) {
                element.obj.attr('name', options.name);
                element.obj.attr('href', options.data_action);
            }),
            new TextControl(getI18n('text'), element.obj.html(), function(text) {
                element.obj.html(text);
            }),
            new LinkColorControl(getI18n('link_color'), element.obj.css('color'), function(color_link) {
                element.obj.css('color', color_link);
            }),
            new LineHeightControl(getI18n('line_height'), element.obj.css('line-height'), function(line_height) {
                element.obj.css('line-height', line_height);
                element.select();
            }),
            new TextSizeControl(getI18n('text_size'), element.obj.css('font-size'), function(text_size) {
                element.obj.css('font-size', text_size);
                element.obj.find('*').css('font-size', text_size);
                element.select();
            }),
            new TextStyleControl(getI18n('text_style'), {
                    font_weight: element.obj.css('font-weight'),
                    text_decoration: element.obj.css('text-decoration'),
                    font_style: element.obj.css('font-style'),
            }, function(value) {
                element.obj.css('font-weight', value.font_weight);
                element.obj.css('font-style', value.font_style);
                element.obj.css('text-decoration', value.text_decoration);
                element.select();
            }),
            new BackgroundImageControl(getI18n('background_image'), {
                image: element.obj.css('background-image'),
                color: element.obj.css('background-color'),
                repeat: element.obj.css('background-repeat'),
                position: element.obj.css('background-position'),
                size: element.obj.css('background-size'),
            }, {
                setBackgroundImage: function (image) {
                    element.obj.css('background-image', image);
                },
                setBackgroundColor: function (color) {
                    element.obj.css('background-color', color);
                },
                setBackgroundRepeat: function (repeat) {
                    element.obj.css('background-repeat', repeat);
                },
                setBackgroundPosition: function (position) {
                    element.obj.css('background-position', position);
                },
                setBackgroundSize: function (size) {
                    element.obj.css('background-size', size);
                },
            }),
            new MobileDesktopToggleControl(getI18n('toogle'), {
                type: element.obj.attr('data-hide-on')
            }, function(type) {
                element.obj.attr('data-hide-on', type);
                setTimeout(function() {
                    currentEditor.select(element);
                }, 100);
            }),
        ];
    }
}