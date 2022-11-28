import $ from 'jquery'
$('.app').css('color', 'red')

import moduleLib from './module-lib'

moduleLib({x: 1})
moduleLib.doSomething()

import umdLib from './umd-lib'
umdLib.doSomething()

// 模块插件
import moment from 'moment'
declare module 'moment' {
    export function myFunction(): void;
}
moment.myFunction = () => {}
