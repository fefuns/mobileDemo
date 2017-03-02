001-整体结构的思考

第一天，你拿到了一张主页的设计稿。可能它长这样。标准的header固定在上，footer固定在下，content中间滚动。

![](http://pic.k7dj.com/pic/2929.jpg) <br>
你觉得很简单，直接header定位，footer定位，content设置overflow-y:auto;上下padding完事。
第二天，你拿了文章页的设计稿，可能发现它只有header跟content了。没有了footer。
那你第一天给content设置的padding-bottom又想取消它。
可是取消之后，主页又不正常了。

如何写一套样式让这个项目中的content区域能自动撑满页面剩余的部分？

第三天，主页改版，在header的左边，添加了一个用户图标，并且点击用户图标，需要侧滑出一个aside菜单栏出来。
比如这种。

![](http://pic.k7dj.com/pic/2930.png)

这时候又得思考，如果aside菜单内容过多，超过了手机的一屏需要在aside内滚动怎么办？
当你写完了发现滚动aside的时候，怎么右边的content区域也跟着再滚？

避免以后再踩这些坑，索性想一套可以一劳永逸的css布局方案。整体结构最为常见的复杂程度也无非就是
header+content+footer+aside类型，如果没有这么复杂，那删掉某一部分的html结构就行。