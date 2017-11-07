# px2rem.scss

移动端屏幕自适应方案

## 安装

```
npm install px2rem.scss --save
```

## 如何使用

1. 在html文件 `<head>` 标签中添加 `viewport` 和  `designBaseWidth - 设计稿基准宽度`，如下：

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

2. 引入 `px2rem.config.min.js` 文件，

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <title>demo</title>
  <script>
    var designBaseWidth = 375
  </script>
  <script src="path/to/px2rem.config.min.js"></script>
</head>
```

> 注意：之所以在 `<head>` 标签中引入js，是因为需要在页面渲染之前，计算更新页面基准字体大小，不然页面初始化是以 `font-size:16px` 来计算rem单位的，可能重新计算后不是这个值，页面又会重新渲染。

3. 在你的项目入口 scss 文件中使用的前引入 `px2rem.scss` 文件：

```scss
@import 'path/to/px2rem.scss';

html {
  @include font-dpr(16px);
  @include px2rem(width, 320px);
}
```

## 补充说明

`px2rem.scss` 文件中主要提供您两个 [sass mixin指令](http://sass.bootcss.com/docs/sass-reference/#mixins)：

```
font-dpr - 动态设置字体大小
px2rem - 转换px单位为rem
```

> 注意：默认计算 `rem` 单位的 html 基准字体大小为 `16px`

## License

MIT
