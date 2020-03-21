<template>
  <div class="container">
    <h2>Two way Data Binding in VueJs</h2>
    <label for="name">Name: </label>
    <input type="text" v-model="name" placeholder="Enter your name" class="col-md-5 form-control">
    <label for="name">Contact No.: </label>
    <input type="text" v-model="contactNo" placeholder="Enter your contact no." class="col-md-5 form-control">
    <hr>
    <span class="h3">Welcome {{name}} ji,</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsum vel at sapiente, officiis similique harum ullam sequi ducimus? Quo velit quaerat recusandae quidem odio. Consectetur eligendi ipsa nemo placeat.</p>
    <p>Regards,</p>
    <p>{{name}}</p>
    <p>{{contactNo}}</p>
  </div>
</template>

<script>
export default {
  name: "TwoWayDataBinding",
  data: function() {
    return {
      name: '',
      contactNo: ''
    }
  }
}
</script>