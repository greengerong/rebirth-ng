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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/changelog.html","85490267f54825a1779f6fc547acf338"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","ad54593751200746838ecfbe2e04105a"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","0f4cb10f00a4a9453fdfaab45fb76001"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","347457642e6528d4c752077ab1b24f86"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","cc5c71d7170d5c6d1d596bbb66303a83"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","173be37a326b56979529ede86be98695"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","431061f0afc24d4082c85c18eddb7cca"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","da7a19169bb84cc4b70d793aa5852300"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","7a96a820ea5add80603302df84b66854"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","f27c4ca570181e4d933acc7b34a490fb"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","99ea60f2c01dd4950d73490374f2ab9f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","a47ac995037c7272e4d824998c60d3c2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","173f392029a083ee486d76df2349a9ac"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","142cb80a7b9c53d0c6467ffbe7d26e53"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","2c0761aa51bf4a0ea1c28e403dd22a84"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxComponent.html","c8399c8883b0730fcad26cb0300a878c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","a705adb7eea230bd53c7cde6afb0ca38"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","7a38c5d8dac88ebe381057a95b9f80a7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","2133581064ddfa0a8973c3d04756fdb2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/EllipsisComponent.html","2a7349373d0668ba8294e7a5b77e2968"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","6df517065e3e45d05adb1554496f0c57"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","ef85a6b49951e3140ff7e6e48166e401"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","10a184986b434ad888a666e1078eb108"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","4afdb3f064cf573eb9b9fa32fa921200"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","281a42c9651463dbccd6400a836f1d4f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","4241d76b6165720849193868d95fc017"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","520faef1afe0b994f3f0b18ee651d9ea"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","940da37b00226bbc5252945f91bc7de7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","a599ef5829123b3d0cdcaac7fc82ad11"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","2f3f029ada828052920767ef1fb9f266"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","bdb7155b1e9f546f13f6628697d0df58"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","3622d5e0fa047b8f244a28dcc62780c4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NotifyComponent.html","943ab1301680ea3b61f4c019a4b43ef1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","2e0376a01db3fa12b7235a9c5075f09d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","14a202be19e6950d1f91f047cca90a2d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","2ab51ae41398a99dbc5cbc843402f1d9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","805e23256e99e9094d20631ee2652abd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","c8b2e0909a92fab5ca721394ef685861"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","31ab7c4f4931b3348c613fe16896b935"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","70e060b1510d9d6076711364600366a3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","8cfca8c3eb064a32d0b6dca658ed4f6e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","561b1b6265fad7a5b57eb249cd1642d5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","2060c4a1f6222c915f07d5688172e70f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PromptDialogComponent.html","7a59a12b131c5ac344e85720fd795925"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","226666b3aad769458072d4ebfea3ce96"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","34cb22d311910cd57e38e9f1b0a2e21e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","c7c45aba88fffc72bd16ca973132439a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","81b01f439fed55938f2e194a59c180e7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","110311dde0ec642be237edc281d2cc28"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","6a4265655d174d02c7ce7d4acb616335"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","3ec29dca1d36f007833efd5d320e327e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","3e32fd7907d3140efb4cbfe28c48c4d2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","6ea24771a1b939b5d8f33b2070109fcc"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeNodeComponent.html","1bd209533b92962e20b2f70ea9042354"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreePanelComponent.html","8364eff8001bda64458ee39c30c17daf"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TreeViewComponent.html","4669faefebec9c6791722c53591f2e1b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","74e69596890f42113fabc98f2fd986b8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","25e92184116ad1b5c9b41cf74c273cbb"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","fd0fa81799f3fbd173423ef070fdd30b"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","7c2a27a5ac51219c83ef905319a49d8f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AfterDateDirective.html","1738ea324a5be01573dd0ec1f99a2b47"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","a2ef0f43da5922a0b6b8e06a1c6fe8e9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","33e5d6c0cd95accf39e186392af80b9e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","3deb33465af0b21777e3109a8e687c7f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","84ecee5d3bf74de35b1365620c653e55"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","33479855d674a094991961f9fa209a63"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","94237a565c782fc915c12ed5457bbd15"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","92d44f4c9061e9f44f6daadc3b242297"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","504c27ebfbfaeaa9de303b7fbc7c13e3"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","ece5fcb2d6f999c78c8af3d0eaaa7dd4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","9a1d299897fe1a27a387dae3ee410fd3"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","f7d420d4d5ed767495e9e629b24dbe3d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","b9eb056934a80cdf567f5b5dc466c76a"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","2b2e91b073b4c5c68635697bb381adda"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","7988e064eb59581dddbf3f36420429f2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","cff4d1538206306cbd0bfd4c8ee5dc16"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","b9fce14125a6ab4ecb5c776e81a84523"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","baf75d42719c042f62d7a7a252aa9eb9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","5ec71d502cfe7bf5515162a29dd9218b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","4609238a85f7c50b99a206850b0993be"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","7e9b6dcaf7ef91fbe83e246a5225a145"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","219108069188671494b9a355c6fc2c64"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","c6ab5d000aefc4897d0e33f31e3585e0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","ad7b81b6d6878722e57518e4f3b465e9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","836aa645ef4f8a73b533c39938b62622"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RequiredWithTrimDirective.html","4ff845766c2a27d7f8d1321973dbc12b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/ResizeableDirective.html","357a83c51db9059d8d5ad9c2f8ac03ed"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","2f6c9dd117a145c48fbb11023ab13775"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","4389e5850f814a3a9ab8b4494ddc56d0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","59fe4a7e4c8f27b7d39fe0d916bb8d65"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","9034599c0100ea57dff2bb475b9672c2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","361d9fe28495f0c91e573eec418e595d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","d3b8008052ae57fb37953ae1b35f6430"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","cd97811ab82692c4875374a9c998ffe9"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","f1ecfc3cffc9c4e8cc0550e7c3f811a1"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","38a4e61dcddee88dc221c910e3119a43"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","81b2ea19fb627305a11e7e6cc28926aa"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","25e9326e8550f6fc855f51f7b9779e9c"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","ade5bc862967e20d7adfb98f7db7630a"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","2f951ad1d229275e5347e6e761c2c3a8"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/NotifyService.html","975afadc480aed2869623a86bcb997d5"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","ca601b70589110c0b4269225b43c7d3e"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","03027cf7b4aaa4af5bd3dffc7baac12a"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","a6cbce53a4c5edb054a8628f06bd39a1"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/TreeViewService.html","0943d0f998255d9cf40db13393c074c5"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","ebc816c3e086ee21eaa50287fe4c2812"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","ff9cc4f83e5c142bd2991124cc8d32b7"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","4111df2d506330999040f7ae50d772cd"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","75fb311fdeeaa2e12259d1ff7d40e619"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","e515c168ef3572b8c643d21176d44e59"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","6ae9a069cc9abc627c33b0ca4ab8a519"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","a9781f5c2ec4d0c68773209bf1eff727"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","891cafe965d3c924be5129197a0992cc"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","e5f69413925dbf579e56bf9abae6da84"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","e9ca1950368018ba2d95420c45244345"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/NotifyModel.html","84cf35e7c57f9634acefcbf64dcdded0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","08f4eca1eeef87f16a712117854abf47"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/PromptContent.html","7110717e53019fd2b67dbf03f531d97c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","6d1fca6b5abeefbb7c2d73e7e262a6db"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","da712d9752b487feeba29c9c948fe5b9"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","31cbacd350183fd308665c02478e6fc8"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TreeViewModel.html","a3da2c610f9f72ee44612eaff8ae6b1e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","57e7be7c3acac21e0a931622358a19ac"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/innersvg.js","b60c2f4efcea40c551befad92d45d8b1"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/tablesort.min.js","facdcfb19c475e6405c2bf9548d17665"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/tablesort.number.min.js","551ba535731ac21589ff245b71e4569a"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","51be5abea12518a26b3c64ef4ddb0534"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","f4ea1caab985aa5198709daa75338f12"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous/enumerations.html","379e2c34a3d2ff98636de0dd72c99f9d"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous/functions.html","e28df68d5ab9bf7bc435ece1fe264f80"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous/variables.html","39bc226b36730004e35ea2421d983ad1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","5c70a069471c74dfce325c6f6d7503d5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","67768c3d3a7b3e7dc2e441473cbf0a5c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","6e4e8bd74c58827ba8e5bb63eb8a986e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","d4835281ca9ea2010a899fa540b23740"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","dca41e8fda6ca4f3a33f8446f2c95229"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","c550feb4ade2aa3697e2a705e352e076"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","4cc9b50420cdc204dca789d020d62800"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","332b5bebf8f6978310038ee8ce2a37c6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","41e6e9bd785de3eb05659bd7bdb3448e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","998dada0d31990de1c2a52309ad1624a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","bc5cb5e4e852e99a79f0da0036516338"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","97c6b99e81ab90d41247e073d27052b8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","a881899015592c9f8be05b8b7fb2e1a5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","ec469c818a77bdf1be2815c3ecedf506"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","a5800b3877de765d3e73cb4763e57ff2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","37e8759cdea25f4adc7ee4037774e93a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","8c9890b6bcfb7477727a59d1148076bd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","5f7255ef41e76557772f273cab886191"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","5dd06f580a0fa08b373aaf600ad27e15"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","ab8b06af2f95e409423b19260df521ea"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","3ab93256cc3323860374504952c397ce"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","de8ec7923a32c5ff82743b33367ec165"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","fc5c2fe0a39a3cf4c98bb3021ed53a9f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/EllipsisModule.html","862ae0f5e234884d097b10b062d35a21"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/EllipsisModule/dependencies.svg","84890fe63347decfbbd5d988e3c8dbd1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","9913a5a8586c372fd0496e83d1d77943"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","02e1842a4e6c9958f5960b8702a7cfcd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","e069211672954e1b9f592b36c95620cf"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","d52296b98f3b1122e9e6f03b66fcb5e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","1de7717f1f1f14143b12996c2f42c205"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","99978e1bbb9f1f5e8b1d76fa771f2c9b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","a2b8472a83fd23d2e1ab6314735bcb74"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","d7faeb6367422d4b9e3bf03b3d77126d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","cf9d2e70d71b70b512c065dc536f808b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","4593847c6fc0e66a02d3f1f86dfbb434"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule.html","c40b1289eb54599d7c7c183afd944b44"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule/dependencies.svg","3a38d829aeab127d31a80d799d56403a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","c986dd7b339335b67cd24619599aa99c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","0fcdbb3404d8b18e3d007f3ca269f409"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","0236c9e7288e4e5894ff0f0a49ce805f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","0e39247e174b90bc37b4ff698b31ce69"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","c56070f115beec3ed0e9d1ebb9f2e428"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","ff70d20e85dcdbe6aedbf74166f3f6f3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","449f1e1a7f58a8c9fda1023a03bb1cc6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","e63b2d276f423049286993f9e51ec69f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","0838ec606ae31bf741e2bd1105910ea8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","ae63493828b26f8d6c00b9447287fc3d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","f4fac8bce3ee832ba8acb395e9aef9e6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","aec94f2901bc3b02654fdc3265b26be0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","dc58f2a5d216dc681503045a802ef4cc"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","234737a9e6239c57d4083f2069eb213a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","3ee3a288f99e62dda779d025addf5a96"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","d4a0a0fc42a07e8ee9dbb6eeb7761312"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","ac44194668f7cd7b63b1343a44007da1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","3f08ced89c37df1d7648c67225f4831b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","bb637721d1eaeb8459951ffec4d6eeeb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","5f00cdc4b4d3b5db08148e48eb18b122"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","a599781ddbe5b2e6fe3baac676637e4d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","e9b3b30dd64465384461e26b29ceae25"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","2676dba13f10bde566ac4d325751f9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","e60d6198c5c8389d530212a8740246b8"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","0aa5a126a2a2edcb0eae2b77f2b7195f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","65ee6eb4f9bfdb3c091634de88415ec0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","c6a9d254882377f6acacaf65ccd5c43c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d9f76f8c5b4abd35955c65f89a52914b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","fe7ac69f4ce626e26be5dc80bbfefa1b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","c6f3cede596b81976683d2d21c0b7327"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","769437a984a0ef3b9e356a6823d41504"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1035eba73d540d23ebf92ad78934b097"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule.html","8e9e99f8f485fed6095a493fb8742061"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TreeViewModule/dependencies.svg","2c92831ba80706cf94051319d636eebb"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","30c60c26fc6f6659a21091e94e7f9417"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/DatePipe.html","8b8143cacb13be8234f59508f7dae966"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","82f4004e32ea6084ede3e7730c202e14"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","3002aa68dab061392240603b0202e091"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","8d79f66d3c4bc776d2ea2610cabe39c8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/tablesort.css","abb792e5e782df7b1f0807c344d88ccc"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","702b6234dcebdbb36a22e36b52a8bfff"],["https://greengerong.github.io/rebirth-ng/inline.a4511bd0a21a30e6d1cc.bundle.js","f4f3c74289f02d4ae35800accd72843b"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.99eebcc62bdebf9d9662.bundle.js","1613a039580f7f9837dbd04a0461aadc"],["https://greengerong.github.io/rebirth-ng/polyfills.c54f8a86e66d952dad7b.bundle.js","e61ec02322312b9e39b02f5595106685"],["https://greengerong.github.io/rebirth-ng/scripts.0f58c51067b263848a95.bundle.js","a6193c4aa024f645f06ea394b6b06a88"],["https://greengerong.github.io/rebirth-ng/styles.13e5ab6060221446537c.bundle.css","13e5ab6060221446537c9a28d9832f7b"]];
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







