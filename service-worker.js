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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","b2872138bc6a5b65003553970fb862bd"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","d79e408cb968c66e9d2e5a6b4250324a"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","6f00d80b7c2bf1b73d01e62e54fc110c"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","e8ca6ddc98c97620804e8aff8d64ba3e"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","29463cf140c00b30f0d4b03c92ee49c2"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","0776ed0e2cfffb411aada3972017e2a7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","fc2fa60f567c97e9db764dcb71ee8019"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","555bb0b709d44b0c06748e11ba25c401"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","f8065643f9c2263f091d1226c2f6969e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","13bc20d1be7b07276699a5cef7d53eab"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","3231bd4811487c1afdce95809c652f06"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","d19ff4704041ea467fba0995d3df19a6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","f58f822b9321540dafec0d2d3763d184"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","1d75d4feb7bf0406dd47b84ff6ad4bf7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxComponent.html","3184c7a33534e66b8d9bd2c1803bcb2f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","24a102502de6d5a5cfc1956ece6f4715"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","d5458c06007a0a145af1ce8a7212762f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","403a06e147eb10ba32e6053fd404ec78"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","b725abfde6fb722e97441b1953ae471a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","3678cfb2cc5cceefc053b6e5a3a4d8e3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","107aa54ec2a64c4d6a1ddc853b3ab285"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","447eae498943f7088d157bfd069b7b1d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","33c3d20250db61f63928eb6be12bf923"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","fd690750f8d70065bbb74d1f3b2b8e1a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","7eadfaa8e4fdbc516d426b4ceaf65b5f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","79d472f65a828a13ace3032e58e0c41b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","8091cce2483bf676f06424bf381a9fce"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","f2931e647554da285b8bdf4fbb9ad6c3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","110b161aa705b3ad5594325e567ee7c0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","681be6bebd08f6ef2895a4f1bd9bea02"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","20278dd8e83470d7f20ac600e30fb907"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","4f4cb2fa17fa7080b2f0a3e6485aa0a5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","fb8b05fd91a4aaace182b04f8b89fda8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","2b4c5e212f5c7d67592f8a1ee331b3c7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","75e689e4d1c358fd8c2ef5d8978b7bdc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","0c9866c25415acb71bfa78b1d1d7cfc8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","6e57882f62064fba8d9d3a94c722dbed"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","0efb619e0602cf678a7504f2d0b57174"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","e409802c56d1be3ca608e8c6d6e1749a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","3d1d7cce01895d3023849463f0104195"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","a08c5a1bd3331e6709e4ed3350f16aa5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","67ddf9ed2448192cb3c8cb694582fbd5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","3ff3444d5bfeed0a644e22e2da36fb69"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","562dbc509cbe51077e75b71d764bd61e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","282764d128782071e5f94e99e8e47dc6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","85f45c762673325c0860148261e31969"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NotifyComponent.html","02c5f4d6f7995eb608e8d4826886ab06"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","916c4a730ac57aaa5ff4b3a848464c10"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","ac8be1eef45fff56f71eb808b04bb8f9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","50d83dad787a6b70fd314bb955cd2038"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","63e264c6eccaa40f8a8d7c35448281c4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","33d0946fc3a0e9f8a422486ef1eea298"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","69abb586096292b1b3bd614b9aac56fa"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","a0a32e158bdf5489a6daa26f659ad90e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","cfd4502a643bcbf9cd8b5967fa7e0127"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","2d29707b7439d12410ba0e4807e03536"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","0c2d07be8790af29e6bc2517124119a3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","ac5b21d5486ef04e791669bdb2aa2409"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","18d6830889a01f7dba77b458c8239352"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","ba6042d898ec9152d9011e36832c6826"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","a173dc0b1d73e07af3f2916decce64c5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","4c3a5fd2aa7012bfce19f39fdad25ed4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","9b90b3027cf27abfa2dab88bc81d4430"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","9ead726f8459d5a22bd60a58f13b6e2d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","ba06bac7a092c3625a9ffbbe74113e18"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","81b584e1991c70c73cf70320dce4fa09"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeNodeComponent.html","8a554df69ee47fd9d5a26ce5ed176a04"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeViewComponent.html","fdaea83fe788395b29efa19462a0a521"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","8a0391ff96c659e905f4a7c37fb60477"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","034371a1419fb3048c19b26039bf8ca9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","ba8a113af5757f4e369c1ce4cfde67db"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","6159885da73125f657a639c5e1486954"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AfterDateDirective.html","29620c7200412c896d440b9cd0396fac"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","de9fdd8d426a45f9ed0740694741f490"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","4cc5036e13512f8c37c7e1f07c671711"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","2b0db4d24e6fa0675aae69af389d29b8"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","30df8f63b527c9325176b0f5b62ae970"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","e6f4909040f9e919b0620530857e5c97"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","81bcb6397a3b2a6b79ae766bad051a8a"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","c5c78d1113e6701fa8e5f31e0b823c7c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","5f965473c0b89f79fa9e96126177a05b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","5924f0c77a3b0402a0f7aebd8268d67b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","5e12f335bec55f893d4a2225d8dc16d6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","513111fcd482e1470af4e42b0dfdb4bb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","03e6497d647ac029543154d7b3dd39ec"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","8145f0046f035ee66edca9f8eb6ba779"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","a130328ddd93967e44dfcca769b5adb1"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","2af33bff1982df77a6814e2f12e7c642"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","6b634d1f7a5eb55a12a2bc26b57c60d9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","b6523e6d5cc50300952b92870b3c2f28"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","ac3ac72572a977b04d0dd85fe101b7da"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","83541c3f1c924adf976fadf0eb020ae3"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","ac282e13608f2c57ab09f92109c173d2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","534c7df28fdf01a5bee83656b2c3ad70"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","68fb28b75c4a0d7c96ddde092b36da97"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","eaf0d66cdadf1f256167ec9b6907b35e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","b796f4fa519835faac219c1a9de2890f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","d9c85cf6b64351a244592900269de617"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","a1e0307c020a6724eaf4c94df94780b4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","d5ad4a4936dec10a8d64284ab4f90ba3"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","13fe98ff0fe4d2bfc9229a16577d098b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","7b16dc85be25613ee2e0dfd67777e47c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","408c7369b9dcaaea76933f9be81137e5"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","555717164ea2442d8a0e9fd44527e76a"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","404047c4fa123bd6dc8d398ea82ec111"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","3c7768f8fdb8742d36f6d54d5a5a1c83"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","f6ff5322a4791f8dd6383ed3cf472baf"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","8e633cc11140d97fa8bde72eaf955766"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","2bc54b8a510d38a713aca8d872d98098"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","51324a152d863076b56bc67159b9548d"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/NotifyService.html","15dd68adf40c72d5c0d8c2fa11955a94"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","ed6e905831b9368f723bd6ac359f03ec"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","858c2584ca65110231ad4d7352423a07"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","c3ce127b76c95843c09e80691fda33ab"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","cab0df0ab7e823c4ebac4763f15a197b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","521fa8c004b1fa106c97b981b82ce902"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","fa7fe93dd17a1e8fbc83f8e6c888da00"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","a9512991b92d7a1f2d5f1fbccf051a28"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","2f64117202354183f049020c97991448"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","5fd0c0ff9dcd5cf1c738fc3c30b1e63b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","b45fa5072d8e349fe1acf2270c8d6a3b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","77bdbb2cffc313529dbeff1231cd1fb5"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","2d3c68fca28ca5af5828316a6d1f5d31"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","be7ee8140991b7b88640e6ddaa5f638c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","c75b654c1cfb8323521bbf950dd188a2"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","b01ef8c0914439927db3b5ddda61c531"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/NotifyModel.html","1124e94135f1a9cfd486e09b6212fe7f"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","9b1ad7492d37c92deaedc0c299347421"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","b74fbf090ced1e2a83ce787cd2faffd0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","94a0e62c6f1c227e0b1eb47c961367cc"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","bb1ce5f9ed8fe4a0f6086d1c7b2cccfe"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","6fe32bc9cc4753d6e88aa31656850b1b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","95f849d73ced9d9da8c9a1ba9ec9e5d3"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","284ae56a989ec30c3c5c4778d2bbe595"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TreeViewModel.html","c2cebd46ab3ebb95d19418d63100b669"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","bb0526b8f0dde72fe7f7ef456e3ca5a6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","34cdfd107ac2b392ffedbd9a368ae855"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","c3a509cf304618ed1909458aa4552843"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","7add8f73e4ef37833581b4567f0b8522"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","ee9e619f72a088295e1b709a7fb62db2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","d1a1d019b8ada148cbcdbef29b1ecf71"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","74e9fada824207c11009124679cc9880"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","7f8f0cf8dbbc1064a7e8bf8cf13ee1fa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","987f21e4b883d3feb95453123d6f6d9f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","fb610063bcecf623ef62661ba80a1e07"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","24aba94f180701257d595fd481178399"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","c27af8c5592d9476f9f4a0ee762dd758"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","27cfbf666f2085399789844dfa68af94"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","e84af3ce976dc24d8215e044e66b238c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","0380778bd01502fe9436ca021a9db02c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","c1a0a3abd0e5a47121ed702fa6417a87"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","c6febaae921c537765931cdb85c46f21"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","72a369d7427afa3fe85e8e8d777748f0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","95834c11ac41d6f53a11eb3e4a0e31b1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","8f2a8402555c7c087f1a91c7d75dcfb1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule.html","d6e1cfdc5288bbdea7a0916eb0ec3af6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule/dependencies.svg","1bcfa22d25f86d973e2dd92c4714000d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","b7f32e4faefc26a0882a67d09dd1fb19"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","39957e0f8dd75c58fe07cedfc6f3e2bb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","fe23772c25ba6f79b3889d9f50ecd427"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","b59d52f2b04af27032aea91581ca656d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","0f3f7c43f05bb23ebadd450a5e3fb5ea"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","d9be7c7a4615aab76de0559bfdc293f8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","debd796efdf8ad718bf8aa6b3cfd83cf"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","6b3068707e4ffd6e4a26d57ff2c5f2ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","877ad595205dc79cd9327c8bce4354ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","c4286f6d55d5864d9228bbefbef97ae5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","598759ada3da8cb2a990e73f0fe71e75"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","837cc76cd51c3cdb4edcdc6a7a359eca"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","ec951aa7e160667904aeba6bb939e9ac"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","4ac021bbc1ad5ca3b31a400e0c71817f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","00349fbce1ecf87ff5b2eb7b7f3847bc"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","0d11aa2a939afe0ca9089c5bf9e27785"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","d2038bb489ad62388590f90e0745cdbd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","1948b831c26ff7ef28c58170c964eb38"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","b3f12055ab7db9507821ced21ad4d668"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule.html","64555b8faab6d846937823509cde2889"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule/dependencies.svg","6536e3171de4e4c46595e4a0e17fd494"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","2e26540b2e5bbd911ff7fa9e38922e98"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","e382e4d5a9fc758f77d187b72978dfcd"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","0bfe77214cef74aa4c24d914461a7983"],["https://greengerong.github.io/rebirth-ng/inline.2f2d7a4745a83b91465c.bundle.js","04277fd86d1e5c28d7cd0872b996d3bd"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.9ac690a52766680afb6d.bundle.js","8c06581acc710b01c02a20ffadda320a"],["https://greengerong.github.io/rebirth-ng/polyfills.a7a04a42b38e0b032cee.bundle.js","a3f18ef1cc80c67429e0249125ac96b4"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.95a41133053a443685ec.bundle.css","95a41133053a443685ec97e2ac4ed4a5"],["https://greengerong.github.io/rebirth-ng/vendor.2b24aa4ccad113a7e56b.bundle.js","4c59a0c57c0808535e3b3063cdf0dfc5"]];
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







