
  <template>
  <main>
    <navbar-component></navbar-component>
    <router-view />
    <footer-component></footer-component>
  </main>
</template>


<script>
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: { NavbarComponent, FooterComponent },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
