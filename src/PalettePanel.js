Palette.PalettePanel = function () {
    var self = this;
    Palette.PalettePanel.superClass.constructor.call(this);


    // 展开合并状态变化时同步到 JSON
    self.on('p:expanded', function(e) {
        if (self.itemConfig) {
            if (e.newValue) {
                delete self.itemConfig.expanded;
            }
            else {
                self.itemConfig.expanded = false;
            }
        }
    }, undefined, undefined, undefined, true);
};

def('ht.ui.Palette.PalettePanel', ui.Panel, {
    
    __border: null,
    __borderRadius: 0,

    getSerializableProperties: function () {
        var parentProperties = Palette.PalettePanel.superClass.getSerializableProperties.call(this);
        delete parentProperties.children;
        return parentProperties;
    }
});