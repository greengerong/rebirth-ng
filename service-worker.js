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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","b2774b4e7f56e523680c6e5b14067b3d"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","fea646b694f8d991b20e886e4e8f026a"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","221d3d0f6886e8cccbbb731a552d406c"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthValidators.html","886b09374360d096af0c4faa6ee18cb8"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","9e9ca619e34e0b0c253ba7fc15a298fc"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","efdc899e45d75cb40e5df2aafc90ff29"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","091b07f502d561ff442d116fb83c0aee"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","03ebec04de65ce391c847da98a89e4d4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","6db03ada19b6afadcd4dbbe07345e2db"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","df2a1cbfb28a791618d1b6a332eb8ffc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","b4a8efec015196f05d6d753b232e6ad4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","d3e8a5db1b5aa44a32af9eb9e219f6cd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","6ba36880bc11214d614454eff7acb390"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","4cbeea79437689f46813a877a5679455"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","9f1b49d764e79d95457a49be329b6e4e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","dafbe3a96549d48e0ffe586165982c2a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","c5f2b702808da9b04ac979eeaf2070cc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","49f14795b4ce4746589c3abea8b99f18"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","5cde07f0297c4d98082803c1c916f697"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","bf1bb665bd939b8df70fc29929f4e67b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","5839b3b2bd63510f6e2a5bbfba3af362"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","26911526249dcc0c575691c414ceab6b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","b6151df79c07648e4824927414fce232"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","bef455582e87d3fb34486ce6bf304485"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","406745445fbd5b7322c304c8c49f50ca"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","ea1300eeee577929caa853bdd73a1159"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","fe81481ec07179cd2b27f8358175c640"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","09926e327309b828114ea01ef40c882d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","21142a8e5881173c05e4e53acf39e21e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","72326e9c4f24aaa229c389ac06988150"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","050bd8d88ac4dbc1dba99d2764744b94"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","fba5302fbb6e7d4703e0611031050d44"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","ca17ebea567663121956c72b6d56dc7c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","a73285814e3d790eae6e6ec05588fcc3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","29fa65132bb9c6c3f571bd1a187db804"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","b9fb6c6dac9914ebdb1094d64ff2ad7f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","704c94bdec3d8e29b8746079cd5610b3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","ae2bc0149cd84a9bc5b298410b646865"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","7e75a5f844a744916fa72b0345ddffa5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","9a0650a2c5984d73e7b3c1d986f28205"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","ca45d133942dd405468317fa5806330d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","64c6fb633b683a6374429af563255c63"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","34d82b9d57d8098d272e3a1ed38ceccf"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","627c8006bc17d341e4c67240110397d7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","2baf4f11c892adac33050ee89e08793d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","9b6201d556263651046c3a256df991db"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","64539d69a0e3143b5fd4e65f3777936d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","dd9083887e842ea3d9a1157c1acf949d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","526da8387805cfdb15ba77855305f0d9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","ecaa8672346b1a80a574f36ef1349153"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","bd5ac40a38d44a02912d5c04ada171d2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","8fd21e348394a7896773a86fe304dffe"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","01af14d0113ae1c85eae4350b5d443eb"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","96d6f69ce030002a715d1e2c3518b93b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","1bf8198cd2cabc1234a4f3afcff66521"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","5856b95462c43aec8a9f2f28f6cc12c5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","d3194a25116c8b93834cb511724b0e3b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","271d3e457cf0a4417fc649b8fe1e5d52"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","d2e2d148a4421cdbb8cff28483add906"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","aa766c5fa60e484feb12cbd18c0da9d9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","6087f3d631c5eb1167f5f3cb69b1e776"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","a48017f0be438d512dcd4d63d828aded"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","301c7bd043b439b3442d1711bd6e9ea9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","fde29c1d1ba84dc2496156c01e0e266a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","9c5f163c14642adfed733f2fb7a90249"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","df5cbf025bc2969e4581970b644816ce"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","40a5ac5c9653923dc61f42c7ec2051e0"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","5019846681716ee3dab6ee9468e2dbf2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","d8353013717bc5ef9b8ccf438ad83e0c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","8170ca35416660685a1b11e8f4ab8271"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","174fcfd2919bac5bb2872be6dcee6b11"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","dbc7073204a67c4a8846aaba9d2a2c12"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","d58553be2153586a701f33de7e8e3709"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","c349e4434d8997e30c1b836ebb74dcc0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","364adbf7a7dba6227e00b977aabff23b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","91068d9f5da74a906cfb96e55c7302dc"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","90928c553005f721519c6f8f22c502e3"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","695177e48e883fb2105628a0f0912051"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","8579450bb73f5404cff12aa343a02199"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","52b74d4c52fb861ec9f5800cc58e71c3"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","d8d68612b4b4798c761549979886a1cf"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","449281a288245b67837a3898477bda90"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","fa0089bfff9c976347952f301de12101"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","acc3a53443ce321ecbe33cbe0b07c159"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","6d04eea347157cbaef9997834b102a1c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","34a04210ee9b48dc697243921d4499a2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","aa110cedf289d3aa18e59cbb34b86f3f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","33de18caf90f85b13ffff864c5c5e02d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","a925522afd950be1dbc20f385015f7fb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","14180e68a20265052ff27e80c3f0614f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","b40bcaa577c52a8270782e0c23f0c8fb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","0e6f631258cbeef18475c2cccc2a8141"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","f99f53df3bd102056f2d3231dfc100f3"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","d928b09605aa174ebc34b546c78ffd08"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","c92e6ffa718ae212fb4f207380a68229"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","8d563b876a69603e63901939409be3b6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","1d01f3b5d572b1bae2c1ea2a6dc1e7b8"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","d745d1308586d158e1c16d1394c04a07"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","12df0789ab45d3f8615c591bee39165f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","06526f01861915783e02d9687cab9976"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","600baa58fc83892a5fb170877c01bd23"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","2755bec8ac5f4e1d800399b4e127edd9"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","93ad77d60471f3fd723bad76d59ed18b"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","ed424fba2d24e19006dd1f68691e800b"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","6b5d8bac13abda04e9fd75718d339fba"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","1b7600f3772f6ebeab2cb43bed61a8ab"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","6a46c0754d7e486242bf9893f3a10415"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ScriptService.html","e2be59962aed5d64801faf3a4e50f44c"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","89f8c64bcbc4c6f8e7168adce00b8b2c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","5ff5187d3a406f12357578a37d9ec4ee"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","b52fe0eb57627ae41c6e000dc319277d"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","416e15341f6b1ce1122ec62de4e73d3f"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","8a6eddd307899505132bd4dec70cb8e2"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","bfb397c05251474e8079199834c8a514"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","a4805ccb33bf11f5ccf74d3e053c8416"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","88f4e51a5b1c238ec57e4231d6ad340a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","21476cf0e244b365ce59cdf82383a3f0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","317590eb106c096baab68108b2995f45"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","cab8a6389d75f105dbbccd17527ada5e"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","982a57226955d68b41be2449904084fb"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","82d56199da1e2106a0861215a72d0a1b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","9b69ae1f8dfe11eee41cc91c39a94026"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","1ebacf618bce9a1312403992cd0792a8"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","f5b00914b1492b0d2e0d6b18c2653163"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","f91e8d164b62e5dbf124b0e11d0988fd"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","1c221aba3b28517b7658192fa99ba969"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","ba8e248a1eb18184c637287c2ac04e8c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TimePickerModel.html","e7d5b91a830526c12b10a8ab6b4769d7"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","f60572ba8b741cc4190816d3e17bd20c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","d38f92f007b980e34fe884e645498eee"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","115372c75d68925fdcb118078414fe9e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","ab09ee471d5657010f6dce6f5196813e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","3188e65b3ec22eda43b2a629a6dee1c2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","37f5e276803b1e33ae8d4188abec7d8a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","4d43075400eafdd7b0acbfec83492f23"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","7c7e063461be12ae143bb6694c621b3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","e3c7fc75da376538bb2e311e963bc06b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","00acef283b8eca630a33a9c779ca9e10"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","b8f003227930db87d80c9a80b16ecee6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","ad69e412347be99a5d4e4d76dc1c5562"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","62f0283d6a8d3e0eff24b23b84cebdd6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","3f404bbe8bab2dbee964ab038f13a250"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","d74b982b391ae37f630940031e5bdb79"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","4e64e78837f87eae3c3aac0a1f8ffab9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","91a567bc2efd1631bd8d44eb2517f1f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","18f82b6000fa226d29bc77903b83fbea"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","48a60ae5bc8755c8c09db1d1b06fceb4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","4acb03ed8e67a65b0446d3d4d90615f9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","18b09bcf953f853b62cdd51311d8cb5c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","8b4b5e55c9ef2e482ce8eb5b92bde622"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","448327c0cc104015c1ae5122274869c6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","ec3a3791279259551042a2dcc56d2867"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","021fa59bf6766cbc01bb39d899659286"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","c01c78e3c80c62a4de5f35fdc748bbfd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","1208ee1e5226c72eb05705cc62f4856e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","34c09d092d116a3672efd4e6429fad7b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","df0338dce6538072a7834792042934a2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","c4286f6d55d5864d9228bbefbef97ae5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","9d6b05d5a207b010e180dc6a0da78659"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","af55ca1683ff7958e214b4db1fd8eff2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","40541d24327fa9bdc50447e71e5e43f9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","19e46f5fc339050ed509454a9abe6798"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","43604dacbed580201503b2cc62b48027"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","15b652921e711084e0e7dafc3402950d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","f27db2b4467ab62b0a4e592dee0eb4e9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","c20226c69c60f37545ec2f5d6416c82d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","dec993e676a3b3154550232608f7095d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","e0c553c5774a1762a8c6e845df004eba"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","78c88c5df886d4e16496a32a2866bcd3"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","753b103c4e0e3a3fe53f9051fc78ee23"],["https://greengerong.github.io/rebirth-ng/inline.d3bd89638d49ffe62997.bundle.js","b3ef961fdb047ff570e50a6ed2ce4204"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.1f38637b279d3f0af6c7.bundle.js","ffe93c45ad8c638b5fa84db7cf8a9a53"],["https://greengerong.github.io/rebirth-ng/polyfills.a7a04a42b38e0b032cee.bundle.js","a3f18ef1cc80c67429e0249125ac96b4"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.95a41133053a443685ec.bundle.css","95a41133053a443685ec97e2ac4ed4a5"],["https://greengerong.github.io/rebirth-ng/vendor.41cc8e608ac297a6be63.bundle.js","9ff3c139b40368a9d18b8e5db9b89e5b"]];
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







