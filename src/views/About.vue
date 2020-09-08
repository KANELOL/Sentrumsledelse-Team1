<template>
<div class="about">
    <Header />
    <router-view />
    <h1>This is an about page</h1>
</div>
</template>

<script>
import Header from "../components/layout/header"

export default {
    name: 'about',
    components: {
        Header
    }
}
</script>
