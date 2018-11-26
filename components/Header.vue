<template>
    <header id="pp-header">
        <div class="pp-title">
            <router-link :to="$localePath">{{ $site.title }}</router-link>
            <div class="pp-solgan">{{ $site.description }}</div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style src="../components/styles/header.css" />