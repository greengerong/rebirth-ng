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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","b96af0f5fb68523becc4bf7653df984c"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","9725054e5292b2026ed74326fd49836d"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","a423aae516b023246565ec53b07637ac"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","7314caa1551d808f03c5eff53b052217"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","302eaa639a4bc8fbe3e698373fd977bf"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","ea2fc488fb7a821b2af6c2100397bb6e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","8960bc4abcefb3cee95beeacf9e32448"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","6fffd4d41b138d52a5941e401df4d1f7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","c82d3802bf8c8af1b8bfa6dca4a49596"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","39e76c5b8666bce8b8149d67637ad4e7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","4e15eccb6e65095c6bcb5e39cd6252c8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","e485263d3560559253747987066f2aa8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","c1e4f52e79f3c5c206c2f72aa55baf73"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","33630454376ea56bb9724db1256ca5ef"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxComponent.html","b1cb6d53be0650655346d7d46f70c5f9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","4e3395dda24b395b467b194ae08350d8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","908a47366ea536d39a83629b795a127b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","5435f8907c2af9a5375510c2eeeec509"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","ec844260c2b19a535ea676ed46e8874a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","04b45031c8fee6974483aaa29deec8d2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","a28d66075eef253fe5b1955af2052314"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","e8fa698155c6917b43bffb473005029c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","a870d05d84e20085dfbb7c5e9d45ede0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","e4134bf0f32214eddd2b7a65e9dc5710"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","e3449ef04f3b812b496423f410f1ff01"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","6c1e254eff98830cc5ae9093e4023d89"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","86b715f7e88c8388a70b269026311fb2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","16b389b1669c986938bd1242610ba996"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","5d760fa36244054f3554538b7223f8b0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","a5126eb2a270c56ca07fedae19a4819d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NotifyComponent.html","b81083811adaa43a9f8c2bf316e99cdb"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","777b3aa9e5ec5743eae2645f382b46cb"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","75de28e834814cfa9a8baa4c48fe680f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","9bb83489552eb805fbed2bd18d3d7013"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","97f7553496e239f85d205d60d3b0b185"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","41afe1bf747b4e77e8363f065967c884"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","bccd5e468a24327eff9d51b56ae0c2be"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","9a2e0da9b679ec86893150715e38f6fd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","f35a7053054d2ca4a04020e22c53b380"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","e011cf58cebae4985352f952141e5a38"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","af0c0d98fae89a863033eed9cb910d51"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","ce4bf7cb30c556b8fb73ebc60ab40438"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","75a28de31123eda80151649c5a453c6d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","6b3ca3693db97a69375167fb450171e6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","a4200bda7924e2b4bdc36516a96882e6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","f320af217d15f7442435c5fa1e982b3f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","36b621e17902cffef719217b45a6c4e5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","cd71c5e388dc8c24ba9fdc9c645816cd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","21600a4149df73aaa67eeb373b3ada9c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","d66eedeaf625fbdfa5c993dd010fa043"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeNodeComponent.html","ae298b17e57695b5b4fdf840424dd72b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreePanelComponent.html","d48c9227a0f4c5d9d43e235cd3ade80a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeViewComponent.html","f5c6b31e08355bda2368d51d39cf5af3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","22eac9cb2adcf2ecd9e1507027f93683"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","98ec14977d8f67bff22b05b480083704"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","8ae4affde48f1139e3ba7c979642c0f9"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","4687b9b8029de8150325fb71d2ba3a20"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AfterDateDirective.html","7ed20119b4dbbf0164d7ce440c31ce04"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","460b65dcb82d17ed9deb126d5d0f8180"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","17401ecf535ebcf63252fc5ff96ec3b6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","0fa1c344d860081303af0f4f2e9e2924"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","4853e9cba200f65ab715ca696db62ebf"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","78633af1f454e56ca0a206aab938def4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","0cc4d4efb74bf65ab7b15bf397d25987"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","fe7cfc3faa3a6758f277b1f78e07eb78"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","e26881beca42dd63352a2a1a3a786aa7"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","0ee434cd2f6817660a5e0da1ef0be373"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","3392038ec6fa019e279294d10ca44c50"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","6b7d3065ed00b0105a931f93440a85ed"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","6edcf7897c9a13da8341bc0234e0babe"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","070357c77ab8db1ea526c3352d6d81c3"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","253bb3ece922e228f2f6235708e970bb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","5b308d4517faed8ad07f547a3a96169c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","53f470ca48f86d04da19dfbb164fde40"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","dedb291a0d325122c371c4f260e8a043"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","d6d672d2061f496fbec647766bb7943d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","17010fff29bb4b905ed94b4bd2d2902b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","06e7b9eadfa917b79e1ac7f58d30b5eb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","f266778138877d02c82cda95d3adf5be"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","50685a297b17a7ecb85961d12df9bd14"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","800cd0f588004349414194f19f0a7419"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","e0c97efbb80191cd20f7d3f84a5b0609"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/ResizeableDirective.html","44e3241a3de2c2e9a11e56bea3aeed65"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","cdb0ccaa1f62018be0b59f1f8e097f92"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","cf203b9cb9a21cd6ef2b41be8e592dac"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","de373d365097d67906429459907ddb5f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","c031eee899654aa11960b19c3619457a"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","16a3df66921c95e0daf8081f86443282"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","a93ba33632815a3db9e2bfee77fa95ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","2a278e909ecc244dc076e55d34248016"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","404047c4fa123bd6dc8d398ea82ec111"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","4cbde323a99b4c5b42862909fb769d67"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","6083cff6f8d250fa32810f3a54f7768e"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","04f0de65a7f4495f84583d69a9162f38"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","9fdb2442b08f77daa4b3e261188cb11f"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","df8df45dbc3a743e0970cf7b754e1dd3"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/NotifyService.html","8f621a29a39571a88dbb6ef3fc104042"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","456006fbbafb06201dd153e088cca817"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","ab084da3b0bfe370687c6340b1618d7e"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","4bfa7d6d3b91a635f1558aab77107ff7"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/TreeViewService.html","297fd9777e1ebafe6a8903d8652686ed"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","36e9e9b4182f15cc3aaa1891f10921c1"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","1ec23f3bcf71f5a9db09491c7268c547"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","10b67651d325464f92262d63d16e5aa9"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","fc78ab6311ae737b3766babbc94c4cf2"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","62c5cf8613a21089de828ef9392cb2ca"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","1cd88e73c02c753b65478362f14bc902"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","2a1da1b853edc6b154cd91a816e76067"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","f361fa6c596bfaafe50b7c2dd3bf2132"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","6057447c0b4451d7d222897dc67e3b73"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","45155e0d0ae13c0d72436c6699dc7e56"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/NotifyModel.html","65f895786669bc7927348510325ae867"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","2173c400d0145c11907126bedfd0f201"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","e30df02989047b49817081e8577736a5"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","1e0c66b50a992bdca3f177f644c6b3f4"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","ef6ad5f3dc50925cdef9b6bca0f94357"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TreeViewModel.html","ee16b1393651d7398242f7980482e74c"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","e4639264a805e9335eeda3f6f5b953c7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","2f3fb359655c432c09de9ea7b38048fd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","dd69a1e8265797b47f54439b298d36cd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","d4530f92a17f4a34bfad3945c0146557"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","ff861506ba973314340d01227bd43d0c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","3dbce9654735ee15fe05740f2a494667"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","45ef3265d7177b28cb9d45a0670e7a6d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","f77e0053245e448dc27b734b43cd8856"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","e73202ca1f0619ac7cd2a00ea330ad0b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","bd6ed52700ef454efb2062d13364940e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","24aba94f180701257d595fd481178399"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","87f8edefaf156bc285affce63cc885bc"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","49d07423be41ff4121fc13f20e4272aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","e9a024c316af6a3e46f1ac452ca33820"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","0e53a899abf1cf0e6e15749784052b53"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","68854a84cc0b235462de79f4bb3e7dd0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","256f0272572bb050d244f8de92b97961"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","8ec2bdbb45ec0af3d31e581539cef1c0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","98cd2cc1a29fbcb1e67fe56ef5a585b8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","d5b5228c08683273663ef427aab13bd1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule.html","78a53a466f9317d7480a7eb0d63ee8c5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule/dependencies.svg","1bcfa22d25f86d973e2dd92c4714000d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","e6ce7882c244958a87700bf9d62c14e7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","116941c58e937b3ad4cdb1a4c6e903c6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","bafac2833c3e720f173016cad5fd3a46"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","d71adf41236829bb80f472f8df70632d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","2ae312dfe4644d7acaa601d66c6a392e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","916fe3206ed79f281ff3be91a7cc908f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","a6a7174b10750373107fc95f748f22d2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","d3d602498ad05fab7b41b122a8abea61"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","9fd2da04a59e278685a6b8985df458dd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","9f80cd85a5bc9461e90c3c5d3dd75664"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","56c33fd3dc4eb45f7608df68a8a5992f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","3898f0868186e0aa0a95e3073b562ad2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","782d9d1433ed514b6ee8d76d3e0c8779"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","4ac021bbc1ad5ca3b31a400e0c71817f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","f5f394b03487598c198dd7d60aea5cb1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","5127f90edd58f0fcf220b63668d4456e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","a7a88ede76cffb9184bdb7f712d67704"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","93af8e782aab0d86871a6c5b9431a416"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","ec8a50b41e46ae1c2c6c4a6622a379c9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule.html","0d1055587753a9bf4867bb317d6b4b59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule/dependencies.svg","52120fea690a42f1eb5b0f2651d72e19"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","3b96c97023552a1cc00ee8886cbac9b0"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","494964b03d65f8e545e49614c11cf733"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","0f0794af57f5a9b50ca4da9d2654d8be"],["https://greengerong.github.io/rebirth-ng/inline.1d75b9d0c3dda7df3966.bundle.js","8437dcd49c5c8ab55c1251872160374b"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.befcccb15f371bdff17f.bundle.js","5541063fe7c84552ea8329d9ef7a5196"],["https://greengerong.github.io/rebirth-ng/polyfills.0220df4c92dd26007a99.bundle.js","2ebc9d910072217422dc90584763ac75"],["https://greengerong.github.io/rebirth-ng/scripts.43b57779b12561aa53ed.bundle.js","7687246569200af8b096b85bed0a35f6"],["https://greengerong.github.io/rebirth-ng/styles.13e5ab6060221446537c.bundle.css","13e5ab6060221446537c9a28d9832f7b"],["https://greengerong.github.io/rebirth-ng/vendor.b7016c3a76ede65cb016.bundle.js","9af15b8f7272284e0c22418b04a4a5a0"]];
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







