<template>
  <section class="control">
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color:;">
  <div class="container-fluid">
 <router-link to="/group/new" class="navbar-brand" id="bt1"> Додати  </router-link>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">  
         <input type="button" id="bt2"  value="Видалити" class="nav-link active" v-on:click="deleteGroup">
        </li>
      </ul>
      <form class="d-flex">
        <input type="text"  id="fnd" placeholder="Шукати за номером " v-model="searchCarNumberString">
      </form>
    </div>
  </div>
</nav>
<h3>Обрано: {{ selected }}   </h3> 
  </section>
  <div class="wrap">
    <new-group-form 
      v-model = "newGroup"
      @submit.prevent="addNewGroup"
      ref="newGroupForm"
    > </new-group-form>
    <new-group-form
      v-model = "editGroup"
      ref="editGroupForm"
    >
    </new-group-form>

    <ul  v-if="filtredGroups.length > 0">
      <group-template
        v-for="b in filtredGroups"
        :key="b.Id"
        class="groupVue"
        v-on:click="selectGroup(b.Id)"
        v-bind:group="b"
      >
      </group-template>
    </ul>
     <p v-if="groups.length == 0">Йде завантаження</p>
  </div>
</template>

<script>
import GroupTemplate from './GroupTemplate.vue';
import NewGroupForm from './NewGroupForm.vue';
import axios from "axios";

export default {
  name: "App",
  components:{
    GroupTemplate,
    NewGroupForm
  },
  data() {
    return {
      searchCarNumberString:"",
      selected: null,

      groups: [],
      newGroup: {
        OwnerName:"",
        CarBrand:"",
        CarNumber:"",
        CarColor:"",
        Cover:""
      
      },
      editGroup: {},
    };
  },
  async mounted() {
    try {
      this.groups = (await axios.get("https://localhost:3443/api/group")).data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {

    addNewGroup() {
      console.log(this.newGroup);
      let newGroupCopy = Object.assign({}, this.newGroup);
      newGroupCopy.Id = parseInt(Date.now());
      this.groups.push(newGroupCopy);
      this.showNewGroupForm = false;
    },
    showForm() {
      this.$refs.newGroupForm.show();
    },
    selectGroup(id) {
      this.selected = id;
    },
    showEditForm() {
      if (this.selected) {
        let index = this.groups.findIndex((group) => group._id == this.selected);
        this.editGroup = this.groups[index];
        console.log(this.editGroup);
        this.$refs.editGroupForm.show();
      } else alert("Choose the car");
    },
    async deleteGroup() {
     
      try{
          let deletedGroup = (await axios.delete(`https://localhost:3443/api/group/${this.selected}`)).data;
          this.groups =[];
          alert (`Group ${deletedGroup.CarBrand} was deleted`);
          this.groups = (await axios.get("https://localhost:3443/api/group")).data;
      } catch (err){
          console.log(err)
      }
    },
    closeForm() {
      this.showNewGroupForm = false;
    },
 
  },
 computed:
{
sortedGroups()
{ function CompareGroups(group1,group2){

if(group1.CarBrand>group2.CarBrand){
return 1;
}
if(group1.CarBrand<group2.CarBrand)
 
   return -1;
   
 if(group1.CarColor>group2.CarColor)
 
   return 1;
   

 if(group1.CarColor<group2.CarColor)
 
   return 1;
 
 
   return 0;
 

}
  return [...this.groups].sort(CompareGroups);
},
filtredGroups()
{
  if(this.searchCarNumberString=="")
  return this.sortedGroups;
  return this.sortedGroups.filter((b) => b.CarNumber.includes(this.searchCarNumberString));
},
selectedIndex(){
  if(this.selected)
  return  this.groups.findIndex((group) => group._Id == this.selected);
   return -1;
}
}
};
</script>

<style scoped>
h3
{
 font-family: "Comic Sans MS", cursive, sans-serif;
     font-size: 20px;
     color:  black;
}
#bt1{
  background:#FFA500;
  color:#fff;
  border:none;
  position:relative;
  height:40px;
  font-size:1.2em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
}
#bt1:hover{
  background:#fff;
  color:#808000;
}
#bt1:before,#bt1:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #1AAB8A;
  transition:400ms ease all;
}
#bt1:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
#bt1:hover:before,#bt1:hover:after{
  width:100%;
  transition:800ms ease all;
}
#bt2{
  background:#FFA500;
  color:#fff;
  border:none;
  position:relative;
  height:40px;
  font-size:1.1em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
}
#bt2:hover{
  background:#fff;
  color:#808000;
}
#bt2:before,#bt2:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #1AAB8A;
  transition:400ms ease all;
}
#bt2:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
#bt2:hover:before,#bt2:hover:after{
  width:100%;
  transition:800ms ease all;
}

.wrap{
  position: relative;
}
#fnd
{
  background:#EEE8AA;
  color:black;
  border:none;
  position:relative;
  height:40px;
  font-size:1.1em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
   font-family: "Comic Sans MS", cursive, sans-serif;
     font-size: 20px;
     color:  black;
}
</style>