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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","71360e3f05a547d46c2d864981317682"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","2421dda9a4fb8d5573da4076a3be665b"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","d5b3c7004f72d0be37ee0172b7f86563"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthValidators.html","ce38aca92ae53a76f7987a502cefb728"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","59b5c1e268db51afb954020f99cf8712"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","6cffe68e49cd153e6604f26b4d0062b1"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","cd5ec4d5ca1484ae1066e2177736b774"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","75d87d4625ff555a563dedc9009d97a5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","dac72b2d6aa1e010ded301aa7b23feb1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","0f2d68a0b0b7ccb23a5f7d2f7a4c4587"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","5ba7b728c51d1b2a1606da570c75d476"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","06296b7356f4472dfc8064518cf65d63"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","acb960011bb29bd2a663e2b3219e01e4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","18c291361cfd88a35ef42fad81c04e50"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","76fefb796766153168a46e7780ccb132"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","c1c2c592beb51f36580755a6be0f065e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","0f2ad23e9dc6ec6ed871b33658b3d1ca"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","33659f634af4dc161cd09ba580375b02"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","093e0a6a1e5ee33fef9fd808efc69d77"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","066fbd4405e817e5c2e4319af41bb47f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","68abab9d0dd9e98956f91a8455649872"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","0daed22502b9b20745da98ce2c062852"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","a0290c502208de5a68bb585e30f90cd3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","53c281ccbccb3df50f6c656094a12711"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","231f3fc9a76e75abc450dc7e355083d7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","19e6c33ab731a9a12f997034e73dd21d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","1384449f3eac1e64ae4129715d90e56f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","57b62a6adfcbc154a11acfb48d856819"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","3b7552c6822d5f3dca3cab3f69bfa043"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","953f8bd3bbbfc135e0cb0c82ee1bfdec"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","5d5e8adfb2c1de6bf9ac936aca397c4c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","f5b00a747e7285a2ce54b21a8193bf7a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","e222fb6e457408c91615a8046b084ae2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","9baaec7fa6a82f22ee673e9522cdae2b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","fd351b53f78c6fa1ca5a01cac2fa431a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","fd60de263c6ae0592f337c0298949450"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","b84d44dd142c56ea73d53ac023169a13"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","880b4de1840f90f16209de43e9e57bff"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","b149ef7b76edb3ee743cb13405e425a6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","6bc51fed33476b849da1b26fc0a86c9a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","19d5e8ff1894f29eaf16b7450626c10a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","e07f9839e15b7f783e2461f0dd8c096f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","9706e183ada725dbc0e817578e9cf46e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","e0a6c406d622e7410c50a7ccb592031f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","3729d3475eab720d534972e447924e27"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","733c645282be474e3ce2591a39983950"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","0bb9cabf51cdf3015fa5fe0bbf778212"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","df7ee0eb7354ef52342adab27e320dc2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","da450377788618f1da33bb0443d4b196"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","1ed7e9f43e9868a5082ad93de8c5ca39"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","eaf11e13442a3c80a807d84a73c50237"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","9293c3dc9fcb439c9d778d0408f4f5c6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","fd7f2b0428f86216c40d0a7f019f9c78"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","3d00126a32462655d18ae92637f4d13d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","f68960d95e3099b2a9ea6faeeadcdf01"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","8ca36c9df60af024c50b823db6d1c7ac"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","7fb155f07f436545873ce436d8878cfa"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","8c494bd80304c046397d1e8f2dfa4890"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","42a3bc1a303c9807c98fb787b3d5b42a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","3e21ef5f9c40b572146cb82d2d4ecb29"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","d3e184db8f7875883b5325e569093c94"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","b2182cd08fd3aa1af1dfdaf0e5ccd5cd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","b4d6550fdc1b45da2afefa7d2472ff3f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","daa3dd998fc8aac55b499044a5431456"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","acde1251b0f7d01af37b5336eb44c039"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","70273df196f87481611550af4e426ac1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","32ddb9ad56c9bcbfdfc5ba3ca14a41e1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","e876504256d61cb5081b626c03370625"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","d7934cd87ef4f960ed7f87e063d9d237"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","908b2398014e17ce694e0da800bd8f31"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","b3d11fefa89f81df8bc95689d9cdf8a0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","44d94cf21edba5c6b86513fd6fcab1d0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","5233ffc5abc55d241c6bad05974247ef"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","0cd01bd4c8c4f6eb364616c90b5828c1"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","366e15de30d8c6be33cf65358bcb537d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","18fdbc4a4ee21cca9ae0a5cf068f5fd4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","fe362f3319c84326f5c9b48c65c6fcf4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","c3e2763d0f02d365b3b430255ae08ae4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","588758a4b663f86c612910f1632db4a3"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","16be656e5bdc85b694d4840650eb0d41"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","4661d6184ccca5c16b2ef4ce8adeda12"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","c3db54419a81979d98900a1e25a21629"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","29dfbedbce87792eb888876ad87924d8"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","80b510efa3aeaaf2f0c771b82772e98e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","a3113cade82b2419f4221b05872e8052"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","911796e7b431358ce3d7e6817d937796"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","902beaa86dbeb907aafe3f99c43c7758"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","59d8ac9379f0767e474124a00ed51dd1"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","13c0d1c904d87c63d50b581c0e39a4fe"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","da121fe808f5a159c3a53351b56ddd74"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","890eed8f094dccede95de739b0a7bc33"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","7c91dc662197507a0522ace1cd698e6f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","4d750ee14888e04fcc7f58edfa66cddb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","0ec53843ec37f7b9b983c5117aac55c8"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","ea49a9224734e0f083e3be0416cc3949"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","966521842c44948dedfb60f643c5b9a0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","8ee167b34f423b01558de7ebc68ed6c5"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","6d937c14322e52db3ef255c4b82ae8d5"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","8603b6b340996d9c520ab252655f6339"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","12df0789ab45d3f8615c591bee39165f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","06526f01861915783e02d9687cab9976"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","4e0f29ddf980df35778282ee296ffd29"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","6164630de5d86ed681fdc6d2efdacad2"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","d523e46ce5cd4723f17ad37351fff719"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","0b8722d011f5df4cafc7e7e5829e6acc"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","1c847d5688d165d42b6143e611db8d10"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","1538fc42a13e19b952742a8382e9f9a6"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","717a666772e8ce213e01e549d95320d7"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","96a529bd39240d3cb762f4c0a10502c4"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","7147f869e0de64df643acdd18c17fa39"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","fa95230b6cd417c9e48071b4adf1f5c3"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","9f56e3d2c17260138a0550bdf9b8bac8"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","0f206e28a5f4f76cda83f324d3e27eb5"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","05d4570ea64d8c34f7c63467b00d3449"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","e11519376d921dc66bf4a087a1580396"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","6c0ff12274924e38cecb507bde0c82e8"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","2beae06bc40dadf9eaea32a7851efb0d"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","5dfae2533f847bdd8d15d1e9345813ce"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","a8ba354a3f93dedd9d28e5e1354b7355"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","d019a00749832d0b5f708538189c65e4"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","24fcc5be49d8114a4d83ae302a5f7214"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","7d1df08795c4c2b8a92edff58b6582fc"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","1dce4394ec508f74b14563466933dd68"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","ee4d13f0d76e1e19d27f85d3fd48cf2b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","a3c2607b00e9c6f2c211f3c16e773a41"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","265bca54b42bf84053bd03148341bde9"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","737aef5c15c4397cfba9973e2fbac91f"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","b05c4191f92200b3fef93b5815ec38a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","a416214d30763a018de1b0f38252e002"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","2eb5e553ae2e08095e9fd44902678fbb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","7c0a2f75ca34f2cd1ad5060f711161fd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","f71f47dacb112824d63787b937bcaf0d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","e13a1a201edf121f1776d9a0c73833fb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","ac1e171d75b0ac1c72ea12998495025d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","eb451574a317bd0be0e7729e401ed532"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","879ad67b7f0b1182853a04bb268bbd3e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","975b389f9b0fb981069953a51d73271d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","e6a61e194b1b8ba5e80b04307c06c3a5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","b8f003227930db87d80c9a80b16ecee6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","2735c8534187e8a25a26689305119390"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","e59186404b1332a545898eb5c5d8fbdd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","ce0152360ae07de3755845872c2611fa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","5261cdd53ca872d32187ca7c21320e71"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","9bfdc7927f56d971fc78189edd0b8e1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","9c505df71b7d8e0527f5a79c1d4ad5f5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","fec717e10876fd8c469676738401b582"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","8d8eb62c0aa0a28ea63791278327ba17"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","e450e16e560a7602b2a67f06808edf69"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","cf10963e51dd29072d4c9890e3093930"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","3efba0e336390a8ff2dc9295157f82ed"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","0afe7565682ab56e3c1bb1abf74aaecd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","d8849b7a67ad8f9079f53a5c4ee7eed2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","f6e4f01375ebf763be23014ea40a6f1f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","4df0825bc39b3899c13d35f168d0fac2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","f404205ea9ee17a13561eb8f200754df"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","43ccc27c11973aec33fc2bcb8a85a06a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","631b0e8a198ff506e2b448353503d606"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","c4286f6d55d5864d9228bbefbef97ae5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","fafe2b90607821572d7631f51159fae9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","af55ca1683ff7958e214b4db1fd8eff2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","113511540dd5edebadfbc73ce45c32f3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","19e46f5fc339050ed509454a9abe6798"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","2beaefeb44a0555ebd0b70aab1aca26c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","1d00e0b3c70923f537f400cc0f6a7a14"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","9202c5547aeb49ec79facc632b4025fc"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","8ad9d9adfcfea1ab997d3522ecf4bd9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","06d34f1f7391c792d1de34d0b6db9fd8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","8e09f881452b184f2c39ea2f4e42b0cb"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","183caead89811aa9975798bc31dafa53"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","947ebbd8ae36f432f56cbba35bfafcf3"],["https://greengerong.github.io/rebirth-ng/inline.ff4ed454d68b6b48e220.bundle.js","1070e34e48eb13a13d37f465291b2e96"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.ba40e9456eadf2e07843.bundle.js","bae66c914e91a730a8402c349c1a631f"],["https://greengerong.github.io/rebirth-ng/polyfills.a7a04a42b38e0b032cee.bundle.js","a3f18ef1cc80c67429e0249125ac96b4"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.95a41133053a443685ec.bundle.css","95a41133053a443685ec97e2ac4ed4a5"],["https://greengerong.github.io/rebirth-ng/vendor.41cc8e608ac297a6be63.bundle.js","9ff3c139b40368a9d18b8e5db9b89e5b"]];
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







