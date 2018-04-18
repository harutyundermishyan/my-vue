<template>
    <div class="container mt-3">
        <div class="float-left">
            <button class="btn btn-deafult">
                <router-link :to="{path: '/'}">
                    <--Back
                </router-link>
            </button>
        </div>
        <div class="card float-left">
            <div class="card-header">{{ post.title }}</div>
            <div class="card-body">{{ post.body }}</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['id'],
        data() {
        return {
            post: [],
            errors: []
        }
    },
    mounted(){
        axios.get('http://jsonplaceholder.typicode.com/posts/'+this.$route.params.id)
        .then(response => {
        // JSON responses are automatically parsed.
        this.post = response.data
    }).catch(e => {
        this.errors.push(e)
    })
    }
    }
</script>