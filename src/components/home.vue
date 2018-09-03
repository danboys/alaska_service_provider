<template>
  <div id="content-wrapper" class="content_wrapper so_manage"><!--//#content-wrapper 관리툴 컨텐츠 영역-->
    <div class="container-fluid">

      <!-- Breadcrumbs-->
      <h3 class="title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SO 관리 목록</font></font></h3>

      <!-- DataTables Example -->
      <div class="card mb-3">

        <div class="card-body">
          <div class="table-responsive">
            <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_length" id="dataTable_length">
                    <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">보여 주다
                    </font></font><select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm">
                      <option value="10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">10</font></font></option>
                      <option value="25"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">25 명</font></font></option>
                      <option value="50"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">50 개</font></font></option>
                      <option value="100"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">100</font></font></option>
                    </select><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                      항목</font></font></label>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <table class="table  table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style="width: 100%;">
                    <thead>
                    <tr role="row">
                      <th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">그래서</font></font></th>
                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sp</font></font></th>
                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">작성자</font></font></th>
                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">수정 일</font></font></th>
                      <th class="sorting preview" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">미리보기</font></font></th>
                      <th class="sorting export" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">수출하다</font></font></th>
                      <th class="sorting delete" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">삭제</font></font></th>
                    </tr>
                    </thead>
                    <tbody>
                    <!--sk _iot-->
                    <tr role="row" class="odd">
                      <td class="sorting_1" rowspan="3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sk</font></font></td>
                      <td><a href="sp_detail.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sk_iot_tv</font></font></a></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">admin01</font></font></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018/08/09 00:00:00</font></font></td>
                      <td><i class="far fa-eye" data-toggle="modal" data-target="#preview_btn"></i></td>
                      <td><i class="fas fa-share-square" data-toggle="modal" data-target="#export_btn"></i></td>
                      <td><i class="fas fa-trash-alt " data-toggle="modal" data-target="#delete_btn"></i></td>
                      <!--sk _magic-->
                    </tr><tr role="row" class="odd">

                      <td><a href="sp_detail.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sk_magic</font></font></a></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">admin01</font></font></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018/08/09 00:00:00</font></font></td>
                      <td><i class="far fa-eye" data-toggle="modal" data-target="#preview_btn"></i></td>
                      <td><i class="fas fa-share-square" data-toggle="modal" data-target="#export_btn"></i></td>
                      <td><i class="fas fa-trash-alt " data-toggle="modal" data-target="#delete_btn"></i></td>
                      <!--sk _school_app-->
                    </tr><tr role="row" class="odd">

                      <td><a href="sp_detail.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sk_school_app</font></font></a></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">admin01</font></font></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018/08/09 00:00:00</font></font></td>
                      <td><i class="far fa-eye" data-toggle="modal" data-target="#preview_btn"></i></td>
                      <td><i class="fas fa-share-square" data-toggle="modal" data-target="#export_btn"></i></td>
                      <td><i class="fas fa-trash-alt " data-toggle="modal" data-target="#delete_btn"></i></td>
                      <!--cj_hello-->
                    </tr><tr role="row" class="odd">
                      <td class="sorting_1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CJ</font></font></td>
                      <td><a href="sp_detail.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cj_helloTV</font></font></a></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">admin01</font></font></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018/08/09 00:00:00</font></font></td>
                      <td><i class="far fa-eye" data-toggle="modal" data-target="#preview_btn"></i></td>
                      <td><i class="fas fa-share-square" data-toggle="modal" data-target="#export_btn"></i></td>
                      <td><i class="fas fa-trash-alt " data-toggle="modal" data-target="#delete_btn"></i></td>
                      <!--jcn-->
                    </tr><tr role="row" class="odd">
                      <td class="sorting_1"><a href="sp_detail.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">지역 방송</font></font></a></td>
                      <td><a href="sp_detail.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JCN</font></font></a></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">admin01</font></font></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018/08/09 00:00:00</font></font></td>
                      <td><i class="far fa-eye" data-toggle="modal" data-target="#preview_btn"></i></td>
                      <td><i class="fas fa-share-square" data-toggle="modal" data-target="#export_btn"></i></td>
                      <td><i class="fas fa-trash-alt " data-toggle="modal" data-target="#delete_btn"></i></td>
                      <!--seoul_univ-->
                    </tr><tr role="row" class="odd">
                      <td class="sorting_1" rowspan="2"><a href="sp_detail.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">대학</font></font></a></td>
                      <td><a href="sp_detail.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">서울 특별시</font></font></a></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">admin01</font></font></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018/08/09 00:00:00</font></font></td>
                      <td><i class="far fa-eye" data-toggle="modal" data-target="#preview_btn"></i></td>
                      <td><i class="fas fa-share-square" data-toggle="modal" data-target="#export_btn"></i></td>
                      <td><i class="fas fa-trash-alt " data-toggle="modal" data-target="#delete_btn"></i></td>
                      <!--jeju_univ-->
                    </tr><tr role="row" class="odd">

                      <td><a href="sp_detail.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jeju_univ</font></font></a></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">admin01</font></font></td>
                      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018/08/09 00:00:00</font></font></td>
                      <td><i class="far fa-eye" data-toggle="modal" data-target="#preview_btn"></i></td>
                      <td><i class="fas fa-share-square" data-toggle="modal" data-target="#export_btn"></i></td>
                      <td><i class="fas fa-trash-alt " data-toggle="modal" data-target="#delete_btn"></i></td>
                    </tr></tbody></table>
                </div>
              </div>

              <!--모달영역-->


              <!-- 미리보기 Modal -->
              <div class="modal fade" id="preview_btn" tabindex="-1" role="dialog" aria-labelledby="preview_btnLabel" aria-hidden="true">
                <div class="modal-dialog  modal-lg" role="document">
                  <div class="modal-content  modal-lg">
                    <div class="modal-header">
                      <h5 class="modal-title" id="preview_btnLabel"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">미리보기</font></font></h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">×</font></font></span>
                      </button>
                    </div>
                    <div class="modal-body">

                      <!--탭 삽입-->
                      <div class="row">
                        <div class="col-12">
                          <div class="card">
                            <div class="card-body">





                              <div id="exTab3">
                                <ul class="nav nav-tabs">
                                  <li class="active">
                                    <a href="#1b" data-toggle="tab"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">그래서</font></font></a>
                                  </li>
                                  <li><a href="#2b" data-toggle="tab"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">영상</font></font></a>
                                  </li>
                                  <li><a href="#3b" data-toggle="tab"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">서비스</font></font></a>
                                  </li>
                                </ul>

                                <div class="tab-content clearfix">
                                  <!--so 탭-->
                                  <div class="tab-pane active" id="1b">
                                    <table class="table so_manage">
                                      <thead>
                                      <tr>
                                        <th scope="col" class="so_thead first_th"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">그래서</font></font></th>
                                        <th scope="col" class="so_thead second_th"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SP</font></font></th>
                                        <th scope="col" class="so_thead third_th"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">input value</font></font></th>
                                        <th scope="col" class="so_thead fourth_th"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">modification time</font></font></th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      <!--프로바이더 명-->
                                      <tr>
                                        <td scope="row" rowspan="2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">공급자</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">회사 이름</font></font></td>
                                        <td> <p class="value_companyname"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                        <!--마지막으로 수정된 시간이 p태그 안에 반영되어야 합니다.-->
                                      </tr>
                                      <tr>

                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SP</font></font></td>
                                        <td> <p class="value_sp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>
                                      <tr>

                                        <!--biz-->
                                        <td scope="row" rowspan="3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사업</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">serverIpLiveBiz</font></font></td>
                                        <td> <p class="value_serveriplivebiz"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>
                                      <tr>

                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">X 클라이언트 - 앱 키</font></font></td>
                                        <td> <p class="value_xclientappkey"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>
                                      <tr>

                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">flagBiz</font></font></td>
                                        <td> <p class="value_flagbiz"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr><tr>

                                        <!--ui-->
                                        <td scope="row" rowspan="2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">위</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">serverIpLiveUi</font></font></td>
                                        <td> <p class="value_serveripliveui"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>

                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">깃대</font></font></td>
                                        <td> <p class="value_flagui"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>

                                      <!--data-->
                                      <tr>
                                        <td scope="row" rowspan="2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">데이터</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">serverIpLiveData</font></font></td>
                                        <td> <p class="value_serveriplivedata"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>
                                      <tr>

                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">flagData</font></font></td>
                                        <td> <p class="value_flagdata"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>

                                      <!--search-->
                                      <tr>
                                        <td scope="row" rowspan="2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">수색</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">serverIpLiveSearch</font></font></td>
                                        <td> <p class="value_serveriplivesearch"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>
                                      <tr>

                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">flagData</font></font></td>
                                        <td> <p class="value_search_flagdata"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>
                                      <!-- mgw -->
                                      <tr>
                                        <td scope="row" rowspan="2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MGW</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">serverIpMGW</font></font></td>
                                        <td> <p class="value_serverIpmgw"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>
                                      <tr>

                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">flagMgw</font></font></td>
                                        <td> <p class="value_flagmgw"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>
                                      <!-- token -->
                                      <tr>
                                        <td scope="row"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">토큰</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">토큰</font></font></td>
                                        <td> <p class="value_token"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>
                                      <!-- path -->
                                      <tr>
                                        <td scope="row"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">통로</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">srcPath</font></font></td>
                                        <td> <p class="value_srcpath"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>
                                      <!-- TEXT -->
                                      <tr>
                                        <td scope="row"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">본문</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sBiTxt</font></font></td>
                                        <td> <p class="value_sbitxt"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">태만</font></font></p></td>
                                        <td><p class="fixed_time"></p></td>
                                      </tr>

                                      </tbody>
                                    </table>


                                    <!--이미지관리-->
                                  </div>
                                  <div class="tab-pane" id="2b">
                                    <table class="table img_manage">
                                      <thead>
                                      <tr>
                                        <th scope="col" class="image_thead first_th"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">분류</font></font></th>
                                        <th scope="col" class="image_thead second_th"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">목록</font></font></th>
                                        <th scope="col" class="image_thead third_th"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">경로</font></font></th>
                                        <th scope="col" class="image_thead fourth_th"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">미리보기</font></font></th>
                                      </tr>
                                      </thead>

                                      <tbody>
                                      <!--image-->
                                      <tr>
                                        <td scope="row" rowspan="3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">영상</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">serverImg</font></font></td>
                                        <td><p class="route_serverimg"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">노선</font></font></p></td>
                                        <td><img class="preview_serverimg" src="#" alt="이미지를 등록해주세요"></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">serverLogo</font></font></td>
                                        <td><p class="route_serverlogo"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">노선</font></font></p></td>
                                        <td><img class="preview_serverlogo" src="#" alt="이미지를 등록해주세요"></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">serverThumbnail</font></font></td>
                                        <td><p class="route_serverthumbnail"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">노선</font></font></p></td>
                                        <td><img class="preview_serverthumbnail" src="#" alt="이미지를 등록해주세요"></td>
                                      </tr>

                                      <!--defaultimage-->
                                      <tr>
                                        <td scope="row" rowspan="5"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">기본 이미지</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">defaultPoster</font></font></td>
                                        <td><p class="route_defaultposter"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">노선</font></font></p></td>
                                        <td><img class="preview_defaultposter" src="#" alt="이미지를 등록해주세요"></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">defaultPosterSquare</font></font></td>
                                        <td><p class="route_defaultpostersquare"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">노선</font></font></p></td>
                                        <td><img class="preview_defaultpostersquareg" src="#" alt="이미지를 등록해주세요"></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">defaultPromotSOn</font></font></td>
                                        <td><p class="route_defaultpromotson"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">노선</font></font></p></td>
                                        <td><img class="preview_defaultpromotson" src="#" alt="이미지를 등록해주세요"></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">defaultThumbnail</font></font></td>
                                        <td><p class="route_defaultthumbnail"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">노선</font></font></p></td>
                                        <td><img class="preview_defaultthumbnail" src="#" alt="이미지를 등록해주세요"></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">defaultThumbnailPromotSOn</font></font></td>
                                        <td><p class="route_defaultthumbnailpromotson"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">노선</font></font></p></td>
                                        <td><img class="preview_defaultthumbnailpromotson" src="#" alt="이미지를 등록해주세요"></td>
                                      </tr>
                                      </tbody>
                                    </table>
                                  </div>

                                  <!--서비스 관리-->
                                  <div class="tab-pane" id="3b">
                                    <table class="table service_manage">
                                      <thead>
                                      <tr>
                                        <th scope="col" class="service_thead first_th"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">service name</font></font></th>
                                        <th scope="col" class="service_thead second_th"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">관련 메뉴</font></font></th>
                                        <th scope="col" class=" service_thead third_th"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">관리 메뉴</font></font></th>
                                        <th scope="col" class=" service_thead fourth_th"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용 챙</font></font></th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      <!--사업자 push-->
                                      <tr>
                                        <td scope="row" rowspan="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사업자 푸시 </font></font></td>
                                        <td rowspan="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.1 서비스 알림</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">쿠폰</font></font></td>
                                        <td class="boolean_coupon"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용</font></font></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">이벤트</font></font></td>
                                        <td class="boolean_event"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용</font></font></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">선물하기</font></font></td>
                                        <td class="boolean_present"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용</font></font></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">공지</font></font></td>
                                        <td class="boolean_notice"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용</font></font></td>
                                      </tr>
                                      <!--nvod 채널-->
                                      <tr>
                                        <td scope="row" rowspan="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NVOD channel</font></font></td>
                                        <td rowspan="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.2 채널 시청</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">채널 보드</font></font></td>
                                        <td class="boolean_channelvod"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용</font></font></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">채널 핍</font></font></td>
                                        <td class="boolean_channelpip"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용</font></font></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">number channel</font></font></td>
                                        <td class="boolean_channelnumber"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용</font></font></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">number of VOD</font></font></td>
                                        <td class="boolean_numbervod"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용</font></font></td>
                                      </tr>
                                      <!--4방향트리거-->
                                      <tr>
                                        <td scope="row" rowspan="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4 방향 타격</font></font></td>
                                        <td rowspan="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.3 4 방향</font></font></td>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">상키 vod</font></font></td>
                                        <td class="boolean_upkey"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용</font></font></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">하키</font></font></td>
                                        <td class="boolean_downkey"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용</font></font></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">backlight</font></font></td>
                                        <td class="boolean_leftkey"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용</font></font></td>
                                      </tr>
                                      <tr>
                                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">우키</font></font></td>
                                        <td class="boolean_rightkey"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">사용</font></font></td>
                                      </tr>
                                      <!--vod간편결제-->
                                      <tr>
                                        <td scope="row" rowspan="3">vod간편결제</td>
                                        <td rowspan="3">3.4구매</td>
                                        <td>리모컨 핫키</td>
                                        <td class="boolean_hotkey">사용</td>
                                      </tr>
                                      <tr>
                                        <td>안내설정</td>
                                        <td class="boolean_setup">사용</td>
                                      </tr>
                                      <tr>
                                        <td>탐색</td>
                                        <td class="boolean_search">사용</td>
                                      </tr>
                                      <!--복합결제-->
                                      <tr>
                                        <td scope="row">복합결제</td>
                                        <td>3.4 구매</td>
                                        <td></td>
                                        <td class="boolean_complexbuying">사용</td>
                                      </tr>
                                      <!--tv코인 충전-->
                                      <tr>
                                        <td scope="row">tv코인 충전</td>
                                        <td>3.4 구매</td>
                                        <td></td>
                                        <td class="boolean_tvcoincharge">사용</td>
                                      </tr>
                                      <!--cj one point-->
                                      <tr>
                                        <td scope="row" rowspan="2">CJ ONE POINT</td>
                                        <td rowspan="2">3.4 구매</td>
                                        <td>나의 tv</td>
                                        <td class="boolean_buyingcj_mytv">사용</td>
                                      </tr>
                                      <tr>
                                        <td>구매</td>
                                        <td class="boolean_buyingcj">사용</td>
                                      </tr>
                                      <!--h point-->
                                      <tr>
                                        <td scope="row" rowspan="2">H. point</td>
                                        <td rowspan="2">3.4 구매</td>
                                        <td>나의 tv</td>
                                        <td class="boolean_buyinghpoint_mytv">사용</td>

                                      </tr>
                                      <tr>
                                        <td>구매</td>
                                        <td class="boolean_buyinghpoint">사용</td>
                                      </tr>
                                      <!--넷플릭스-->
                                      <tr>
                                        <td scope="row" rowspan="3">넷플릭스</td>
                                        <td rowspan="3">3.5 홈</td>
                                        <td>채널가이드</td>
                                        <td class="boolean_netflex_channelguide">사용</td>
                                      </tr>
                                      <tr>
                                        <td>홈</td>
                                        <td class="boolean_netflex_home">사용</td>
                                      </tr>
                                      <tr>
                                        <td>앱&amp;게임</td>
                                        <td class="boolean_netflex_app">사용</td>
                                      </tr>

                                      <!--삼성 앱스-->
                                      <tr>
                                        <td scope="row" rowspan="3">삼성 앱스</td>
                                        <td rowspan="3">3.5 홈</td>
                                        <td>채널가이드</td>
                                        <td class="boolean_samsungapps_channelguide">사용</td>
                                      </tr>
                                      <tr>
                                        <td>홈</td>
                                        <td class="boolean_samsungapps_home">사용</td>
                                      </tr>
                                      <tr>
                                        <td>앱&amp;게임</td>
                                        <td class="boolean_samsungapps_app">사용</td>
                                      </tr>

                                      <!--본편미리보기-->
                                      <tr>
                                        <td scope="row">본편미리보기</td>
                                        <td>3.7 vod 상세화면</td>
                                        <td>탐색</td>
                                        <td class="boolean_preview">사용</td>
                                      </tr>

                                      <!--시리즈 연속보기-->
                                      <tr>
                                        <td scope="row">시리즈 연속보기</td>
                                        <td>3.8 vod 시청</td>
                                        <td></td>
                                        <td class="boolean_series">사용</td>
                                      </tr>

                                      <!--개인미디어-->
                                      <tr>
                                        <td scope="row">개인미디어</td>
                                        <td>3.11 나의 TV</td>
                                        <td></td>
                                        <td class="boolean_personalmedia">사용</td>
                                      </tr>

                                      <!--즐겨찾기-->
                                      <tr>
                                        <td scope="row" rowspan="2">즐겨찾기</td>
                                        <td rowspan="2">3.11 서비스 알림</td>
                                        <td>리모컨 핫키</td>
                                        <td class="boolean_bookmark_hotkey">사용</td>
                                      </tr>
                                      <tr>
                                        <td>나의tv</td>
                                        <td class="boolean_bookmark_mytv">사용</td>
                                      </tr>

                                      <!--스마트 추천-->
                                      <tr>
                                        <td scope="row" rowspan="2">스마트 추천</td>
                                        <td rowspan="2">3.11 서비스 알림</td>
                                        <td>ch.890</td>
                                        <td class="boolean_smart_ch890">사용</td>
                                      </tr>
                                      <tr>
                                        <td>나의tv</td>
                                        <td class="boolean_smart_mytv">사용</td>
                                      </tr>

                                      <!--tv앱-->
                                      <tr>
                                        <td scope="row">tv앱</td>
                                        <td>3.13 TV앱</td>
                                        <td></td>
                                        <td class="boolean_tvapp">사용</td>
                                      </tr>

                                      <!--tts-->
                                      <tr>
                                        <td scope="row">tts</td>
                                        <td>3.14 안내설정</td>
                                        <td></td>
                                        <td class="boolean_tts">사용</td>
                                      </tr>

                                      <!--cj hello smart app-->
                                      <tr>
                                        <td scope="row" rowspan="2">cj hello smart app</td>
                                        <td>3.14 안내설정</td>
                                        <td></td>
                                        <td class="boolean_cjsmart_setup">사용</td>
                                      </tr>
                                      <tr>
                                        <td>3.8 vod 시청</td>
                                        <td></td>
                                        <td class="boolean_cjsmart_vod">사용</td>
                                      </tr>

                                      <!--현대 hcn smart app-->
                                      <tr>
                                        <td scope="row" rowspan="2">현대 hcn smary app</td>
                                        <td>3.14 안내설정</td>
                                        <td></td>
                                        <td class="boolean_hcn_setup">사용</td>
                                      </tr>
                                      <tr>
                                        <td>3.8 vod 시청</td>
                                        <td></td>
                                        <td class="boolean_hcn_vod">사용</td>
                                      </tr>

                                      <!--키즈모드-->
                                      <tr>
                                        <td scope="row">키즈모드</td>
                                        <td>3.15 키즈모드</td>
                                        <td></td>
                                        <td class="boolean_kidsmode">사용</td>
                                      </tr>

                                      <!--쉬운 사용 모드-->
                                      <tr>
                                        <td scope="row" rowspan="2">쉬운 사용 모드</td>
                                        <td>3.27 쉬운 사용모드</td>
                                        <td></td>
                                        <td class="boolean_easymode">사용</td>
                                      </tr>
                                      <tr>
                                        <td>3.14 안내설정</td>
                                        <td></td>
                                        <td class="boolean_easymode_setup">사용</td>
                                      </tr>

                                      <!--녹화 pvr-->
                                      <tr>
                                        <td scope="row" rowspan="2">녹화(pvr)</td>
                                        <td>3.16 녹화</td>
                                        <td></td>
                                        <td class="boolean_pvr">사용</td>
                                      </tr>
                                      <tr>
                                        <td>3.17 녹화 메뉴</td>
                                        <td></td>
                                        <td class="boolean_pvr_menu">사용</td>
                                      </tr>

                                      <!--cug-->
                                      <tr>
                                        <td scope="row" rowspan="2">cug</td>
                                        <td>3.22 [Biz]HOME</td>
                                        <td></td>
                                        <td class="boolean_cug_home">사용</td>
                                      </tr>
                                      <tr>
                                        <td>3.23 [Biz]Watching TV</td>
                                        <td></td>
                                        <td class="boolean_cug_watchingtv">사용</td>
                                      </tr>

                                      <!--tv청구서-->
                                      <tr>
                                        <td scope="row">tv청구서</td>
                                        <td>3.11 나의 TV</td>
                                        <td></td>
                                        <td class="boolean_tvbill">사용</td>
                                      </tr>

                                      <!--천지인 검색-->
                                      <tr>
                                        <td scope="row">천지인 검색</td>
                                        <td>3.10 검색</td>
                                        <td></td>
                                        <td class="boolean_chunjiin_search">사용</td>
                                      </tr>
                                      </tbody>
                                    </table>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#export_btn">내보내기</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- △ Modal -->

              <!-- 삭제 Modal -->
              <div class="modal fade" id="delete_btn" tabindex="-1" role="dialog" aria-labelledby="delete_btnLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="delete_btnLabel">삭제</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      내역을 삭제하시겠습니까?
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                      <button type="button" class="btn btn-primary">삭제</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- △삭제 Modal -->

              <!-- ▽내보내기 Modal -->
              <div class="modal fade" id="export_btn" tabindex="-1" role="dialog" aria-labelledby="export_btnLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="export_btnLabel">내보내기</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      파일을 내보내시겠습니까?
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                      <button type="button" class="btn btn-primary">내보내기</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- △내보내기 Modal -->

              <!--추가 버튼-->
              <div class="row">
                <div class="col-sm-12 col-md-12 add_button">
                  <button type="button" class="btn btn-light" data-toggle="modal" data-target="#add_sp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SP 추가</font></font></button>
                  <button type="button" class="btn btn-light" data-toggle="modal" data-target="#add_so"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SO 관리</font></font></button>
                </div>
              </div>

              <!-- Modal -->
              <div class="modal fade" id="add_sp" tabindex="-1" role="dialog" aria-labelledby="add_splLabel" aria-hidden="true">
                <div class="modal-dialog add_sp" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="add_splLabel">SP추가</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label sorting_file">파일구분</label>
                          <div class="col-sm-3 row_addso">
                            <!--select-->
                            <div class="input-group mb-3">

                              <select class="custom-select" id="inputGroupSelect01">
                                <option selected="">select SO</option>
                                <option value="1" class="so_num1"> hcn</option>
                                <option value="2" class="so_num2">sk</option>
                                <option value="3" class="so_num3">cj</option>
                              </select>
                            </div>
                            <!--△select-->
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                              +SO추가
                            </button>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="sp_name" class="col-sm-2 col-form-label">제목</label>
                          <div class="col-sm-3">
                            <input type="text" class="form-control sp_name" id="sp_name">
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="file_route" class="col-sm-2 col-form-label">파일경로</label>
                          <div class="col-sm-6">
                            <input type="file" class="form-control-file" id="file_route">
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="form_author" class="col-sm-2 col-form-label">작성자</label>
                          <div class="col-sm-3">
                            <input type="text" class="form-control" id="form_author">
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="explain_form" class="col-sm-2 col-form-label">설명</label>
                          <div class="col-sm-10">
                            <textarea class="form-control" id="explain_form" rows="3"></textarea>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                      <button type="button" class="btn btn-primary">저장</button>
                    </div>
                  </div>
                </div>
              </div>

              <!--so추가 Modal -->
              <div class="modal fade" id="add_so" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content ">

                    <div class="modal-body textalign_left">
                      <div class="container">

                        <!-- ▽ so관리 modal>상위 텍스트-->
                        <div class="row">
                          <div class=" col-sm-6">
                            <i class="far fa-folder"></i> SO관리
                          </div>
                          <div class="col-sm-6 text-right">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                              +SO추가
                            </button>

                          </div>
                        </div>
                        <!-- △ so관리 modal>상위 텍스트-->

                        <!-- ▽ so관리 modal>so 목록-->
                        <div class="row">
                          <ul class="so_list">
                            <li><i class="far fa-folder"></i>
                              <span class="custom">HCN</span>
                              <input class="form-control-plaintext " id="" value="HCN">
                              <i class="far fa-trash-alt"></i>
                            </li>
                            <li>
                              <i class="far fa-folder"></i>
                              <span class="custom">SK</span>
                              <!--<input class="form-control-plaintext " id="" value="SK">-->
                              <i class="far fa-trash-alt"></i>
                            </li>
                            <li>
                              <i class="far fa-folder"></i>
                              <span class="custom">CJ</span>
                              <!--<input class="form-control-plaintext " id="" value="CJ">-->
                              <i class="far fa-trash-alt"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- △ so관리 modal>so 목록-->

                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                      <button type="button" class="btn btn-primary">저장</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">SO추가</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>

                        <div class="form-group row">
                          <div class="col-sm-12">
                            <input type="text" class="form-control" id="input_soname" placeholder=" 추가될 SO 명을 입력해주세요.">
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                      <button type="button" class="btn btn-primary">추가</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- △ so관리> so추가 modal -->
              <!-- △ so관리 modal-->




              <!--<div class="col-sm-12 col-md-5">-->
              <!--페이지번호영억-->
              <div class="row">
                <div class="col-sm-12 col-md-12">
                  <div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                    <ul class="pagination">
                      <li class="paginate_button page-item previous disabled" id="dataTable_previous">
                        <a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">너무 이른</font></font></a>
                      </li>
                      <li class="paginate_button page-item active">
                        <a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" class="page-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></a></li>
                      <li class="paginate_button page-item next disabled" id="dataTable_next">
                        <a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" class="page-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">다음 것</font></font></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--△페이지번호영억-->
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer small text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">어제 오후 11시 59 분에 업데이트되었습니다.</font></font></div>
      </div>

      <p class="small text-center text-muted my-5">
        <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">더 많은 테이블 예제가 곧 출시 될 예정입니다 ...</font></font></em>
      </p>

    </div>

  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {
  width: 100%;
  height: 100%;
  & .hello {
      background-color: #f00;
    }
}
.container {
  display: flex;
}
</style>
