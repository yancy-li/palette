/**
 * 调色板组件(组件面板)中的按钮<br>
 * 样式属性(不含从父类继承)：borderColor, hoverBorderColor, activeBorderColor
 * @constructor
 * @extends {ht.ui.ToggleButton}
 */
ht.ui.Palette.PaletteButton = function() {}

/**
 * 获取边框颜色
 * @return {Color} 颜色值
 */
ht.ui.Palette.PaletteButton.prototype.getBorderColor = function() {}

/**
 * 设置边框颜色
 * @param {Color} borderColor 颜色值
 */
ht.ui.Palette.PaletteButton.prototype.setBorderColor = function(borderColor) {}

/**
 * 获取 hover 状态的边框颜色
 * @return {Color} 颜色值
 */
ht.ui.Palette.PaletteButton.prototype.getHoverBorderColor = function() {}

/**
 * 设置 hover 状态的边框颜色
 * @param {Color} borderColor 颜色值
 */
ht.ui.Palette.PaletteButton.prototype.setHoverBorderColor = function(borderColor) {}


/**
 * 获取 active 状态的边框颜色
 * @return {Color} 颜色值
 */
ht.ui.Palette.PaletteButton.prototype.getActiveBorderColor = function() {}

/**
 * 设置 active 状态的边框颜色
 * @param {Color} borderColor 颜色值
 */
ht.ui.Palette.PaletteButton.prototype.setActiveBorderColor = function(borderColor) {}
