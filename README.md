# miniprogram-redux
适用于小程序的模拟redux工具，实现了dispath action后自动更新页面；

实现异形saga、logger，功能类似；

实现componentDidUpdate，在state改变后由此方法可以监控数据变化；

ps：使用该功能的页面不能使用Page构造器，因为Page构造器不支持Behavior；Component非常强大，足够满足需求。
