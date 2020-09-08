<template>
<div class="company-item">
    <td>{{ company.title }} <button on:click="companyAbout">O</button></td>
    <td>{{ company.lastUpdated }}</td>
    <td>{{ company.branch }}</td>
</div>
</template>

<script>
export default {
    name: "CompanyItem",
    props: ["company"],
    methods: {
        companyAbout() {

        }
    }
}
</script>

<style scoped>
/*.company-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}*/

.del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}
</style>
