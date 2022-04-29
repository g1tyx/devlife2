/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Buy': '购买',
    'Achievements': '成就',
    'Automation': '自动化',
    'Automatization': '自动化',
    'Help': '帮助',
    'Price': '价格',
    'Projects': '项目',
    'Project type': '项目类型',
    'Normal': '普通',
    'Normal projects slots': '普通项目插槽',
    'Normal projects time range': '普通项目时间范围',
    'Start project': '开始项目',
    'Stats': '统计',
    'Inactive': '不可用',
    'Currency': '货币',
    'Frameworks': '框架',
    'Buy a normal project': '购买一个普通的项目',
    'Auto projects': '自动项目',
    'Adds another normal project.': '添加另一个普通项目。',
    'Big project': '大项目',
    'New project': '新项目',
    'Project': '项目',
    'Locked': '未解锁',
    'Home': '首页',
    'Millionaire!': '百万富翁！',
    'Hard reset': '硬复位',
    'Hard worker': '勤劳的人',
    'Hard worker II': '勤劳的人 II',
    'Hard worker III': '勤劳的人 III',
    'Projects sold': '项目销售',
    'Quick upgrades panel': '快速升级面板',
    'Time left': '时间剩余',
    'Upgrades': '升级',
    'The first one III': '第一个 III',
    'The first one II': '第一个 II',
    'The first one': '第一个',
    'So normal': '太普通',
    'Serious saver': '认真的储蓄者',
    'Complete your first big project': '完成你的第一个大项目',
    'Complete your first huge project': '完成你的第一个超大项目',
    'Earned': '获得',
    'Get the diamond plate.': '获取钻石盘。',
    'devlife': '开发人生',
    'Diamond worker': '钻石工人',
    'Huge project': '超大项目',
    'Merge two big projects into a huge one.': '将两个大项目合并为一个超大项目。',
    'Merge two normal projects into a big one.': '将两个普通项目合并为一个大项目。',
    '"I\'m a rich b**ch" diamond plate': '“我是富翁”钻石盘',
    'Mistery achievement': '神秘成就',
    'Show them you aro SO RICH buying this useless plate.': '向他们展示您非常有钱购买此无用的盘子。',
    'Start projects automatically.': '自动启动项目。',
    'Unlock an unpgrades panel in the main section.': '解锁主要部分中的未升级面板。',
    'Build faster with frameworks.': '使用框架构建速度更快。',
    'Complete your first normal project': '完成您的第一个普通项目',
    'I\'m sooooooooo lucky': '我太太太太太太幸运了',
    'Big': '大',
    'Big projects slots': '大项目插槽',
    'Big projects time range': '大项目时间范围',
    'Owned': '拥有',
    'Running project': '运行项目',
    'Huge': '超大',
    'Huge projects slots': '超大项目插槽',
    'Huge projects time range': '超大项目时间范围',
    'Achievement unlocked!': '成就已解锁！',
    'Active': '已激活',
    'Quick upgrades': '快速升级',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^Complete (.+) projects$/, '完成 $1 个项目'],
    [/^(.+) - (.+) seconds$/, '$1 - $2 秒'],
    [/^(.+) - (.+) seconds \+$/, '$1 - $2 秒 \+ '],
    [/^Upgrades\n(.+)$/, '升级'],
    [/^Completed (.+) of$/, '完成了 $1 \/ '],
    [/^Save (.+)$/, '节省 $1'],
    [/^Project finished. (.+)$/, '项目完成。$1'],
    [/^Unlocked - (.+)$/, '解锁 - $1'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);