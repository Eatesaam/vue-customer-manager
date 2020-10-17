<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert" />  
    <h1 class="page-header mt-5">Add Customer</h1>
    <form @submit="addCustomer" class="form m-5">
        <div class="well">
            <h4>Customer Info</h4>
            <div class="form-group">
                <label class="form-label">First Name</label>
                <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
            </div>
            <div class="form-group">
                <label class="form-label">Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" v-model="customer.last_name">
            </div>
        </div>
         
         <div class="well">
            <h4>Customer Contact</h4>
            <div class="form-group">
                <label class="form-label">Email</label>
                <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
            </div>
            <div class="form-group">
                <label class="form-label">Phone</label>
                <input type="text" class="form-control" placeholder="Phone" v-model="customer.phone">
            </div>
        </div>

        <div class="well">
            <h4>Customer Location</h4>
            <div class="form-group">
                <label class="form-label">Address</label>
                <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
            </div>
            <div class="form-group">
                <label class="form-label">City</label>
                <input type="text" class="form-control" placeholder="City" v-model="customer.city">
            </div>
            <div class="form-group">
                <label class="form-label">State</label>
                <input type="text" class="form-control" placeholder="State" v-model="customer.state">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'Add',
  components: {
      Alert,
  },
  data(){
      return{
          customer: {},
          alert: '',
      }
  },
  methods: {
    addCustomer(event){
        if(!this.customer.first_name || !this.customer.last_name || !this.customer.email){
            this.alert = 'Please fill all fields';
        }
        else{
            let newCustomer = {
                first_name: this.customer.first_name,
                last_name: this.customer.last_name,
                email: this.customer.email,
                phone: this.customer.phone,
                address: this.customer.address,
                city: this.customer.city,
                state: this.customer.state,
            }
            this.$http.post('http://slimapp/api/customer/add', newCustomer).then( () => {
                this.$router.push({path: '/', query: {alert: 'Customer Added'}});
            });

            event.preventDefault();
        }
        event.preventDefault();
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>