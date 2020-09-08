<template>
  <div>
      <form @submit="addCompanies">
          <input type="text" v-model="title" name="title" placeholder="Add Companies...">
          <input type="submit" name="Submit" class="btn">
      </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import company from './companies';

export default {
    name: "AddCompanies",
    data() {
        return {
            title: ""
        }
    },
    methods: {
        addCompanies(e) {
            e.preventDefault();
            const newCompany = {
                id: uuidv4(),
                title: this.title,
            }
            // Send up to parent
            this.$emit(company, newCompany);
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
}
input[type="text"] {
    flex: 10;
    padding: 5px;
}

input[type="submit"] {
    flex: 2;
}
</style>