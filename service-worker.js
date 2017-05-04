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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","d6915d7c476d3250ce2c9d25ebd1de2b"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","92b4368749057432e85d55a6998d804e"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","8620f5940ac3f94b0d01dd2916a8fcf5"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","0f63cb0c43d6a525891282a2f25f1ee4"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","39725bd3adbd63af985c20b70db997c0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","609e16c0f7edcf99caa55f2d633c7d51"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","4472746cda7af375631e61a36ff6abc8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","e9bebc57dfd51db242d715568e999306"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","ada0bf766a0affa474e11c7222688200"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","6d9adf97842026d18464d9e0603583f8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","5fe761e939a50a8efef53a3b595cb578"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","69381991c73aacc857a7751ea19dd011"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","7dd8bfbafcad97355dcb6f3582ffc90d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","a51bda9497a96fa4a965b62434a659a9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","24d727d10a9b3da3fb0d685d153d08cf"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","93dd91fca9a7a0714589e5913f95caea"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","3fae9234049197dca2930366524ad730"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","2a3ca7e36b6af26881c9f3ee58fddee3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","3461b7c7ac7e1943ae8a391b4c0eb6c2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","826bcefc21ed28ea6e62870a1522fd75"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","efb189c39b1d7b1bd6c7f2fcd5f87835"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","e39bfd11ef42a2a3365f94791788895b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","751ce8c7dec2fd75019ed0da9a12ec5c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","47bff830d6fdcf53afc108310098e217"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","a68e4c0cbd2b19dffc3c6a0d23d1caa0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","dde6256c4b0483554e05f2fc2cbd83a5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","fe4a616886a9e3ab307e97e97e6bdaf6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","2c658b24a6771bc9dc9d6a22b4eb4bba"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","f5715c66207ed22a93947984def8ec08"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","a76ae5f7b4e83fd2d90429a22c76c61e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","286c7baa2a55d397aefd3cfb21d32a90"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","1cfc24bbe218275ca3354ad5fcbe1b2f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","8481156d04ba623a1e5994c0eed84163"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","14046cc68de9a91ba226deb2fc586b9d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","35643bbe85987dfbcd673e03068e72c1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","9c7d530af01109b55c59625f6f615628"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","4f3c904ef9641a89a53f377a818808d8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","1f97596b5123a1c9732cedbd46fe5c2e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","415105e655abc2adf8dcf208e5f68971"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","f87d0965bb1c132c74fc7ec0293ec2be"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","e68fdb506e68e31c18accda136b27e49"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","2c9e08198e22f0f38df112a8f7ffd523"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","91abb131b42d94947e2311f1707c02c8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","4116ebbdfba80363487f845e29ac6213"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","f4df86df0c6fdf841d28bcd0d1fac93a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","a4a65f297c5222747ead84712d867c82"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","ae661e9eb788b61186baf26302e7fa9d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","f0da628340c53e4e571ab52a9caf8d85"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","0cda9754e4cba14d2094167fa93fafee"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","2c9ccafda24e19e6f214d81ee01f1a1c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","c99db10587d9ca84147acbb961892e8a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","d7c3b14003bd8ab97178f7ac543c2ef3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","1d3ebd724ac9502b13924b80e7fce67c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","4e83e87aa3124513468b905da197a63a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","0091b2821826eed4437790c9d7fd9f1d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","35320925d0ae76df31bc992baae003a0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","97125c2f2532f66ab91ee8a2b2e12910"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","4a228a62e25c9ab19650a25430faed5a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","bf8d3c1520ee1f1007383aba6f99b126"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","ba252fe27cb4379ceafa43c749c56782"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","1d6d81f29f842d9956cc3e66c6a9375c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","7e33a79f192d304fd9ba5eb7771466a5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","93cdbdf1bdb57b9be3ad78eac00ae817"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","404ffa47fece748119e282eb733fa537"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","ae032853bcf012b649d7eaf498200406"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","2662bf40fcdc9e50583c582a98bbe037"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","a3b980759ac50c916e62efedb5b4e48b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","e5d70f5df3bcf93410a07f38ce8379f6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","409d10c74f62842b3d6a23eac6ac73a8"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","8a7a35180fdd3578ea9403d707ce9088"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","12054904251e5c28a0a35059e52235b6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","79f3a80fd3b15c7a3c52dfff887e2dda"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","e3a6bb4c830141c0bfe2038964d7c43e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","1c8e6cc1aa935abbe4070d7f237af1bd"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","0b5a6ebaf3f4a074c002c655b48ef06d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","4653c4962b9a96ed06100e335185e1ec"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","e8c64a439e80ea58b744a52c03ba684a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","aed8f9d52509e6ed64f18b2dac68f564"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","404047c4fa123bd6dc8d398ea82ec111"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","6ed7b7efb069dd2b11bf0fd90a7188e6"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","ae664aba13bd5e83307fcb738801bcd7"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","931320b680b65c0daa0116debd978970"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","fd58ee8f138a8459b2d7a89e52e687e4"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","921baa8381b80925b403e395be585603"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","d81caf1ff32cc7df71078b0abb375284"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","af237991a01cdf189600f156bed85a4d"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","9e9bde1d0d95e3f9df890123e38a6080"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","b63c706d0cd12641572d9cc00ab57563"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","1f9a80032fdae8bd59d1a937e04d784b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","f3621b9a1f6703201290d5d8756b3213"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","7ae230ffeb6cd0f7c0c8ec6dbd47184e"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","b49408db9c6a0c9d845c734a301b0062"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","44514db36e9db237374731d773310f6e"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","7e11fe458617599fc171763cb5649ba9"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","8c1ed291eaee1b62fa23b66dbc359c50"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","7c1e1f1d6c01b25af12d4a294ca7a7e7"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","e33470072f7b21f083e3c26978eada6a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","987cfc8cc1f005ebc2d66d4fc4af4cc9"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","f75d4c7e6fe13e932cfd71179149a751"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","a58e92eb282046ca4dc6ff30d0edf4e1"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","ef216ce0742e4ac1a52315ec9648bf3a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","c90616fc5f558163cc1b2314a364869a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","4ee80a5b42c53ad5a519ed7426f62db0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","be4ea6e4a7e8918b14828be44583b3c0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","9830a4d96724f53ec0ba7bbbeb7a4d12"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TimePickerModel.html","cdd6534bbc7d72fdff3ce019da7ebbe2"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","ea0f9a2ef1f6e03b8f4fd73fc9fa5dec"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","55f5cc55a0c98212e54827a7efea97cb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","dfdf57e914cbba7003ad962ff09f215a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","1adccaf8b3ba91516c302395e6f438d8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","2fae31f4a513feb7383b46f6d0332468"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","33aa8c4329f2c3226ce78d3a7a683d07"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","a2150fb8e500029ac41118dda1e4b98b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","40a20adfe67b66f01dc45734e630f13d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","b55ded49d09cdfee1cadfe44dd0fd8ef"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","698263d8d90cdbd9666215d8c32d2124"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","64f0534ef422831ef10d9f0789a0d770"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","dd688aad38fa99c25fdec7bf07dde133"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","46fd8cfd7e5af16661a0e3b6c50e900e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","169aebe635988bcbc28bc797fa4c69ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","60a339ecddf5911d6a832635acab2438"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","3a0df65f08083a2fcac248f883472728"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","1fac6f99f44117a9642f8bdee5b21279"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","46544002607bda2ac37bb5383516c1e9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","1da0d2ecb3bd6fff7807947eab8e3c95"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","f40cfec6fc9f5b5d1c8bd11bb242b473"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","4d4e44b0161f488f697292f6e930ff4a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","cad0951fad0251252a0920095210e8e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","1cdcf3c2243af20764222e1fe576535f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","6f5a344f0155ddac028159d79e0b2a4e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","3701e413a65ada819cfa4d13a3d46146"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","2a878099d8f30e0bd3813febb0211fa8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","e6792070a3ce9b2db3d47ded03ba5860"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","b991d5d1d71f4633360e0a864936b37c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","62da35982f17ce11760777e555e463a5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","ae89c5f5483b020aa146247d68573a02"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","1970afe65eb118fde17d5a5e8c8f5874"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","bdbe41349530db5bc396e5028930fc80"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","2ad6ac34915ef84780a513b8d5b72bc8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","c67869b92052b99dba6ed1023c1f19a6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","3030721bc72b5e4d0d2a54870226432e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","a5b8a209225dd6ea42844816f616f486"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","3da3c90d69fbe6698cb520ec72aa6445"],["https://greengerong.github.io/rebirth-ng/inline.97cf66cbfb828d810949.bundle.js","311f2c3356c9b36815bcd6d3f792b9b9"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.f8984ea26a85d30519a3.bundle.js","315ffafcda8139f49807aa2d0c7d7129"],["https://greengerong.github.io/rebirth-ng/polyfills.a7a04a42b38e0b032cee.bundle.js","a3f18ef1cc80c67429e0249125ac96b4"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.95a41133053a443685ec.bundle.css","95a41133053a443685ec97e2ac4ed4a5"],["https://greengerong.github.io/rebirth-ng/vendor.b58bdc1cfee5b813b960.bundle.js","b70ff548931b08c1b890a97ac275305a"]];
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







