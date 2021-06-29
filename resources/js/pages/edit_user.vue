<template>
    <div class="card">
        <div class="container-fluid">

            <div class="col-md-12 mt-5 mb-5">
                <div v-show="success">
                    <div class="alert alert-primary" role="alert">
                        Data berhasil di tambahkan
                    </div>
                </div>
                <form @submit.prevent="submit()" action="/user/post" method="POST">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="text" class="form-control" name="username" v-model="form.name">
                        <div class="error text-danger" v-if="error.name">
                            {{ error.name[0] }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email  address</label>
                        <input type="email" class="form-control" name="email" v-model="form.email">
                         <div class="error text-danger" v-if="error.email">
                            {{ error.email[0] }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <!-- v model mengamil dari data -->
                        <input type="password" class="form-control" name="password" v-model="form.password">
                        <div class="error text-danger" v-if="error.password">
                            {{ error.password[0] }}
                        </div>
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <router-link class="btn btn-danger" to='/user'>back</router-link>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                success: false, // untuk alert di form
                // mengambil data form
                form: {
                    name: 'alo',
                    email: 'alo',
                },
                error: {} // untuk erorr
            }
        },
        mounted() {
            this.getUser()
        },
        methods: {
            getUser(){
                axios.get('/api/user/edit/'+ this.id).then((response) => {
                    console.log(response)
                    this.form = {
                        name : response.data.name,
                        email : response.data.email
                    }
                })
            },
            submit() {
                console.log(this.id);
                // axios.post('/user/post',{})
                // console.log(this.form);
                // mengirim data mengguanak method post
                console.log(this.form);
                axios.put('/api/user/update/'+this.id, this.form).then((response) => {

                    console.log(response);
                    // jika statusnya trus
                    if (response.data.status) {
                        console.log(response.data.messege);
                        this.$noty.success(response.data.messege) // alert notify
                        this.$router.push({
                            name: "user"
                        });
                    }
                    // menangkap erornya
                }).catch((error) => {
                            console.log(error.response.data.errors);
                            // masukin erorr ke objek erorr
                            this.error = error.response.data.errors;
                    });
            }
        },

    }

</script>
