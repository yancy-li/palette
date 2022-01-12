/**
 * Palette 交互器，启动拖拽操作
 * @param {ht.ui.Palette} view 
 */
var PaletteInteractor = function (view) {
    var self = this,
        isTouchable = Default.isTouchable;
    PaletteInteractor.superClass.constructor.call(self, view);
    view.getView().addEventListener(isTouchable ? 'touchstart' : 'mousedown', function (e) {
        var button = Default.getViewAt(e);
        if (view.isDragEnabled(button)) {
            if (button instanceof ui.Button) {
                ui.DragHelper.doDrag(button, button.itemConfig, button.getRootCanvas(), 10, 10);
            }
        }
    });
};

def(PaletteInteractor, ui.Interactor, {

});