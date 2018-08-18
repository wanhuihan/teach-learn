
//
// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
//
Mock.mock('http://test.data.com', {
    'list|5-10': [{
        'id|+1': 1,
        'name': '@name',
        'title': '@title',
        'rate|0-5': 1,
        'learnedNum|0-100' : 1,
        'email': '@EMAIL',
        'price|1-100.1-2': 10.00
    }]
})
// 输出结果
// console.log(JSON.stringify(data, null, 4))
