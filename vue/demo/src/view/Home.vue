<template>
    <div id="nav">
        <template v-for="i in 10">
            <div :key="i">
                <router-link :to="`/1.${i}`">{{ `1.${i}` }}章节</router-link>
            </div>
        </template>
    </div>
    
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>

</style>