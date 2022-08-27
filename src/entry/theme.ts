import deepmerge from 'deepmerge';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const DarkTheme = deepmerge(PaperDarkTheme, NavigationDarkTheme);
const _DefaultTheme = deepmerge(PaperDefaultTheme, NavigationDefaultTheme);
const _CustomTheme = deepmerge(PaperDarkTheme, NavigationDarkTheme);

const DefaultTheme = {
  ..._DefaultTheme,
  colors: {
    ..._DefaultTheme.colors,
    text: '#333333',
  
    placeholder: '#666666',
    background: 'rgba(128,128,128,0.1)',
    primary: '#cdd1d3',
    surface: '#cdd1d3',
  }
}

const CustomTheme = {
  ..._CustomTheme,
  colors: {
    ..._CustomTheme.colors,
    /** 文字 */
    text: '#eeeeee',
    textSecondary: '#aaaaaa',
    placeholder: '#cccccc',
    background: 'transparent',
    pageBackground: '#100000',
    surface: '#2b333e',
    backdrop: 'rgba(0,0,0,0.2)',
    primary: "#2b333e",
    accent: '#cdd1d3',
  },
};

const LightTheme = {
  ...DefaultTheme,
  colors: {
    
  }
}

export {DarkTheme, DefaultTheme, CustomTheme};

/**
 * 所有的颜色:
 * primary: appbar背景色
 * secondary: musicbar的颜色
 * textPrimary: appbar文字
 * text: 文字
 * textSecondary: 二级文字色
 * textHighlight: 文字选中色
 * textPlaceholder: 搜索框颜色
 * placeholder: placeholder颜色
 * background: 页面背景色
 * backdrop: 列表背景色
 * 
 * 
 */