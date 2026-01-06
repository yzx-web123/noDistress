<template>
  <div class="join-us-page">
    <Navbar />
    <div class="join-us-container">
      <!-- <h1 class="join-us-title">加入我们</h1> -->
      <div class="join-us-content">
        <div class="join-us-text">
          <h2>欢迎加入百业江湖</h2>
          <p>
            百业江湖是一个汇聚各行业英雄豪杰的武林圣地，我们致力于弘扬侠义精神，促进各业交流，共同守护江湖和平与繁荣。
          </p>
          <h3>加入我们的理由：</h3>
          <ul>
            <li>加入不苦恼，木白还有30秒到达你的怀里</li>
            <li></li>
            <li>参加武林大会和线下交流活动</li>
            <li>共享资源和合作机会</li>
            <li>提升武功修为和个人声望</li>
          </ul>
          <h3>燕云十大体验：</h3>
          <ul>
            <li>
              燕云玩家现状：在BUG里找游戏，在地道里当土拨鼠，在九流门里学防诈骗。
            </li>
            <li>输出低五万，全团当“机制奴隶”；穿模卡半天，抹胸比命还坚挺。</li>
            <li>
              进九流门算我眼瞎，退门派要五万，这哪是江湖，是反诈培训基地。
            </li>
            <li>打BOSS卡地形，射箭卡三秒，我怀疑策划是来考验我耐心的。</li>
            <li>地上半小时，地下一整天，建议游戏改名叫《地道十六声》</li>
            <li>
              穿抹胸闯宋朝，被怪打还被风冻，这家国情怀主打一个“清凉抗日”。
            </li>
            <li>
              技能放不出，buff被吞完，4060显卡带不动，我怀疑电脑比我先病友。
            </li>
            <li>建房拆花，拼件卡没，策划怕不是见不得我有好看家园</li>
            <li>中毒解完还掉血，界碑当床睡，这游戏的BUG比NPC还粘人。</li>
            <li>
              PVP改完只剩跑跑流，双刀手感砍废，策划：你们必须按我的方式玩。
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>

<style scoped>
.join-us-page {
  min-height: 100vh;
  background-color: #000000;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23000000"/><path d="M50 0 L100 50 L50 100 L0 50 Z" fill="%231a1a1a" opacity="0.3"/><path d="M0 0 L50 50 L0 100 Z" fill="%231a1a1a" opacity="0.2"/><path d="M100 0 L50 50 L100 100 Z" fill="%231a1a1a" opacity="0.2"/></svg>');
  padding-top: 80px; /* 给导航栏留出空间 */
  padding-bottom: 40px;
}

.join-us-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.join-us-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 900;
  color: #f1c40f;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.join-us-content {
  max-width: 800px;
  margin: 0 auto;
}

.join-us-text {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(241, 196, 15, 0.2);
  backdrop-filter: blur(10px);
}

.join-us-text h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f1c40f;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.join-us-text h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: #f1c40f;
  margin-top: 25px;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.join-us-text p {
  line-height: 1.8;
  color: #ffffff;
  margin-bottom: 15px;
  text-align: justify;
  opacity: 0.9;
}

.join-us-text ul {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 15px;
}

.join-us-text li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  color: #ffffff;
  opacity: 0.9;
}

.join-us-text li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #f1c40f;
  font-weight: bold;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .join-us-content {
    padding: 0 20px;
  }

  .join-us-title {
    font-size: 2rem;
  }

  .join-us-text {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .join-us-page {
    padding: 20px 0;
  }

  .join-us-container {
    padding: 0 15px;
  }

  .join-us-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
}
</style>
