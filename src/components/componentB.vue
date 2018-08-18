<template lang="html">

    <div class="">
        this is section B
        <button type="button" @click="test" name="button">child Button</button>
        this is data from B;
        <button type="button" name="button" @click="toSister">siblings to value</button>
    </div>
</template>

<script>
//
import bus from '../eventBus.js';

export default {
    //
    methods: {
        test() {
            //
            this.$emit('toSon', 'ddddd')
        },
        //
        toSister () {
            bus.$emit('toSister', 'this is data from siblings');
        }
    }
}
</script>

<style lang="css">
</style>
