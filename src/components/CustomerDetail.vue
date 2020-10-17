<template>
  <div class="detail container">
      <router-link to="/">Back</router-link>
     <h1 class="page-header mt-5">Customer Detail
         <span class="pull-right">
           <router-link class="btn btn-primary" v-bind:to="'/edit'+ customer.id">Edit</router-link>
           <button class="btn btn-danger" @click="deleteCustomer(customer.id)">Delete</button></span>
     </h1>
     <h3 class="page-header mt-5">{{customer.first_name}} {{customer.last_name}}</h3>
     <ul class="list-group">
        <li class="list-grooup-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>{{customer.phone}}</li> 
        <li class="list-grooup-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>{{customer.email}}</li> 
     </ul>
     <ul class="list-group">
         <li class="list-group-item">{{customer.address}}</li>
         <li class="list-group-item">{{customer.city}}</li>
         <li class="list-group-item">{{customer.state}}</li>
     </ul>
  </div>

</template>

<script>
export default {
  name: 'CustomerDetail',
  data(){
      return{
          customer: '',
      }
  },
   methods: {
    fetchCustomer(id){
      this.$http.get('http://slimapp/api/customers/'+id).then(res => {this.customer = JSON.parse(res.body);}); 
    },
    deleteCustomer(id){
        this.$http.delete('http://slimapp/api/customers/delete/'+id).then(() => {this.$router.push({path: '/', query: 'Customer Deleted'});}); 
  
    }
  },
  created: function(){
      this.fetchCustomer(this.$route.params.id);
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>