/**
 * 面板中的按钮组件
 */
Palette.PaletteButton = function () {
    var self = this;
    Palette.PaletteButton.superClass.constructor.call(self);

    // selected 状态变化时同步到 JSON 中
    self.addPropertyChangeListener(function (e) {
        if (e.property === 'selected') {
            if (self.itemConfig) {
                if (e.newValue) {
                    self.itemConfig.selected = true;
                } else {
                    delete self.itemConfig.selected;
                }
            }
        }
    });
};

def('ht.ui.Palette.PaletteButton', ui.ToggleButton, {

    ui_ac: ['borderColor', 'hoverBorderColor', 'activeBorderColor'],

    __border: new ht.ui.Palette.PaletteButtonBorder(1),
    __borderColor: '#fff',
    __hoverBorderColor: '#0086d1',
    __activeBorderColor: '#0086d1',
    __textColor: '#000',
    __background: '#fff',
    __activeTextColor: '#fff',
    __activeBackground: '#0094d8',
    __selectBackground: '#0094d8',
    __selectTextColor: '#fff',
    __iconWidth: 50,
    __iconHeight: 50,
    __hTextPosition: 'center',
    __vTextPosition: 'bottom',
    __preferredSize: {
        width: 80,
        height: 80
    },
    __layoutParams: {
        marginLeft: 10,
        marginTop: 10
    },

    /**
     * 获取要绘制的按钮图标
     * @override
     * @param {String} state 按钮状态
     */
    getCurrentIconDrawable: function (state) {
        var self = this,
            selected = self.isSelected(),
            iconDrawable = self.getIconDrawable(),
            selectIconDrawable = self.getSelectIconDrawable();

        if (!state) state = self.getState();

        if (selected) {
            if (state === 'normal') {
                return selectIconDrawable || iconDrawable;
            } else if (state === 'hover') {
                return self.getSelectHoverIconDrawable() || selectIconDrawable || iconDrawable;
            } else if (state === 'active') {
                return self.getSelectActiveIconDrawable() || selectIconDrawable || iconDrawable;
            }
        } else {
            return Palette.PaletteButton.superClass.getCurrentIconDrawable.call(self, state);
        }
    },

    getSerializableProperties: function() {
        var parentProperties = Palette.PaletteButton.superClass.getSerializableProperties.call(this);
        return addMethod(parentProperties, {
            borderColor: true, hoverBorderColor: true, activeBorderColor: true
        });
    }
});