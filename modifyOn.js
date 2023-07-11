/**
 * @file 修改绑定事件的语法
 */

exports.rule = [
    {
        role: 'user',
        content: `
        下面给出需要转换的代码，请给出转换的步骤以及转换后的结果。
        <div @focus="focus = true" @blur.native="focus = false"></div>
        `
    },
    {
        role: 'assistant',
        content: `
        【步骤】：
        1. 将@focus和@blur.native改为on-focus和on-blur。
        2. 在on-focus中添加$event参数，并将show的值设为true。
        3. 在on-blur中添加$event参数，并将show的值设为false。
        4. 使用this.data.set方法来修改值。

        【结果】：
            <template>
                <div on-focus="handleFocus($event)" on-blur="native:handleBlur($event)"></div>
            </template>
            <script>
            export default {
                methods: {
                    handleFocus(e) {
                        this.data.set('focus', true);
                    },
    
                    handleBlur(e) {
                        this.data.set('focus', false)
                    }
                }
            }
            </script>
        `
    }
]

exports.case = {
    role: 'user',
    content: `
        下面给出一段代码，请给出转换的步骤：
        <div @focus="show = true"></div>
    `
}