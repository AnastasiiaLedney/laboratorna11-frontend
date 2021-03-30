<template>
    <div v-if="showNewGroupForm" class="whiteboard">
    <form
      v-on:submit.prevent="addNewGroup"
      class="newForm"
    >
      <button v-on:click="hide"> X </button>
      Name <input v-model="newGroup.OwnerName" /><br />
      CarBrand <input v-model="newGroup.CarBrand" /> <br />
      CarNumber <input  v-model="newGroup.CarNumber" /> <br />
      CarColor <input  v-model="newGroup.CarColor" /> <br />
       Обгортка <input type="file" v-on:change="selectCover"> <br>
       <img :src="newGroup.Cover" alt="Cover" width="100" height="200"><br> 
      <button type="submit">Додати</button>
      <button type="reset">Очистити</button>
    </form>
  </div>
</template>

<script>
export default {
    name:"NewGroupForm", 
    data(){
        return{
            showNewGroupForm: false,
            newGroup: this.modelValue,
        }
    },
    props:{
       modelValue: Object  // Vue 2 - "value"
    }, 
    methods:{
        addNewGroup(){
            this.$emit("update:modelValue", this.newGroup); //Vue 2 this.$emit("input", ...);
            this.hide();
        }, 
        show(){
            this.showNewGroupForm = true;
        },
        hide(){
            this.showNewGroupForm = false;
        },
        selectCover(event){
            const cover = event.target.files[0];
            this.newGroup.Cover = URL.createObjectURL(cover);
        }
    }, 
    watch:{
      modelValue(newValue){
        this.newGroup = newValue;
      }
    }
}
</script>

<style scoped>
.whiteboard{
  width: 1000px;
  height: 1000px;
  background: rgba(255, 255, 255, 0.384);
  position: absolute;
  z-index: 9;
}
form {
  position: absolute;
  z-index: 10;
  background: oldlace;
  margin: 100px auto;
  width: 50%;
}

</style>