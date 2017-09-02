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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/changelog.html","67f2ba7add8f26e6a5bfdf069a74d3b2"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","4923509bf3d976b633c71b473d793279"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","0dc98e92d41ffe05c9c3cef06e4462cc"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","8661435d00047a25f0e5d8d02d766d37"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","9741e7976df0ae6b8fc8d9ec2815b551"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","71c8495d9c72828120377b730200660b"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","9ebff0c1825723d39ce5fc2defbe1f9e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","23ad6f6b9680cb2dc072d3a6a173c056"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","151d069f84c59911a5710b1fac32f8f6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","a758429e245f6ddc3f9f1007d6504752"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","10eaf367443defed3a5256ec51f36aaa"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","6edbd234fb38380bb38e429107ff7de4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","15c96cd36f96a270fd8ecfeb4bf87e9a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","cea571defa4b81572b5ed4a5c35a36d9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","75f44bba61742c3a92629ac52f068821"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxComponent.html","2352884d92bb1e29d7658a8cfa43b0ab"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","ead7e6beb107ed88f385834b4eb06a46"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","5a90be756119392bb778896aa9a87000"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","65486d7e81a9c44c14293d666fe6f16d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/EllipsisComponent.html","809c6991f4b77751a920e9778fce3daa"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","9e0934a4b28cc38dc1d4f0e8820aee7f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","5d841e94dfc9752ffed4b3a8a609c175"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","3f2aee332670351b34b9bd596f19505c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","beda0eea6b9a804f794cfafd50568b93"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","0c76720f682d3da188c5dcb495630f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","282bac6a7a957cc9c4772ac95412d484"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","059e84179993e56cb52fa4704c84eccc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","c8ea9d94d3c7f30088b2801a1c9db894"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","455844c8b369f247ade1e59e9dd923e9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","0df5bbcea278c94879471c7d0d8c0795"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","8714d092b4bdaf61cd7e7733b35c2a5b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","90f3a3463e6af1650e8b066975bedefe"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NotifyComponent.html","26d6aeadd3e313ce33b3d733cd71eb02"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","914df3cf2f87b4d017592c66205013c4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","f987ec21c584a02d87f1b855f22e3bf2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","59f5609bf2c907603be9a85b23d01a59"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","60806b2e0597c21aa0924901201389e0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","d1bda679c295493fc2ec8ca36e3958de"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","4937ff13c19c936802137dcab813d3d9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","13da6b6314c4d0589c0ba882dedbf4b4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","5dd68fbcb5a6a112a8bec017854478b6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","57a767541354322c22e44ec30dba98ae"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","2fdf1c9cfe2d7adb5141ba5e0966db4c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PromptDialogComponent.html","4bbbf4b747fbb1d3d6e0991a2a478daa"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","1fda057ac9a59de03108e19d7fad01f1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","b776eb0c2ead79363e26860a48a520fd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","02ec4f8f2ac766b172fa2c8b726fe5ed"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","ddb8e203533d72babcb0462e1d59559a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","fa234920ca0fe3a328f3b256c9e16c2e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","a489b7c05e2883c049190a6b3fe1d7a1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","294865678b245b5e829ab49fc5e4c184"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","394cb8418321e77e7fbd4421e4e76ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","3dc22fce43b4b46584045e7945017fea"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeNodeComponent.html","d88af544f1a4d21454611ccb6e51341d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreePanelComponent.html","cc18f457572f5d7fb38c224baeaef2b6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeViewComponent.html","07b2edd5c230644886efbb8ab73bd8d2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","a37dad383477455832b774362a56c257"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","84f13ab659cff303cda58e1e6dfb8a92"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","8c58cdcb0030c127cbf0bf0122179ca1"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","af291b0f1b041c4a9ea8270becf14376"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AfterDateDirective.html","73f12702fe1e43b3dac1fa65bf9d133a"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","feecdd5393f09936aeb3207b3ac798df"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","cbb034b0f8f4497aaa2ae6d28665e40d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","f9b590451675f4a91d23b6ed2f609892"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","ef5e0375d147a2063f29b495e04e36ef"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","8af08eb0453206db4e5b8a86246b8b22"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","ae800bf80d7841907b55c352fa692d7d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","a981c6259b920a2d217608ee97387adb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","8c7d644b2710b4909e775daea723da71"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","a64dbe2f24bd47e95c20c1edc360593d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","5d5aa4afb0c739c2d0a531d27d8cbefe"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","a02ccccdf2dc458b7671e045fcd426cf"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","96e639cc02fe0fe96c6b9dc83c13d8c8"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","7df897f3f754bb40f7fb78969e0bf1fa"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","5f067c2585a234e198d035c426eaf604"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","dc23fc88fbdf574809895bc75c74c8f2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","e19bbb6cf669f0a567baa629141754db"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","acd8c0dbde8928d07ab1673d41c2c373"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","92b601a6e5365f4491279f9cfd05b07e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","bff73fd4b0b1858cb94954f40c2b778f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","f1f7866b873e566b437058c68fd9ffff"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","3880a820537f52afbeae508153860e9c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","32366d70b4a9ed571fe50ca58ca84f02"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","762576ee621ebfdee86717f6d4afcd7e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","dc3786e1610887d2cc714b2c19f671f9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RequiredWithTrimDirective.html","76b1a757dad2623be8b0e16349bbdbe9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/ResizeableDirective.html","9a70dc1972a6c22e8423cf93fa12b4e6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","a5043ebf76c76c86b89a67589f564d04"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","04432bbd4315af60df7803b63ed1aa87"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","889255b6c49c088bba586ee3372b2dcc"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","99cb9ebe9c0d73b0f5edc0119c835dfd"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","5098b9e98a495c6814943e781bc3a7b8"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","d77b3054056b0a86907b71a6bbd6853b"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","6d9512ab722afea62b9827d5b965ad3e"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","f1ecfc3cffc9c4e8cc0550e7c3f811a1"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","f2d1797a3803a95fb160ce312544181a"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","1ab882ccfc9cd4a26f1596403cf10981"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","e9bdb85270feeb4c46a1116c84293837"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","c2112c3de018019fc63b1c8344d8800c"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","484df6a391d10d2831ab1ee54157ca73"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/NotifyService.html","73355a5c1deeeb2dbc964430b8a125d6"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","8d9f1ce0658bac19df2edc08ee43e129"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","039a66a0452ae9905056022f2f2c9cd8"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","67ffa0a6a931ebcbded0dacbb0894ce0"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/TreeViewService.html","b53754d4c27a1a0cc0d48cc992124dbe"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","bf75a27b72451126bb3351e027af9c5b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","6c2722f0aadd7668f0e1ceadbdece1a0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","04967c3148bad0b359b4b4189ad6cc50"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","b1997556c64ba8f7eeddbd67647378e4"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","e2fd2a9c8218082f0393f7967110d7c7"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","409c58f11714e37f7d0310ff0076cd17"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","df5dec897082d988efdf23e7535134e9"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","14ac5606818992ad70b11ce03e67149e"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","4efac73b419c31d7aff54f5f14d27df7"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","af3ca9518ae2b79466130d6acbb815cf"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/NotifyModel.html","b261071d12b7e6700fc61f8a6fd0e576"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","f665948ff4ba67fa92cf7c5e7c22ac6c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/PromptContent.html","8249fe9fc41022214fabffbd04f54a35"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","1239a855d3d4d71cdab00686158b1ecc"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","b5cc460d040c2e78dff5f7da91d10a39"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","4985e98a805fc6487ed802532e942f7b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TreeViewModel.html","6a550cccef4f5d3345ebebb05e9651c9"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","57e7be7c3acac21e0a931622358a19ac"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/innersvg.js","b60c2f4efcea40c551befad92d45d8b1"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","51be5abea12518a26b3c64ef4ddb0534"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","f4ea1caab985aa5198709daa75338f12"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous/enumerations.html","f622335ef4b1dae7365e17d76d543175"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous/functions.html","3136f697c4a543636ed4b7ad47da397a"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous/variables.html","8d3208ac1a8059921fe8ab1282a10f45"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","2d2ea2199944df806fd262d58c5ab23e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","0a0996385d1012596abc86ebf06b686d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","488f6cb187dda7322eacc0348c9baa50"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","5f9528ccaea34d265e2ef40ccaeebddd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","dca41e8fda6ca4f3a33f8446f2c95229"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","10593ecfef1082360e893584e41386ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","4cc9b50420cdc204dca789d020d62800"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","6125bb8e240c543941cf592b1a152d00"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","41e6e9bd785de3eb05659bd7bdb3448e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","20541e401451872652378f530a4534e0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","bc5cb5e4e852e99a79f0da0036516338"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","ed2d3f6a88166dae49cd87c52a775f92"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","a881899015592c9f8be05b8b7fb2e1a5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","fd8fd7c1635206db471424428d937480"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","a5800b3877de765d3e73cb4763e57ff2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","7067b176c9059137bccb97d7af7e753a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","8c9890b6bcfb7477727a59d1148076bd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","5e90d79cfa02fe0180e5c003f5631813"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","5dd06f580a0fa08b373aaf600ad27e15"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","58329c8e526c1de438c4008cd413b58f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","3ab93256cc3323860374504952c397ce"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","f8066cc5ebd3a1b8a6927dd001ae9392"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","fc5c2fe0a39a3cf4c98bb3021ed53a9f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/EllipsisModule.html","27226481fb8dc49161e67a2d01be4b47"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/EllipsisModule/dependencies.svg","84890fe63347decfbbd5d988e3c8dbd1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","5f0af6a0bdfe337cf3f3092aadfa4c30"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","02e1842a4e6c9958f5960b8702a7cfcd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","67c0d2dc6be9fbfc65aba54ef8774bc3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","d52296b98f3b1122e9e6f03b66fcb5e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","8ecce32a4419867cf0e3bf795480edb3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","99978e1bbb9f1f5e8b1d76fa771f2c9b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","a5835e5efe613ee1dfbbf2bbf0fee472"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","d7faeb6367422d4b9e3bf03b3d77126d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","445cdf55be06cc4de7fa47452d708f09"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","4593847c6fc0e66a02d3f1f86dfbb434"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule.html","76001f8459f474c45f48b5aa3bb5216b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule/dependencies.svg","3a38d829aeab127d31a80d799d56403a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","dfea7b2e88f45abf611c356ef0468e69"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","0fcdbb3404d8b18e3d007f3ca269f409"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","8829d9353da2c292a502a556a6aa9b0f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","0e39247e174b90bc37b4ff698b31ce69"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","8fc8fb502a99e1e212fd2dee3e078ab4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","ff70d20e85dcdbe6aedbf74166f3f6f3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","c4240dbe703c3c8f35abba822212bfcb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","e63b2d276f423049286993f9e51ec69f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","d11769416a5d94b406835fbf07d30fa3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","ae63493828b26f8d6c00b9447287fc3d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","32c64f7ef44aba1583894a8357d7e69a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","aec94f2901bc3b02654fdc3265b26be0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","6914ed243f0c2d0bcb2a725a87622c4c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","234737a9e6239c57d4083f2069eb213a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","8874268e471e09ebed07e6f44d24bac6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","d4a0a0fc42a07e8ee9dbb6eeb7761312"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","96196d48c67fd3dfa1a3560b715236f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","3f08ced89c37df1d7648c67225f4831b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","1d523e2c2bdba284cb59a3f2d371f721"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","5f00cdc4b4d3b5db08148e48eb18b122"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","7a9e984da36cf8b8a0d4cd37c981697e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","e9b3b30dd64465384461e26b29ceae25"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","2d05e935a13333a9da4ebf98b6384c45"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","e60d6198c5c8389d530212a8740246b8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","5f77422c1f85d8aa1241acfd1fa0bb2e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","65ee6eb4f9bfdb3c091634de88415ec0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","bd689a5024bd9af6dc9d76ce3e66e1af"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d9f76f8c5b4abd35955c65f89a52914b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","cc4b8c412c188b4436a12bb7cc177c92"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","c6f3cede596b81976683d2d21c0b7327"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","698ca2a7ace17ff0885c1c6db4a13abe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1035eba73d540d23ebf92ad78934b097"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule.html","9cb25b57dd8f24a730b3122941e96cf9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule/dependencies.svg","2c92831ba80706cf94051319d636eebb"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","19842e4f85063c55a98b27db48419164"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/DatePipe.html","8b8143cacb13be8234f59508f7dae966"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","82f4004e32ea6084ede3e7730c202e14"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","33588de61f6c9dc598f7901cb99ef0f4"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","d7bc1cb8237d543edae4877f0c689c4b"],["https://greengerong.github.io/rebirth-ng/inline.01159c58c14bfcbdc263.bundle.js","3daae91e9aa246dbc4646f62c953fbea"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.c329c714f09165143123.bundle.js","c3484a2f97917b9080c435c59a1afeab"],["https://greengerong.github.io/rebirth-ng/polyfills.ae18aed6c83a198e806c.bundle.js","85d68faf78e6982ab9e1dbb5321dbd2a"],["https://greengerong.github.io/rebirth-ng/scripts.e77972d9c1da4e07fc2b.bundle.js","4f4256ca07d5fbb6ed3923db071210c4"],["https://greengerong.github.io/rebirth-ng/styles.13e5ab6060221446537c.bundle.css","13e5ab6060221446537c9a28d9832f7b"],["https://greengerong.github.io/rebirth-ng/vendor.02b7efe79be0d8860326.bundle.js","95b5e73fa7bbdd8b0ee6cf4e13f2f423"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
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
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
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

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
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







