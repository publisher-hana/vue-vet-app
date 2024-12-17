import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main/Main.vue'


const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/class',
    name: 'classRoom',
    component: () => import('../pages/classRoom/ClassRoom.vue')
  },
  {
    path: '/class/vod/',
    name: 'vodView',
    component: () => import('../pages/classRoom/VodView.vue'),
    props: true,
  },
  {
    path: '/class/live/',
    name: 'liveseminar',
    component: () => import('../pages/classRoom/LiveSeminar.vue'),
    props: true,
  },
  {
    path: '/library',
    name: 'vetNews',
    component: () => import('../pages/library/VetNews.vue')
  },
  {
    path: '/library/newsview',
    name: 'newsView',
    component: () => import('../pages/library/NewsView.vue')
  },
  {
    path: '/library/reportsch',
    name: 'reportsch',
    component: () => import('../pages/library/ReportSch.vue')
  },
  {
    path: '/community',
    name: 'freeBoard',
    component: () => import('../pages/community/FreeBoard.vue')
  },
  {
    path: '/community/freeBoardview',
    name: 'freeBoardview',
    component: () => import('../pages/community/FreeBoardView.vue')
  },
  {
    path: '/community/dignos_case',
    name: 'dignos_case',
    component: () => import('../pages/community/DignoseCase.vue')
  },
  {
    path: '/community/event',
    name: 'event',
    component: () => import('../pages/community/Event.vue')
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router
