<template>
    <div class="container">

        <div class="float-left">
            <div class="card mt-2" v-for="post in posts">
                <div class="card-header">
                    <router-link :to="{path: '/post/'+post.id}">
                        {{ post.title }}
                    </router-link>
                </div>
                <div class="card-body"> {{ post.body }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
        return {
            posts: [],
            errors: []
        }
    },

    // Fetches posts when the component is created.
    created() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
                .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data
    }).catch(e => {
        this.errors.push(e)
    })
    }
    }
</script>