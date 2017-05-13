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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","f268901e54fc8020b4afe76dac651e5b"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","b65f9c8d755a87656dcacc163838dfdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","8bfc698f9f0a6b933a03fe21b71b5531"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","1e427d5ccbc4f1e56c3815ca160dcc60"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","05cc1cf2307c12eb30a7a9558de85eeb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","a1a89510a0d3be654d6025b4d17515bd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","4bbcdc41c2c7d5b08ca45ea7c8ebb22f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","fb210fcd78a05ce3866ff5ca9e28e299"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","7c86458e3008455da5299325675d38c7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxPanelComponent.html","1211b32510bebce4274cb631e6025067"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","75af0cdad6e83125fae0b63cc0481757"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","cd76b646323ef6341f080b89c05a7af9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","57aa284224fe9428019180770058e70b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","8ed22bf5da59458a5b1ccb47f7c32758"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","27b43370672783d3c7a3f20b164dc44f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxComponent.html","88d201a930cf40230224ccd18ed9a366"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","ae3cdd22247ec293e532d63a4f63ad01"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","acd0911e778c06b8402c9c24fb45f30d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","1c944b3c64200feba82e9c279c6be0fe"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","5273977cdcb92eec7929a91ef3666885"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","b61102358ebc20bb5c1e02720db4ffb7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","3979eaec3692af772029d355f385a70f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","578a61780533f1091152c62ca122d316"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","285fb8e1511f2a9360fb489f437354bd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","91e0e2a88a1f71b3e5e5379101cb79c0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","0960bf6a72bc0935976bc3a1c93f25ef"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","e57d78db68c3c860ba69f918795bb1bf"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","613cae803fa454b45ecbd3d65b583d0b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","af0a707e75e7fd82963868f29462989a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","539b7735f8c00aeb293eb91f8c5c89b6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","23a3de6eb7ebdfd74cf20a8dd2f7fe6e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","bf04925491be11da4454126e39dad357"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","6a85b4032c765918a9934b16e52280b3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","f1238a11e2846145499cdab7c3ecaa54"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","302a42ac30432223a33d97ecf2980306"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","7b892ce08f0981d92bd4d840dba4be84"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","5f488487272844a0dad6623f3258c713"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","c485894c745e6eb81b5eb2b9e1efa60f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","a01585e9d8ced8e74e4297388efc3d19"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","fd8f8e2eb05d9ed6691c2730cfca10c6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","0400fea3c83a8b65cc57b3eb31ed00b9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","b4d36f71fab180e18a927844eebc1650"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","ce128088e696ccf0a036ba7493eb14c9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","3cdc58e5832b3d8ff0f39717a89a6ae6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","fc2bad177ab537262f13e949d677f8f0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","9825af0dbf0b14fad4525bb928502341"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","19b8820f414695e4462b2337a27872ca"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","985ca142f02ca17c07053939101690d9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","7c259b2c19b3dab49096f9aba4d13c45"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","056f8860f4db65ba2c0afa11e9bc9e28"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","5d203c8e6b45d46c6490efd268bd3f34"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","1c7be70b3493ebb5d180f378eba9714c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","bba7fa15bdf79c9d7f26efe080f06168"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","dc32d4c2d2452ecfc6d1eb9e729e0100"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","fe323110023dd1a41584841996bf02ea"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","74e33f49f9f35b0dd3f2a34efdd12702"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","e08fdd1d29b732fe22f56fef04d9b005"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","3703b5cd1605de7b5e6f22f57b499042"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","a20087c27c7eedea582ae410fafe95e2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","4121846aad74b877b0b19653d8c41c1f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","8ffc1c72d082d322122010c908c2f139"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","b89156a3f9830b1c484aeb5fb3ade000"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","b73c8e0e64bf5cfbacd46faa56a96f52"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","3611ce41d52a41e12569b58b004d509c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","2e8067a00fe67fc732bc4e991aef9840"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","e197a5530a76955b89edfff1b76a7930"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","362517fcd1003db8040afd0cd24a79ae"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","343b012ff546be3d08c8ac41130e21cd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","4808b25e38782176102f793f3f1a0895"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","83df2588628e0987dd21d1de2be6de33"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AfterDateDirective.html","5dffe118fb56df2ab38d87ab8df37afd"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","dcb8d9af9d6a4b79f353f463e0bf74cb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","ac5f15d20fd03646fa4ead1f1b0090be"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","5ad03131ebec9b23c47083e2caf817f8"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","5a2f4c9e332e5e2f129725d8fc93cf37"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","5da9fdeb09b7fe531a7fdb9e80b1cc21"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","ebdeba3700aec0e00c2e12cdf5f8c13d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","ad08bc504042337724776c8f7bb368dd"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","600880c46ba7beb85c63326997ec4b4a"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","f1f1120bb3fbed6f3b1211312584430c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","2026c0e39f9b8ee0d06eaf6947d2c6bc"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","6dd688ab4a7224d9aaeaf1dbd16a9efb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","4e74585a2be0413a9f2f8d2fb9c393ff"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","1e203e17d1a3b7250b8f86868473788d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","4943a7c77cfa27ea85f9ade85a03541d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","6e4422bd1d4249c3f0bda322f1665bfb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","4bf5ec407315af0dac53124cd23ceb34"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","98d90c80a8c2681ad5a0d08275a4290f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","e02a0a8340c7a00e53eb448f4a85b5ab"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","1503e311a668d97373f68958b9b77e87"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","68e8b307bbb3fbc6193c0c5087282785"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","ff781b8417299f30eea9c54b281f38cd"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","4dab420bc96bb85a7cb0b80b22043088"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","75cd267fc18a4d6c8a8abfb9e44b2986"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","b21a4b8f721de9a08f1315d28a13b940"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","2e9782d42ad4fd68083d1f6ab53da85d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","9cb1bee3c046a990263e6b937a3e58fc"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","48e0b536a36722ce826a2c77309bb6e9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","3e9cde4e943fbdfbbd4ae55b6c9cd8d6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","39629e304958a6a487dd1b00a4c6ba51"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","59978e69755c4cbd332ffec285e5c346"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","cd4cd68459fb6da6423719053f979634"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","404047c4fa123bd6dc8d398ea82ec111"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","b9bfde913062d962c3da935f0831ec68"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AlertBoxService.html","3e467d5079d93b25cafc4f0014381738"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","b1a831649284b0122a97cb8e76751819"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","6a3c02c484b28cd4f748e26d4eb394a4"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","d675df6d755f84cb537fd5d66c49c691"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","5202d54ded79e9e6c56b379056b1d943"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","713074e968ae8a744e842a6306b302d8"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","91240b7960a42836653f887a572b1253"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","de6f2d9ea78ab52b8598df7f3b9e54cb"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","f92f72c2eb51bade22ef7967e676ec07"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","bf5f8a565b586b87eb2a3af7ae371a5c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/AlertBoxModel.html","6ff212b640b42d78e421fb70a2bda437"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","04c61baef54a4d7c2a83d5c30b74e688"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","fca9f1909cfb56c66e1017d12d41a42b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","047decb0cb50e2acd68365c38375f779"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","912101c9b28fa1403fb2e1bd293b3898"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","dbb6d08926ac966f78063276b65d9fad"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","6bf9683d12d5646daeb39a1c4fe608c0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","7f77a416e139d0a790bdaf1342d17ac7"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","63e45ba0c5ba73d59480be11e6509b78"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","f60226cbbad20a90531fc6180780196d"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","8bde2be41aa5821c30336d5c44fe3838"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","f3485f255daf2c5f7815a1cfd7b8d601"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","c45e907f998f48e7a7a2f28ee0849cb8"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","31ea140647b5041703246722155a80cd"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","a1ba7b3f3ead7f6ae6775c1aca60180b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","a7fcfb7037aca4bb6ca45bee5880c165"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","4f220dba985acad57eb70b451f72b418"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","6dc711ec3b5a3f974f45c8e6d6baa76c"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","c45a2f6c0d9b3ecba1b93fda6ccd94fc"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","20d70618d362e55f3c7ef642257f88be"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","085b7433464fc2ec256014ffc1bca4cf"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","e14b741fe13f4261caecfd73b6b0a0d3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","0f60e40e2a1bdeeb44a5f59a404c44fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a0e2791a7551487ecba8375976fe866a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","42cffec99853eb92fbb457ce9665a93f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","c55fe743a0112cbb146863a6537bc3ba"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","854767675abfb827da2455156cf6840a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","c458f34d7690962a672f2bfd911f0782"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","8fd2ef09a6293fc2cbdba0dff0fa80cf"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","24aba94f180701257d595fd481178399"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","a0813cd80e8e9d7e5641e6db3eeeb3b1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","7f7f46460c82befe5a27e3dd8740a6d4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","2b93e2dddf959a9a4a11d0366f5f6266"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","2b4c5e4bac1ed940a9133cced01daf53"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","e6f23b4ac7bb9356af00b5cf1e207192"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","b478d6ef7642b4f5b85b5a9cf7fb0b6b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","5229aa909a7f2f8cf09d7174031f195d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","302c3e5ecc659d00f00df9279b72fc4f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","bfa01a68e6ac12831089275d0ee2c531"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","2e334af53eb4d1c76b0e04939b38ba0f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","90dedd6a5fe22c9fae830f3dc4aae634"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","5cd2d413d1af2d07588b695df7a294e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","3f755b9b522f5a73d7b0ba3a8b328372"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","a9fa5940ec226b61aa448fbcd7be2051"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","fba73499d6e26ef22623151cd2883700"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","0b573f7c7dae684df2168b996dcd87d2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","3761ed9443524b176d1f0a08bd3a9caf"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","2b3d72e117ae8356e61f4ce00c27ada3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","c4286f6d55d5864d9228bbefbef97ae5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","0f806429f2300df144ca2d81a001e34d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","af55ca1683ff7958e214b4db1fd8eff2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","119329dd4ad030452686b397376c7fca"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","4ac021bbc1ad5ca3b31a400e0c71817f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","b9cd187063b6bfa231284eef9e12c4f0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","9332b8f90f428915fecc06f153079177"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","32e9d0de4ea0d70a224639faf3327021"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","8780885d1a85417d4f4b33bff75afe68"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","938b0ae9a9698c9bd7849e6837d5f58d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","714999c60bcee2146fdc473ad9753abe"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","ff11978714e209375bd656459e2a09b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","2103dea85fc493c080dc16807261fa35"],["https://greengerong.github.io/rebirth-ng/inline.a71aed23402d9c76cbea.bundle.js","08826555293c64a03bc868635612b62e"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.2db6a73c73945a9f1f21.bundle.js","f9bccea90b818cedb76c8b551fc7bb6d"],["https://greengerong.github.io/rebirth-ng/polyfills.a7a04a42b38e0b032cee.bundle.js","a3f18ef1cc80c67429e0249125ac96b4"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.95a41133053a443685ec.bundle.css","95a41133053a443685ec97e2ac4ed4a5"],["https://greengerong.github.io/rebirth-ng/vendor.41cc8e608ac297a6be63.bundle.js","9ff3c139b40368a9d18b8e5db9b89e5b"]];
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







