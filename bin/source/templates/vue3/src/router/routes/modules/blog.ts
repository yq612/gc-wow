const blog = [
  {
    path: "/blog",
    name: "Blog",
    component: () => import("~/pages/blog/index.vue"),
    meta: {
      title: "Blog",
    },
  },
  {
    path: "/blog/:id", // 子路由，使用动态参数 :id
    name: "BlogDetail",
    component: () => import("~/pages/blog/detail/index.vue"), // 指定子路由的组件
    meta: {
      title: "Blog Detail",
    },
  },
];

export default blog;
