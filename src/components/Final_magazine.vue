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



    <notice01>藝術學報</notice01>
    <el-tabs v-model="activeName" @tab-click="handleClick"
      style="width: 1070px; position: absolute; left: 50%; margin-top: 120pt; margin-left: -400pt">
      <el-tab-pane label="學報簡介" name="first" style="max-width: 510pt">
        因合校因素，《新竹教育大學人文社會學報》自106年1月起停刊，轉型後刊物更名為《清華藝術學報》，改由本校藝術學院發行，歡迎美術、工藝、設計、美學文化思潮、策展、藝評、藝術行政管理、電影、音樂、其他表演藝術及藝術跨域研究相關論文投稿。
        <p></p>
        本學報採線上投審稿系統，投稿者請至華藝iPress投稿系統：
        <el-link href="http://www.ipress.tw/J0147" target="_blank">
          http://www.ipress.tw/J0147
        </el-link>
        <p></p>
        聯絡人：國立清華大學出版社　林維萱小姐<br>
        電話：03-5715131 #34546<br>
        E-mail：publisher@mail.nd.nthu.edu.tw
      </el-tab-pane>

      <el-tab-pane label="編輯陣容" name="second">
        <li>總編輯：高榮禧（國立清華大學藝術與設計學系副教授）</li>
        <p></p>
        <li>編審委員：（依姓氏筆畫排列）</li>
        <ul>
          <ul><li>石計生（東吳大學社會學系教授兼主任）</li></ul>
          <ul><li>江怡瑩（國立清華大學藝術與設計學系教授）</li></ul>
          <ul><li>邱誌勇（國立臺灣師範大學美術系教授）</li></ul>
          <ul><li>金立群（國立交通大學音樂研究所副教授）</li></ul>
          <ul><li>馬孟晶（國立清華大學通識教育中心副教授）</li></ul>
          <ul><li>陳淑文（國立清華大學音樂學系教授）</li></ul>
          <ul><li>劉永晧（世新大學廣播電視電影學系副教授）</li></ul>
          <ul><li>蔡長盛（李澤藩紀念藝術教育基金會董事長）</li></ul>
          <ul><li>賴雯淑（國立交通大學應用藝術研究所副教授）</li></ul>
          <ul><li>謝鸿均（國立清華大學藝術與設計學系教授）</li></ul>
        </ul>
        <p></p>
        <li>編審委員會召集人：許素朱（國立清華大學通識教育中心教授兼任藝術學院院長）</li>
      </el-tab-pane>

      <el-tab-pane label="徵稿須知" name="third">
        1. 本學報為學術性期刊，為年刊，每年定期出刊，竭誠歡迎海內外學者賜稿，發表<br>&nbsp;&nbsp;&nbsp;&nbsp;美術、工藝、設計、美學文化思潮、策展、藝評、藝術行政管理、電影、音樂、<br>&nbsp;&nbsp;&nbsp;&nbsp;其他表演藝術及藝術跨域研究相關論文。
        <p></p>
        2. 本刊徵稿對象為國內外大專院校專、兼任教師及學術研究機構之研究人員與博士生。
        <p></p>
        3. 來稿以尚未發表於正式出版發行之學術性論文為限(已通過之學位論文、<br>&nbsp;&nbsp;&nbsp;&nbsp;網路文章及已結集出版發行之研討會會後論文集視同已發表)。本刊不接受已通過之<br>&nbsp;&nbsp;&nbsp;&nbsp;原學位論文，但若以原論題為基礎，進行重整、拓展或深化者，則不在此限。研討會<br>&nbsp;&nbsp;&nbsp;&nbsp;論文若未收錄於已出版之研討會會後論文集，亦不在此限。
        <p></p>
        4. 來稿須具備「學術論文」之實證性、理論性、系統性，凡翻譯文稿、作品賞析、報導性<br>&nbsp;&nbsp;&nbsp;&nbsp;文章、教學講義、讀書心得恕不接受。
        <p></p>
        5. 來稿字數以中文 15000 字至 40000 字，英文 10000 字至 20000 字為原則，並請附上<br>&nbsp;&nbsp;&nbsp;&nbsp;中英文題目、摘要、關鍵詞 3-6 個。
        <p></p>
        6. 本刊全年徵稿，稿件隨到即審，採雙向匿名制，來稿皆經編審委員會送請兩位相關領域<br>&nbsp;&nbsp;&nbsp;&nbsp;的專家學者評審，若兩審意見相左，則送第三審。為利於匿名送審，稿件電子檔中請勿<br>&nbsp;&nbsp;&nbsp;&nbsp;標示作者姓名及服務單位(相關資訊於稿件確定刊登時由本刊統一加註)。
        <p></p>
        7. 審查及修正：投稿本刊稿件經匿名審查人審查後，作者需依據審查意見進行修正，並填寫<br>&nbsp;&nbsp;&nbsp;&nbsp;審查意見回應表，以作為編審委員會確認其刊登與否之依據。其餘規定請參閱清華藝術<br>&nbsp;&nbsp;&nbsp;&nbsp;學報稿件審查辦法。
        <p></p>
        8. 經審查通過之論文刊登期別，由本刊編審委員決定。
        <p></p>
        9. 本學報亦接受中英文之書評類投稿，字數以 4000 字至 8000 字為原則。
        <p></p>
        10. 投稿程序：本刊採線上投稿，投稿者請至 
        <el-link href="http://www.ipress.tw/J0147" target="_blank">
          http://www.ipress.tw/J0147
        </el-link>
        登錄並依投稿系統<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指示上傳資料（包含投稿者資料表、投稿者聲明書及授權書）。
        <p></p>
        11. 凡經刊載之論文，致贈作者該期學報三本及抽印本十份，不另支稿酬。書評類作者則致贈<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;該期學報一本。
        <p></p>
        12. 投稿相關文件及辦法請詳閱本學報網頁公告(
        <el-link href="http://art.nthu.edu.tw/?page_id=31" target="_blank">
          http://art.nthu.edu.tw/?page_id=31 
        </el-link>
        )。
      </el-tab-pane>

      <el-tab-pane label="文件下載" name="fourth">
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/%E6%B8%85%E8%8F%AF%E8%97%9D%E8%A1%93%E5%AD%B8%E5%A0%B1_%E6%8A%95%E7%A8%BF%E8%80%85%E8%B3%87%E6%96%99%E8%A1%A8.pdf" target="_blank">
          1. 清華藝術學報投稿者資料表
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/publication-03.odt" target="_blank">
          2. 清華藝術學報報投稿者聲明書
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/publication-04.pdf" target="_blank">
          3. 清華藝術學報稿件審查辦法
        </el-link><br>
        <el-link href="http://art.nthu.edu.tw/wp-content/uploads/2017/09/%E6%B8%85%E8%8F%AF%E8%97%9D%E8%A1%93%E5%AD%B8%E5%A0%B1%E7%B7%A8%E5%AF%A9%E5%A7%94%E5%93%A1%E6%9C%83%E8%A8%AD%E7%BD%AE%E8%A6%81%E9%BB%9E.pdf" target="_blank">
          4. 清華藝術學報編審委員會設置要點
        </el-link><br>
        <el-link href="https://art.nthu.edu.tw/wp-content/uploads/2020/11/%E9%99%84%E6%AA%94%E4%BA%8C%E3%80%81%E6%B8%85%E8%8F%AF%E8%97%9D%E8%A1%93%E5%AD%B8%E5%A0%B1%E8%AB%96%E6%96%87%E6%92%B0%E5%AF%AB%E9%AB%94%E4%BE%8B.pdf" target="_blank">
          5. 清華藝術學報論文撰寫體例
        </el-link><br>
      </el-tab-pane>
    </el-tabs>



    <banner></banner>
  </div>
</template>

<script>
export default {
  name: 'Final_magazine',
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
  height: 790pt;
  width: 100vw;
  background: linear-gradient(180deg, #808080 0%, #808080 80%, #ffffff 100%), #808080;
  position: absolute;
  margin: 0px 0 0 -10px;
}
bg02 {
  height: 730pt;
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
