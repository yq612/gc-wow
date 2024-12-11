import { pageConfig } from "./pageConfig";

const appStore: any = {};

/**
 * 注册app状态库
 */
export function registerStore() {
  appStore.pageConfig = pageConfig();
}

export default appStore;
