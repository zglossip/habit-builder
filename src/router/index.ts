import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/counters",
  },
  {
    path: "/counters",
    name: "AllCounters",
    component: () => import("../views/AllCountersView/AllCountersView.vue"),
  },
  {
    path: "/create",
    name: "CreateCounter",
    component: () => import("../views/EditCounterView/EditCounterView.vue")
  },
  {
    path: "/edit",
    name: "EditCounter",
    component: () => import("../views/EditCounterView/EditCounterView.vue"),
    props: ({params}) => ({
      counterId: params.counterId
    })
  },
  {
    path: "/counter",
    name: "ViewCounter",
    component: () => import("../views/CounterView/CounterView.vue"),
    props: ({params}) => ({
      counterId: params.counterId
    })
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
