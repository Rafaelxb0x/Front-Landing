<template>
  <div class="header-content">
    <div class="navbar-text text-h3 q-py-md text-bold q-ml-lg">Softlabs</div>
    <div>
      <q-btn unelevated name="Choose us" label="Choose us" />
      <q-btn unelevated name="Gallery" label="Gallery" />
      <q-btn unelevated name="Values" label="Values" />
      <q-btn unelevated name="Pricing" label="Pricing" />
      <q-btn unelevated name="Contact" label="Contact" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 9999;
  padding: 0 16px;
}
</style>
