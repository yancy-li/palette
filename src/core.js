var Default = ht.Default,
    def = Default.def,
    ui = ht.ui,
    NULL = null;

    Default.loadUIStyle('palette', {
        'ht.ui.Palette.PaletteButton': {
            textColor: ht.ui.uiTheme.textColor,
        
            selectBackground: '#5BB5F9',
            selectHoverBackground: '#7BC3FA',
            selectActiveBackground: '#4C94CB',
    
            selectIcon: null,
            selectHoverIcon: null,
            selectActiveIcon: null,
            activeIcon: null,
            selectTextColor: '#fff',
            iconWidth: 50,
            iconHeight: 50,
            hTextPosition: 'center',
            vTextPosition: 'bottom',
            background: '#fff',
            hoverBackground: '#F0F2F5',
            activeBackground: '#EBEBEB',
            hoverIcon: null,
            
            preferredSize: {
                width: 80,
                height: 80
            },
            layoutParams: {
                marginLeft: 10,
                marginTop: 10
            }
        },
        'ht.ui.Palette&small-button ht.ui.Palette.PaletteButton': {
            iconWidth: 16,
            iconHeight: 16,
            hTextPosition: 'right',
            vTextPosition: 'middle',
            padding: 8,
            preferredSize: null
        }
    })

// Default.uiStyles.push({
//     'priority(200):ht.ui.Palette.PaletteButton': {
//         textColor: ht.ui.uiTheme.textColor,
    
//         selectBackground: '#5BB5F9',
//         selectHoverBackground: '#7BC3FA',
//         selectActiveBackground: '#4C94CB',

//         selectIcon: null,
//         selectHoverIcon: null,
//         selectActiveIcon: null,
//         activeIcon: null,
//         selectTextColor: '#fff',
//         iconWidth: 50,
//         iconHeight: 50,
//         hTextPosition: 'center',
//         vTextPosition: 'bottom',
//         background: '#fff',
//         hoverBackground: '#F0F2F5',
//         activeBackground: '#EBEBEB',
//         hoverIcon: null,
        

//         preferredSize: {
//             width: 80,
//             height: 80
//         },
//         layoutParams: {
//             marginLeft: 10,
//             marginTop: 10
//         }
//     }
// })