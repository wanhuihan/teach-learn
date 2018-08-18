<template lang="html">
    <div class="home">

        <!--  -->
        <!--  -->
        <div class="tabs">
            <Tabs >
                <TabPane label="教学" icon="md-appstore" style="margin-bottom: 0;">
                    <filterComponent></filterComponent>
                    <list ></list>
                </TabPane>
                <TabPane label="求学" icon="logo-windows" style="margin-bottom: 0;">
                    <filterComponent></filterComponent>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
import componentFilter from '../component.filter';
import list from '../component.list.vue';
export default {
    //
    components: {
        filterComponent: componentFilter,
        list: list
    }
}
</script>

<style lang="scss" >
    .tabs {
        .ivu-tabs-bar {
            margin-bottom: 1vh;
        }
    }

</style>
