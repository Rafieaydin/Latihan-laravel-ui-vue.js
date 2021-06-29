<!DOCTYPE html>
{{-- ini component vue js --}}
<header-html>

    {{-- di dalem header bisa di tambah css lagi --}}
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <style>
            body {
                margin: 10%;
            }
    </style>

</header-html>
<body>
    <div id="app">
        {{--  @{ } adalah simbol untuk mengambil data --}}
        {{-- <h1>Hello, @{{ judul }}</h1> --}}
        {{-- v-text = "'hello'+ judul" adalah cara ke 2 untuk mengambil data  --}}
        <h1 v-text="'Latihan, ' + judul()"></h1>
        {{-- ini example component vue --}}
        {{--  header componednt itu link --}}
        <header-component></header-component>
        {{--  view dari router nya --}}
        <router-view ></router-view>
        <footer-component></footer-component>
    </div>

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
