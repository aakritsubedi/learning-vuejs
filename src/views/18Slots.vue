<template>
  <div class="container">
    <h1>Slots in VueJs</h1>
    <LearningSlot>
      <h2 slot="title">I am Slot Title</h2>
      <p slot="desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, quos atque aut reprehenderit delectus officiis nulla? In ea alias nobis aperiam quia itaque aliquid. Distinctio nesciunt magnam illum obcaecati harum.
      </p>
    </LearningSlot>
    <hr>
    <FormHelper>
      <small slot="helpText" class="form-text text-muted">Please enter your valid username.</small>
      <input type="text" slot="input" placeholder="Please enter your username" class="form-control">
      <label for="username" slot="label">Username</label>
    </FormHelper>
    <FormHelper>
      <small slot="helpText" class="form-text text-muted">Please enter your valid password.</small>
      <input type="password" slot="input" placeholder="Please enter your username" class="form-control">
      <label for="username" slot="label">Password</label>
    </FormHelper>
    <FormHelper>
      <small slot="helpText" class="form-text text-muted">Please write your you.</small>
      <textarea slot="input" class="form-control" placeholder="Describe yourself"></textarea>
      <label for="username" slot="label">Bio</label>
    </FormHelper>
  </div>
</template>

<script>
import LearningSlot from "@/components/18Slots/18LearningSlot.vue"
import FormHelper from "@/components/18Slots/18FormHelper.vue";

export default {
  name: 'Slots',
  components: {
    LearningSlot,
    FormHelper
  }
}
</script>