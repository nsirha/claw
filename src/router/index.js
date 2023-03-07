import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Gsap from '@/views/Gsap.vue';
import Nice from '@/views/Nice.vue';
import NotFound from '@/views/NotFound.vue';
import Rive from '@/views/Rive.vue';
import Claw from '@/views/Claw.vue';
import Form from '@/views/Form.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Claw,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/gsap',
		name: 'Gsap',
		component: Gsap,
	},
	{
		path: '/nice',
		name: 'Nice',
		component: Nice,
	},
	{
		path: '/rive',
		name: 'Rive',
		component: Rive,
	},
	{
		path: '/claw',
		name: 'Claw',
		component: Claw,
	},
	{
		path: '/form',
		name: 'Form',
		component: Form,
	},
	{
		path: '/:catchAll(.*)',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
