import {createRouter, createWebHistory} from "vue-router";

import About from "./components/About";
import Groups from "./components/Groups.vue";
import GroupTemplate from "./components/Groups.vue";
import GroupDetaild from "./components/GroupDetaild";
import EditForm from "./components/FullScreenEditGroup.vue";
import NewForm from "./components/FullScreenNewGroup.vue";


const Router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            component: Groups
        },
        {
            path:"/about",
            component: About
        },
        {
            path:"/GroupTemplate",
        component: GroupTemplate

        },
       
       
        {
            path:"/group/:id",
            component: GroupDetaild,
            props:true
        },
        {
            path:"/group/:id/edit",
            component: EditForm,
            props:true
        },
        {
            path:"/group/new",
            component: NewForm
        },
        
    ]
});

export default Router;