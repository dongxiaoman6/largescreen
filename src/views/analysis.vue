<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
 import Head from './Head.vue'
 import Left1 from './Left1.vue'
 import  WaterPolo1	from './WaterPolo1.vue'
 import WaterPolo2 from './WaterPolo2.vue'
 import WaterPolo3 from './WaterPolo3.vue'
 import WaterPolo4 from './WaterPolo4.vue'
 import WaterPolo5 from './WaterPolo5.vue'
 import WaterPolo6 from './WaterPolo6.vue'
 import  Left3 from './Left3.vue'
 import MapCenter from './MapCenter.vue'
 import  Right1 from './Right1.vue'
 import  Right2 from './Right2.vue'
 import  Right3 from './Right3.vue'

</script>

<template>
    <Head  />
	
	<div class="content">
		<div class="boxL">
			<div class="box box1">
				<div class="til">停车流量统计</div>
				<div class="con">
					<Left1 />
				</div>
			</div>
			<div class="box box2">
				<div class="til">路边停车统计</div>
				<div class="con">
					<div style="height: 50%; width:100%;margin:0 auto">
						<WaterPolo1 style="float:left;"/>
						<WaterPolo2 style="float:left;"/>
						<WaterPolo3 style="float:left;"/>
					</div>

					<div style="height: 50%; width:100%;margin:0 auto">
						<WaterPolo4 style="float:left;"/>
						<WaterPolo5 style="float:left;"/>
						<WaterPolo6 style="float:left;"/>
					</div>

				</div>
			</div>
			<div class="box box3">
				<div class="til">车位周转率统计</div>
				<div class="tag">
					<span style="background-color: RGBA(64, 185, 242, 1);">日均车位周转率</span>
					<span>停车时长</span>
					<span>出场次数</span>
					<span>入场次数</span>
				</div>
				<div class="con">
					<Left3 />
				</div>
			</div>
		</div>
		<div class="boxC">
			<div class="box1">
				<div class="li">
					<p>停车道路数量</p>
					<span>100</span>
				</div>
				<div class="li">
					<p>车位总数</p>
					<span>526</span>
				</div>
				<div class="li">
					<p>空余数</p>
					<span>83</span>
				</div>
				<div class="li">
					<p>停车场数量</p>
					<span>86</span>
				</div>
			</div>
			<div class="box2">
				<div class="leftbox">
					
					<div class="til">路边停车</div>
					<div class="list">
						<div class="li">
							<i></i>
							<div class="text">
								<p><b>2358</b>个</p>
								<span>车位总数</span>
							</div>
							
						</div>
						<div class="li">
							<i></i>
							<div class="text">
								<p><b>23</b>个</p>
								<span>空余位</span>
							</div>
						</div>
						<div class="li">
							<i></i>
							<div class="text">
								<p><b>80</b>%</p>
								<span>日均车位<br/>周转率</span>
							</div>
						</div>
						<div class="li">
							<i></i>
							<div class="text">
								<p><b>3526</b>个</p>
								<span>今日停车量</span>
							</div>
						</div>

					</div>
				</div>
				<div class="rightbox">
					<div class="til">停车场</div>
					<div class="list">
						<div class="li">
							<i></i>
							<div class="text">
								<p><b>2358</b>个</p>
								<span>车位总数</span>
							</div>
							
						</div>
						<div class="li">
							<i></i>
							<div class="text">
								<p><b>23</b>个</p>
								<span>空余位</span>
							</div>
						</div>
						<div class="li">
							<i></i>
							<div class="text">
								<p><b>80</b>%</p>
								<span>日均车位<br/>周转率</span>
							</div>
						</div>
						<div class="li">
							<i></i>
							<div class="text">
								<p><b>3526</b>个</p>
								<span>今日停车量</span>
							</div>
						</div>
					
					</div>
				</div>
			</div>
			
			<div class="box3">
				<!-- 地图 -->
				<div class="con">
					<MapCenter />
				</div>
			</div>
		</div>
		<div class="boxR">
			<div class="box box1">
				<div class="til">车位满位率</div>
				<div class="con">
					<Right1 />
				</div>
			</div>
			<div class="box box2">
				<div class="til">日间停车时长总比</div>
				<div class="con">
					<Right2 />
				</div>
			</div>
			<div class="box box3">
				<div class="til">停车量统计</div>
				<div class="tag">
					<span style="background-color: RGBA(64, 185, 242, 1);">入场次数</span>
					<span>停车时长</span>
					<span>出场次数</span>
					<span>停车次数</span>
				</div>
				<div class="con">
					<Right3 />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	
	.content{
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: 20px;
		
		.boxL,.boxR{
			flex-grow: 1;
			width:26%;
			height:100px;
		}
		.boxL,.boxR{
			
			.box{
				width: 100%;
				position: relative;
				margin:36px 0 0;
				padding-top: 1px;
				.til{
					width: 256px;
					height: 40px;
					background: url(../assets/images/bg/title.png) no-repeat top center/100% ; 
					position: absolute;
					top:-20px;
					left:50%;
					margin-left: -128px;
					font-family: Microsoft YaHei;
					font-weight: 400;
					font-size: 18px;
					color: #FEFEFE;
					line-height: 40px;
					text-align: center;
				}
				.con{
					width: 96%;
					margin:15px auto 14px;
				}
			}
			.box1{
				margin-top: 16px;
				width:100%;
				height: 212px;
				background: url(../assets/images/bg/k1.png) no-repeat top center/100% 212px ; 
				.con{
					height: 173px;
					padding-top: 10px;
				}
			}
			.box2{
				height: 359px;
				background: url(../assets/images/bg/k2.png) no-repeat top center/100% 359px ; 
				.con{
					height: 321px;
					padding-top: 10px;
				}
			}
			.box3{
				height: 288px;
				padding-top: 20px;
				background: url(../assets/images/bg/k3.png) no-repeat top center/100% 288px ; 
				.tag{
					height: 24px;
					margin:8px auto;
					width: 98%;
					text-align: center;
					span{
						display: inline-block;
						padding:0 8px;
						margin:0 6px;
						background:rgba(41, 66, 89,1);
						color:#fff;
						font-size: 14px;
						border-radius: 12px;
					}
				}
				.con{
					height: 238px;
				}
			}
		}
	
		.boxC{
		   width: 42%;
		   text-align: center;
		   height:100px;
		   padding:0 6px;
		   .box1{
			   width: 100%;
			   overflow: hidden;
			   .li{
				   width: 24%;
				   height: 112px;
				   float: left;
				   margin:0 .5%;
				   background: url(../assets/images/bg/li.png) no-repeat top center/100% 112px; 
				   padding-top: 22px;
				   p{
					   font-family: Microsoft YaHei;
					   font-weight: 400;
					   font-size: 16px;
					   color: #8BE7F1;
					   line-height: 28px;
				   }
				   span{
					   font-family: Microsoft YaHei;
					   font-weight: bold;
					   font-size: 32px;
					   color: #399DFC;
					   line-height: 36px;

				   }
				   &:nth-child(2){
					   span{
						   color:#51FFF7;
					   }
				   }
				   &:nth-child(3){
				   		span{
				   			color:#65FF52;
				   		}
				   }
				   &:nth-child(4){
				   		span{
				   			color:#F3F04E;
				   		}
				   }
			   }
		   }
		   .box2{
			   overflow: hidden;
			   margin-top: 20px;
			   .leftbox , .rightbox{
				   width: 49%;
				   margin:34px .5% 0;
				   background: url(../assets/images/bg/box.png) no-repeat top center/100% 326px; 
				   height: 326px;
				   float: left;
				   position: relative;
				   padding-top: 40px;
				   .til{
					   width: 186px;
					   height: 40px;
					   background: url(../assets/images/bg/title.png) no-repeat top center/100% 40px; 
					   position: absolute;
					   top:-20px;
					   left:50%;
					   margin-left: -93px;
					   font-family: Microsoft YaHei;
					   font-weight: 400;
					   font-size: 18px;
					   color: #FEFEFE;
					   line-height: 40px;
					   text-align: center;
				   }
				   .list{
					    width: 94%;
						margin: 10px auto 0;
				   }
				   .li{
					   width: 48%;
					   height: 110px;
					   float: left;
					   margin:0 1% 20px;
					   background: rgba(41, 66, 89, 0.7);
					   position: relative;
					   
					   i{
						   position: absolute;
						   width:54px;
						   height: 55px;
						   top:30px;
						   left:14px;
						   
					   }
					   
					   .text{
						   margin-left: 77px;
						   padding-top: 20px;
						   text-align: left;
					   }
					   
					   p{
						   line-height: 32px;
						   color: #FEFEFE;
							b{
								font-family: Microsoft YaHei;
								font-weight: bold;
								font-size: 22px;
							}
					   }
					   span{
						   font-family: Microsoft YaHei;
						   font-weight: 400;
						   font-size: 14px;
						   color: #FEFEFE;
						   line-height: 20px;
					   }
					   &:nth-child(1){
					   		i{
					   		   background: url(../assets/images/bg/icon1.png) no-repeat center center/ 54px 51px ; 
					   		}
					   }
					   &:nth-child(2){
						   i{
							   background: url(../assets/images/bg/icon2.png) no-repeat center center/ 49px 48px ; 
						   }
					   }
					   &:nth-child(3){
					   		i{
					   			 background: url(../assets/images/bg/icon3.png) no-repeat center center/ 48px 55px ; 
					   		}
					   }
					   &:nth-child(4){
					   		i{
					   			 background: url(../assets/images/bg/icon4.png) no-repeat center center/ 48px 47px ; 
					   		}
					   }
				   }
			   }
			   
		   }
		   .box3{
			   width: 99%;
			   margin:10px auto;
			   height: 437px;
			   background: url(../assets/images/bg/map.png) no-repeat top center/ 100% 438px; 
			   padding-top: 1px;
			   .con{
				   width: 96%;
				   background: #fff;
				   height: 418px;
				   margin:10px auto;
			   }
		   }
		}
	}
	
	@media screen and (max-width:1800px){
		.box2{
			.leftbox,.rightbox{
				
				.li{
					i{
						width:28% !important;
					}
					.text{
						margin-left: 46% !important;
					}
					
					&:nth-child(1){
						i{
						   background: url(../assets/images/bg/icon1.png) no-repeat center center/ 100% !important;
						}
					}
					&:nth-child(2){
					   i{
						   background: url(../assets/images/bg/icon2.png) no-repeat center center/ 100% !important; 
					   }
					}
					&:nth-child(3){
						i{
							 background: url(../assets/images/bg/icon3.png) no-repeat center center/ 100% !important;
						}
					}
					&:nth-child(4){
						i{
							 background: url(../assets/images/bg/icon4.png) no-repeat center center/ 100% !important;
						}
					}
					
				}
			}
					   
		}
	}
	
	@media screen and (max-width:1500px){
		.box2{
			.leftbox,.rightbox{
				.li{
					i{
						width:20% !important;
					}
					.text{
						margin-left: 36% !important;
					}
				}
			}
					   
		}
	}
	
</style>
