/**
 * 按钮边框
 * @param width 边框宽度
 * @constructor
 */
Palette.PaletteButtonBorder = function(width) {
    Palette.PaletteButtonBorder.superClass.constructor.call(this);
    if (width != NULL)
        this.setWidth(width);
};

def('ht.ui.Palette.PaletteButtonBorder', ui.border.Border, {
    ms_ac: ['width'],

    _width: 1,
    
    getLeft: function() {
        return this.getWidth();
    },
    getRight: function() {
        return this.getWidth();
    },
    getTop: function() {
        return this.getWidth();
    },
    getBottom: function() {
        return this.getWidth();
    },

    drawBorder: function(x, y, width, height, view, dom) {
        var self = this,
            borderWidth = self.getWidth(),
            borderColor;
        if (view.getState() === 'active') {
            borderColor = view.getActiveBorderColor();
        }
        else if (view.getState() === 'hover') {
            borderColor = view.getHoverBorderColor();
        }
        else {
            borderColor = view.getBorderColor();
        }

        
        if (borderWidth && borderColor) {
            var g = view.getRootContext(dom);
            var borderRadius = parseInt(view.getBorderRadius());

            if (borderRadius) {
                g.beginPath();
                Default.drawRoundRect(g, x + borderWidth / 2, y + borderWidth / 2, width - borderWidth, height - borderWidth, borderRadius, borderRadius, borderRadius, borderRadius);
                g.strokeStyle = borderColor;
                g.lineWidth = borderWidth;
                g.stroke();
            }
            else {
                Default.drawBorder(g, borderColor, x, y, width, height, borderWidth);
            }
        }
    },
    
    getSerializableProperties: function() {
        var parentProperties = Palette.PaletteButtonBorder.superClass.getSerializableProperties.call(this);
        return addMethod(parentProperties, {
            width: true
        });
    }
});
