/**
 * for指令转换
 */

exports.rule = [
    {
        role: 'user',
        content: `
            下面给出需要转换的代码，请一步一步思考，给出转换的步骤和转换后的代码：
            <p a-for="(item, index) in list" :key="index">1</p>
        `
    },
    {
        role: 'assistant',
        content: `
            【步骤】：
            1.把a-for修改成s-for
            2.把(item, index)修改为item, index
            3.去掉:key="index"
            【结果】：
            <template>
                <p s-for="item, index in list">1</p>
            </template>
        `
    }
]

exports.case = [
    {
        role: 'user',
        content: `
        下面给出需要转换的代码，请一步一步思考，给出转换的步骤和转换后的代码：
        <div a-for="(item, index) in allList" :key="'list'+index">
        `
    }
]