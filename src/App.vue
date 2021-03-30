<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color:;">
  <div class="container-fluid">
<router-link to="/" class="navbar-brand" > Додому </router-link>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/about" class="nav-link active" aria-current="page"> про автора </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <router-view></router-view>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {};
  },
  async mounted() {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cat-fact.herokuapp.com/facts");
    xhr.send();
    xhr.onloadend = () => {
      console.log(xhr);
      if (xhr.status == 200) {
        console.log(xhr.response);
      } else {
        console.log(xhr.statusText);
      }
    };


    try {
      let res = await fetch("https://cat-fact.herokuapp.com/facts");
      if (res.ok) {
        let facts = await res.json();
        console.log(facts);
      }
    } catch (err) {
      console.log(err);
    }

    try {
      let facts2 = (await axios.get("https://cat-fact.herokuapp.com/facts"))
        .data;
      console.log(facts2);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
<style scoped>

</style>