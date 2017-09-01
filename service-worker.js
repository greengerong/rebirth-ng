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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/changelog.html","12113af54685b9630f226f15176dca25"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","293f33a47513644762f7d800d3cd18c1"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","2e6cac841882b8ff3868ea427256c663"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","08cc692352807ebaba3c651c0f624c2a"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","fec82224b383c1556299476b8bb2f671"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","14a4e7996fc946fa7116166c84869720"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","44a1d30b04938cce9b8a4bc0dfdf5232"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","f3b3187d6d859c8e60942a2a5402f258"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","a5ffc9fb5dadcfe9873e4ff90c558e73"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","0426d3b6298a4e05989d602bd954f2d0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","280e392a5bff0a34acd97a0ca1ff2e5f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","8b9fa3ec7ac947bf7c77d3ff39e82fe5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","e0fda100565a8d17374f856dc0be437b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","709ad697eea58ae0dc84a8d8d261d15b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","40ffdcf6d842f2776441d8262b5c3764"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxComponent.html","890b460693c3f2535bc97518bc2b19f8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","074c71a19cb7afaa54e2007b92f9cde1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","8523d34d43e162e68c5ff7aede501ae9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","08df1425fd5767f977b7a02cdf198667"],["https://greengerong.github.io/rebirth-ng/compodocs/components/EllipsisComponent.html","23f6d3edf12fc50fa388947a539262c0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","ace6489499f2d855c9a4e2c7f0a38747"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","cf8809b49ae2e24e24cf3f20dbf075b2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","4c3e968154b95b15dbc402fa1e5c8a7b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","0120ba851e2cfb960680b20fcee2995c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","51c856fd706c6ccf763f3c556cfaff22"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","77e38c95851519052f1c4f5e29c68c15"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","ebd69556005ca7f955c40aae5bdb7890"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","41bd47cfc3c2c698faeb39172a9982fb"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","9579c308a3902fa0327c69ffe8a284a9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","eeb46bbfed3500aa5435ffd26db452f8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","cce18654cabcebf0cf5e2e96fb904441"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","950052d4c19e3fdd4fe56d3bba1b74f2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NotifyComponent.html","1f0e4981cbec31f656692f74af0d5166"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","135a90013a03400a2e0eebfa90b9c071"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","e32fea64da550754e547f0e7154ffd05"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","836f88fa28989b1f128ce467b8d803a0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","4cb9527614ae3707f317a337a42ea332"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","52bcf8be027dba15f6b88ee624d710e3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","f0548e0a6484d327af15223dee4a0f64"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","445e14601fd22f90815ac807e5ffac9c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","d2d59f0daea1c3741c658b4ca491dc5b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","ebf6d25c44f14e165e48f1c3d28d3575"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","190a900e885ae839d051cd72216e340b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PromptDialogComponent.html","a75e937ef34cf42b1abb2fdc185b61ce"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","810b8f224ae0b3962a735bd211195eae"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","052427425443d180bc60c8541c22a190"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","33fcdb9c7b737d2c60970a835f778052"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","2071aad97d5fd1809731dcfec0fda865"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","bafdf2bac569d6d9acdb1ae125d2e535"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","ce4ae5bcf04201907fcd5dfdf0672b4f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","48ba7c6b669630c253ad7b8a95f161ca"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","626b5c2de32fad2f0516c75fb74e2f7b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","442016eed418df4687d18a26dc1a63b1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeNodeComponent.html","8703af48e8b4bd052db56d7023b28b76"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreePanelComponent.html","2bdfb70d5b4cd76cc3acb22bd75fa57e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeViewComponent.html","4e3e1aa008cce9ffafaa538576a18394"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","92576b865b7dba000a69ce4ff7e15074"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","3bcc714218fc54854cf77f090d91f3a6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","7305a0414e88e9c39adca1993d70dc04"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","fb1ca9df07b204efa964a73a9631b8ba"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AfterDateDirective.html","a11e741008c94cb2c3a4e478898061c4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","23a051cbc284a4474b36b70a84240a5c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","9a67ae05da0225a40a34ea5da463620a"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","8e1f8f4f73a03e23c423f457643cbc34"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","61b755e1988c7f479b0f601f3a8afa86"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","359d12a4c888e097a94878415a98d69e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","cebb04d69f76ad750900c20d1a9ec80c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","34dfb0bfc1c1c5f08c7b91621cefb5a4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","c8313c1be212aa66fbab7bc971509ad7"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","9eb7f5ae3a5a3293613a9c4cf4d36231"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","f96c3857f14ee78f3d796a8e528fda9b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","5898ed0cc002f731454143022b77db7d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","a6e11c2fd6b12ef81f566beef8cab599"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","2ee011d427a69ddf34ecf7b7473d0c3b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","88fe39cbefb3279a38f74ffef267fede"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","5ce39119638db250410b93eb8b3f1e39"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","2705f3322129a43f56d99ea718748d6c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","8463b983242891f42c68e49d5133ee3c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","cfb1f8fc9be26b5538416fe3dec32716"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","5aca92264aa4c71849d9393da21ce22d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","5a9301951f18137bdd8adf0de5ae21d2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","118c62c4970ad17642af86b55283b9cf"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","5d25b5899295bce130d37d0e8ec1256f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","d87f22db958ea0481c48997115e66434"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","fff7053394b3aeb696c1d4645c60492d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/ResizeableDirective.html","4cb734d4c7196548629cb44962fc47cc"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","6760240aab9ec8ee6b784f032996ba2e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","31eb3f8cb41da35d610354810de6bdc9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","86824087620c7cefad13d86977e00aa6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","c800c7a08d1b2ab0b8699ccdcbe1bba1"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","75b72d8522e2f303e03716ceb8fd4acb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","589485469b76399c6554624b5f41a029"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","1d2940af63c606bccc330202095aaee1"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","f1ecfc3cffc9c4e8cc0550e7c3f811a1"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","41d02642994f3cc96f5e63023afe0c3d"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","438895880cac49ab8c493f7ad056b84e"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","cd208697b274b373713bc1d7ec4817ec"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","5110aa3b354ae2326ef20ca681b12d3d"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","84ccf8386eaecf5577c077dfdc41e170"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/NotifyService.html","49f500d1c5ffd3bd1e25348c73a7a621"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","fc9ae2ea5e43a8ce78c750ce88cabc41"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","960ab18569ab40e139a6cfcc6682eaba"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","27e0e29afde1b05124bf17f1c68007b7"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/TreeViewService.html","851609101437c142aa7ab6921228327d"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","a169be7ffa885a170b768363a0c3a8b0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","d103ce97e78c194ad014c0bb25d18bee"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","c292f43d31ee7b83cfe18a733c5fd98c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","b58d9bff33aefbee77a1558d8730d3bd"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","66f8a92a35d5ef527c25507642c24e82"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","83c8ea89562e75343b71dc4fdd5f6d09"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","49248c46f6ee8f4eb57dface24667481"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","ce940326ef8a474618e59c102a458b03"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","df882f5e2efa070a435d4b96137c3df7"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","f9b5831952dce785c4bd6b98798737dd"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/NotifyModel.html","bf28a4a794e17685418fa1ba56723225"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","74997ad303859b76266bf4f40341e3cc"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/PromptContent.html","d72bd7c4715caf63b6ee9907a13cf0e6"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","88b227937daf9623463e56cd0701b876"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","92b987e4e6f7601317f6871bfa3a53a0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","c3f3b99d78b0d9a10ea2bffb53308836"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TreeViewModel.html","7b1d8c1b476f761efc06dfd9358d7b11"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","57e7be7c3acac21e0a931622358a19ac"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/innersvg.js","b60c2f4efcea40c551befad92d45d8b1"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","51be5abea12518a26b3c64ef4ddb0534"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","f4ea1caab985aa5198709daa75338f12"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous/enumerations.html","2c25c6a0131fa6f6fcbe08c3b8d7164d"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous/functions.html","ba84ba97a0b9cce0f9a79d29612cf1b1"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous/variables.html","b2deb8c3a8565b56962bb4a5914ed821"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","90b67b64dde31e1dbbe12da91dbc0c5c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","b50f63ac4a0e035c2c740a59710f6c7e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","6e4e8bd74c58827ba8e5bb63eb8a986e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","c11bda26d53d41d0874166e0cc6510d7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","dca41e8fda6ca4f3a33f8446f2c95229"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","3219acd532f6f3da755f37f5f0565416"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","4cc9b50420cdc204dca789d020d62800"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","4851a9b8678ae59f1addccf656a946fd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","41e6e9bd785de3eb05659bd7bdb3448e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","7b065ad17769dd21053acd2de6284252"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","bc5cb5e4e852e99a79f0da0036516338"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","1c0934de9a8ac5476d5880a386a2f1e5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","a881899015592c9f8be05b8b7fb2e1a5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","1f530d0b271bc70ce5acc8872a02a728"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","a5800b3877de765d3e73cb4763e57ff2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","e69046ca5ee9c85f7ff54b5d43fda516"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","6459f27b116e7382b8406bf56061b7ea"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","a4586bfc467ad3a42bcf9c704ab4d987"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","5dd06f580a0fa08b373aaf600ad27e15"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","2cc7d115f0d064a65649c1a2ddf512ef"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","3ab93256cc3323860374504952c397ce"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","57fdb308badae758b6bef7370de5d666"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","fc5c2fe0a39a3cf4c98bb3021ed53a9f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/EllipsisModule.html","091be52b8d9cf541f733cf05ef20957d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/EllipsisModule/dependencies.svg","84890fe63347decfbbd5d988e3c8dbd1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","c3948ff458523429777b8e676c9feac4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","02e1842a4e6c9958f5960b8702a7cfcd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","b6fec75d1229a4cd093be595eb0d4c86"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","d52296b98f3b1122e9e6f03b66fcb5e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","8fa471c600b6657bd8874a03b358d611"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","99978e1bbb9f1f5e8b1d76fa771f2c9b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","efcefe91a83e9cfbf386f253948153fc"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","d7faeb6367422d4b9e3bf03b3d77126d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","59b2e467a54bc879965c156a1eb73a6f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","4593847c6fc0e66a02d3f1f86dfbb434"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule.html","2deb0b59c4f8831e4b14b1a83debfa5f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule/dependencies.svg","3a38d829aeab127d31a80d799d56403a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","a51577bd22fc3a388edd58c24e399d91"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","0fcdbb3404d8b18e3d007f3ca269f409"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","5ea4d184ecaa910988bc6f190ad22421"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","0e39247e174b90bc37b4ff698b31ce69"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","3c92da1b98c6c7a381d0b01550d2776d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","ff70d20e85dcdbe6aedbf74166f3f6f3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","16c8bdceb4f9243d1af72f6944c24f26"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","e63b2d276f423049286993f9e51ec69f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","8fb970545df5850559d950b4526abe17"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","ae63493828b26f8d6c00b9447287fc3d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","1dd7228b7d8d1efd8813f3eb47d278e0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","aec94f2901bc3b02654fdc3265b26be0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","57f3c28e75f9a35f024cd9dd742d6f73"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","234737a9e6239c57d4083f2069eb213a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","4be81aaf2b1529055dc510fc214870b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","d4a0a0fc42a07e8ee9dbb6eeb7761312"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","6a2ddf7ac8052569a6cc62773300aa3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","3f08ced89c37df1d7648c67225f4831b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","df30e0d88a2caa618df06fad4429ca52"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","5f00cdc4b4d3b5db08148e48eb18b122"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","e31aad9d5780a9ee22496c7360d0297f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","179601586ed1b65800d208d000cc0a40"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","38c1574347d96c58aaa24f2f54a1f3de"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","e60d6198c5c8389d530212a8740246b8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","e820c5ab5fbda0d68304c6d7f3ebe538"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","65ee6eb4f9bfdb3c091634de88415ec0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","c5f240fa7bd0d3dafcb4d4fc604d98d0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d9f76f8c5b4abd35955c65f89a52914b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","977d60746b310c3f7acb5df966623966"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","c6f3cede596b81976683d2d21c0b7327"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","926d568b8975a56e3eb6bb1bcdfb2139"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1035eba73d540d23ebf92ad78934b097"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule.html","1d1c159c4a461fcc583517040cb1b450"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule/dependencies.svg","2c92831ba80706cf94051319d636eebb"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","4a3d3942480464353e6f839626a0ae78"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/DatePipe.html","bf93e814833b44e7645df8dfa280fb5b"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","069874b2c830c48904aeee2091e2868b"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","33588de61f6c9dc598f7901cb99ef0f4"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","fd3e26cd0c6c2c411a9eed6b8e6e426a"],["https://greengerong.github.io/rebirth-ng/inline.6f927fbb0d54685d6eb5.bundle.js","77cda8a724656e57d696eb791e737185"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.21abb78a55ade95dbee6.bundle.js","4f90ebe7f510a56c1592d47dc4ec611e"],["https://greengerong.github.io/rebirth-ng/polyfills.7aae2e2890ff2d94f034.bundle.js","c813126bbfcbd1904c49ab337a0a2d97"],["https://greengerong.github.io/rebirth-ng/scripts.e77972d9c1da4e07fc2b.bundle.js","4f4256ca07d5fbb6ed3923db071210c4"],["https://greengerong.github.io/rebirth-ng/styles.13e5ab6060221446537c.bundle.css","13e5ab6060221446537c9a28d9832f7b"],["https://greengerong.github.io/rebirth-ng/vendor.f1c52293e2919fb3f900.bundle.js","b0f2c13d1d1b7d171bba29afa8fda1ba"]];
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







