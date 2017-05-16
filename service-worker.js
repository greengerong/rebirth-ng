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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","020de9ee1b37da667e2b0255ae97f368"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","0b54cc591092c4b32b87dd7faa8ec8b1"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","84971c3d1382cc345bb1250f846f7eab"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","043dc2d03573ea39af33044b4cedf9c0"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","95f83fe046aeac20f88fd95331276159"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","656418752fad82047e3d7034ef66000e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","d7d57734ba4cb20ce2dde9ddd52e5285"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","80870b89d500556cba6dece524322bf7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","354e6f33acf6839566b3c72f0a8c18c5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","11f305a71edd7953f378786f14867bc9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","28a1cdc9287ebbeaad08d671028434c3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","79652d9dd6d4dfd5864eb671362118b7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","3a0e4e255594ec75563c98c9825d4f6f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","8b1ce79e07f87e31fe485aba31abca72"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxComponent.html","935032fd56234dc9045d54a78d911692"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","2dd601925059d765d9c9ddbd1288b19a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","f82a325708d118158f29d720f6c3c9b5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","743f2317449b5df9e93d44cb40d1a47d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","0ee486e0b697eb99283349ecb8616a63"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","760fd6a9dcd7acbc4ef261ed7827b5f9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","4eb91830aa80a8f6a8de268e13c90881"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","2cc7847cbb6580665bb447378ddd7356"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","6da52d162b162a108b0c33cbbbbbee49"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","46192fd38efc088453283bd128562d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","fb4c5f5aeb09272754cfc7591449b2de"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","8c11a8269825254d7b9fa6441acd55f6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","0cdf9f97861c1d7a57a26482e895c83f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","fdcedeb75c59b5fbe6d4db5a5cf7caf4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","b79c15e1df184904fdaf2de282ac89da"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","5d10a3208f8a61f4090bc546c189bf4c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","5a0e283a2dd27c5934d2a11a9f98f17a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","f69b34d986c5e083f570249fff0a0f5e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","e0323f3ec63cb38f7d950e1675558793"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","07431bb3684bb00d770b6f0996ad7f53"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","aa5c531bd76cb2a86a6b6a22c346a316"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","2ed70c89441b933c9323669292e83a1f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","795a08e19a8be32bde512652b3fd0ff7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","b5e9b890b7033eb18a4fcbb6f19b41a7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","714330fcf24e5ae1ad501f6db877ffe1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","01498ccb773415d584082bab17d3ae6c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","6df6c6798667ecc0502a282d584fd129"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","2be33bfcf122ed354d4e526b834034b5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","48063f83a916c2d2b3c19b3222573ca7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","480b5f4682d470ad95910c3467948691"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","b79415e2b48b7a3e51878350cb74acf8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","5f42a72d80a8c13e75a011d1667d4b8e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NotifyComponent.html","943a81a740069d8f60a351b062044ced"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","77a5e6252665ba6a7282d9cb0d8fe200"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","a1a8bea9d6e25a82f292e51d54933794"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","abe60c0824fae3f21593d62fc88f7ab4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","1cad8f3803f7baf6f96c69edba001301"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","8e78d1b368cc42a7f559230b588d11fa"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","3d9e3f9cbe48cacc22e1df007dadd265"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","6aa77745cc97885a7a76bcfacbb8a1e8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","d4cbb7265d1a4caf717b271cf0633b41"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","2821aa902ff10bcb6c7717187592c654"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","70b24e2d5f89fbd225993dfbb84ce533"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","cdf6baa866a616303648fea2ff9cc7ca"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","138ccf452a8d2ce462f11c220f8f55c4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","0f2a36001248de27dd6943e380bd2636"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","c309bd02cbc9f56088df7d8a712b41f8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","6ed5ebed8d0dee904c6aad876e01c16a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","b4d6c4e92910e2377d26b7819b74c6f1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","e9eefd9a8141d55f4e1fd1d6c305291f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","c8a31b4ab4acd87a494cc22f8abfcfcc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","e2d4dc9c7e1e6b29cd62a1ad90974a85"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeNodeComponent.html","5560a5c44fa2acbed181642cd1e29f6a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreePanelComponent.html","8569af4d3cd7202c66c6c2a6b3c7694c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeViewComponent.html","a0b6fb859a1c965998cad965db2bfc43"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","f7580afdb19c403b72ad20e31bc70041"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","8cde9d61084cdd988ee69e2e71f9c313"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","85f54ddd9ebefb73a19584263fe4c1c3"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","f2b9cad701601b0665d7b4d0107520fe"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AfterDateDirective.html","f3f2537282c88dc6356aa50eafacccda"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","dcbe41b6cf641057efd9f1cb85edd2e2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","d5f30c551905eac1011490660c743808"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","55b7618839680b56d0149a43b7286368"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","7deb0d3b954b75dbb21ee91ab1ef0343"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","9f0ed5dbb8e83ee79fc8910119b6f779"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","c9c794c937060c18f712b4d46c61533a"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","e93ca58debdf6249d5cc4ffa7abf5115"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","dde1ded1e414eff18c1d3e448e7a666d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","2685e9b6c7e41ae3283a67f4201b1632"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","7f14b19455cadf798bcad734b116d294"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","076df89ed1ed40657fea6d7e7e40a3f9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","dadcd4ffd6e527168d99fcf678b52c3c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","521a88e8527a7710f78996373f9cd839"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","c819224b77190c17e8d5a3143b4eb4bb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","91b5a1eb89136bd8f7f9b8a2fa0fd45c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","d7eead895469f43b20f4c5558750ea9b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","47327c29585326b678a1bf23544e66b6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","ebb88123843e662fd969da1c790b4199"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","30b1cf6bea74f6bc2a48f7202a3bc265"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","b1ce081de0e16c765704ddc0df8f6767"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","5e8c8307f31ca53b1b4925ebd10c6bf6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","02ffca24b68b7bf7e1b48c3bc2575aeb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","b019e1ade66f1b85db6eaa45d16ed1bc"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","cf1abc3a5e04954cd57ad127bd482cd9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/ResizeableDirective.html","20086a994ca5571c1692b6971d00837e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","40ab19a5aaa5937267a06a48f6b25d27"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","5f0e35d6c7a8e0f3d4d95bbc9df2ad3c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","5c0d7c3c0098eabce06ca3822214a6e0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","34dc84b1f1022d1d796bbb5fc79e817b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","d76cb58f6d11ce5ca8901b6aefc3e0ac"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","5edb3ebc86da8c8bfe79e74df195a09a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","ee12afb02a81cfe311aba457d5262b22"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","404047c4fa123bd6dc8d398ea82ec111"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","e4e5530040f1736b62b379c981dd525f"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","1d9aa0d48319be9484725b3ad80ed159"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","0dbec1adf98606171cb057d4e6f91e07"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","50e44d860baae642fa886d9c55be53dc"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","0736d71299a885906c08885ab4c69156"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/NotifyService.html","5953d6a20cad6f74a91993f1ffb22052"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","e938b02be5387bfd13826c9b08327a77"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","4250ab957c8d9cdea556bbad3eac190d"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","4deaa6b9773f6005a52a27124d0077a0"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","ff27e0fc13f95dd097227f988247b0ff"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","0a10fe81dca608e7121e52fcf72f4f36"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","f990903edc60f7e7d55ce553fb41b84d"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","179189f933137bb88c49f3104447898a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","3d5a67716a5fa615149052f8b47ee681"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","3aaf580e878ebb6af3a1184ab655eb98"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","7e68f43d23be10fefc53bcfcf7e59b71"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","d9554fca03c0251d0646739d010ed6ac"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","583404b9c86186b4233c6b661e10576d"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","442bfe9ebf87f4c5c38c30af61abb65d"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","9db85e7263e1b5aaa687b189fb61b36a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","871003bb2f91f544dcc8d8158feabbc8"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/NotifyModel.html","dbab06fb9b2de6ad68d89e6bb9651e8f"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","bca248075282b3c53f3340b2078874f4"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","c00379d54f31a14ccc6f26790433e377"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","8906f802690f3ed6f9c66769cea63d68"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","1ded17778ec7c1c16edc55cf3670de6f"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","bcb3551351279059d316863b69525a1a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","bab56a455a92df50a3278df5f5340c14"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","22a0e6b88057319904719a3711fbde9a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TreeViewModel.html","2d4f991358f37c657095b3833670cd6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","d15eede6d6c78c17719ffa9ad956940a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","168fc8ef07575a8cc410f3be4e63c9f8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","1526c4da1af56c0472e9c78cfcbcf732"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","4ab95928aa0ff91942084607a35be0a0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","fb67ca76046506685877023f9e1a2cef"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","77a83f9b29d41b69c40cdf04ea0a355b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","1862694ea7024b228de089b52210aaed"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","868a988af7169f359889be0356347c6b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","e214f232a467b435241a21a5588e8e73"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","3be5d551cc5b8f4bd622f9fc40958484"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","24aba94f180701257d595fd481178399"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","17d37482e6085cc26927486086b60446"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","3275107fa96c22a471bb377134f79288"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","d43c5325ef3e4d13b907124420301458"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","1d90eee72d3f3ccd3256933d8465e522"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","27e9fbf95eafa3c3a60454e31f88c9ae"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","0f9e721ff6a2aff4dfd5f945bd03f349"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","99cbe2f6da26ee002e7b99168ee6c056"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","2b8f40a343100f52f0b9b7361b5021fd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","725407817910d7390ded6d308bd1fc19"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule.html","4fccdab5a55ea799e4a14fae9d0609b2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule/dependencies.svg","1bcfa22d25f86d973e2dd92c4714000d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","8bb8a28e99c041b5500c939fcbb0dead"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","c438321de7300c61b631658ecc02b99e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","5f7a857ad801c969e73fb810c458a186"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","d54f4f40bff5f7a471163b8b5a9510fa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","e10e1dd8ffe854cc7f316c7f5103c0cc"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","d01fc786778aa552064d8d1b489acd01"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","1815d76b48c8eba8228cf88761cd4495"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","afa0937fbf6d1b411888ba8a4321a2a3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","f94ed4233e8dccf934a4cae0940adc76"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","9f80cd85a5bc9461e90c3c5d3dd75664"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","cd2306febde60c819dc5f350e674c8ca"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","837cc76cd51c3cdb4edcdc6a7a359eca"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","2ad5df950d484e9d7c3c78371487b907"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","4ac021bbc1ad5ca3b31a400e0c71817f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","218783a6920e25346537ab2cf46e4560"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","9fa21e79f46d32ede2197c7656d78af5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","834e5ddf1c2fb980f636fc0f4338ad94"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","09e531e8938eb9157fb20ac08f04ced2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","d4b5544818ab6874173afe8914276dda"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule.html","af51a295eb80039ea931e48fbbab8007"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule/dependencies.svg","52120fea690a42f1eb5b0f2651d72e19"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","6414629103049ee9afe8b0ed81d2e479"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","d5d53fb266c15bee55f37bb779f1d422"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","a277f716a820caa98eda2e9267c1a779"],["https://greengerong.github.io/rebirth-ng/inline.901ce9acd2b1103d8089.bundle.js","9eb01b7e4afb8317552304598fc2d913"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.63f14da00131c2d9df41.bundle.js","58e871bb39253b7a64c1a13b3da7450d"],["https://greengerong.github.io/rebirth-ng/polyfills.098e9c6d0cd88df5c10f.bundle.js","8f4c26f9ae084388d3d5528749194f9a"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.13e5ab6060221446537c.bundle.css","13e5ab6060221446537c9a28d9832f7b"],["https://greengerong.github.io/rebirth-ng/vendor.3ed454494ab214152bc0.bundle.js","308a395b803c1dac78b1e779147db89a"]];
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







