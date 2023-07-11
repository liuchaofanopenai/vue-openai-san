/**
 * 转换ref属性【联调完毕】
 */

exports.rule = [
    {
        role: 'user',
        content: `
        下面给出需要转换的代码，请一步一步思考，给出转换的步骤和转换后的代码：
            <div ref="root"></div>
        `
    },
    {
        role: 'assistant',
        content: `
        【步骤】：
        1.把ref属性转换成s-ref
        2.属性值不变，ref="root"转换为s-ref="root"
        【结果】
        <template>
            <div s-ref="root"></div>
        </tempate>
        `
    }
]

exports.case = [
    {
        role: 'user',
        content: `
        下面给出需要转换的代码，请一步一步思考，给出转换的步骤和转换后的代码：
        <span ref="'text' + i">
        `
    }
]