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



    <notice01>學院規章</notice01>
    <el-tabs v-model="activeName" @tab-click="handleClick"
      style="width: 1070px; position: absolute; left: 50%; margin-top: 120pt; margin-left: -400pt">
      <el-tab-pane label="規章辦法" name="first">
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/arts101.pdf" target="_blank">
          1. 國立清華大學藝術學院院務會議組織章程
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/arts102.pdf" target="_blank">
          2. 國立清華大學藝術學院教師評審委員會組成細則
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/arts103.pdf" target="_blank">
          3. 國立清華大學藝術學院課程委員會設置要點
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/arts104.pdf" target="_blank">
          4. 國立清華大學藝術學院院長遴選辦法
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/arts105.pdf" target="_blank">
          5. 國立清華大學藝術學院系所主管遴選辦法
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/arts106.pdf" target="_blank">
          6. 國立清華大學藝術學院教師評量施行細則
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/arts107.pdf" target="_blank">
          7. 國立清華大學藝術學院藝術學院教師升等審查細則
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/arts108.pdf" target="_blank">
          8. 國立清華大學藝術學院初聘專任教師作業要點
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/arts109.pdf" target="_blank">
          9. 國立清華大學藝術學院延攬及留住特殊優秀人才彈性薪資暨獎勵補助審議辦法
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/arts110.pdf" target="_blank">
          10. 清華藝術學報編審委員會設置要點
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/arts201.pdf" target="_blank">
          11. 國立清華大學南大校區藝術學院專業服務學習活動施行要點(105學年度以前入學之學生)
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/arts202.pdf" target="_blank">
          12. 國立新竹教育大學人文社會與藝術學院教師聘任及升等審查辦法(過度軌)
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/art203.pdf" target="_blank">
          13. 國立清華大學南大校區(原國立新竹教育大學)藝術學院院專任教師評量實施要點
        </el-link>
      </el-tab-pane>

      <el-tab-pane label="教師評鑑" name="second">
        <el-link href="http://cla.web2.nhcue.edu.tw/files/15-1015-33096,c2281-1.php?Lang=zh-tw" target="_blank">
          1. 105學年度人社藝學院教師評鑑實施要點 (2016-12-05)
        </el-link><br>
        <el-link href="http://cla.web2.nhcue.edu.tw/files/15-1015-33097,c2281-1.php?Lang=zh-tw" target="_blank">
          2. 105學年度人社藝學院教師評鑑辦法 (2016-12-05)
        </el-link><br>
        <el-link href="http://cla.web2.nhcue.edu.tw/files/15-1015-33098,c2281-1.php?Lang=zh-tw" target="_blank">
          3. 105學年度免評鑑教師申請表 (2016-12-05)
        </el-link><br>
        <el-link href="http://cla.web2.nhcue.edu.tw/files/15-1015-33099,c2281-1.php?Lang=zh-tw" target="_blank">
          4. 105學年度評鑑資料採計期程 (2016-12-05)
        </el-link>
      </el-tab-pane>

      <!-- <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane> -->
    </el-tabs>



    <banner></banner>
  </div>
</template>

<script>
export default {
  name: 'Final_regulation',
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
  height: 440pt;
  width: 100vw;
  background: linear-gradient(180deg, #808080 0%, #808080 80%, #ffffff 100%), #808080;
  position: absolute;
  margin: 0px 0 0 -10px;
}
bg02 {
  height: 380pt;
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
</style>
