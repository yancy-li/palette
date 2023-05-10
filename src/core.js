var Default = ht.Default,
    def = Default.def,
    ui = ht.ui,
    NULL = null;

    Default.loadUIStyle('palette', {
        'ht.ui.Palette, ht.ui.Palette&middle': {
            'ht.ui.Palette.PaletteButton': {
                textFont: '14px sans-serif',
                textColor: ht.ui.uiTheme.textColor,
            
                selectBackground: '#5BB5F9',
                selectHoverBackground: '#7BC3FA',
                selectActiveBackground: '#4C94CB',
        
                selectIcon: null,
                selectHoverIcon: null,
                selectActiveIcon: null,
                activeIcon: null,
                selectTextColor: '#fff',
                iconWidth: 34,
                iconHeight: 34,
                hTextPosition: 'center',
                vTextPosition: 'bottom',
                background: '#fff',
                hoverBackground: '#F0F2F5',
                activeBackground: '#EBEBEB',
                hoverIcon: null,
                
                preferredSize: {
                    width: 70,
                    height: 70
                },
                layoutParams: {
                    marginLeft: 11,
                    marginTop: 11
                },
                iconTextGap: 6,
                padding: 6
            },
        },
        'ht.ui.Palette&small': {
            'ht.ui.Palette.PaletteButton': {
                textFont: '12px sans-serif',
                iconWidth: 28,
                iconHeight: 28,
                
                preferredSize: {
                    width: 60,
                    height: 60
                },
                layoutParams: {
                    marginLeft: 7,
                    marginTop: 7
                },
                iconTextGap: 4,
                padding: 4
            }
        },
        'ht.ui.Palette&large': {
            'ht.ui.Palette.PaletteButton': {
                textFont: '14px sans-serif',
                iconWidth: 40,
                iconHeight: 40,
                
                preferredSize: {
                    width: 80,
                    height: 80
                },
                layoutParams: {
                    marginLeft: 15,
                    marginTop: 15
                },
                iconTextGap: 8,
                padding: 8
            }
        },
        
        'ht.ui.Palette&small-button, ht.ui.Palette&small-button&middle': {
            'ht.ui.Palette.PaletteButton': {
                padding: [5, 13, 5, 13],
                textFont: '14px sans-serif',
                iconWidth: 14,
                iconHeight: 14,
                hTextPosition: 'right',
                vTextPosition: 'middle',
                preferredSize: null,
                layoutParams: {
                    marginLeft: 4,
                    marginTop: 4
                }
            }
        },
        'ht.ui.Palette&small-button&small': {
            'ht.ui.Palette.PaletteButton': {
                padding: [2, 9, 2, 9],
                textFont: '12px sans-serif',
                iconWidth: 14,
                iconHeight: 14,
                hTextPosition: 'right',
                vTextPosition: 'middle',
                preferredSize: null,
                layoutParams: {
                    marginLeft: 4,
                    marginTop: 4
                }
            }
        },
        'ht.ui.Palette&small-button&large': {
            'ht.ui.Palette.PaletteButton': {
                padding: [9, 17, 9, 17],
                textFont: '14px sans-serif',
                iconWidth: 16,
                iconHeight: 16,
                hTextPosition: 'right',
                vTextPosition: 'middle',
                preferredSize: null,
                layoutParams: {
                    marginLeft: 4,
                    marginTop: 4
                }
            }
        }
    })
