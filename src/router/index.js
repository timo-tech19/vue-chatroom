import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "../components/LoginForm.vue";
import SignUpForm from "../components/SignUpForm.vue";
import Welcome from "../views/Welcome.vue";
import ChatRoom from "../views/ChatRoom.vue";
import { auth } from "../firebase/config";

const redirectfromAuth = (to, from, next) => {
  if (auth.currentUser !== null) next({ name: "chatroom" });
  else next();
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome,
      redirect: { name: "login" },
      beforeEnter: redirectfromAuth,
      children: [
        {
          path: "login",
          name: "login",
          component: LoginForm,
          beforeEnter: redirectfromAuth,
        },
        {
          path: "signup",
          name: "signup",
          component: SignUpForm,
          beforeEnter: redirectfromAuth,
        },
      ],
    },
    {
      path: "/chatroom",
      name: "chatroom",
      component: ChatRoom,
      beforeEnter: (to, from, next) => {
        if (auth.currentUser === null) {
          next({ name: "login" });
        } else next();
      },
    },
  ],
});

export default router;
