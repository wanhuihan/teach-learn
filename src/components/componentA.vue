<template lang="html">

    <div class="">
        this is section A {{$props.name}}, {{text}}
    </div>
</template>

<script>
import bus from '../eventBus.js';

export default {
    props: ['name'],
    data () {
        return {
            text: 'this is a'
        }
    },
    //
    methods: {
        test () {
            this.text = 'i have changed';
        },
        //

    },
    //
    mounted () {

        bus.$on('toSister', (data)=> {
            console.log(data);
        })
    }
}
</script>

<style lang="css">
</style>
