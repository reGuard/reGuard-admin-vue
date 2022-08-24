<script setup lang="ts">
import Header from '../../components/Header/Header.vue'
import {currentTable} from "@/Hooks/changeTabs/changeTabs";

</script>

<template>
    <Header />
    <component :is="currentTable.tabComp"></component>
</template>

<style>

</style>