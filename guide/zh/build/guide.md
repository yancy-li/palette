
索引

* [概述](#ref_description)
* [自定义组件样式](#ref_customstyle)
* [编辑器](#ref_editor)

---

!(#ref_description)

### 概述

`ht.ui.Palette` 被称为调色板或组件面板，允许用户快速访问按钮或命令，通常和 `GraphView` 组件一起使用用于实现编辑器

使用此组件需要先引入 `js` 文件

    <script src="ht.js"></script>
    <script src="ht-ui.js"></script>
    <script src="ht-ui-palette.js"></script>

`Palette` 的内容由一个 `JSON` 对象描述，参考下面的例子：

    palette.setItems([
        {
            title: '电力图标',
            children: [{
                    icon: 'imgs/停电.json',
                    text: '停电'
                },
                {
                    icon: 'imgs/在此工作.json',
                    text: '在此工作'
                },
                {
                    icon: 'imgs/已接地.json',
                    text: '已接地'
                },
                {
                    icon: 'imgs/禁止分闸.json',
                    text: '禁止分闸'
                },
                {
                    icon: 'imgs/禁止合闸.json',
                    text: '禁止合闸'
                },
                {
                    icon: 'imgs/禁止操作.json',
                    text: '禁止操作'
                },
                {
                    icon: 'imgs/设备在检修.json',
                    text: '设备在检修'
                }
            ]
        },
        {
            title: '其它',
            children: [
                {
                    iconDrawable: new ht.ui.drawable.ImageDrawable('imgs/插座.json', 'uniform'),
                    text: '插座'
                },
                {
                    iconDrawable: new ht.ui.drawable.ImageDrawable('imgs/灯.json', 'uniform'),
                    text: '灯'
                },
                {
                    iconDrawable: new ht.ui.drawable.ImageDrawable('imgs/风机.json', 'uniform'),
                    text: '风机'
                },
                {
                    iconDrawable: new ht.ui.drawable.ImageDrawable('imgs/维修.json', 'uniform'),
                    text: '维修'
                },
                {
                    iconDrawable: new ht.ui.drawable.ImageDrawable('imgs/箭头.json', 'uniform'),
                    text: '箭头'
                }
            ]
        }
    ]);

可以看到，`items` 参数是个两层 `JSON` 对象，格式非常简单，第一层用于配置分类，分类由 `ht.ui.Panel` 的子类呈现，所以参数可以是任意 `ht.ui.Panel` 的属性(本例中只有 `title` 属性)；分类的 `children` 数组包含了一组按钮配置，每个配置对象里可以配置任意 `ht.ui.ToggleButton` 属性(本例中配置了 `icon`、`iconDrawable`、`text` 属性)

如果需要监听按钮选中变化，使用下面的方式：

    palette.getRadios().addPropertyChangeListener(function(e) {
        if (e.property === 'selectedButton') {
            var newSelectedButton = e.newValue,
                itemConfig = newSelectedButton.itemConfig;
            // 打印新选中的按钮对象和相应的 JSON 配置
            console.log(newSelectedButton, itemConfig);
        }
    });

这个例子运行结果如下：

!(#example_demo@300)

如果需要动态增加按钮或删除按钮甚至是分类，可使用下面的方式：

    // 在电力图标分类下的停电按钮之前增加一个按钮，新增按钮的文本内容为：TestButton
    palette.addItem('电力图标/停电', { text: 'Test Button' }, 'before');

    // 在电力图标分类下的停电按钮之后增加一个按钮，新增按钮的文本内容为：TestButton
    palette.addItem('电力图标/停电', { text: 'Test Button' }, 'after');

    // 在电力图标分类最后新增一个按钮，新增按钮的文本内容为：TestButton
    palette.addItem('电力图标', { text: 'Test Button' }, 'append');

    // 删除电力图标分类下的停电按钮
    palette.removeItem('电力图标/停电');

    // 在电力图标分类后面新增一个分类
    palette.addItem('电力图标', { title: 'New Category' }, 'after');


!(#ref_customstyle)

###自定义组件样式

此组件支持通过 `Style` 机制配置风格：

!(#example_styledemo@300)

`Style` 样式配置代码：

    <script rel='ht-style'>
        ({
            'ht.ui.Palette.PalettePanel': {
                headerBackground: '#eeeceb',
                hoverHeaderBackground: '#d7d6d5',
                activeHeaderBackground: '#d7d6d5',
            },
            'ht.ui.Palette.PaletteButton': {
                align: 'left',
                preferredSize: { width: 100, height: 26},
                hTextPosition: 'right',
                vTextPosition: 'middle',
                iconWidth: 20,
                iconHeight: 20,
                hoverBorderColor: '#c7c7c7',
                activeBorderColor: '#c7c7c7',
                borderRadius: 6,
                activeBackground: '#ddd',
                selectBackground: '#ddd',
                activeTextColor: '#000',
                selectTextColor: '#000'
            }
        })
    </script>


!(#ref_editor)

### 编辑器

`Palette` 自带拖拽功能，通过 `setDragEnabled(true|false)` 打开或关闭(默认打开)，因此常和 `GraphView` 配合使用实现编辑器，参考下面的例子：

!(#example_editor@500)

 这里例子中用到了 `ht.ui.DragHelper` 处理拖拽，具体细节请参考 `UI` 产品包中的 `dragdrop` 手册