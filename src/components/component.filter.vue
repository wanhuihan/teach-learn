<template lang="html">
    <div class="filter">

        <ul>
            <li>
                <Icon type="ios-arrow-round-up" />
                按距离排序
            </li>
            <li>
                <Icon type="ios-arrow-round-up" />
                按价格排序
            </li>

        </ul>


    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    //
    .filter {
        // background: red;
        padding: 1.5vh;
        border-bottom: 1px solid #eee;
        ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            justify-content: left;
            line-height: 100%;
            li {
                margin-right: 3vh;
                .ivu-icon {
                    font-size: 2.5vh;
                }
            }
        }
    }
</style>
