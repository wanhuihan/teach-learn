<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Layout>
        <Header>
            <globalHeader></globalHeader>
        </Header>
        <Content>
            <router-view></router-view>
        </Content>
        <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import globalHeader from './components/header';
//
import home from './components/home';
//
import componentA from './components/componentA';
import componentB from './components/componentB';
export default {
  name: 'app',
  //
  data () {
      return {
          name: 'Jack'
      }
  },
  //
  components: {
    HelloWorld,
    globalHeader,
    componentA,
    componentB,
    home: home
},
//
    methods: {
        // 父组件修改子组件值
        test: function() {
            this.$refs.test.test();
        },
        //
        testa: function(value) {
            //
            console.log(value);
            this.name = value;
        },
        map () {

            function test(x,y) {
                // 百度地图API功能
                //GPS坐标
                // var x = 116.32715863448607;
                // var y = 39.990912172420714;
                var  ggPoint = new BMap.Point(parseFloat(y),parseFloat(x));

                //地图初始化
                var bm = new BMap.Map("container");

                bm.centerAndZoom(ggPoint, 15);
                bm.addControl(new BMap.NavigationControl());

                //坐标转换完之后的回调函数
                var translateCallback = function (data){
                  if(data.status === 0) {
                    var marker = new BMap.Marker(data.points[0]);
                    bm.addOverlay(marker);
                    var label = new BMap.Label("转换后的百度坐标（正确）",{offset:new BMap.Size(20,-10)});
                    marker.setLabel(label); //添加百度label
                    bm.setCenter(data.points[0]);
                  }
                }

                setTimeout(function(){
                    var convertor = new BMap.Convertor();
                    var pointArr = [];
                    pointArr.push(ggPoint);
                    convertor.translate(pointArr, 1, 5, translateCallback)
                }, 1000);

            }

            function showPosition(position) {
                var lat = position.coords.latitude; //纬度
                var lag = position.coords.longitude; //经度
                alert('纬度:'+lat+',经度:'+lag);

                // theLocation(lat, lag)
                test(lat, lag);
            }

            function showError(error){
                switch(error.code) {
                case error.PERMISSION_DENIED:
                alert("定位失败,用户拒绝请求地理定位");
                break;
                case error.POSITION_UNAVAILABLE:
                alert("定位失败,位置信息是不可用");
                break;
                case error.TIMEOUT:
                alert("定位失败,请求获取用户位置超时");
                break;
                case error.UNKNOWN_ERROR:
                alert("定位失败,定位系统失效");
                break;
                }
            }
            function getLocation(){
                if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(showPosition,showError);
                }else{
                alert("浏览器不支持地理定位。");
                }
            }
            // getLocation
            getLocation()


        },

    },
    mounted () {
        // 百度地图API功能
        this.map();

        // alert(11)
        //
        // this.getLocation();
    }
}
</script>

<style lang="scss">
      .ivu-layout-header {
          color: red;
      }
      .ivu-layout-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
      }
      #app {
          .ivu-layout {
              background: #fff;
          }
      }
      #allmap {
          width: 100%;
          height: 300px;
      }
      #demo {
          width: 300px;
          height: 300px;
      }
      #container {
          width: 100%;
          // height: 300px;
      }
</style>
