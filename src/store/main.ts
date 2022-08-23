import { defineStore } from 'pinia'
import { Component} from "vue";

export const useStore = defineStore('main', {
    state:()=>{
        return {
        }
},
actions:{
        changeCurrent(value:Component){
        }
}
})