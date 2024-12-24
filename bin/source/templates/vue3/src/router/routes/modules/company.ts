const home = [
  {
    path: "/company",
    name: "Company",
    component: () => import("~/pages/company/index.vue"),
    meta: {
      title: "Company",
    },
  },
];

export default home;
