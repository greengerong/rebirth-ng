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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","9761881258ff7b9a10aa16d845adf5be"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","d2f4785faefadbcd633652e0511c2157"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","05787922993464556025108e0ce7a609"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthValidators.html","eee1604507ef32c2c4b78912c54d7151"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","74c3285eec2684aa561492eb3ee5796f"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","0ff295a6fd5f0badd836e8d6293c5443"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","739844ffbb4278261bd5a823e5479433"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","8d2b319bef0c281db7cdefb43348dc1f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","e224158638fe106e0fe903fa9abd2d3c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","611e965c352668695627767a815325c1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","b11e446d68b4c69fc7d15ecbddf5bfce"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","9c222b5dc1a0781cccdb8d8c6de3e4c3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","d765f2bc07ec908be40d20e8cde09a89"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","9f9545f7075bf6db896455d0211e9a3a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","36ead923ca38b6e0aff5bb62a4e56e45"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","4b6b1f6bac983efc7a57d85ea4b66ecb"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","c9fcf1816c64380231a22357e2a79b6b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","9d26d953ff81c651184ee81c46166928"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","2a4ff8cf4c491bc1e1208f990c3eef18"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","c7920705f5084f9f581e1b50cdb5f043"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","eb05e6efe46e1a05a8107e62c339ed63"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","b59ea7a2d0608f2cfc858a525fa6a1be"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","2b8a87a9c2d1f03050fc31807eb818e9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","c5bce547377e2cb6f61820a4c7cf0c7c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","f27a611084e8a900f78ae31ece4be9a1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","01e7a6a08f55917e8818b4072d8ec86d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","be71f09671f8f6385f6e04271d08db1b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","47c54ff7b0108145b654ecfc2bf2c93d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","2a7011f63830901ede36f9e6afc75f8c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","ac8a78dbc1b85b0536dbd00194f4ad2a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","89d18618dedf0e186c200bdb7ac92e7b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","11bd4b230b68c38f0038514304f1399c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","bbf64067a6feb7cdf365da5a18401866"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","a9c032249bae3cc553d4969a3e089403"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","d10cb743ebcf3ded0c87e743ccd49cbd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","93b319bae5355e477636d937f97a88d3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","9029fb93a3b0586a4d6cf36a0a6b9baf"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","1a0b86b6da6fe54d22c8945fc2997606"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","6f0a8ede81d9dfdd811fa1d675a19d2b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","34d3c8905d13322a29a809806eaa3e68"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","4ab4f7f702f65a903a4fbed28824d326"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","b4c01ade2a56e1c511df6c7dbe3f4974"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","a54bece8013f665bfdd15a3beed13cb9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","783395785a1fe3ed4f07b944548eb183"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","505bfec988775f7a77c2ac1620d8abd4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","13690a223493be37ed75ce7e0334a535"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","334cb6f3f99787351bed49eecb41a25f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","0ee1b1654e50f1199988c929cc20efc0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","64f32de87cc8b6fc870bebe3d2aef3cc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","eec20e1b58c38eab266598ba5bed77e0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","c19ec59f070b2d1cff065e8d3ecd5119"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","efa0f9e4694c0bd6f7d8046bc589c692"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","d67f482ce1a341c82d547548a28c0a5d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","04f1428b6db5c505d18cd024ff506891"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","827985c906c3e1f6875831a66dc599aa"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","5ca766f759d391bfb4de48cdcf834c19"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","a5c003ca9c36f4437f20993015c8596d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","fab30b1fdbfd1062661159d56ef4be90"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","a80fb4b98632284794fd083b6ff1e8af"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","b8088f6220ba53929b760f7e7e9b615a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","d0d3d70888444b75f0d4247ad192f1c8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","38498225dfaf846fff916f62a3573697"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","1fcd2326a666f70414faaa7781e2b0a2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","f1f0f6bbb7fddb8e225cc2a15d9818e8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","6848139e0e48676f39e76b04c3422ee2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","77c7cde5498b512adecf2fb76bb716e4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","452d65035d83b1d6cd84c37afdaa5c53"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","9c62f52f473a6bfafbe53e2ea82ef65f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","2d1067a951fe777e3ee182b7cc35a80e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","d55c18f6f616f10211a47b380bc651ec"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","45f89f13ceaa4ed90a635917c06fd04f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","e37250108ba3d5198dc3bb36402ff429"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","3660b96007ad96a6a61595e93b3b0b0e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","605ae727448a11ff2a7acebf808d5e20"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","57687493e8240155ff1ac03aa83c28d9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","828c80a12b60645c75fc4fc4672d7815"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","d6e36b09f13ae94bf261ec77a634db26"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","4aa5a50991ff0a303ce2176cf067f10f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","9386a081df665970ad2df0276d82e43b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","ca49b7cfa61328d9a1e917738dcdc2fb"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","fb6371e8c11af46295e121f2aa3c041d"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","06526f01861915783e02d9687cab9976"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","e0bed123dbde4e74980daa8e9f521c3c"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","21ec0f745eb402d19f1f5af280706206"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","30e4ee3040415e56ba65fad378f3ea8c"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","af41297a34116c946a3a17272411f2d8"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","e549e130abf43bd11f459bf2e0b74370"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","0359c7d9a57600e86fb9fcd752e5a3b6"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","e986fb71f05eab7956b3175ce991b5f8"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ScriptService.html","1a407e26daf50f29eaab592deecf63fa"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","18d9552330ffd80d52b0417152913ef7"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","777702812a8c579c8c9dd44bddf06926"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","4d6fcf4fcddf16bb9b28f5e887a0d017"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","6e215fd35f6bd74ff66fedb8f289a004"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","bf650fd7b61f2750e1b552d1a0fa86df"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","c392fd82fc0ab69eaf84770995d18e4e"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","5a4ce2c80d436f822115f5540363eca4"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","f606d468c3e9e8d1e2d73d3d4f332fc5"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","5ab0988cb497c632897e5919056b42f4"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","005311cf8a250c794409a2f49b4f4d1b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","ffdf1b7b3bdbf0a440811330e6633cae"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","4addc0b4667997785204d3c1f2f88c66"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","5a9fdf5978a847a18b6209cc26e85b85"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","d4fa22fb8090031fa2d06a9ede696ea1"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","9695195af7c33b1eef5eba25ded07d93"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","241d9163a43190ec596023236ab39e5c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","d4efb3fa951156274be733f00fee3703"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","145369490688318917b18155251cb55b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","d2bde05272fbd7f940de5e590f38f9e0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TimePickerModel.html","9ef4ea7571c2f045a3f6cc6807bf7b16"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","2f58b80ca43466424d018527dbbbd36f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","949bd7f50e8c3ef9c8603275befe272c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","9b9447b9d7844921bdf225a6008b522e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","b58669a9e4ca7519e405bc666fc7f030"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","3a68ba13818969be92e1ddf57ec45cbb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","78eb37c0fb5647e5a3abb2b25da4a145"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","6dbc650b8a36683e363d029234c196d9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","3b8243ec5515a91e2d7add68f82bb48f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","35327278490c1d78422178c9e5193296"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","79e57354b944e89b1ed3f834946ee48b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","b8f003227930db87d80c9a80b16ecee6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","67dbc1b8ef95b1996ae7cbdc7053ff4f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","50dcaba9affd05e631c407024dd35757"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","1a21dcfd2c2133b338c033cfd8585d28"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","f6500c7f720d8f3b11da226aa18b89b5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","901e505724c30899059a54d1513b24e2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","27ee56ea3c750ce32c8d366ebd09e55f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","ab05eeb33366e3260524911c13beea7f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","ef88b4fc0fe3a249df82fdbb45d91144"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","1e3f4b9638bf9176e94aeb1720ad20a4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","e817bf219948adccb81956c49f1a8280"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","a280b93fbb495a7016bc703b3d1015d0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","54da75110b92cb032572bba9b362fd06"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","ddc6794c5db8b8fe94859a643056f745"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","29600f00cd3666d0023723225c63a699"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","ac1e761ddcde453e1b90311421c38f3f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","72ce1e379d079be5a5d0a522d3021e94"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","c135d04652f186456f810d801cb91a3c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","f2335fc6f38f1c631a71bd9f1f23ff35"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","c4286f6d55d5864d9228bbefbef97ae5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","0f2c09e8dc38c5aca12390121f800f9c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","3461650beff53a3bab59006802afa25e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","6a893ce379cbb32b112afd7bfa7d469d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","f1fd117d1b4ccffc518cd60d5f674aad"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","3eebc3c54c0e85a268e728217adf71ce"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","35f5e93e30e038de3c10cf5f3feda6ec"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","e8f5eb2eee2eb488b0f5c18623a99802"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","dfd5b5e52aa87fe36ea40109c27d112c"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","2bf02ea256eff849dd21346e3c259ce6"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","d93ed8ab3315d6578af2669ab2791357"],["https://greengerong.github.io/rebirth-ng/inline.119d65df44dea4c82e16.bundle.js","1c4eb8da0f932f4a969c6e0d94c5685b"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.89c589b682b295c92d8d.bundle.js","144f196529c552d62b1a98d852dab762"],["https://greengerong.github.io/rebirth-ng/polyfills.a7a04a42b38e0b032cee.bundle.js","a3f18ef1cc80c67429e0249125ac96b4"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.95a41133053a443685ec.bundle.css","95a41133053a443685ec97e2ac4ed4a5"],["https://greengerong.github.io/rebirth-ng/vendor.04b6986fa1945feaeb9e.bundle.js","b020418dd83dd33c18c460e909f04399"]];
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







