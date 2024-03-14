<template>
  <div>
    <button class="btn-float" @click="scrollToTop">
      <img class="arrow-icon" src="/src/assets/up.png" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPercentage =
        (document.documentElement.scrollTop /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100;

      this.showArrow = scrollPercentage >= 80;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scope>
.arrow-icon {
  width: 25px !important;
  height: auto;
  margin-right: 20px;
  margin-left: 7px;
  margin-bottom: 4px;
}
.exclamacion-icon {
  width: 35px !important;
  height: auto;
  margin-left: 72%;
  position: absolute;
}

.btn-float {
  position: fixed;
  z-index: 9999;
  bottom: 2%;
  right: 4.5%;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: start;
  background-color: $primary;
}

.btn-float img {
  width: 40px;
  height: auto;
}
</style>
