<template>
  <div class="form-group">
    <slot name="label"></slot>
    <slot name="input"></slot>
    <slot name="helpText"></slot>
  </div>
</template>

<script>
export default {
  name: "FormHelper"
};
</script>