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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","6f01f36406e9fba9f5c679dd91f22c85"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","807cb21648b78633d4618d74ec994d22"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","dabf04018c79eadf8b92f21d7b316289"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","3e602ed2d99c19887c659249a2e91434"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","2e1daac679dfde48c2ce356d103a59dd"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","8c52bd2f552fc60b42bb959fd08cc87a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","a2e1103cbf097d6345066f5a90dc7694"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","49463bbbcfe9876d21f60b2997273193"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","edf397501f55ce5d051c15783cdf625e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","bbc0b1c92172542db4eb41f5c9aea516"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","436784030be212434aa6771e831ba367"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","81c971915d0124f3110c29d1c1182dac"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","86285e5d451fac5dea13de0e1de509e8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","173d85bb3ef1a80cf30501cb5c806fd7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxComponent.html","212f9e91ed275a366eb84190ba5e8dd2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","07b330dc55e45318177ca7f95e4e7f64"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","d82276e191275682a37ad631c98d7c4a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","64dd7de96d13979eccdc67f4d0724aad"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","b6a9930b184f61826fc1ee7105055b75"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","15f2d4ecb2b11b519d991dc4301c2458"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","e4b01b4b8890f4a26b2a5b32aa3c2ffa"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","15c4020d86def8956100a86d0fbbe2b1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","ccc1fc16fc4a55ad85fcb40ec2b571da"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","a7f3c0ac6e89a84bb365fd8a47b64b55"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","e0aec768120bef0700e97749ca487ddf"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","9e85dcb5e8209954de49ff74ab167a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","5c1882e31a0d057234f1450d120bacf7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","45683c39e21a1f2bf43c4dc0745e5f56"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","1b847c3fca8e18aec2a2c6574b793ab3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","396bb59e5c6379c043b5562deaec798f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","02be5bd40746aa5bb2ce550639858e2a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","6f4d0ac05f396a7deb81c1857000bb2d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","326722e739111a8681c5bb84b00b9f73"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","57b30ffd0eba26a10ab90f109d13f8cc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","c184fa2c05b7ee110e92756e0ef0dc38"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","e8a8591edb49cda7ba921ecb17f43056"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","eb9571c792ed4cf51857bfdf1f9e86b0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","9ed96525304477b3ff7b24e034c45f1a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","45267cc88ef5d4ada2333952e70a5ad4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","ac5383091def1fd884d01747f193c4bc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","8ad9535e693bc9ee91d42188a173bb16"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","2b074fc59898a1256bdbc445b72e7cae"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","607439e0afc063bfd2148f1d5a1680d1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","696f54eaa1b0a246faa3102a4cae7ddf"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","dda49a510ca56bdfc0142b106046d0a0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","d4706db2c563e7d3739efb906e787c79"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NotifyComponent.html","fd8a292c5778b373203ad3c212e47121"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","d73866893e78ceba138b41b2af5fbe46"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","17536d5106bb1fa072bbe96de7d77ca0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","318767b94333f8f0c8df367fd1c5d2f1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","19c50a200de5e5c60750a7548b3a11f8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","3cbc7ac6ca407b7e0d17d18e54a27130"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","58f1bad62ddfb344e799ab7e3e30f254"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","59dfafc7a5d6431640a3c2637350ffb5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","f5c2fe86210d44160a283d7b30dc113f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","a4bfb35ee2d286576f238afaeacef2bc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","3e8db8bd2f3b548ac4a5fb49adef30ce"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","bca496b34163795a320f4f557c8184d4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","b054c3b3f6cc14d3c615015aa212c9e2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","4381482372888b476e2cf1879f3b7179"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","328bab2022f24ee594f5e22d21635dcf"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","cbd0718995ad9c3f39e0c3adabad34a2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","a8f8c51ec2b896f33612ea73a63c37ff"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","19d854e501e9d7a4022eca4ba321bb5f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","85a40cf54c27cd644ca2f39523361ed0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","411b862315b6b667ec3fd28668a9a6cd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeNodeComponent.html","fd8ea9b1ab01287f00409e614fc11dcd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreePanelComponent.html","00f7f71f8538b5ba2638dca15bab65bf"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeViewComponent.html","68659ee103ad5e8f571f7ae1740bdb96"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","5ed52cefb50620e7bab3106a27dd3290"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","375b7ac472cc0ec3f2691f445f7750da"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","956436d8259b3eae4115da8e224c421a"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","281c59ea240be7942b1ae866e58f69ed"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AfterDateDirective.html","326fb7c3db95b72ca4dabff8a4c79597"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","43710ff94a259e04934929335f893eee"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","026d0b92c8516987710dfb3a99dc1d9d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","ed7d26e7180e6c2fcc78c460cfac8f89"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","a657480d0dc874161784d9af4b72b62d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","393ef3a6ecef9593d89d3f24ba6d3bd3"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","3e504de0afc7698d26028654d3d5aeda"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","1d304bc44293e4203eae8815e7bcc2e4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","301424f37cff99569ab4eeaeaf91e1d9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","45cf279fd57c8999c3dad804f9c7605b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","fb40589b2c257e2b10b1e349e2f11b5e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","9394bcb320084dc7f20e8f6fe838fb58"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","10098426c65db59886e8c3c4ccc656c9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","105fbaf637a5797c7dbf3584d8ff0240"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","7248eceefe0aee977d6aa7d30012c315"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","868b9b1ae2ec437faf6273002b39826b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","f64cc3364cf0a655ff3c8763e1bf0d70"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","5b8a0ef907859587e73804f5c875f8d1"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","5868c27e9fa064ac6e166a99e75d754a"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","ead47c58b9fd3fff67e8707e5266e2ae"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","97efc9228c1a87ebe4a511c7a44faff0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","f8da097ae0596dcafc804e1208386ffa"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","2fa54a752450a008289e6e0292d0493c"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","5bda914b10174bd86e95fc67d5ec5d6e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","22ea0575c31d362e190b06bd7a87940f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/ResizeableDirective.html","efad96cb4b415a84ee4a154441914585"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","a147a7a93676b36047fd777d3185279b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","31376143daab17dd046c30111a589014"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","3b5bb16213083f35eb6d5cb4948f0798"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","2f15832b13b789fdcc8e08cd9e3b0d8e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","f3717b74785275081a1fafd9997b6c8b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","63f815cecb93db60c38619ad05549f89"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","ee12afb02a81cfe311aba457d5262b22"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","404047c4fa123bd6dc8d398ea82ec111"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","b4fd49abdab5657e195086efa3bc0b28"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","a75ad8d244ce45b9384f5713655d5d68"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","fddccacb8da6a5dab04a3d571c9c4d35"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","8d96834477807b1f620127b0c0b30777"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","84f5274231d21d283d3b2da349047dc3"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/NotifyService.html","20159271ff1491ffd354173ae4c1c86d"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","3f4375f90f134108610969b4be563613"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","df720b1b484f11452af7f9c675e6611b"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","795df394ab9d157cf9eb47ca651717f4"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/TreeViewService.html","1a762536159913dedb3d212477dcdd80"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","f807357648d0a117e057da512773a4af"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","8b201a1760b324726c093b04ec759ed0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","1eadb09ab3466ecba3233fc59e705743"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","a4c470babebab98197455232a60e3f25"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","b39920b97ccfdd8a41b5070e245a71a6"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","2e1a9ca00fc03eb1b7be5cde291a7b48"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","6aec205b1c46896011853a191e7ab1f7"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","d63beef4d4d05ac11527110c80d3a8e3"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","684bfe011ba8c5ecea8d17e9c42fcdfb"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","9c7c7a313afa12fe2ddd1947298634c0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","fb582fabdba5f8f27ebb58f174550857"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","09418136791588c2fad99b12ed80aaf6"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/NotifyModel.html","1d349d6e7a026cb6c90d9421fd006db9"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","6fd7654449e24a070f2b048c7f6e66b8"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","16e388d9ce214612b66b1e8e6b0313e5"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","24fef5b4c3188c7894397f056370e32c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","6b28ea12cd527673f421f278ea474c41"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","09059037c7efc8b85d4ab5496e1559eb"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","4a4859e9082ef312e992ca8c684368ab"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","54365dec1c013b8be035d7e1ea09e618"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TreeViewModel.html","2f7edb0250322373f497921a8ce0beb0"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","8327871f2878f3036d1eb8992e3749d0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","5cb491a3f3e8afa2c5c77552ee48c088"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","d98dff892190b8b59e519871553d484c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","56fa30cc8942d2beb09632bc237fb542"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","5968c95b5ba2f220852d70b3b0c89b4a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","a75d10529dc8bf7062471b49099e5c2b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","0080eb7f9bd2158be40ae9edcd146fa5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","ab8a2fe4f8a4c6e6bace46768b2af2e7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","1626f73f0dcdbc1d047cc8058fc31e09"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","c238401d500e2d5c56fab250c98ca531"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","24aba94f180701257d595fd481178399"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","e9104bf28cff95bbc221ea3eba6c5acb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","08208484cc297c37abd0545e02688dc8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","bd1d7d061b5634cdf61029a08b084c2a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","031c2d9833578c7916ab49eade69c1e4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","0f3b03fda6e35c296177222cfc4cd975"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","d5af0527b419bd2da3bf317451ff60b0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","0fb5ae089efe0d175469fe1b17a70b6c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","4646ec5dfcfd1116c45387a0a0b87752"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","430a0a649ec813774e5b257ab5304d08"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule.html","fda8fcc75cc6c84ffbbd50772e24cbeb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule/dependencies.svg","1bcfa22d25f86d973e2dd92c4714000d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","c4455e2738353dc0b799add9307f7437"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","392e16dc764b032dc8233c3e2c0fbca1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","48b84812cfdfb88b0fb1ee230b69c51a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","7cfba5ab9886e9c0164b7e47a95305f2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","386d7e57f4bce998c879834897a5a03c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","76adfe0e5a125816b96582258b5847d7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","6a969958018a1bee2ce0dc92f149b685"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","9bc436bda09f38624930a7f043dd915c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","cd76600b30f2d1368a432c762b049fdd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","9f80cd85a5bc9461e90c3c5d3dd75664"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","2b690b185b3d0c1c1294f7cdce86f4e9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","837cc76cd51c3cdb4edcdc6a7a359eca"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","998a56f979d9a0da143122b6b6134ce6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","4ac021bbc1ad5ca3b31a400e0c71817f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","8aee5c12fb811843f9bd18ea6782aecb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","a5176fb6261a5013e3a14bb4cc6bf19f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","3915cf2e8543dd8cabe99df3fbf69c81"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","61c8d18eb9d8269bdf8e369b9575b7ce"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","d91a7e86095a0b5cecf4ac5f5e5daeeb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule.html","9641413e416fe998119cae7279f4cc58"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule/dependencies.svg","52120fea690a42f1eb5b0f2651d72e19"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","7424ac9acf19878b3a598e51cacc108e"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","139806f84ba679f23b3b2d945a92f8c8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","ddab5d37c7c844d2b720dd1f3a9e6e41"],["https://greengerong.github.io/rebirth-ng/inline.27d9df6cacfb81bf9c3b.bundle.js","0fef8fbba88f9cc9f55385287213bb77"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.7a2c55fdf268912d5f31.bundle.js","b4f678515787942bd6649cdfc9cba631"],["https://greengerong.github.io/rebirth-ng/polyfills.098e9c6d0cd88df5c10f.bundle.js","8f4c26f9ae084388d3d5528749194f9a"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.13e5ab6060221446537c.bundle.css","13e5ab6060221446537c9a28d9832f7b"],["https://greengerong.github.io/rebirth-ng/vendor.3ed454494ab214152bc0.bundle.js","308a395b803c1dac78b1e779147db89a"]];
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







