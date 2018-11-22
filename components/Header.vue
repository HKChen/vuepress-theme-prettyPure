<template>
    <header id="pp-header">
        <div class="pp-title">
            <a href="/">HKC Tech.</a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
.pp-title {
    margin: 0 auto;
    font-family: 'deftone-stylus';
    font-size: 150px;
    font-weight: 100;
    text-align: center;
    border-bottom: 1px solid #eee;
}

.pp-title > a {
    color: #000;
    text-decoration: none;
}
</style>