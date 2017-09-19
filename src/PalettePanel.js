Palette.PalettePanel = function () {
    var self = this;
    Palette.PalettePanel.superClass.constructor.call(this);

    // 点击 header 时即切换展开合并状态
    self.getView().addEventListener(Default.isTouchable ? 'touchstart': 'mousedown', function (e) {
        var lp = self.lp(e);
        if (lp.y < self.getHeaderHeight()) {
            self.setExpanded(!self.isExpanded());
        }
    });

    // 展开合并状态变化时同步到 JSON
    self.addPropertyChangeListener(function(e) {
        if (e.property === 'expanded') {
            if (self.itemConfig) {
                if (e.newValue) {
                    delete self.itemConfig.expanded;
                }
                else {
                    self.itemConfig.expanded = false;
                }
            }
        }
    });
};

def('ht.ui.Palette.PalettePanel', ui.Panel, {
    
    __border: null,
    __borderRadius: 0,

    /**
     * 忽略展开合并工具按钮的点击事件
     * @override
     */
    getToolIndex: function() { }
});