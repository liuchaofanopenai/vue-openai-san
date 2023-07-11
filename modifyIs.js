/**
 * 转换:is动态组件属性【联调完毕】
 */

exports.rule = [
    {
        role: 'user',
        content: `
            下面给出需要转换的代码，请一步一步思考，给出转换的步骤和转换后的代码：
            <component :is="url ? 'a' : 'div'" :href="url"></component>
        `
    },
    {
        role: 'assistant',
        content: `
        【步骤】：
        1.把:is转换成s-is，去掉：
        2.s-is的属性值不改变，转换为s-is="url ? 'a': 'div'"
        2.遇到其他属性:href，去掉：，转换为href
        3.把属性值url转换为{{url}}
        【结果】：
        <template>
            <component s-is="url ? 'a': 'div'" href="{{ url }}" ></component>
        </template>
        `
    }
]

exports.case = [
    {
        role: 'user',
        content: `
            下面给出需要转换的代码，请一步一步思考，给出转换的步骤和转换后的代码：
            <component :is="tplData.cardName" :rawData="tplData.cartdData">
        `
    }
]