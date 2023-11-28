<template>
    <div @click="fire(filter)" :class="filter" class="filter-1" :style="`background-image:url(${uploadImage})`">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'filterBox',
    props:{
        uploadImage : String,
        filter : String
    },
    methods:{
        fire(filter){
            this.emitter.emit('발사',filter);
        }
    }

}
</script>

<style>

</style>