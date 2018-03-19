/**
 * 调色板组件
 * @constructor
 */
var Palette = ui.Palette = function () {
    var self = this;
    Palette.superClass.constructor.call(self);

    self._radios = new ui.Radios();
}

def('ht.ui.Palette', ui.VBoxLayout, {
    
    // 样式属性
    ui_ac: ['dragEnabled'],

    /* items 格式：
     *   {
     *       title: 'Panel1',
     *       icon: 'node',
     *       children: [
     *           {
     *               text: 'node1',
     *               icon: 'node2'
     *           }
     *       ]
     *   }
     */
    ms_ac: ['items'],

    __dragEnabled: true,

    getInteractorClasses: function() {
        return [PaletteInteractor].concat(Palette.superClass.getInteractorClasses.call(this));
    },

    /**
     * 返回内部的 Radios 实例，可在此实例上监听按钮选中状态变化
     * @return {ht.ui.Radios}
     */
    getRadios: function() {
        return this._radios;
    },

    /**
     * 属性变化处理
     * @param {Event} e
     * @override
     */
    onPropertyChanged: function (e) {
        var self = this,
            property = e.property;

        if (property === 'items') {
            self.invalidateComps();
        }
        Palette.superClass.onPropertyChanged.call(self, e);
    },

    /**
     * 设置标记以便下次更新时重新构建子组件
     */
    invalidateComps: function () {
        var self = this;
        if (!self._invalidateComps) {
            self._invalidateComps = true;
        }
        self.iv();
    },

    /**
     * 重新构建子组件
     */
    validateComps: function () {
        var self = this,
            items = self.getItems();

        self._radios.clear();
        self.clear();

        for (var i = 0, length = items.length; i < length; i++) {
            var item = items[i],
                childrenItems = item.children || [];

            var panel = new Palette.PalettePanel();
            panel.itemConfig = item;
            for (var key in item) {
                if (key !== 'children') {
                    if (panel[Default.setter(key)])
                        panel[Default.setter(key)](item[key]);
                }
            }

            var panelContent = new ui.FlowLayout();
            panelContent.__padding = [0, 0, 10, 0];
            for (var j = 0, childrenLength = childrenItems.length; j < childrenLength; j++) {
                var childItem = childrenItems[j],
                    button = new ui.Palette.PaletteButton();

                button.itemConfig = childItem;
                self._radios.add(button);
                for (var key in childItem) {
                    if (button[Default.setter(key)])
                        button[Default.setter(key)](childItem[key]);
                }
                panelContent.addView(button);
            }

            panel.setContentView(panelContent);
            self.addView(panel, {
                width: 'match_parent',
                height: 'wrap_content'
            });
        }
    },

    /**
     * 绘制组件
     * @override
     */
    validate: function () {
        var self = this;

        if (self._invalidateComps) {
            self.validateComps();
            self._invalidateComps = null;
        }

        Palette.superClass.validate.call(self);
    },

    /**
     * 添加一个分类或按钮
     * @param {String} path 菜单路径，使用 / 分隔，例如：Parent/Child
     * @param {Object} properties 配置对象
     * @param {String} position before|after|append
     */
    addItem: function (path, properties, position) {
        var self = this,
            items = self.getItems(),
            pathArr = self._splitPath(path),
            relatedItem, parentItem;

        if (!items) items = self._items = [];

        for (var i = 0, length = pathArr.length; i < length; i++) {
            parentItem = relatedItem;
            items = parentItem ? parentItem.children : items;

            relatedItem = self._findItemByText(items, pathArr[i]);
        }

        if (relatedItem) {
            if (position === 'append' || position == NULL) {
                items = relatedItem.children || [];
                parentItem = relatedItem;

                items.push(properties);
            } else if (position === 'before') {
                items.splice(items.indexOf(relatedItem), 0, properties);
            } else if (position === 'after') {
                items.splice(items.indexOf(relatedItem) + 1, 0, properties);
            }

            if (parentItem) {
                parentItem.children = items;
            }
            else {
                self._items = items;
            }

            self.fp('items', NULL, self.getItems());
        }
    },

    /**
     * 删除分类或按钮
     * @param {String} path
     */
    removeItem: function (path) {
        var self = this,
            items = self.getItems(),
            pathArr = self._splitPath(path),
            relatedItem, parentItem;

        if (!items) items = self._items = [];

        for (var i = 0, length = pathArr.length; i < length; i++) {
            parentItem = relatedItem;
            items = parentItem ? parentItem.children : items;

            relatedItem = self._findItemByText(items, pathArr[i]);
        }

        if (relatedItem) {
            items.splice(items.indexOf(relatedItem), 1);

            if (parentItem) {
                parentItem.children = items;
            }
            else {
                self._items = items;
            }
        }

        self.fp('items', NULL, self.getItems());
    },

    /**
     * 根据 title 或 text 查找 item
     */
    findItemByText: function (text) {
        var foundItem;
        this.forEach(function (item) {
            if (item.text === text || item.title === text) {
                foundItem = item;
                return false;
            }
        });
        return foundItem;
    },

    /**
     * 根据 id 查找 item
     */
    findItemById: function (id) {
        var foundItem;
        this.forEach(function (item) {
            if (item.id === id) {
                foundItem = item;
                return false;
            }
        });
        return foundItem;
    },

    forEach: function (func, scope, parentItem) {
        var self = this,
            items = parentItem ? parentItem.children : self.getItems();
        if (items) {
            var length = items.length;
            for (var i = 0; i < length; i++) {
                var item = items[i];
                var v = func.call(scope || self, item);
                if (v === false) return v;
                self.forEach(func, scope, item);
            }
        }
    },

    _splitPath: function (path) {
        var part = false, // 是否在 ` 符号中
            section = "",
            pathArr = [];

        for (var i = 0; i < path.length; i++) {
            var character = path[i];
            if (character === '/') {
                if (!part) {
                    pathArr.push(section);
                    section = "";
                    continue;
                }
            } else if (character === '`') {
                part = !part;
                continue;
            }

            section += character;
        }
        pathArr.push(section);
        return pathArr;
    },

    _findItemByText: function (items, text) {
        if (!items) return;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.text === text || item.title === text) {
                return item;
            }
        }
    }
});