<template lang="html">

    <div class="content_list">
        <!-- {{TeachCourses}} -->
        <ul>
            <li class="list_item" v-for="item in teachCourses" @click="toDetails">
                <div class="list_item_profile">
                    <img src="https://dummyimage.com/300" alt="">
                </div>
                <div class="list_item_desc">
                    <h2>{{item.title}}</h2>
                    <div class="rate">
                        <Icon type="ios-star"  />
                        <Icon type="ios-star" />
                        <Icon type="ios-star" />
                        <Icon type="ios-star" />
                        <Icon type="ios-star" />
                        5.0
                        <span class="learn_record">60人学过</span>
                        <div class="price">
                            ￥{{item.price}}
                        </div>
                    </div>

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    //
    //
    data () {
        return {
            teachCourses: [],
        }
    },
    mounted () {
        // console.log(this.$http);
        this.$http.get('http://test.data.com').then(function(data) {
            // console.log(data);
            console.log(this);
            this.teachCourses = data.data.list;
        }.bind(this))
    },
    //
    methods: {
        toDetails () {
            //
            // console.log(this.$router.push);
            this.$router.push('details/sdf');
        }
    }
}
</script>

<style lang="scss">
    .content_list {
        padding: 1.5vh;
        ul {
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            font-size: 0;
            .list_item {
                width: 50%;
                margin-bottom: 1.5vh;
                &:nth-child(odd) {
                    padding-right: 0.75vh;
                }
                &:nth-child(even) {
                    padding-left: 0.75vh;
                }
                .list_item_profile {

                    img {
                        width: 100%;
                        height: 15vh;
                    }
                }
                .list_item_desc {
                    // width: 70%;
                    font-size: 1.5vh;
                    h2 {
                        margin-top: 1vh;
                        font-size: 1.8vh;
                    }
                }
            }
        }
    }
    //
    .rate {
        &:after {
            // clear:both;
        }
        .ivu-icon {
            font-size: 2vh;
        }
        .learn_record {
            float: right;
        }
        .price {
            clear: both;
            font-size: 2vh;
            color: #ed4014;
        }
        .ivu-icon {
            color: #19be6b;
        }
    }
</style>
