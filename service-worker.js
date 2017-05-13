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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","3ff98a90387c935340eb386b88b9a261"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","8b33f2e77930325eeedb4fbd59887b04"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","f621f6e846c29a4b3cab98274787c41e"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","665e77576e53816d4b8ebdfb8f0a18f4"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","53d39b402180a6facbc11f797111e942"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","a052a5c535935e6f8c354edf7a923bee"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","0aad959d5eaf0066cb436d50f1f0105b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","dbc4cf88a53cdd72045e464ef7142469"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","f44d6fb7d411d776f1dc09ca71e7f323"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","06de832aa572e24c7654e134df7744ad"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","5a206353bc5aab5cdb20bd7c2070139a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","31bfbd5868f47b0fdab13dc95f4c86c0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","c0a19f4af6f5c614ebad8fa44b02249a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","dfad1dc3ead702ffac90a3dc1a109334"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxComponent.html","136799d824019962f511d147177a8356"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","dab7b95073497662eed898d0a7cbd2f0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","11059dcca3f8ae9e0adeaa7f4a0a2f2c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","1355d5686e065fa2c07f809075fc00b4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","e73d6cae6ed930c2ad28d94bead1dea7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","a842634c9b2535b78014e48da59a25a1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","bd28b2a6701f5e304394b9b68c78cb67"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","1768a24d77a38e9a4e0017883c82148f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","d93747f29682034e75ddb75fc41542d7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","45d788baebd71fa9bab0d06ae494ba23"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","89c7150a49b5f7127b2c0f7eaccd665a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","3fc7601679b8a5fd496ddc88b38dff03"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","ef17dd8cca79e2129d16b6c08e810d32"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","9843d323a10e3f43c9370ee05e05638e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","dfbc12a3208dcc864b14ed724a22118e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","1505550ec46bc27a18c84251fac4e9ba"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","4897beff9ab74dbdd1971f7901809c02"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","18b3e390cba0691f8ca884b25ddfaba9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","95e016513e2187ee6da592f974f989fd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","b6992dfb353533592bd2e6fc9b0ca48d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","651768183596002657beda057f6f58aa"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","181f4fb0fef7bfbc857750f3da8ed016"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","f121d25c54e179af7c2e7c28d9179f07"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","4aed2e563927cfa2ecb35c72b25257f3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","c9dab614efe53456763e0838ed52cdbf"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","b0c9a506c4765fdd31d64cdcd077e905"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","c12201b6bd98e10abc068b335e41767c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","3623a8aa84f7c71aa6c08a5b6baf32a2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","5f6a77dfd864f251d04934ba80449338"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","a01b395a85cb1c6c04ba32d8f591c86b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","c12b8096a68acc0b78b55a8510b848a3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","1e03e3be50e3dcd950555f3dbe2b0185"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","ce17986e0b35c346ccfe6dc2e61e2d85"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","6ded424a5be5365bf30ff8023d751e85"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","57e9c601c68be58c9d1a127a6b9ace2c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","da4bc022be73eaf311bb37f745a4f433"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","9cfe6a6e1ef81f7e837264dd59223040"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","555502c8d8895aefe8ad4f81c718c007"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","0dec8e995c6e091a774cba73a6c57d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","edf8ffc9d53819a59523c6eac3954ff0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","507bf53bfaae8d2761f9f68329c684c7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","c7277b7fe095609fe9206c859ada164a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","3213ed6d63affd5774e92621d6eda8d5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","e64424675932b5855cb2825e6b498a43"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","1201ebbca5d7d557181210c6744f6ffc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","da81be869ab1af8907f18dfc5507a553"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","20499157e5a05da022f35ab51c248a87"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","6d4e5e519028061e38276532c0cb012a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","29396028bbed06029dc8ee534e7c14f4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","f8e8fea5332fa9a3af985f8d2a4dddb5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","09759093f9e93042558b79908a0053ff"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","2e57815300d2fa6fe01d96a8a4868ad4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","181f547a773f29449072b6b47b8bdcef"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","6e9d71b169e7d732e0a63ce265fd215f"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","2564fee7450b33ef5751dcb90ad20045"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AfterDateDirective.html","be96eb343ca808752d630f7d0c2c00cd"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","e5d6650f6c92b4ac8ed615088e817dd6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","a59805a3581a00de0ba29939b509b87b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","1dc4f071e9e57c3f887a6d49ff2e763b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","411bf204df92904b46b703dd44c4f03b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","4906a06db721e766479ba726771e3e25"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","83630821e2e4b5785e3736785ca78c48"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","bdbfa7d8c4fba739bb34692df03ed85c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","7d9a830248fb5f440624e78b2c9b3e39"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","5c8562f8588a24febb39559148e24b97"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","89a84b89d6ed1c387a6689977a01a7d0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","aee10c23b18760527b0a8654351797ec"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","d55acaa678e29d6614e0ad7cd83e0a97"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","2bc87ce1166ccb09bae075df47e4cc83"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","b018f999127b9a07693d4b99147075ef"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","f1a881e26d2841266ff4282676170225"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","a058886aad2e04b6e8054b635c091047"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","45f98d6280cba94b9601d56c2de87e9c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","592c90a9aa71dc81672535310331202d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","e4f1379184ad3d177d30539e2267a8bd"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","12daf62a919543eee882bab34eeb5bf4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","e52971d1491715f444ce7ab78c5622a1"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","f54d62d797228c0bf32cbf98a37ad7dd"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","302cc2f443b14842a2f52d04b81de64b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","da8ef0f6c863d58e6b1ec534505460af"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","2e15fe02f7786dfe8e25f981a6829e66"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","674522726ab37ee4f0fbefea504caf84"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","da3e2bc0cbc919d6eef3259ee36034d9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","2e029864134ff8fa80b4c869c1ae9994"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","2dbe19a4e5469e565fd08589da08706b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","16451629463cdda1181d16718521559d"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","cb91d0be5b281ec8cea40cc075268ea3"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","404047c4fa123bd6dc8d398ea82ec111"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","8673b0e160ff8f2fcdee368843993392"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","d109d1c33699c82b0b2eff20aaf3aca2"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","018d971244ed6b02dbfd5f5b5884ab24"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","37d99e249250c8d0a228b0d54c09bbda"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","ca33bdf3585ce20da4b830862e32f4c2"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","be8c73067314b5be9bf489d550b1e112"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","bfb519409e9c1f258e00535c366c0f49"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","c5ff3b680fbcb8c98192ca2b5004bdfa"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","7783ce5e2a8be3123bd54e2e6419c02a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","267e28aec316ea41e68f11b67738fbe2"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","178494179b02166c4d8e9fa4d7eac866"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","130eb71f96a54c780157a6c8ed85cd85"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","c55ad7a6dee6fa0417faa8114ed7b8af"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","83da76cb842892ab227073abcd6f8530"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","d7dea02bbef78d5e7e2973f71a2bdb8f"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","43fa1858170a6d532da25072663ff1a6"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","ad8aef67321c801ef4091a3655e9681b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","15778d58ea99913e208d85283d06f658"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","d54d50f21a4da82546b15d604cf9509c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","90439233bb99b10d5514d29120587df4"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","f26bafaffa91b15689d4435597efc29c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","bcac691e2508568decb5bb630da5512c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","a362b03d6a4fa1fc98cefa3ddcc0d14d"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","22669402a1ef8e33cd37dcdad4072bf5"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","93969a15836652882e2ed01532dfc7e9"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","5d3c7622e2a2cb2a41be94efeb5ce79d"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","76583d35d22b7c84ffd2d9e3acd07cdb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","82c3416d8da9ef5707591450f4b5be59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","e7fc4f4e3f5c10188d82d7de4a709016"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","b7184c1b16f43b38b253f3d27036b155"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","00eb5930610274104888f0a10e69f2c5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","3f68fb2e6335bcdd5e29be230cdfee53"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","5b2aa81f88db5aff8c203d3a10d3c12c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","c0b4a1654aada0cc685efda985b21a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","abe189f10ee9bf1669da2a1e78dac942"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","dcc593cc2ce7109470bbcf17d209d3b9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","e506e00e01b4d1fb7550775d3dd28bcf"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","24aba94f180701257d595fd481178399"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","5c6fbb785fbe5d9f4ad15c1c4d060d55"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","a690346af25bc18162a7677134ed0a09"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","780c64c02ed7b53c5518a39de5b91eb5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","9a277b632434a568fe6ebc46b14f7a5c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","34e0ee043d8985cb6f76ed03805927e2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","e04ab99cfa1fb0f005d234abeecc7cbb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","a3450d8a359df35622a441bba30bfb85"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","aa9bae76703f978a8d075dbb2d39030a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","544b4f36d59289ee72fe6ed8440141b1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","03adad210df3a92f2a3790a603055a63"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","95ecaad9e4d8ba348e73fcedc7225d9c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","211ce7512be01f71cfe20cc8d938af39"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","8e9a48654c1f2faf492d207610b755b0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","d8ac30c5b2ced5206590138b904bc95d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","748142be21c15540930b954af208d764"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","1406f4cffb36a3050e53af101a696ab2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","4a929c2dc1f47d844d30bbe31331bf64"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","6c39794a5280b70d18d6fcafae08a4c8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","c4286f6d55d5864d9228bbefbef97ae5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","192f02d3f5ae717047ce34ab668532a3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","af55ca1683ff7958e214b4db1fd8eff2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","262bd4348327fedbbb4cb3c97b01d5d1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","4ac021bbc1ad5ca3b31a400e0c71817f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","7d4a64e6af4d76af7d982a91f2a956bc"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","d0777edd25eb350c5a0a6cbfb0c09717"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","9cf46ef93aee04fb929068c0e5f7e7b5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","74cceb03a23e6610079ab4afe7c1eaa7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","8c8e5629a876c468f4fce10abc1ed5cf"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","8b15c93d2c8d59b03806cf3416014279"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","5f0b33328ef7b61d66c3d2bf3475b0f5"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","23eff2c3290f348986589f381f5c4178"],["https://greengerong.github.io/rebirth-ng/inline.7f50301d6deba7815dff.bundle.js","8f841bed57ec217bef736321fec1818d"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.52f2997f8fbb9da40206.bundle.js","b702c91777a07602b6fa152bc696f8f3"],["https://greengerong.github.io/rebirth-ng/polyfills.a7a04a42b38e0b032cee.bundle.js","a3f18ef1cc80c67429e0249125ac96b4"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.95a41133053a443685ec.bundle.css","95a41133053a443685ec97e2ac4ed4a5"],["https://greengerong.github.io/rebirth-ng/vendor.41cc8e608ac297a6be63.bundle.js","9ff3c139b40368a9d18b8e5db9b89e5b"]];
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







