import Vue from 'vue/dist/vue'


import Posts from './components/PostsComponent.vue'
import PostItem from './components/PostItemComponent.vue'

export let routes = [
    {
        path: '/',
        component: Posts
    },
    {
        path: '/post/:id',
        component: PostItem
    }
];