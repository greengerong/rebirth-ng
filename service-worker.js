/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","5eb893bea57ebb0da83c35cfbfb0979f"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","5dbb48161bc2d743ac29935b97db1d6a"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","63741efa6bf8e8dc11e2a8e9b57b6a6f"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","e4d21c59efa03eb167bcc54b6cdcfca8"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","60b9ce6031c89242a1724203a41f35fa"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","b3342ba46b4f6391a2ee4fe0ace71624"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","8c9fc0f56995f0cc409f7644a1e74786"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","ec9147b98a9dcaa00304183f38787b6e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","f25e050cc6958f7b44881403b91a2d9c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","cdd4f72275d6dc647022816a008e4e7a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","5bbc74124521dcc89a76fca277030618"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","95bc7b0e9b1feafa095ede9212f722be"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","94c8403e23c3739c385d4c676fbbc7aa"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","fde678a4b6be80f2e0ebf59a99b44545"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxComponent.html","333a2bddf8d094663dfd7bb2ff319f59"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","1b8c98657624f33b0d8c6d600af5c5ad"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","94509536afe19fb410a3a5ac52001632"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","4e851e358a088ab436f1216954b22bef"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","98b4f8108e39b01c94b47e1f22a391f1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","b9bcc839bce9a2c2f8697b91e4eb4fb9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","97b3b4a722204e093c22374dbe987716"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","6abf7ad2cf0f32679ebed1d4ea1502a8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","52bf8bbf4746ab7b2c38143767b202f1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","68bd9bdb7dd310aa2d03eb07da3ef356"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","83dcf17503b32861a39fb5fbf8446c74"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","097d795266338d665cb3c1acc8eb7c0a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","af64467220e5410731af888895174969"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","8da751202f67bb577eea73c067207f51"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","a6381181fe559f56ac5c642fa56624b1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","7464834534fdb10e81cd866d77201f58"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","ee87112288903dfaae593860eab19c27"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","9a72f4b5ac0bb4c6a6b3e089f70c2bee"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","7f80d00de9e440a99cc8d42754b1fcb4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","947a23fc8c992808eba29e2c03fb3240"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","31e55d84c6f092849de6dc5dadfb19bc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","8f1cc80c5c3069cfb9d41f7b1188d98b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","b37f85fa26896c69b679d20f1977662c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","f51f4c85b825dd5786b888970c62162e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","e32cbcb488c901e1746ca5e601fb5e81"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","7092176ea11d3700b636b1271f1ca2bd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","1089fcdee0c8d6b613ad3a5e5f19d6f7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","a3c1ddce6870808e1855f598717bd045"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","182e00a9dd600349734a5d2946515021"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","b2555342257fcba5018abcbe406f5fa0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","89cc2840d2634d71e7c828e090d2dd69"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","a7cf1dac14db5a70c1e776409c2a4864"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NotifyComponent.html","24efd7fcaa1045c9d14943f2ef9eb0d3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","44684c1838e7274c6f5152862a0d55a3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","8ba6b6ce778148e3c7dd8025832d0487"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","38cf329c2725c86c11fac5737cf070ea"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","4ad70ea7bc8e61ec934def3e7922f5fe"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","cae3bd96fd7519a79f7dd4da1c7eae37"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","59c19ac99bd132a7cd3d199f452337b6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","87f36c2f0358bea41921618cb1ec5acc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","fe3d7de326a56b27bc848be23609b741"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","fc1bf36316e8af0e2dbdc0c0aede0ebc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","829cdae343f3db771650025ac88e50b6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","80e8ab3f5b64bd84bdf28e37c0928e2e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","118ef149c4e6852306f29e38738b0c1c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","8a93c3ec0799dcde9bccb6f664eefa67"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","eb034cba741b8931f58a036c2b0d14b9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","314a543fe4389a14f7e27f827c6a1f44"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","7565586de024115ece0afa57bc7e7e34"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","231eec88bfab1aedb989f6bf7c39ff33"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","3458dd76d7874c1905106e8cbba36d03"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","acb4545118e5ccd0a7ed66e354638940"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeNodeComponent.html","23ad74f6d54484b618ac767a271371d8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreePanelComponent.html","9743c68b930326b9fe2f015bb0312551"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeViewComponent.html","9b89a1d93a3c5188d23bbea8fb249565"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","f332d25ff2fad7a6df5e63b1f49a0847"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","fbf4bfd4194389e1c02688808dbfebd5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","b1347796fb26c4aa6afd7dbb9eb2e4cc"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","b286c223ce25bd15da9328df070aba27"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AfterDateDirective.html","7428f0c8dae6eb5bd69bdbb89c3351b0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","90e930431272f19a419e0e13b9a80315"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","edccca4aa31fd1305d0b8dd8012811e4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","d60f785266b1dd2b0e0260e35a9b528e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","c4dcfce656616e64ea566f4306b8e56f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","3ffa1b1fda162492bdf844155318e10c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","9f2feef65c535259b9529d3984c55463"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","d1e0ce43b8b1b5702e8945e784d70b8f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","b284dfae5c6525a4fc9b8f762dbbe852"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","e15e8e0dcb6cce15095d3eb81bf09b80"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","28bc8bb6d46ead8a6451413a16303e30"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","e896436efb7defae5435bf1f99a15b2d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","94cae27a027e82dedcbe502c802f2b76"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","08f5d7bc2e334af38492c99b9e66f051"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","288de6c6400a49b0c1fb01c837c5ca6e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","dce2064bdc1afd5e95ebfca788e55d52"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","03058759e72b47e812a294184f94d5ef"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","e109c36f62df216eef7972ac9ee7accb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","1f7e43991176862654ca048a2cd361d9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","ec27660a49cbcc164317e7363b6403b9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","6422b21007ab96d488fafacc385dcbf7"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","89338956b45d1a112bb1e6a518e09fcc"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","2fcbbdf8fbcd61bef866d638399ef9f5"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","7bca210b2b0afc4e075530c4abe8cfeb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","26515306ea638f383dbd394d428c53a0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","593c78a03c32ac40b7c864a7eea0c0db"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","dc4e1e094449b5bb126fceda99ba0abc"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","5af99b344bf7ced697d21b7a6f0a22de"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","ea7bd97e0972cba5e5afbb9bee77ceee"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","643c2f8ef91a0b1a6732d8bd33f10a70"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","fceb0c385aa424548c7d271957a34f30"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","d1d8057e08bc0d0d277ced5364711c71"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","404047c4fa123bd6dc8d398ea82ec111"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","51fb9e02baac6897eb105aa3f3c4eb66"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","325002d4dc20f94784d3aa4c8ae59d36"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","24067bd575b994f2eff3ed8d9e7b7db3"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","9b6d72dc52b7dab83eb501b9b258d09c"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","c7eadab9bd36a4a518e4b60e2f531aa5"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/NotifyService.html","67bcbee504e753ed315f8059a3794e50"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","507219369c8697c92a29a894378acbde"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","9a6410186f5276b608bf580d69f1b0a1"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","be569d7e45b2a547b7a14c8d5c394338"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","3e705df590267c63bea033cc7914aacb"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","61f3e00d4bd69fef55bb79fc50d384f8"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","8bbcb914e9fd18b9ae6d20d256315877"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","466274cfcbce8d2e77469f960a60c9de"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","639abc367d58008e3462ce895f1d4a2c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","270bbab5dfeadd9783cb89068cacdaf0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","1e184a35eee4e89248dd8fd509afa019"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","6e366ed681ef23c278978461e16bac5a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","b16662115d4c68874183bcf992cb3c39"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","ef7ca7e53ed5a1422bd9caa9f3b88435"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","ae601b95495e3d38ae1718bf4d559145"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","e2984721d6ddca841c2b5b40f2d8cd93"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/NotifyModel.html","51230f500333f4a906de51010e9c423b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","bc9e8b9f861db2bb6ba24d254abd7991"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","29daba3966a95e34529bafc1bb210742"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","e4f541c4591d9041a743c0b57776a966"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","717a128f2c36e25ddeb8bb0454dd6efc"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","de407da1448ac7480e69cf72f2f6fb03"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","cab23b61b6b20b8dafe648debee7ff29"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","1db3b8cd5667ad4cfccd5c9c6848d26e"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TreeViewModel.html","9754aa1c3140479306ab5cc7c321ac4d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","09b65c4b0186aafb8c3d8b667bbe8a3c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","55506a334e5099ada674de9c92428ad7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","e4ca5ab91a201755a89b998faaf99fb7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","a87d2edbb068e8263cd4362c00829802"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","0154903eefbd94da8c09985c3a8e904d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","95bc2d9229b9f63cf1780defe58506aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","5d5261b172adfeb67d355581da6932ec"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","708baae7c944fe70a043619b7e18b854"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","6dce707a0203ef46901f5a27ad405f9c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","a93955b055b2a8cb7c378c086275f156"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","24aba94f180701257d595fd481178399"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","6ce2a43e6d94296c26a87c935bda681e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","391b6e658049169955b025e206ef2704"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","4cb095183a3639c5f6faabf5b4b9edac"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","9e154fc074bb67c18c2dbe5afdaf3784"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","c9a70e5b5b587e9c305ec322852048da"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","0be38489718cf6e68126dfa620ade0d7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","b2186421318c3e46d9748c720392aac9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","bd4eb022060a0045bcf33adda0ba4bfb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","3ea1cd517e8b4b76673836904bf440dd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule.html","ead924bc7f9b10542532120dbb64d90e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule/dependencies.svg","1bcfa22d25f86d973e2dd92c4714000d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","a40d8969995f694415cbe4d18982e0fb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","990acbd01a2e1e73448a33aa5cafcc03"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","11e7c1e140177105598cbbe92a3416bd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","ad641b236febf27d8c9f06fdca72b66f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","13e885dd4edbd606926073d6864a389f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","01cf3a017bf1e821146ccc853999a5be"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","3b932c9a339ed7874bf33270afde5ca7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","6dc7edfde0229fb659ef7e0811c8da51"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","b6f606d2482b2d8914dcec160513d4f2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","c4286f6d55d5864d9228bbefbef97ae5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","fbabe453fbea0ccfc90dadf88432a026"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","837cc76cd51c3cdb4edcdc6a7a359eca"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","6e106b9796431aa37d9c514990bd513f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","4ac021bbc1ad5ca3b31a400e0c71817f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","d1d0416b36d2666d1a3b7256d446b05b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","530fdfbc78ae053f9d233030ad3834cf"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","9b3bc5de24ddb1f9d060eabdb281ffde"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","b166cdebe5fb4fc8280fb874cb253b63"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","2e605e1987e96aab095cb5a59cf4f795"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule.html","80027db2af0324b19e1741a48d05a61b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule/dependencies.svg","52120fea690a42f1eb5b0f2651d72e19"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","542341d8ae2f5c10afcb682fc37843fa"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","260d64c6b8ae7b7cc62d5b28dd9eb77c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","4eb6369cd32f51accba260fd81764054"],["https://greengerong.github.io/rebirth-ng/inline.17707fcfe071533e1064.bundle.js","4d3059950c426a46b849eae3aa616d5a"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.99a64e6c00a5e1d1b96c.bundle.js","720508ecf4e857cb0d5add32635f66d9"],["https://greengerong.github.io/rebirth-ng/polyfills.a7a04a42b38e0b032cee.bundle.js","a3f18ef1cc80c67429e0249125ac96b4"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.95a41133053a443685ec.bundle.css","95a41133053a443685ec97e2ac4ed4a5"],["https://greengerong.github.io/rebirth-ng/vendor.2b24aa4ccad113a7e56b.bundle.js","4c59a0c57c0808535e3b3063cdf0dfc5"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







