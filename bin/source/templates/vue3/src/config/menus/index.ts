/**
 * @name 顶部菜单栏
 */

export interface MenuItem {
  name: string;
  /** 路由名称 */
  path?: string;
  /**
   * 滚动的目标元素
   * - 如果没有 path，会在当前页面触发
   * - 有 path，先跳转，后触发
   */
  selector?: string;
  children?: MenuItem[];
}

export const headerMenu: MenuItem[] = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Life Goals",
    path: "/",
    selector: "goals",
  },
  {
    name: "Help",
    path: "/help",
    children: [
      { name: "Company", path: "/company" },
      { name: "FAQ", path: "/help/faq" },
    ],
  },
  { name: "News & Updates", path: "/post" },
];

