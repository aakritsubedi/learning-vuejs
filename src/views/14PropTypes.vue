<template>
  <div class="container">
    <h2>Primitive and Reference Type</h2>
    <ul>
      <li>
        <h3>Primitive Type</h3>
        <p>Primitive types are primitive datatype passed as props which create the reference on the component using it. Eg. Primitive Datatype:  Number, String </p>
      </li>
      <li>
        <h3>Reference Type</h3>
        <p>Reference types are non-primitive datatype passed as props which uses the same reference on the parent component. Eg. Non-Primitive Datatype: Array, Objects </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PropTypes'
}
</script>