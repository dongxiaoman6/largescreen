<script setup lang="ts">
</script>

<template>  
    <header class="header">  
      <div class="header-item header-left">  

        <!-- 左侧：路边停车 -->
        <div class="stopCar-left">
          <div class="stopCar-leftimg-1">&nbsp;</div>
        </div>

        <div  class="stopCar-center">路边停车</div>   

        <div class="stopCar-right">
            <div class="stopCar-rightimg-1">&nbsp;</div>
        </div>
      </div>  

      <!-- 中间：智慧平台中间 -->
      <div class=" header-center">  
        <div class="center-left">
          <div class="center-left-image">&nbsp;</div> 
        </div>

        <div class="center-title">城市级智慧停车大数据分析平台</div>  

        <div class="center-right">
          <div class="center-right-image">&nbsp;</div> 
        </div>  
      </div>  

      <!-- 右侧：停车场 -->
      <div class="header-item header-right">
                <div class="header-right-left">
                  <div class="header-right-left-image">&nbsp;</div>
                </div>
        
                <div  class="header-right-center">停车场</div>   
        
                <div class="header-right-right">
                    <div class="header-right-image">&nbsp;</div>
                </div>
      </div>  


    </header>  
  </template>  


  <style scoped>
  .header {  
    display: flex;  
    justify-content: space-between; /* 均匀分布子元素，两端对齐 */  
    align-items: center; /* 垂直居中 */  
    width: 100%; /* 撑满屏幕宽度 */  
    height: 10%;
    box-sizing: border-box; /* 确保 padding 不会增加元素的宽度 */ 
	padding: 10px 20px 0;
  }  
  
  .header-item {  
    flex: 1; /* 默认每个子元素占据相同空间，也可以根据需要设置具体的 flex 值 */  
    box-sizing: border-box; /* 确保 padding 和 border 不会增加元素的宽度 */  
    text-align: center;
  }  
  .header-left, .header-right{
    flex-grow: 1;
	position: relative;
  }


  .stopCar-left{
    width:35%;
    height: 100%;
    overflow:hidden;
    position: absolute;
	top:2px;
	left:0;
  }
  .stopCar-leftimg-1{
    height: 100%;
    background: url(../assets/images/head/stopCar-leftx1.png); 
    background-position:right center; 
    background-repeat: no-repeat;
    background-size:100% 8px;
    
    justify-content: center; /* 水平居中 */  
    align-items: center; /* 垂直居中 */ 
  }

  .stopCar-center, .header-right{
    width: 100%;
    height: 100%;
    float: left;
    font-size: clamp(13px, 5vw, 20px);  
    font-family:Microsoft YaHei;
    font-weight:400;
    color:#9DF7F7;
  }
  .stopCar-center{
    padding-left: 2px;
  }

  .stopCar-right{
    width: 35%;
	height: 100%;
	position: absolute;
	top:2px;
	right:0;
  }

  .stopCar-rightimg-1{
    height: 100%;
    background: url(../assets/images/head/stopCar-rightx1.png); 
    background-position: left center; 
    background-repeat: no-repeat;
     background-size:100% 8px;
    display: flex;  
    justify-content: center; /* 水平居中 */  
    align-items: center; /* 垂直居中 */ 
  }

  .stopCar-right img{
    display: flex;  
    justify-content: center; /* 水平居中 */  
    align-items: center; /* 垂直居中 */ 
  }

  .header-center{
    width:42%;
    height:100%;
    font-family: Microsoft YaHei;
    font-weight: bold;
    font-size: 32px;
    color: #42C6FF;
  }

  .center-left{
    width:20%;
    height: 80%;
    overflow:hidden;
    float: left;
  }
  .center-left-image{
    height: 100%;
    background: url(../assets/images/head/center-left-imagex1.png); 
    background-position: left; 
    background-repeat: no-repeat;
    background-size:100%;
    display: flex;  
  }

  .center-title{
    width:60%;
    height: 100%;
    overflow:hidden;
    float: left;
    font-family: Microsoft YaHei;
    font-weight: bold;
    font-size:  24px;  
    color: #42C6FF;
    text-align: center;
    padding-top: 12px;
    padding-left:5px;
  }
  .center-right{
    width:20%;
    height: 86%;
    overflow:hidden;
    float: left;
  }

  .center-right-image{
    height: 100%;
    background: url(../assets/images/head/cente-right-image.png); 
    background-position: left; 
    background-repeat: no-repeat;
    background-size:100%;
    display: flex; 
  }

  .header-right-left{
    width:35%;
    height: 100%;
    overflow:hidden;
    float: left;
	padding-top: 8px;
  }
  .header-right-left-image{
    height: 100%;
    background: url(../assets/images/head/header-right-left-imagex2.png); 
    background-position:right center; 
    background-repeat: no-repeat;
    background-size:100% 8px;
    display: flex;  
    justify-content: center; /* 水平居中 */  
    align-items: center; /* 垂直居中 */ 
  }
  .header-right-center{
    width: 20%;
    height: 100%;
    float: left;
    font-size: clamp(13px, 5vw, 20px);  
    font-family:Microsoft YaHei;
    font-weight:400;
    color:#9DF7F7;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .header-right-right{
    height:100%;
	padding-top: 8px;
  }
  .header-right-image{
    height: 100%;
    background: url(../assets/images/head/header-right-imagex2.png); 
    background-position: left center; 
    background-repeat: no-repeat;
    background-size:100% 8px;
    display: flex;  
    justify-content: center; /* 水平居中 */  
    align-items: center; /* 垂直居中 */ 
  }



  /* 响应式调整，可根据需要添加更多断点 */  
  @media (max-width: 600px) {  
    .container {  
      flex-direction: column; /* 在小屏幕上，改为垂直排列 */  
    }  
    .box {  
      flex: none; /* 不再平均分配空间 */  
    }  
    .stopCar-left{
      background-size: contain;  
    }
  }  

  </style>