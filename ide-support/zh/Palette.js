/**
 * 调色板组件(组件面板)<br>
 * 样式属性(不含从父类继承)：dragEnabled
 * @constructor
 * @extends {ht.ui.VBoxLayout}
 */
ht.ui.Palette = function() {}

/**
 * 是否启用拖拽，如果启用，内部的按钮可以拖拽
 * @return {Boolean} 是否启用拖拽
 */
ht.ui.Palette.prototype.isDragEnabled = function() {}

/**
 * 设置是否启用拖拽
 * @param {Boolean} dragEnabled 是否启用拖拽
 */
ht.ui.Palette.prototype.setDragEnabled = function(dragEnabled) {}

/**
 * 获取内容配置 JSON
 * @return {Object} JSON 数据
 */
ht.ui.Palette.prototype.getItems = function() {}

/**
 * 设置内容配置 JSON
 * @param {Object} items JSON 数据
 */
ht.ui.Palette.prototype.setItems = function(items) {}

/**
 * 获取按钮组实例，可以在此实例上监听按钮的选中变化事件
 * @example
 * palette.getRadios().addPropertyChangeListener(function (e) {
 *       if (e.property === 'selectedButton') {
 *           var newSelectedButton = e.newValue,
 *               itemConfig = newSelectedButton.itemConfig;
 *                   
 *            console.log(newSelectedButton, itemConfig);
 *       }
 *   });
 * @return {ht.ui.Radios} 按钮组
 */
ht.ui.Palette.prototype.getRadios = function() {}

/**
 * 增加分类或按钮
 * @param {String} path 相对路径
 * @param {Object} properties 分类或按钮的配置 JSON
 * @param {String} position 增加的位置，值为：before|after|append
 * @example
 * // 在电力图标分类下的停电按钮之前增加一个按钮，新增按钮的文本内容为：TestButton
 * palette.addItem('电力图标/停电', { text: 'Test Button' }, 'before');
 *
 * // 在电力图标分类下的停电按钮之后增加一个按钮，新增按钮的文本内容为：TestButton
 * palette.addItem('电力图标/停电', { text: 'Test Button' }, 'after');
 *
 * // 在电力图标分类下最后新增一个按钮，新增按钮的文本内容为：TestButton
 * palette.addItem('电力图标', { text: 'Test Button' }, 'append');
 *
 * // 删除电力图标分类下的停电按钮
 * palette.removeItem('电力图标/停电');
 *
 * // 在电力图标分类后面新增一个分类
 * palette.addItem('电力图标', { title: 'New Category' }, 'after');
 */
ht.ui.Palette.prototype.addItem = function(path, properties, position) {}

/**
 * 移除一个分类或按钮
 * @param {String} path 路径
 */
ht.ui.Palette.prototype.removeItem = function(path, properties, position) {}

/**
 * 根据按钮 text 或分类 title 查找配置 JSON
 * @param {String} text 按钮 text 或分类 title
 * @return {Object} 配置 JSON
 */
ht.ui.Palette.prototype.findItemByText = function(text) {}


/**
 * 根据 id 查找配置 JSON
 * @param {String} id id
 * @return {Object} 配置 JSON
 */
ht.ui.Palette.prototype.findItemById = function(id) {}