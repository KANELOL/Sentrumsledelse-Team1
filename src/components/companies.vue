<template>
<!--<div>
    <table v-bind:key="company" v-for="company in companies">
        <tr>
            <td>{{ company.title }} <button on:click="companyAbout">O</button></td>
            <td>{{ company.lastUpdated }}</td>
            <td>{{ company.branch }}</td>
        </tr>
    </table>
</div>-->

<div style="width: 600px">
    <!-- <AddCompany v-on:add-company="addCompanies" /> -->
    <vue-table-dynamic :params="params" ref="table"></vue-table-dynamic>
</div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
// import AddCompany from "./addCompanies"
// import axios from 'axios';

export default {
    name: "Companies",
    components: {
        VueTableDynamic
    },
    props: ["companies", "company"],
    // methods: {
    //     addCompanies(newCompany) {
    //         const {
    //             id,
    //             title
    //         } = newCompany;

    //         axios.post(newCompany, {
    //             id,
    //             title
    //         })
    //         .then(res => this.company = [...this.company, res.data])
    //         .catch(err => console.log(err))
    //         this.params.data = [...this.params.data, newCompany];
    //     }
    // }
    data() {
        return {
            params: {
                data: [
                    [1, 'Navn', 'Sist Oppdatert', 'Bransje'],
                    [1, `Komplett`, '4', 'Electro'],
                    [2, 'Mat Butikk', '10', 'Grocery Store'],
                    [3, '63788d', 'a8c325', 'aab418'],
                    [4, 'hf7y8c', '4rghjk', 'cgnhik'],
                    [5, '', '', '']
                ],
                header: 'row',
                border: true,
                stripe: true,
                enableSearch: true,
                sort: [0,2,3],
                pagination: true,
                pageSize: 10

            }
        }
    }
}
</script>

<style scoped>
table,
th,
td {
    border: 1px solid black;
    padding: 5px;
}

div {
    display: inline-block;
}
</style>
