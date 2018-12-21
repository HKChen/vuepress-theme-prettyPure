<template>
    <header class="pp-header">
        <div class="pp-title">
            <router-link :to="$localePath">{{ $site.title }}</router-link>
            <div class="pp-solgan">{{ $site.description }}</div>
        </div>
    </header>
</template>

<script>
import './../styles/header.scss'

export default {
    name: 'Header'
}
</script>