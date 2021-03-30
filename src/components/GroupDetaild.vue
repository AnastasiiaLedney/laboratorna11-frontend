<template>
    <button type="button" @click="edit" id="bt1"> Редагувати </button>
      <h2>{{group.OwnerName}}</h2>
    <p class="CarBrand"> Марка: {{group.CarBrand}}</p>
    <p class="CarNumber"> Номер: {{group.CarNumber}}</p>
    <p class="CarColor"> Колір: {{group.CarColor}}</p>
    <img  alt="Cover" :src="group.Cover" class="cover">
    
</template>

<script>
//import Storage from "../storage";
import axios from "axios";

export default {
    props:{
        id:String
    },
    data(){
        return{
           group:{
                CarBrand:"Test",
                CarNumber:"",
                Cover:""
            }
        }
    },
    async mounted(){
        //this.group = Storage.groups.find(group => group.Id == Number(this.id));
    try{
            let url = `https://localhost:3443/api/group/${this.id}`;
            this.group = (await axios.get(url)).data;
        } catch (err){
            console.log(err);
        }

    },
    methods:{
        async edit(){
            this.$router.push(`/group/${this.group.Id}/edit`);
        }
    }
}
</script>
<style scoped>
.cover{
  position: absolute;
  width: 170px;
  height: 170x;
  top: 45%;
  right: 88%;
}

.CarNumber{
   font-family: "Comic Sans MS", cursive, sans-serif;
     font-size: 20px;
     color:  black;
}
.CarBrand{
  font-family: "Comic Sans MS", cursive, sans-serif;
     font-size: 20px;
     color:  black;
}


.CarColor{
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 20px;
  color:  black;
}
h2
{
   font-family: "Arial Black", Gadget, sans-serif;
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
 
</style>