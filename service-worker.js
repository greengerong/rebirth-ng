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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","3f81a2767927097af02f3f8722f7532c"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","cee50cfa339de793ef0d3cb5ba4a5261"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","80f875db9e57d4f71dfb3c1c3a32d254"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","525c382cdd6a7dfd9ec5459a6b8cff12"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","2908d454dd1ccb0792af150a95a289e5"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","fdb809504f4a1795e91da7de14e20b29"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","d32978705e9bc1a29813e10a860d7908"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","f8dddcf587f01208737f85883b186203"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","3517803279548f6ce3637c2de0a1e8c6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","5c852205812e207a389e6cd60b5e54a6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","77a67e62cbaa04fb18468d2702c1ffc5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","c2c7707e7fb197609452e815c4f7ceba"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","e88b73928c6f8a675252569a94281f17"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","e1430d71c317bc1a2ae2f1a961c9c1d8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","0ff3b520b953c508995ca3f82d085920"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","bfcd5f964ad8ebe8f378a0cf45a7ede9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","719e54ad1da1815d0c75041ba274d0f7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","2c8b3e9ac56b39f99ab7970d255b7a1d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","3a178835e41b8f42c689d3770be8233c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","0495576dfced17da4b42fbb0664bc8a7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","8aae0f2cc988f0a6e5f3d4cd0fc82fea"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","0078d781eab31870a44c76a654c46401"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","57bcf74c480c1f0d1dec2a2e0e3c9476"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","de1980ee00a966570b4eb4dd578059f0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","59b5f9310cfc016cb3a56087c83e82e1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","fa8e56e6bfbe8611766af07337cc54c8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","c4fe3758615efb66a3f298b9ce7224cb"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","3e96ab5f1a78134a96fc5a968cfdfd0e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","a370db5e59d552637b3e82e305926245"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","6bbce5b6a6785bfa63374ce981655daa"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","14f9aa1f624123885ae8f697d8ee5cf6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","904230dd245b4aa5c40f73fbd9db42a0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","bf7474b43d6d0e8ba53797f69b68c7cf"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","9a06621d786d05565d4c66016647f11f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","fcab151015187ef209803919768fb87c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","113fee756ea352b28e9da8fcf7615dd5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","f9f51309838ba04afbfd0124cc23734c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","2a28c9d064ad75c29d770ae3bce83f30"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","87773b2e3bc88ba4850799ef0eb07a57"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","261b41c1494cc76d4085467390ac1d42"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","604077b9dd14e5cefeba1b3164d525db"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","8f8e623a45bf6ef5983400a17f31fd62"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","5d7eefec03f90d01404f16f38240098f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","b9541f729cffd5a2f4071b17555eef34"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","ee1968c1a99f3a0d92a04b6bc89a8abe"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","a9448c4bf56f6c9030f65cd5fa28075d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","bc52e92740f4d8b73259cd80f8e78d64"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","52dd2270111adc2cf29786ac77089fa5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","230c2d408ec46ead01d372d0a1b6f617"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","78f892ffdc2ba42e35c63041ea23a821"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","b067adca477993506fcbcc0231aff7fb"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","7beb75340fa12d55d9beb968773f4ac3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","363c069838627cd925fb0cd6d3d030c4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","56d3424e6693aab39f22331504f3012a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","34f3f22909ffc1423bc10ed6c399a982"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","ae3730d5e6dea37bed6e83f5876a9d1b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","c750fbaa9a60fd060b1be2eeaec6ded7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","d60af16f9a555233a7a1191da460e4f1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","d2daee5806a7924cf1a1f0bdd2648590"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","85b79a51f24ed2fbb783db48e70533cc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","7676c2cdb62a871422ef270d6159c0ce"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","f569e65726b531a7eaec213417401c70"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","60d43c56b1c788408e232ec0b511a0af"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","638a306cff6238f12db2f3555d7452b7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","b7d029ca585fa9c162ac8a06ef9ea91c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","c86cd08e9cd30ae3ea773a703e0fa628"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","06db63ef4020726c5b1dce409861b846"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","f06dc3ea8e7d32c19d9d715ef575f885"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AfterDateDirective.html","4b1b1b908f455bd41b3af1285632b882"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","05d472c8d667a3cd7408e83c8f59c194"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","745d69cfe85ad2bb40dbf84cdfd9937d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","8f443ecb1ff347eb22ade86b627a0905"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","7ecb93249b2ab6f30d78dbfe3b40e4c0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","6118124c31ce59b4a30872d5eddca10c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","2b1e4bfb388345f99236f1c84fc2f925"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","7378f2d5d5e8c3ff86bdaa84ec80f424"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","61845b49cf374566267caa39846e9574"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","bad80a9b5d70aa8e3a3d6f0b9c05dd29"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","474bb3757b72fca8dedb3864ef5c670f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","e7e4d778b1b6070cb9dd120d66c77669"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","598e0d059c0959e4afd60c91fadabb44"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","246555bb21110fc49d989531610c8a6c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","1346e53303b826bcf2b0c27aa1341f17"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","0a404759fc5bc06249e66a72276fe148"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","4b05dacb829264a70eadbc4a279e66c6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","167a66ac1437ef16c3c40f5a8a748966"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","c38d811d758b2db9d4500cb86519a128"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","e0ebe6444dac3419cee4034668b29bfd"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","77de4744be1d93f333fa81a51a402bb2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","7ad6346a60487d9c2b8c7fe3953e090b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","9a8fae4de1c910b687df86ff87d9c81c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","10b13717d8d2ff0c002e6b3051ad1799"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","f658ba028f9845bfa8acb51d9bc9edac"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","06995c2dc12571813c5d1cb439a87fa3"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","9be896cafe4ad8cea535d9dc28c15858"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","918068381be97a7e5c15707923731043"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","e6d6d31a6d542d727c2f6d3209ea7d46"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","3f679b9448c342fd500c4941ce6d26b2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","95ca47ea56819ca06422114d2a0266a1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","6e1640514dad32318a86fab7305114b0"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","404047c4fa123bd6dc8d398ea82ec111"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","6011c80fb96713dc36d2c347f7351ccb"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","9736acae2961221f0e1df1ede7a62adc"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","93b67932659a62a9afa439d47e751956"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","b3069adebdb2ddf5f698277f7e1b0c89"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","a05e63cc1070656c55de7e2b867d708b"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","c6bd54f676af3260c35be7eeb1ed0ee3"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","70f3d882a7ebfc0c97771b73761ef86f"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","ead3fc705d3c1c2dd6700dff7734177f"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","ea7f9f2f9bf1e4bb131b9d14c3695d8a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","8e2c00337231be2cbc76fe3512b8c575"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","c64e4f08916ed3ca6fc71d32ce074908"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","4e2b837d17164836306e55490772b4d0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","658244f2afad354f69fcd2f651c74836"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","9c4d05654d71365d777d6625815b0183"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","a9bdf2072ed22dfcee46f655bc25820a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","3aabefa519aa3451f8479db9ecb3dc38"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","bed4b13e690162bce9cb599c40b1e71d"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","27a97a50ef8af776dd26abd3857db4ce"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","73b2c61c3ad8558e3a96bad20ff95c01"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","65f0bd1e4c4d1f2867df25e87cacdab1"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","23bbc4a342ff1821a5b1796d9ca6e3ec"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","9c66e61ff4c870ed452b01c8fc42267c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","627ec3eed65f3626d0365dc8b66ffb89"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","53ae283113146f28a8e44515a79ac248"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","f2e4412ba4e0f26bb81881e4ff27c2df"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","375650f33a8762cf7c56247f16577c59"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","5df37c796a6f74a09fbdb5b7ef21538b"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","cb1dda4d574d5c69c6efe1fccf713c66"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","ea5b478773bc95c814b0fd591fcb6276"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","b356feb4027d1b2251e4932438514159"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","caa0fec8769b8227c84db78f5a13e47b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","133d354825229f2aef01c2a6b766ee2c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","6dc81c64ad0044b779fdce3b9926b85f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","6fc334f425a355c03930b50c2fe5aa2b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","aa3b7718b606a43b5d9869a4a1aaeb68"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","4291be021d3d1fc0ccdeafeebb3ff951"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","a88abd1e41a7f3ce28afc6001c8a18a6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","b8f003227930db87d80c9a80b16ecee6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","25b68afa1256697e5902abc70a719639"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","b673876fc285edbe6e253d8a29f93333"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","6f5fccee974272da20ab9359f84e3f79"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","f8393fb40133d8d5e2b4d98dfc3d6c9e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","d8f7207f1755724d0efba979ba8620ca"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","f0a68442b8f9001a6f57b61146542acd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","172290cf65fd04252480ad5a29f76645"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","94dfd14ab5b8cf76d8d63956628da3a8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","8753ebc159c307b708551c528f9a220c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","1f0b0a5061e281e1ee01ad5ecee626b0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","8fcef392265a324b2a165d321244be51"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","10491fe70a51d1d60d9f778d288c0464"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","530bb7766420f4321af3c759135e7477"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","cd2ac5ba0d99b35e531b55e21bf75ddd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","45ac9532969d26b221842835ba953332"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","e208624d17fc2eb0d5e3f9ec6548bef0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","6478eb2de670761e655e52a70ea29efb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","d85f973e77290774f6a6b72dc5e1a984"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","c4286f6d55d5864d9228bbefbef97ae5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","5cc4f4c812aac5d890b12368cf76ce38"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","af55ca1683ff7958e214b4db1fd8eff2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","83a0254ccfe0ad782d75e28f94cd260c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","4ac021bbc1ad5ca3b31a400e0c71817f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","54138b85abb69b365b740ee05769dc64"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","34aa4f29868fecda0c0b50a7da2f7f41"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","2b3fe1afa7ec82787a17b55d35be4a8e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","8b6d85404fb4bcf89476258f436292b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","44414117fcc9744f8b62f19c2ae59487"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","9421417f3c7b7e1427d3cde84433cd40"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","94308a71bd72901a93f8dc2e7c5c39e0"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","aaa9d6af0ff869c9498442a8a1ee0f48"],["https://greengerong.github.io/rebirth-ng/inline.1c18aa04d85923301181.bundle.js","348407a0d1f65601ec108c95904da021"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.6fccc0d1f43d371a1a32.bundle.js","6d8b2b967b2272c706407e8a498c4ede"],["https://greengerong.github.io/rebirth-ng/polyfills.a7a04a42b38e0b032cee.bundle.js","a3f18ef1cc80c67429e0249125ac96b4"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.95a41133053a443685ec.bundle.css","95a41133053a443685ec97e2ac4ed4a5"],["https://greengerong.github.io/rebirth-ng/vendor.41cc8e608ac297a6be63.bundle.js","9ff3c139b40368a9d18b8e5db9b89e5b"]];
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







