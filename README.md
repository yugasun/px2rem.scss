# px2rem.scss

<a href="https://www.npmjs.com/package/px2rem.scss"><img src="https://img.shields.io/npm/dm/px2rem.scss.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/px2rem.scss"><img src="https://img.shields.io/npm/v/px2rem.scss.svg" alt="Version"></a>

Self adaption plugin for mobile development.

## Install

```
npm install px2rem.scss --save
```

## Usage

1. In html `<head>` tag, add `viewport` and  `designBaseWidth`,as below：

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <title>demo</title>
  <script>
    var designBaseWidth = 375
  </script>
</head>
```

2. import `px2rem.config.min.js` file,

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <title>demo</title>
  <script>
    var designBaseWidth = 375
  </script>
  <script src="https://unpkg.com/px2rem.scss"></script>
</head>
```

> Notice：this plugin need calculate the html tag base `font-size` before dom rendering,otherwise web page will initial depend on  `font-size:16px` to calculate `rem` value,this will cause page to rerender and repain.

3. Before you use `mixins` in `px2rem.scss`, plz import firstly：

```scss
@import 'path/to/px2rem.scss';

html {
  @include font-dpr(16px);
  @include px2rem(width, 320px);
}
```

## Remarks

`px2rem.scss` provide two [sass mixin](http://sass.bootcss.com/docs/sass-reference/#mixins)：

```
font-dpr - calculate font size
px2rem - convert px to rem
```

> Notice：The default base font size is `16px` for html.

## License

MIT
