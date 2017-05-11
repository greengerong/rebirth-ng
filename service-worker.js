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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","42b166957e673200f8ae834cac5f9e7a"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","78dd2be38ff52d982d4c27be411989ad"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","80ba26e076d28182aa84a87810cab95c"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthValidators.html","fb95bcd85ea99e8cf145681666b8b130"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","01b2805ca5143ed7a89728cb3af5cbde"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","6bb29e56731d16be33611f4ca42ad09c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","d2dd0f3a627eb7bc52f41bd26db32c68"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","a62f23b37ab7dd2facf9b10e1e50a921"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","8388d5b35992a261d2b798f782db57bd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","e5671087795d9076dcaee6ebfdadeac0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","a15f0707720206d3c44ac2deba22f55d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","db5f349ea49e9647455a0b2c1a22cad3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","1ca7c61136b3cf71db47107f32a58603"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","7e5b31a862a436c0b6b42ad000359a40"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","5f1df89f415672cbed0ec2cb24e966b8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","d36c4f3377de82effcad69796a5f3c2f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","88a7afd6591a40066ad376db1c5dfb68"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","c286d2ef5f861d661c1d19d4aa7e7c1a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","42956c5c95e57abd5197c0ed98bfa4df"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","68f7a752bb1e05f6c3d7508ba8b039e3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","b8dd48221c99d4ea48be4dcaec8cc8f4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","18a97530298293846cf6172791db7571"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","48b68f8f10e53b5211a0a5705b2cfde3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","6da5b4831c8fb6754ef86d90b276cbe0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","f11552e8319447e67000968e78e183e2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","fc823ab9c1e075ffe564eb9423ea6849"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","9c6da3e4312d309d0780848291add18d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","478664034ca815567e60994040a25728"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","5916e109f704c5eda54f54554e6c8310"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","6ece666eaa371c9db5aee6902bd64341"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","b5ec4b5347a95be61cf1bb96e7b5226d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","9ed5279959b94c6c23b5743ecb653e77"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","89a3f99c93aa1bdc82a7c9c6d31648ee"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","139acbce59bae9ef242e6ef6d69f87ee"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","cc30bd320d7ef8d928b95f7797c10c45"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","d45c5e8f407f55f5ce7f384f4eff8a70"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","8e9ff35a4ca49215a2c7c3a60b40ed18"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","76d8a3e6bb5e1ddce1295d9f678d9ebd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","fda15ab0a58d8207e470cf59e9666302"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","0a47d1f4909220be3a5fed9f32f0bdc2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","b89333c97110d680e6a7fc07d499874e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","e164f8d9ab23f8eb019b5dc20c03ba6d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","b615453c9f93e9fddb6e0d9b34d7b5d2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","4b3e7d02020327c2de87584d158c2a9a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","cd9273ee302740a71da9c1dabb49bf52"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","825af9b3141ea987a84d37c662738b28"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","dadb3342c851df3320d5a3a5989988b0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","b9093dda4c0ebb3fdd6917c6191e1f2c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","a1e102e2c4d45975827864ace5d787b0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","1ed3c5880ab3055682ada32ae195c443"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","880d60389a520b766e35c0eb0c4787b2"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","5593a6a67554f2a0f2c43cfc6950d1b1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","a0c0efad09e3894349cb6377e2bd67ea"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","04776c7e34edc07293791d636063079d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","3b0593df11f4e0e9aad3c49ff49d9d4c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","ec90bc6bc737faf52dc517a5bb2e10b9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","4fc4758729dec6b092c57d9fa5369ee3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","59c9bed897a1a6c89308f5e3272d0cd5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","0763721e23e0edc05709682a61561a90"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","1c51540c21f0eb0e365ef81adbb2392b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","f94b9024a3e1dfb139c6874ab9a72e66"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","d12a019d89f0c819eed0b93386f17bef"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","85f3817dbad3c79c3a379207bb970726"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","02dcbe71454ef1a9c0aeab506be9e4e3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","9d237bfb17a844caa2d819d63a2556b8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","73abdbdb9c5d6ef157260db030bea421"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","d6818b91879711964ff8db89b7740e87"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","846396e3ef498a42d347dc56fa5d705f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","d4f7ed3cb43b1922fcc401696227773f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","040ca1fab59debe1673251760a22a1b5"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","4ba57e6e768fc5eb7f7836d3af6c7f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","a06380e27514378d55255449eb88f978"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","28e347bf630011b3ce03f461a59d2622"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","74867b5f2ee1b71339ae8f75f2510eba"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","03745fb7b02fe58eb2388c8be43615e9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","b362b72e8ff0d2b2f2d5fa27536e8b55"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","f5927e3e7574ae5a9f8d3d330cacda2f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","a5b3c7ce7ea14040ee09e77e569ee2b4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","bdfeb99b3991151356081a59895847f0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","8edef5472ab44b0704b7e0e56d6dfc3f"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","84a35e1ea0c15915ac85fe7d3f1431a6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","3b72f2b0a46a4d9981b9a3e8ae69b26b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","777dc14d8aaa3e1bfde579b8cacb29aa"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","eb9c7a3c51c4bb5a66ae6962d21101fb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","8cb747ebad737bff88e8da52a73f0c34"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","b4d939360b9a424fe8af1d4ce2e9e740"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","9a62f79d092ba28bb8f375a96e568da4"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","18bd6024d8d0a97c9703b7e82de90f9d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","cd69d92d31fd1752f2246f6c719821a7"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","961193db205beeebd32691fc8b7cba27"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","5ec601a1ca65491addac7bf963cf993e"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","bb57b2aa4a8af53fd95d6d8f9209e6e8"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","fb38f85a184efc7352b4f7cfa864d436"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","0510965fb94313742024b889e4943e2b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","bb3342d438f6c5c51e5ce667d30b1d49"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","b63937e086d75d90998cb9593c559af3"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","96a10e5822dcaaa44382f3e4b589a5d5"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","8019d0a83e1b4e3928e9128968213784"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","06526f01861915783e02d9687cab9976"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","b37d8dc7630bcc1bb2a36f2ec9af4933"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","c579565e2681876c8df5a3781fa27091"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","e10c50fe5f4f5a51677ba41143f12407"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","0bfad00892686c2f2a9e02bede608486"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","2d3f6b48fabff0466122839bf60419ae"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","6899091d62392b96429d0fc4ddbf259f"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","c776c545e3bdde12bd93a8b9ea6a2419"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ScriptService.html","5181243ddf555c584b763f0f71077b71"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","0b19d230f2c6f035e5016ab65349d70d"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","a3ae0a11b8cb9060f6547564f62ecc66"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","58163dacb18beed74a198ce083774f80"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","2cedc1bf13565e888fdbe54a8d409076"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","c857269ccc14d7f13e2110584c754e2b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","876a16672ed4bdc32d6d90b0199fea91"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","9bc118abccaf64ac1a455105bc324878"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","8acfe840c4f4b27cbba2e88ff2b456dd"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","eaad950da0d9bf42e8738679bf3c2c64"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","bc5ac9efdceee9e2289ef4231c0a67a3"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","599e5ff21f76baf9d6d00313bc7b8359"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","0b17f314717ea328e7e2312c31a9ffe7"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","68a7ff1696e705a3ddda3cb59f561589"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","2c196a6fc4ae5042c019c353c5583bef"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","412daf6786a73d82c621b73db85f0215"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","38cdc3f4fb443e3e8e685e132d59c9e6"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","77b552ecc4f17b153c5a0a07895cdef3"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","7e7e8185c5dfd64f8bc153827b4872f1"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","9b42609827107f9e0e6ec7dff4a29097"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/TimePickerModel.html","c5f5791318c6948ee4e598cca44f110e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","026bc9e7af7b15e2b1ef10938842bb25"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","56cfe506036303a67ab5fb68862ff41f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","69e1a935a9599e4714adb3defa17539b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","9fc2b574b0138442d7cccdcef64260d4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","1984ebb65d7bed2dedfa689bb9fd10dc"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","043087fc470618e3a72e3cd92a8ccdd7"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","eeae84d0feb68d195890b4b586e2818d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","0878178d5cfae1f5e007dccd2d53df74"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","a3fb7b918b77a1bbfcec40bd668439ec"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","9f381eec8f8a53f2a01b8fd14dc93c92"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","b8f003227930db87d80c9a80b16ecee6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","8f043c73353f9d5a6f9d9f99fc602cdc"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","6da14813a75af4d4a0f8e923268de437"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","38b808ba4360fa9506fe31acda9b6d1a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","8b52d4472ea60e98f36089bcb99f9145"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","992820906b68c957258ace338d1b8593"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","d5de47a031f4dead164be8cbdf22f0a0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","f152a9c0a8e14b5de100ae33dbd35b31"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","6fc92b2875ed6772cdaf4a47bb01ca60"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","7e8a7032f5e9499efb4519855432baab"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","6dbe2a1618f9980eb0e6c55a55e6c55e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","d7191b9dbba1483ce418675470b0fce6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","e6ab4e5cd58c9f3fe883c855cda9b3d3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","ae04fffc61caa893693d5a9360d88af1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","f40ea2746af1072d778b86a32d78f8b9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","b6c03b404088c2ef6226072fe67b1a7b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","805a15bcbd19cc805241da0d1da9feaa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","273b9a0942d6eaa76d15c72b6dd99c4b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","20e4bb0d3e1e97c1ca29c46b2b9bd2c3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","c4286f6d55d5864d9228bbefbef97ae5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","7c95afbd6b49d5353f43e030b3c14e01"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","af55ca1683ff7958e214b4db1fd8eff2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","39d0836618a9f65d29096a0a51337df5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","6038cae5a1a6c506282a362014f2337f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","296e8f6eab84620a07f81a58c32d9ee1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","cb3fb70058848a830d980031b6a62484"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","9a80bf4dd5dd9068c235fca459e3b27e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","8350306ebe768995d2b828f771f1514f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","0e74decfb4789d42c9ae31ff066fe2a5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","3d2ecf4e771ab66fd583cb0520cf12d0"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","5f7c7afdf99851ca4f6b8ea3a5c18c24"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","97601bd429e7893b705f12f7787ae322"],["https://greengerong.github.io/rebirth-ng/inline.8733ead2804f100ae625.bundle.js","db809b10226beb1ec6ec3d458d3cd870"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.a8eda0a08b09bb252410.bundle.js","61c68dfb09d3f638e816f7895863eef1"],["https://greengerong.github.io/rebirth-ng/polyfills.a7a04a42b38e0b032cee.bundle.js","a3f18ef1cc80c67429e0249125ac96b4"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.95a41133053a443685ec.bundle.css","95a41133053a443685ec97e2ac4ed4a5"],["https://greengerong.github.io/rebirth-ng/vendor.1942fb880b52090e2d2c.bundle.js","66508e98090ac0642d8d5a3a71b44fd5"]];
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







