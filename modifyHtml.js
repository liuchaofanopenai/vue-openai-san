/**
 * 转换v-html指令
 */

exports.rule = [
    {
        role: 'user',
        content: `
            下面给出需要转换的代码，请一步一步烧烤，给出转换的步骤和转换后的代码：
            <div v-html="html"></div>
        `
    },
    {
        role: 'assistant',
        content: `
        【步骤】：
        1.v-html转换为s-html
        2.html转换为{{html}}
        【结果】
        <template>
            <div s-html="{{html}}"></div>
        </template>
        `
    },
];

exports.case = [
    {
        role: 'user',
        content: `
        下面给出需要转换的代码，请一步一步烧烤，给出转换的步骤和转换后的代码：
        <div v-html="question"></div>
        `
    }
]