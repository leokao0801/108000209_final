<template>
  <div>
    <div id="headPic01">
      <img src="../assets/清大logo.png" width="50px">
    </div>
    <div id="headPic02">
      <img src="../assets/清大標準字.jpg" height="35px">
    </div>
    <div id="headPic03">
      <img src="../assets/藝術學院標準字.jpg" height="100px">
    </div>


    <a href = "http://localhost:8080/#/Final_contact" target = "_current">
      <headBar01>聯絡資訊</headBar01>
    </a>
    <headLine01></headLine01>
    <a href = "http://localhost:8080/#/Final_magazine" target = "_current">
      <headBar02>藝術學報</headBar02>
    </a>
    <headLine02></headLine02>
    <headBar03>學院影音</headBar03>
    <headLine03></headLine03>
    <headBar04>榮譽榜</headBar04>
    <headLine04></headLine04>
    <headBar05>招生訊息</headBar05>
    <headLine05></headLine05>
    <a href = "http://localhost:8080/#/Final_regulation" target = "_current">
      <headBar06>規章</headBar06>
    </a>
    <headLine06></headLine06>
    <headBar07>師資</headBar07>
    <headLine07></headLine07>
    <a href = "http://localhost:8080/#/Final_about" target = "_current">
      <headBar08>關於</headBar08>
    </a>
    <headLine08></headLine08>
    <a href = "http://localhost:8080/#/" target = "_current">
      <headBar09>首頁</headBar09>
    </a>



    <bg01></bg01>
    <bg02></bg02>



    <notice01>聯絡資訊</notice01>
    <el-table
      :data="tableData"
      style="width: 1070px; position: absolute; left: 50%; margin-top: 120pt; margin-left: -400pt">
      <el-table-column
        prop="apartment"
        label="院(系)"
        width="240">
      </el-table-column>
      <el-table-column
        prop="telephone"
        label="電話"
        width="360">
      </el-table-column>
      <el-table-column
        prop="fax"
        label="傳真"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="電子信箱">
      </el-table-column>
    </el-table>



    <notice02>校園地圖</notice02>
    <title01>校本部地圖</title01>
    <title02>南大校區地圖</title02>



    <div class="map01">
      <el-image
        style="width: 500px; position: absolute; left: 50%; margin-top: 455pt; margin-left: -400pt"
        :src="url01" 
        :preview-src-list="srcList01">
      </el-image>
    </div>
    <div class="map02">
      <el-image 
        style="width: 500px; position: absolute; left: 50%; margin-top: 455pt; margin-left: 25pt"
        :src="url02" 
        :preview-src-list="srcList02">
      </el-image>
    </div>



    <text01>地址 : 300新竹市東區光復路二段101號</text01>
    <text02>地址 : 30014新竹市南大路521號</text02>



    <banner></banner>
  </div>
</template>

<script>
export default {
  name: 'Final_contact',
  data () {
    return {
      tableData: [{
        apartment: '藝術學院',
        telephone: '+886-3-5715131 #78801 or #78802',
        fax: '+886-3-5619170',
        email: 'coa@my.nthu.edu.tw'
      }, {
        apartment: '藝術設計學系',
        telephone: '+886-3-5715131 #72901 or #72903',
        fax: '+886-3-5245209',
        email: 'artist@my.nthu.edu.tw'
      }, {
        apartment: '音樂學系',
        telephone: '+886-3-5715131 #73101 or #73103 or #73104',
        fax: '+886-3-5245192',
        email: 'dme@mail.nhcue.edu.tw'
      }, {
        apartment: '藝術學院學士班(科技藝術組)',
        telephone: '+886-3-5715131 #78802',
        fax: '',
        email: 'cwyu@mx.nthu.edu.tw'
      }],

      url01: 'http://art.nthu.edu.tw/wp-content/uploads/2017/09/NTHU-map-01.jpg',
      srcList01: [
        'http://art.nthu.edu.tw/wp-content/uploads/2017/09/NTHU-map-01.jpg'
      ],

      url02: 'http://art.nthu.edu.tw/wp-content/uploads/2017/09/NTHU-map-02.jpg',
      srcList02: [
        'http://art.nthu.edu.tw/wp-content/uploads/2017/09/NTHU-map-02.jpg'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#headPic01 {
  position: relative; 
  left: 50%;
  margin: 17px 0 0 -610px;
}
#headPic02 {
  position: relative;
  left: 50%;
  margin: -45px 0 0 -550px;
}
#headPic03 {
  position: relative;
  left: 50%;
  margin: -70px 0 0 -280px;
}



banner {
  height: 15pt;
  width: 100vw;
  background-color: #404040;
  position: absolute;
  margin: -20px 0 0 -10px;
}
bg01 {
  height: 840pt;
  width: 100vw;
  background: linear-gradient(180deg, #808080 0%, #808080 80%, #ffffff 100%), #808080;
  position: absolute;
  margin: 0px 0 0 -10px;
}
bg02 {
  height: 780pt;
  width: 1180px;
  background-color: #ffffff;
  position: absolute;
  left: 50%;
  margin: 25px 0 0 -590px;
  box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.30);
  border-radius: 20px;
}



headBar01 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  left: 50%;
  margin: -70px 0 0 550px;
}
headBar02 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  left: 50%;
  margin: -70px 0 0 470px;
}
headBar03 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  left: 50%;
  margin: -70px 0 0 390px;
}
headBar04 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  left: 50%;
  margin: -70px 0 0 320px;
}
headBar05 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  left: 50%;
  margin: -70px 0 0 240px;
}
headBar06 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  left: 50%;
  margin: -70px 0 0 185px;
}
headBar07 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  left: 50%;
  margin: -70px 0 0 130px;
}
headBar08 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  left: 50%;
  margin: -70px 0 0 75px;
}
headBar09 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  left: 50%;
  margin: -70px 0 0 20px;
}



headLine01 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  left: 50%;
  margin: -68px 0 0 535px;
}
headLine02 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  left: 50%;
  margin: -68px 0 0 455px;
}
headLine03 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  left: 50%;
  margin: -68px 0 0 375px;
}
headLine04 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  left: 50%;
  margin: -68px 0 0 305px;
}
headLine05 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  left: 50%;
  margin: -68px 0 0 225px;
}
headLine06 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  left: 50%;
  margin: -68px 0 0 170px;
}
headLine07 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  left: 50%;
  margin: -68px 0 0 115px;
}
headLine08 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  left: 50%;
  margin: -68px 0 0 60px;
}



notice01 {
  color: #404040;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 30pt;
  font-weight: bold;
  letter-spacing: 3pt;
  position: absolute;
  left: 50%;
  margin: 85px 0 0 -535px;
}
notice02 {
  color: #404040;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 30pt;
  font-weight: bold;
  letter-spacing: 3pt;
  position: absolute;
  left: 50%;
  margin: 485px 0 0 -535px;
}


title01 {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  left: 50%;
  margin: 575px 0 0 -320px;
  max-width: 730pt;
}
title02 {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  left: 50%;
  margin: 575px 0 0 240px;
  max-width: 730pt;
}



text01 {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  left: 50%;
  margin: 955px 0 0 -395pt;
  max-width: 730pt;
}
text02 {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  left: 50%;
  margin: 955px 0 0 30pt;
  max-width: 730pt;
}
</style>
