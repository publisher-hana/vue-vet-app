<script setup>
import Pagetitle from '../../components/layout/PageTitle.vue'
import Aside from "../../common/Aisde.vue"
import '../../components/List/list.css'
import './class.css'
</script>
<template>
  <div class="container" id="content"> 
    <div class="contents">
      <Pagetitle title="Live 세미나" />
      <div class="flex-space top-area">
        <button>편성표 다운로드</button>
        <div class="opt-grp"><span>전체</span><span>세미나<span class="mark">S</span></span><span>웹심포지움 <span class="mark purple">W</span></span></div>
      </div>
      <div class="live-table">
        <table>
          <caption>세미나 편성표 표</caption>
          <colgroup>
            <col width="93px" />
            <col width="80px" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th rowspan="2" scope='row'>
                <strong>7/20</strong>
                <span className="week">월요일</span>
              </th>
              <td className='time'>
                <strong>09:00</strong>
                <span>~12:00</span>
              </td>
              <td className='detail-td'>
                <a href='#' class="flex-space">
                  <div class="detail">
                    <em className='cate'>호흡기질환</em>
                    <div className='title'><span class="mark">S</span><strong>[대한내분비학회] 맞춤 치료를 위한 인슐린 치료 전략 인슐린 치료 전략 린 치료 전략</strong></div>
                    <span className="presenter">최원석교수(세종병원 심장내과)</span>
                    <div class="live-state"><span>비공개</span><span class="purple">대기중</span><span class="skyblue">라이브</span></div>
                  </div>
                  <div class="request">
                    <span class="label">신청가능</span>
                    <div className='num'><span>648명<span className='limit'>/1000명</span></span></div>
                  </div>
                </a>
              </td>
            </tr>
            <tr>
              <td className='time'>
                <strong>09:00</strong>
                <span>~12:00</span>
              </td>
              <td className='detail-td'>
                <a href='#' class="flex-space">
                  <div class="detail">
                    <em className='cate'>호흡기질환</em>
                    <div className='title'><span class="mark">S</span><strong>[대한내분비학회] 맞춤 치료를 위한 인슐린 치료 전략 인슐린 치료 전략 린 치료 전략</strong></div>
                    <span className="presenter">최원석교수(세종병원 심장내과)</span>
                    <div class="live-state"><span>비공개</span><span class="purple">대기중</span><span class="skyblue">라이브</span></div>
                  </div>
                  <div class="request">
                    <span class="label line gray">신청가능</span>
                    <div className='num'><span>648명<span className='limit'>/1000명</span></span></div>
                  </div>
                </a>
              </td>
            </tr>
            <tr>
              <th rowspan="3" scope='row'>
                <strong>7/21</strong>
                <span className="week">화요일</span>
              </th>
              <td className='time'>
                <strong>09:00</strong>
                <span>~12:00</span>
              </td>
              <td className='detail-td'>
                <a href='#' class="flex-space">
                  <div class="detail">
                    <em className='cate'>호흡기질환</em>
                    <div className='title'><span class="mark">S</span><strong>[대한내분비학회] 맞춤 치료를 위한 인슐린 치료 전략 인슐린 치료 전략 린 치료 전략</strong></div>
                    <span className="presenter">최원석교수(세종병원 심장내과)</span>
                    <div class="live-state"><span>비공개</span><span class="purple">대기중</span><span class="skyblue">라이브</span></div>
                  </div>
                  <div class="request">
                    <span class="label">신청가능</span>
                    <div className='num'><span>648명<span className='limit'>/1000명</span></span></div>
                  </div>
                </a>
              </td>
            </tr>
            <tr>
              <td className='time'>
                <strong>09:00</strong>
                <span>~12:00</span>
              </td>
              <td className='detail-td'>
                <a href='#' class="flex-space">
                  <div class="detail">
                    <em className='cate'>호흡기질환</em>
                    <div className='title'><span class="mark">S</span><strong>[대한내분비학회] 맞춤 치료를 위한 인슐린 치료 전략 인슐린 치료 전략 린 치료 전략</strong></div>
                    <span className="presenter">최원석교수(세종병원 심장내과)</span>
                    <div class="live-state"><span>비공개</span><span class="purple">대기중</span><span class="skyblue">라이브</span></div>
                  </div>
                  <div class="request">
                    <span class="label line gray">신청가능</span>
                    <div className='num'><span>648명<span className='limit'>/1000명</span></span></div>
                  </div>
                </a>
              </td>
            </tr>
             <tr>
              <td className='time'>
                <strong>09:00</strong>
                <span>~12:00</span>
              </td>
              <td className='detail-td'>
                <a href='#' class="flex-space">
                  <div class="detail">
                    <em className='cate'>호흡기질환</em>
                    <div className='title'><span class="mark">S</span><strong>[대한내분비학회] 맞춤 치료를 위한 인슐린 치료 전략 인슐린 치료 전략 린 치료 전략</strong></div>
                    <span className="presenter">최원석교수(세종병원 심장내과)</span>
                    <div class="live-state"><span>비공개</span><span class="purple">대기중</span><span class="skyblue">라이브</span></div>
                  </div>
                  <div class="request">
                    <span class="label line gray">신청가능</span>
                    <div className='num'><span>648명<span className='limit'>/1000명</span></span></div>
                  </div>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Aside />
  </div>
</template>