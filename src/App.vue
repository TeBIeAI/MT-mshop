<template>
    <div id="app">
        <router-view />
        <Tab-bar></Tab-bar>
    </div>
</template>

<script>
import TabBar from 'cpt/tabbar'
export default {
    components: {
        TabBar
    }
}
</script>

<style>
@import './style/common.scss';
</style>
