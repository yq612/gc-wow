/**
 * 支持行内样式 px 转 vw
 * 本文件代码来自于 scale-view 开源项目
 * 源代码链接：https://github.com/wswmsword/scale-view
 * 非常感谢作者 @wswmsword 的支持
 */

// 实现精确的四舍五入
function round(num: number, precision = 0): number {
  const multiplier = 10 ** precision
  return Math.round(num * multiplier) / multiplier
}

// 设计稿宽度
const DESIGN_WIDTH = 1920

function vw(px: number): string {
  const vwValue = round((px / DESIGN_WIDTH) * 100, 2)
  return `${vwValue}vw`
}

export default vw
