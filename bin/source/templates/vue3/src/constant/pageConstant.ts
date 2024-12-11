export enum PageConstant {
  // basic login path
  BASE_LOGIN = "/login",
  // basic home path
  BASE_HOME = "/home",
  // error page path
  ERROR_PAGE = "/exception",
  // 页面标题
  // eslint-disable-next-line ts/prefer-literal-enum-member
  APP_NAME = import.meta.env.VITE_APP_NAME || "Demo",
}
