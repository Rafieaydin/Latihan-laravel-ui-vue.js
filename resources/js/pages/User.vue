<template>


    <!-- jika {{ $route.params.nama }} ada -->
    <!-- <h1 v-if="$route.params.nama">User : {{ $route.params.nama }}</h1> -->

    <!-- cara 2 menggunakan props -->
    <!-- <div v-if="id">
    <h1> User : {{ id }}
        <br>
        name : {{ detail.name }}
    </h1>
    <router-link :to="{ name: 'user' }">Kembali</router-link> -->

    <!--  cara link menggunankan href -->
    <!-- <a href="" @click.prevent="cobalink(id)">Profile link</a> -->


    <!-- </div> -->


    <!-- jika koosng makaa akan ouput erorr -->
    <!-- <h1 v-else>User : Erorr</h1> -->
    <!-- <section v-else> -->

    <!-- halaman ini hanya untuk user -->
    <section>
        <!-- <ul> -->
        <!-- loop users & index nya -->
        <!-- <li v-for="(Users, index) in User">
            {{ Users.nama }} -->
        <!-- memanggil method profile uri -->
        <!-- <router-link :to="profile_url(Users.nama)">Profile</router-link>
        </li>
    </ul> -->
        <router-link class="btn btn-primary mt-2" to="/user/create">Tambah data</router-link>
        <table class="table table-striped mt-2">
            <thead class="table-dark ">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody class="table-bordered">
                <tr v-for="(Users,index) in User">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ Users.name }}</td>
                    <td>{{ Users.email }}</td>
                    <td>
                        <router-link :to="detail_user(Users.id)" class=" btn btn-primary">Profile</router-link>
                        <router-link :to="edit_user(Users.id)" class="btn btn-warning">Edit</router-link>
                        <button class="btn btn-danger" @click.prevent="delete_user(Users.id)">Hapus</button>

                    </td>
                </tr>
            </tbody>
        </table>
    </section>

</template>

<script>
    export default {
        // props: ['id'],
        data() { // ini membuat data isinya array atau objek bisa di paling make this contoh this.User
            return {
                User: [],
                detail: {}
                // ini yang di bawah buat latihan objek biasa
                // User: [
                //     {id:1, nama:"Dana"},
                //     {id:2, nama:"Dana 1"},
                //     {id:3, nama:"Dana 2"},
                //     {id:4, nama:"Dana 3"},
                // ]
            }

        },
        watch: {
            '$route': "getUser"
        },
        mounted() {

            // axios
            // axios.get('/api/user').then((reesponse) => {
            //     this.User = reesponse.data;
            //     console.log(reesponse);
            // })

            // fetch api
            // fetch('/api/user').then(response => response.json())
            // .then(data => {
            //     this.User = data;
            //     console.log(data);
            // });

            // jalankan function getuser
            this.getUser()
        },
        methods: {
            getUser() {
                // mengamil data user
                axios.get('/api/user').then((reesponse) => {
                    this.User = reesponse.data;
                    console.log(reesponse);
                    // jika id nya ada
                    // untuk mengambil detail tapi tidak perlu jika tidak ingin  1 tempat
                    // if (this.id) {
                    // usernya di filter nyari id yang sama dan di kembaliaan dalam bentuk array
                    //     this.detail = this.User.filter(item => item.id == this.id)[0];
                    //     console.log(this.detail)
                    // }
                })
            },
            profile_url(id) {
                return '/user/' + id;
            },

            // tdetail user
            detail_user(id) {
                // seed detail to route user/id
                return '/user/' + id;
                // cara 1
                // this.$route.push('/user/'+ id).catch(()=>{});
                // opsi 2
                this.$router.push({
                    name: 'user_detail',
                    params: {
                        id
                    },
                });
            },
            // delete user
            delete_user(id) {
                if (confirm('apakah anda ingin menghapus data ini?')) {
                    axios.delete('/api/user/delete/' + id).then((reesponse) => {
                        console.log(reesponse.data.status)
                        if (reesponse.data.status) {
                            setInterval(() => {
                                location.reload(); // relog page
                            }, 1000);
                            this.$noty.success(reesponse.data.messege) // alert notify
                        }
                    })
                } else {
                    return false;
                }

            },
            edit_user(id) {
            return '/user/edit/' + id;
        }
        },

    }

</script>
