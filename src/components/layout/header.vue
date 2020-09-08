<template>
<header class="header">
    <h1>For Sentrumslederse</h1>
    <div id="nav">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
    </div>
</header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
}

.header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
}
</style>
