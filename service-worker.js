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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","f5370d8cddab1ef2dd15a4f32b2519f3"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","9b34f6d22042e96fc1bebbf2be71bcfd"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","2e18e7bcbf1f2e907d6e5887ac7e7f78"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthValidators.html","f5cba22141dd750f041e4fea3eecaa6e"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","af9ca49c41f9cebe876e8d7fc116c59b"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","0409cfd6f86d84a6d217bebe1eb4ca63"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","69bc00b9219458b0caa689e3921609be"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","e71729816259a9eaafd0cd604ac40e23"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","4501ac5ff6e3ccd9103816a28cdd5b5a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","e8283b4508082cbcd2fc9d91ca5cc8de"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","07df89c4d21f81aef709c1a6b7180d11"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","7784904df2022f54d11de3b659ab09f6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","f7513086d85c2cc58898f871d73a48b9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","ace539736a9ade3dad1219730c6ca189"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","fbb98b1f2c55ed18a846bd53095fb8dd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","9fee247bce1e9bab9483b43bb0322cf2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","762611ec7fee3a0dd7d9b2a29c57bf91"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","50b4b3a0812b502079080175979a5fca"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","e2babccf9872710eb9d82efbdc5ae270"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","92986bf46a1b139062526f2b978bf3de"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","1f9fe52827903181392f0e13ff6e14b3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","fb7de333084129ec603c85c8c7891c9b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","1c625bb7aa593eaf45021779a4c481e3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","14299f736619ea5555f5efa80c68a4e9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","b80ad9c74c9d73cc9690474a49a9ac63"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","99dd98b98bc8d9fd2b96c66f81edbb88"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","4ef2ce20e51033af0f9865873783fe68"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","c2c4588eeedb2276d4de0209b87d3e24"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","ce8c470142373c4bafd2793b9162e254"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","f5759accd83a72b0d21e6ed1a10293c9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","f4c9f0b3b0f42e0908b1e254d17edd25"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","c3051c1eb51d4cf3facf05618ed83cd4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","2a8992de6b1cd0508e998e6407463f9d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","1cc2a0cf213da27899b3f9748ec32fe9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","9ab07d9d78bbeffcfd4c58fe8dc73c3b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","889018e87e5b6c0994c23814dbc38d63"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","29c5c743307f78e38358ce66362c2596"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","85ff4ef8f500d5a9406732c2823b0590"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","d32652aecd148d4f5c093c0833bb5300"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","b0cbe3a27c42dcc6df0e5d669e8df621"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","512c34e5da7d54bcefb4635e346ab08e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","173ed5c32e0f3ef116b1e43ae728ec5f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","73ea434236eb862afdef5ca62daa2429"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","c2ede2491ff4da45ac0436bd463f1bd3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","e64bf3a93645d0db02d94e164cc7c244"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","a6debad9126879d422a514b1bf07bfbd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","fdd3d03d94cd67c2d96d083cfe8fac7d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","ee9232936cb567357b9fd6f3a5f048b8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","c6fe2f1c80c9d3b92f14b4989ca07f36"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","09994f9aea6b8fc4c398dce36e231bd2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","fe6b564b5048237a184beb781a1766ad"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","32fb7307531d873b18cb75436303b3cd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","c28cea40e848a2675dcb709b3e80d8f2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","9f9b10115d5157d917def2c1128666c1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","93647ead1812d332a29569b9469c7105"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","ce2d303dbcf869beddf1f523dc63f51c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","42fc93ddf15830d98b2e4a9c34416a37"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","5312dd6bb077aec555462c645673cdbb"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","191c9fba0c383244ad0ce15490370eb8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","562592907c6578fe58a656e57613d05c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","c62205e87e14109220a81d497a7dc869"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","8f01cec1417d57e440a5e6af60526259"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","4c730ccf0e2ad358edc2197aaa7511f7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","b707fe7ba0c721ae9cfd4fb00d4ecbb7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","4dc8ca07ec1d6f30fc2c54794b3e8d52"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","2aac5d5173f85dae3f5f41d86ccc4b00"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","e7b204e4e9a302f749069c9dc265d096"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","7b98561db217ddf37cbba498d5a26e07"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","0fc61feca59f6bd0b723dbdb7c24c6c6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","e1c141b311a68a0301094dd3fc1b3f2c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","46187f5824007ff14eb4173295e87351"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","727ad68a8ce62d26b1d606a77c7ffa94"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","b5720c2efd30dbf19df57f7d2f3fb0ab"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","5566a5ffc9d8ae3cf237cca6ecfcf135"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","e29f46f34169dc42bba16021fa1d4ce0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","b2fb40b94bf8a6e0c751bcfd1c1290db"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","5f4045bbf36094df707f7dea170a59ae"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","50dabbba5c053e8f5a5979bfda3069d9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","6ee510333b226eb0df62f907c1794a73"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","0db3bb2e5f862018548add3508f181bc"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","fb6371e8c11af46295e121f2aa3c041d"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","06526f01861915783e02d9687cab9976"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","095aa86bd4a28658fbdcef2b902afccf"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","3c3d4d5e8109a4490d50d14b790a7f38"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","be9dd9c885cbd7a5cd931a8c8c138e82"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","f41a8f710e574d54c1e2c1dd6a5c691f"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","9e7878a3c7c0561c1585cd04cc0d2f2d"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","25964a04bda77400892cdebafe244df5"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","ed5b95ff23e38a1a22a29e3f40070ff3"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","7e7233bc2236cd22dc58083da3872c85"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","2847081827f7a4fe6fb496d595bf5b0e"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","8400d74bb55c6355a7daa185f89e0da8"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","0932f5be6a26ac87da38833a0c78d904"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","0065848e2b95a66be4fd4ab8f5fa1732"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","35cbae384237994bec2f473246b7f7b1"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","5cbe579b4343ee8d8ad4ce51fd12bcf8"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","22f65ede4ec3595c6f3ec730c3d5a477"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","e2d70a190ee32070963762ed5ab4ce35"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","cc4095fb0e18ce55d37ff4d13cbb338f"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","b02f579a2090f88f9edcf77c7d3aba44"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","40aca716f5a3b1ffd17068b08fc57bf9"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","e6f6e6c0c8b66d606a5e372563e05a33"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","64d7178664b6f3120924c46a5f6b4c34"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","a9527db248d51c5c00f30b2c64e4a6a2"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","12e1e16bce3b9f0cd6423652af7ea918"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","3ef331286ddbaaaf08de891380ad013f"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","0db9ce65ee4b3ccded6126e29fe0ea7f"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","18680992918c948da0777f8715405ccc"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TimePickerModel.html","4c081df08ddcdaa3c1cad261c77531e2"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","2e28185613df990cedcdc8eee2ba7084"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","971214a56caa4b4a55edad3e3b02462f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","6f8670997c5ddb8b71a231facf2aa216"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","50d93e83c205ded843b823c0e4ba4d5e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","df11981a74524e6dfd669372014e2577"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","899350e619b109009f70c9f11d9c9c51"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","4abd7eccb4437020a4425dc54ad2d034"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","90b45171c380932c623186a717300ca5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","412a1bfd024c66c1ff4a9173a7bea9b9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","1d9579498d9d3f828571a4438754d323"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","b8f003227930db87d80c9a80b16ecee6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","325bbd266d66d1e09457b206acc3ab51"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","4d090cc3c7817af7e137660ed357d51c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","be9520b538f38fa7b746f64131eabde7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","72a967c543fdb4c682aa4fc9722a95fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","fc78c377cb8a01a9b3784c008d900850"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","5d73c64e43522ef0551f9918121d4dd5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","4aa9c354d784a66df935252783d880b2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","ba434ebf45ddb0c4b3d546a8bf683925"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","74809a85876569a076bcd26e2ff76fd9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","5f8ca1cb2ac0d9ceb92d08d38e7960e2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","941c71bb1b6da9dbb3c1a7c33727af41"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","63e6fb69253ad36ed7d0ad99d16dc3d0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","1991f95654387d363825d0cd27649840"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","b901e510fac857ec9a66702de60489b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","60f797861e5daa17e5b474f48c917c84"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","0a3a3064d20fa10af2bd475a2963d6df"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","395ec824f5766d3ac81f99b2bbff17ae"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","e0ca06e0fce26cb5bd7b86b55a681fc7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","c4286f6d55d5864d9228bbefbef97ae5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","e82f8d898e2d68019d3cfd6e601de4a5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","3461650beff53a3bab59006802afa25e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","e2d7d94dc11f5b1edf498405252e3ec0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","f7a9d3870f793b3027951ef8fa712076"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","597a7b82bdbf8fe54e9cff1e37d155b8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","62f70866176057c92e5a4af6727ba3ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","d8fa22cbeab34cc4f4f370a975d23d68"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","100bbe2ef91658df0d05dbcc32af606d"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","da54a3b16dff2f9cf72e448d9773c860"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","ed0e24c54096416238db5bf6178af58f"],["https://greengerong.github.io/rebirth-ng/inline.82d18c67bdca69c9c4ba.bundle.js","925b126a8fac053c8f26e0c23e09b555"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.ed7a235ac9d19f0dc619.bundle.js","bbcef27af389dd1eef431d2d93df2efe"],["https://greengerong.github.io/rebirth-ng/polyfills.a7a04a42b38e0b032cee.bundle.js","a3f18ef1cc80c67429e0249125ac96b4"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.95a41133053a443685ec.bundle.css","95a41133053a443685ec97e2ac4ed4a5"],["https://greengerong.github.io/rebirth-ng/vendor.a51e73f4bf9bdc8915ca.bundle.js","4c45c24a70e0de51bf1e1d52f2ff6070"]];
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







