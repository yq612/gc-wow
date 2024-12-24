const home = [
  {
    path: "/help",
    name: "Help",
    component: () => import("~/pages/help/index.vue"),
    meta: {
      title: "Home",
    },
    children: [
      {
        path: "/help/faq",
        name: "FAQ",
        component: () => import("~/pages/help/faq/index.vue"),
        meta: {
          title: "Help-FAQ",
        },
      },
    ]
  },

];

export default home;
