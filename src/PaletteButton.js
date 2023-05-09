/**
 * 面板中的按钮组件
 */
Palette.PaletteButton = function () {
    var self = this;
    Palette.PaletteButton.superClass.constructor.call(self);

    // selected 状态变化时同步到 JSON 中
    self.on('p:selected', function (e) {
        if (self.itemConfig) {
            if (e.newValue) {
                self.itemConfig.selected = true;
            } else {
                delete self.itemConfig.selected;
            }
        }
    }, undefined, undefined, undefined, true);
};

def('ht.ui.Palette.PaletteButton', ui.ToggleButton, {
    
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
    }
});