<template>
    <div>
        <div class="row">
        <div class="col-md-4 mt-2">
        <ul class="list-group">
            <li class="list-group-item">Id User : {{ id  }}</li>
            <li class="list-group-item">Name : {{ detail.name }}</li>
            <li class="list-group-item">Email : {{ detail.email }}</li>
        </ul>
        </div>
        </div>

        <!-- name : ddd -->
    </h1>
    <router-link class="btn btn-primary mt-2 ml-auto mb-4" :to="{ name: 'user' }">Kembali</router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            detail : {} /// objek detail nanti datanya di taro di objet
        }
    },
    mounted() {
        this.getDetail();
    },
    methods: {
        getDetail(){
            axios.get('/api/user/'+this.id).then((response) => {    // mengambil api melewati id
             console.log(response);
                this.detail = response.data;

            })
        }
    },
}
</script>

