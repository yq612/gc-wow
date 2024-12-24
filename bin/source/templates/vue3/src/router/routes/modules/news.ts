const news = [
  {
    path: "/post",
    name: "Post",
    component: () => import("~/pages/news/index.vue"),
    meta: {
      title: "Post",
    },
  },
  {
    path: "/post/:id", // 子路由，使用动态参数 :id
    name: "PostDetail",
    component: () => import("~/pages/news/detail/index.vue"), // 指定子路由的组件
    meta: {
      title: "Post Detail",
    },
  },
];

export default news;
