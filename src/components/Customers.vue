<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert"/>
      <h1 class="page-header mt-5">Manage Customer</h1>
      <input class="form-control" placeholder="Enter First Name" type="text" v-model="filterInput">
      <br/>
      <table class="table table-striped mt-5">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in filterBy(customers, filterInput)" :key="customer.id">
            <td>{{customer.first_name}}</td>
            <td>{{customer.last_name}}</td>
            <td>{{customer.email}}</td>
            <td><router-view class="btn btn-default" v-bind:to="'/detail'+customer.id">View</router-view></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'Customers',
  data(){
    return{
      customers: [],
      alert: '',
      filterInput: '',
    }
  },
  methods: {
    fetchCustomers(){
      this.$http.get('http://slimapp/api/customers').then(res => {this.customers = JSON.parse(res.body);}); 
    },
    filterBy(list, value){
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return list.filter(function(customer){
        return customer.first_name.indexof(value) > -1;
      });
    }
  },
  created: function(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  updated: function(){
    this.fetchCustomers();
  },
  components: {
    Alert,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>