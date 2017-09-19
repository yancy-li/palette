/**
 * 每个分类面板下所有的按钮的父容器
 * @constructor
 */
Palette.PaletteContent = function () {
    Palette.PaletteContent.superClass.constructor.call(this);
};

def('ht.ui.Palette.PaletteContent', ui.ViewGroup, {

    __padding: [0, 0, 10, 0],

    /**
     * 计算 preferredSize
     * @override
     */
    figurePreferredSize: function () {
        var self = this,
            width = self.getWidth();
        if (width == NULL) {
            return {
                width: 100,
                height: 100
            };
        } else {
            var children = self.getVisibleChildren(),
                length = children.size(),
                layoutX = 0,
                rowHeight = 0,
                scrollHeight = self.getPaddingTop() + self.getPaddingBottom() + self.getBorderTop() + self.getBorderBottom();
            for (var i = 0; i < length; i++) {
                var child = children.get(i),
                    preferredSize = child.getPreferredSize(),
                    layoutParams = self.getChildLayoutParams(child) || {},
                    marginLeft = layoutParams.marginLeft || 0,
                    marginRight = layoutParams.marginRight || 0,
                    marginTop = layoutParams.marginTop || 0,
                    marginBottom = layoutParams.marginBottom || 0;

                rowHeight = Math.max(rowHeight, preferredSize.height + marginTop + marginBottom);

                // 右侧没有足够的空间，换到下一行
                if (layoutX + preferredSize.width + marginLeft + marginRight >= width) {
                    scrollHeight += rowHeight;

                    layoutX = 0;
                    rowHeight = 0;
                }

                layoutX += marginLeft + preferredSize.width + marginRight;
            }

            scrollHeight += rowHeight;
            return {
                width: width,
                height: scrollHeight
            };
        }
    },

    /**
     * 属性变化处理
     * @param {Event} e
     * @override
     */
    onPropertyChanged: function (e) {
        var self = this;
        if (e.property === 'width') {
            self.checkPreferredSize('*'); // 强制更新 preferredSize
        }
        Palette.PaletteContent.superClass.onPropertyChanged.call(self, e);
    },

    /**
     * 绘制组件
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     */
    validateImpl: function (x, y, width, height) {
        var self = this;

        Palette.PaletteContent.superClass.validateImpl.call(self, x, y, width, height);

        var children = self.getVisibleChildren(),
            size = children.size(),
            layoutX = 0,
            layoutY = 0,
            rowHeight = 0;

        for (var i = 0; i < size; i++) {
            var child = children.get(i),
                preferredSize = child.getPreferredSize(),
                layoutParams = self.getChildLayoutParams(child) || {},
                marginLeft = layoutParams.marginLeft || 0,
                marginRight = layoutParams.marginRight || 0,
                marginTop = layoutParams.marginTop || 0,
                marginBottom = layoutParams.marginBottom || 0;

            rowHeight = Math.max(rowHeight, preferredSize.height + marginTop + marginBottom);

            // 右侧没有足够的空间，换到下一行
            if (layoutX + preferredSize.width + marginLeft + marginRight >= width) {
                layoutX = 0;
                layoutY += rowHeight;
                rowHeight = 0;
            }

            self.layoutChild(child, layoutX + marginLeft, layoutY + marginTop, preferredSize.width, preferredSize.height);
            layoutX += marginLeft + preferredSize.width + marginRight;
        }
    }
});