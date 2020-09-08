<template>
<div id="home">
    <Header />
    <router-view />
    <AddCompany v-on:add-company="addCompanies" />
    <Companies v-bind:companies="company" />

</div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/layout/header"
import Companies from "../components/companies"
import AddCompany from "../components/addCompanies"
import axios from 'axios';

export default {
    name: 'Home',
    components: {
        Header,
        Companies,
        AddCompany
    },
    data() {
        return {
            company: [{
                    id: 1,
                    title: "Komplett",
                    lastUpdated: 4,
                    branch: "Electro"
                },
                {
                    id: 2,
                    title: "Mat Butikk",
                    lastUpdated: 10,
                    branch: "Mat"
                }
            ]
        }
    },
    methods: {
        addCompanies(newCompany) {
            const {
                id,
                title
            } = newCompany;

            axios.post('newCompany', {
                id,
                title
            })
            .then(res => this.company = [...this.company, res.data])
            .catch(err => console.log(err))
            this.company = [...this.company, newCompany];
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
</style>
