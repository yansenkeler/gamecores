<template>
    <div class="home-root">
        <b-container>
            <b-row class="top-banner">
                <b-col cols="3">
                    <div class="logo">
                        <img :src="logo1" alt="logo-new">
                        <img :src="logo2" alt="store-logo-white">
                    </div>
                </b-col>
                <b-col cols="5">
                    <Tab class="tab">
                        <TabItem 
                        name="新闻"
                        tabItemLink="http://www.baidu.com"
                        ></TabItem>
                        <TabItem
                        name="文章"
                        tabItemLink="https://www.google.com"
                        ></TabItem>
                        <TabItem
                        name="电台"
                        tabItemLink="https://www.google.com"
                        ></TabItem>
                        <TabItem
                        name="视频"
                        tabItemLink="https://www.google.com"
                        ></TabItem>
                        <TabItem
                        name="GTalk"
                        tabItemLink="https://www.google.com"
                        ></TabItem>
                        <TabItem
                        name="平台"
                        tabItemLink="https://www.google.com"
                        ></TabItem>
                        <TabItem
                        name="专题"
                        tabItemLink="https://www.google.com"
                        ></TabItem>
                        <TabItem
                        name="App"
                        tabItemLink="https://www.google.com"
                        ></TabItem>
                    </Tab>
                </b-col>
                <b-col clos="2">
                    <div class="search-box">
                        <font-awesome-icon :icon="['fas', 'search']"/>
                        <input type="text" placeholder="search">
                    </div>
                </b-col>
                <b-col clos="2">
                    <Tab class="tab">
                        <TabItem 
                        name="登录"
                        tabItemLink="http://www.baidu.com"
                        ></TabItem>
                        <TabItem
                        name="注册"
                        tabItemLink="https://www.google.com"
                        ></TabItem>
                    </Tab>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid>

        </b-container>
    </div>
</template>
<script>
import Tab from "$components/Tab/Tab";
import TabItem from "$components/TabItem/TabItem";
import Slide from "$components/Slide/Slide";
import logo1 from "$assets/images/store-logo-white.png";
import logo2 from "$assets/images/logo-new.png";

export default {
  name: "Home",
  data() {
    return {
      tabData: [],
      logo1: logo1,
      logo2: logo2
    };
  },
  components: {
    Tab,
    TabItem,
    Slide
  }
};
</script>
<style scoped lang="sass">
    @import '$pages/Home/Home.sass';
</style>

