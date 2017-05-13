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

var precacheConfig = [["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["https://greengerong.github.io/rebirth-ng/assets/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://greengerong.github.io/rebirth-ng/assets/images/loading.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/assets/images/rebirth-home.jpg","3519a86cd4423b9ee264da3c792aa0f1"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.cosmo.css","724b86f961369e1bfee2bf769d2d5144"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.dark.css","a9f00d2f6b57da2d53532aaad3fd568e"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.default.css","92ca9a00bc70c7517adddc9b20ba879d"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.journal.css","6d189f4a9b61ebb97c71ae2b6141e50f"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.material-design.css","153d9e11f801f4d324211293a842613a"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.paper.css","2a13a83effc69ce2905c44ff66eb1913"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.readable.css","687655112812ef1c4193659ed1b33dbb"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.sandstone.css","d72e60776be00dba0383e31a52981217"],["https://greengerong.github.io/rebirth-ng/assets/themes/bootstrap.united.css","c0e4615c0c400f24d25165ad9476bcdb"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/DefaultDateConverter.html","bb4f507d3258aa507bef9ab517337673"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/PanelGroup.html","d92424224eee0b49d0895b3e61df792a"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/RebirthRouterReuseStrategy.html","675f179eed3ee0c5aeb9832dbe352b25"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TimePickerModel.html","1bb5a5597b440c6293274d72801bc780"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/Tooltip.html","aee2da7bd89bb4c17b9c65049105031d"],["https://greengerong.github.io/rebirth-ng/compodocs/classes/TooltipPopup.html","d7911cdc66af106ef3d3be0aed11ee22"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AccordionComponent.html","ffa19250ec8098c482ed69675cf1bcf6"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ActionButtonComponent.html","24bd9d40337e28d48912b3babedc5f8c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertBoxComponent.html","25675834377e0c986afbcfa1b5a66ab4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AlertDialogComponent.html","c102ac6ba4c90ee283803f1862f7b1c5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/AutoCompletePopupComponent.html","f2c18dda26f0c619434e81d134319825"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BadgeComponent.html","5ee31b376b675a0779eeb9d1e21145db"],["https://greengerong.github.io/rebirth-ng/compodocs/components/BreadcrumbsComponent.html","7fdbe573ff14a15acc7125caa3a0242c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CarouselComponent.html","7ca70a0501e3569ebe18e527ea8c20d0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxComponent.html","d4926b0d48d5d8b79851ec1aed1db986"],["https://greengerong.github.io/rebirth-ng/compodocs/components/CheckboxGroupComponent.html","f0d05c844bf484514a455b3f1303cea9"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ConfirmDialogComponent.html","d56cdaa41595949a9aa46166b4ba74c3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableBodyComponent.html","946e83445683d8075b4303147e45eaea"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellComponent.html","8b3eb8b9bbc40027234b42c2259559f4"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellEditTmplComponent.html","c9bc7fec226cf950ef1c8d45540355f7"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellFilterTmplComponent.html","2c0b387c4a95ea335c20171e13bc917c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellTmplComponent.html","93b8c36246c3f3a5fd08a9e33345f41f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableCellViewTmplComponent.html","449e42a0f00f716f8167a0ec9d2e1c12"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableColumnTmplComponent.html","501d73170db6a6cdc6c2ee9a731ba728"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableComponent.html","320076f6ac3860e2c45f13c764b92a82"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootComponent.html","dbce2465b05d16fc659c4f5092562fe1"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableFootTmplComponent.html","d96c199bdec071cb3ed1a5e61c56b56b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadComponent.html","1f01f4c258bf038bbe621d1f98a1fa00"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableHeadTmplComponent.html","fc1bfd7fbc7776a1fbff0b451730f97e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerComponent.html","b5333eddd29571f629a12fc1b60a44dd"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTablePagerTmplComponent.html","a750cd64a6908521cf23230795dc024a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableRowComponent.html","de9a11701f4f6dfa655047f886b8a57e"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DataTableTmplsComponent.html","02b4a7ff27fcabed9ed3667b18b0ff9b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/DatePickerPopupComponent.html","111d17c441b1db3e860dc160fe5b4c33"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadComponent.html","78967af42d97d0e376fc8ba4e7ebd46d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FileUploadPreviewComponent.html","1d1d0403e3610babd4500165d0929612"],["https://greengerong.github.io/rebirth-ng/compodocs/components/FlowStepComponent.html","8fbc6a3634d2f1a9f92f0b8ec67a9646"],["https://greengerong.github.io/rebirth-ng/compodocs/components/HightlightComponent.html","b0cd43b3d7dcf57f395e920637c3840a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/InfiniteScrollComponent.html","eb759e5e03ad483d7be350c63541d4ae"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MenuBarComponent.html","b4bf4ed0f833ff65a66eea895e24f4a3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalBackdropComponent.html","c35ba8cfd28d4ff0523b9afec30757ff"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalComponent.html","2b8f9d6ee7129e963832b15d0881588d"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalContentComponent.html","5ae879d902a050c2837edf0490771077"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ModalWindowComponent.html","360b3dec7e41a4d8fe3ab64a08de56d3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/MutipleAutoCompleteComponent.html","d44ce82452290ae57989413217473c8a"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NavItemComponent.html","b07a7f5b35b50f0159ba2d4433f9dcc3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/NotifyComponent.html","025ded912932dd58501eefd5c8f89718"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayComponent.html","f68758248b66aebbe331d0b2d9e6ea14"],["https://greengerong.github.io/rebirth-ng/compodocs/components/OverlayContentComponent.html","ebd4ea854f9d24d09efba6cbd3bc8692"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PagerComponent.html","72dc04a08d1e3aa582ee4b8a7964bb7f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PaginationComponent.html","39fa0f9499392bc032ea090f22bcf5be"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelBodyComponent.html","4b53f19bee1b0ba8d2787642075d5d7b"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelComponent.html","07e98d0162bda8b7a07fd53b49fcd2f8"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelFooterComponent.html","ba1752783890482d916a81a370b3db2f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PanelHeaderComponent.html","0caabf937db7ce1672f5f3281b6ac785"],["https://greengerong.github.io/rebirth-ng/compodocs/components/PopoverPopupComponent.html","bff7acb4769ac316cb50bb1c0afce530"],["https://greengerong.github.io/rebirth-ng/compodocs/components/ProgressBarComponent.html","c0ac512fbde448f595fa8a141aead8cf"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RadioGroupComponent.html","bb3660e91ad065b290259e987a01c5a0"],["https://greengerong.github.io/rebirth-ng/compodocs/components/RatingComponent.html","224f5976728b3c921d69f38568c5e239"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SelectButtonComponent.html","4f27edf2e8e4cb383931727f63943581"],["https://greengerong.github.io/rebirth-ng/compodocs/components/SwitchComponent.html","8694fc2bb3476e9b57b2f750dbde93ba"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabComponent.html","b643bc08c386448cbcafa5bceb21a6ce"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TabsComponent.html","88a2a5df0d8fec4d30536240f65f423c"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TemplateLoaderComponent.html","da459807c1d5904c26be53e3f1146dc3"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TimePickerComponent.html","775b8e74cdbb1c988c7d62307a319288"],["https://greengerong.github.io/rebirth-ng/compodocs/components/TooltipPopupComponent.html","d8ecbd4a99f07677161f0c8c6df9cd4f"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadFileTmplComponent.html","37544134ced0c9caf50d2ccaaa184e28"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadPreviewTmplComponent.html","79c28f0511b7441dfe4b0908bf4233b5"],["https://greengerong.github.io/rebirth-ng/compodocs/components/UploadToolbarTmplComponent.html","cc3196ce766c731fd7c56510f2cf9257"],["https://greengerong.github.io/rebirth-ng/compodocs/coverage.html","59ed94aac707ddcc4334a541b967aeba"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AfterDateDirective.html","0e4fc08e040ae5dab1b5ca17dd3dc532"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoCompleteDirective.html","758538f250938a5462fd2f8cf1947108"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/AutoFocusDirective.html","1dd0c86b8073e4c4e095eb461edb87a1"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/Base64Directive.html","a1d11146b1666887706406ff92370404"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/BeforeDateDirective.html","abe1e7156eb2e2a1e7223c4fb146b2ce"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateDirective.html","3d97ae4df51000cfdc6f5ac7b796ecfd"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DateISODirective.html","ed63834216c8a48cfcb959eea99e8af2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DatePickerDirective.html","caaa38033a6aa89c4ae9c30dcfb87fd0"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DigitsDirective.html","69fcb932e2a427dbd74bbd7e4c812d5d"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableDirective.html","3ad7e89194098ff148b992fd86033081"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DraggableHandleDirective.html","9825311d3be9ac0eff9dd10cee4f573b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DropdownDirective.html","f9dde42b5d37fabb69277865bdaf0ece"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/DroppableDirective.html","33275998d455822f073f2e4b64ecfefc"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EmailDirective.html","cb98454b4ed64f9f15348c6cad924beb"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualDirective.html","685d98e90acd4366854e25b51e4e6abc"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/EqualToDirective.html","b7d88190849b18ea178dc570b2aada93"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/IncludesDirective.html","ab22c30a509cda73e7e3056877e1fe94"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/JsonDirective.html","1f537d2b2a61006d2219c07777c579d6"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MaxDirective.html","39488d682d5195d90391f61f1aa822e2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/MinDirective.html","3c4fe89f384604a818036c425ee642fa"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/NumberDirective.html","6a63cd2ebf8a5928e9a5e952fbafd2e2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PhoneDirective.html","4ae76d7425fa6f6f98b3e022174b2edc"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/PopoverDirective.html","c971c889f2a07743358e6a1787349c72"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeDirective.html","95174bbdb51b5e4460d5b8feef5b31c2"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/RangeLengthDirective.html","ab42a240efad6d98d27c2ead01fae0d9"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/SlideDirective.html","9fcd24146c1504c18df711941288ec0a"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabContentDirective.html","d42004d00eb086092f0b37ead9eb3440"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TabTitleDirective.html","7fdd989b69c8e18100d7d4a0ff5a117b"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/TooltipDirective.html","e707d1e7c498eb25ad585361ba063649"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UUIDDirective.html","7ad27d21d0e4f8af430a185815325059"],["https://greengerong.github.io/rebirth-ng/compodocs/directives/UrlDirective.html","21d690dd1c4b2e85ce49bd7314b00c5e"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.svg","1edaa6e50c2302bf0221d252e1caebb4"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.ttf","634f53eb79efa455a9e9d85d608b3447"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-300.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.eot","128879da78c6c8eb4e2c07fa3732cea7"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.ttf","ad97d029a11d8b39692037e753d23d1f"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-700.woff","525d5b452809b3172a2a34e26d9db546"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.eot","9f916e330c478bbfa2a0dd6614042046"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.ttf","38861cba61c66739c1452c3a71e39852"],["https://greengerong.github.io/rebirth-ng/compodocs/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],["https://greengerong.github.io/rebirth-ng/compodocs/graph/dependencies.svg","86420f6e98d2aac15cf18d0d9024b2c7"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise-inverted.svg","20ebc811620eed348f8f0cd7c5c6410f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc-vectorise.svg","41c3b0bb7d1fb517d9d1e1b5c5e55489"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.png","bda695b24e61701c0df5c8d05502d85f"],["https://greengerong.github.io/rebirth-ng/compodocs/images/compodoc.svg","d713629403561afba43d293bb0d31738"],["https://greengerong.github.io/rebirth-ng/compodocs/images/coverage-badge.svg","404047c4fa123bd6dc8d398ea82ec111"],["https://greengerong.github.io/rebirth-ng/compodocs/index.html","bf8a0cf33121696dec918063c8413d4d"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/AssetsLoader.html","1b3291e31e6ddaa5bcccc7922390653c"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DialogService.html","862c8dfee2992d2b93df2ac2c8947a0f"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/DocumentRef.html","51f9cc8deb75c2566bc3cea13225a84b"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/ModalService.html","08afd08e76f0a29aaed3fc14e57bbe66"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/NotifyService.html","b06b7524220810105a0cc6cc13c99826"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/OverlayService.html","9dba58f7dbb50044f00b3d83f239a5b2"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/PositionService.html","441c2eec62e57769bb06e33558661548"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/RebirthNGConfig.html","4c8105c8ac6b8a13a5527a70f6efb5eb"],["https://greengerong.github.io/rebirth-ng/compodocs/injectables/WindowRef.html","68aed3104afd5d31f0f17f578cb83b57"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ActionItem.html","6d73fa29ce671b90236cd913963efa59"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Breadcrumb.html","6e91b7685cb783ba3c63874a61d4401f"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/CellSelectedEventArg.html","32205d928530efdd6e0763387a883550"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DataTablePager.html","096b18dfaea2abe788fab86f7c53ceea"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html","6848d76939f42d166a2f48cf0e93d2a0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DialogOptions.html","fb9a3e9e4be0e81996e0d2d9d94db019"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/FlowStep.html","a2ad73c882e936d54ba920b613ef3177"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuBar.html","6c8536ecae65efe053de7198bc801922"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/MenuItem.html","1a40f181f38bcd59d73e5b2fd070ef5a"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/Modal.html","99ba66c4df5db1a98603b1070e935399"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/ModalOptions.html","264dfcdaffce89722deadb18581a529e"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/NotifyModel.html","ec1d802a95aaecef46282edc93dd593c"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/OverlayOptions.html","20e137cbeefef49183f445f8f1d4e7ad"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowCheckChangeEventArg.html","fa017cf0420a8f1ce2541170d7dd5f10"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/RowSelectedEventArg.html","9b308855879f92939662e9ed190a5ac0"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectButtonItem.html","1acc31343b0651ae85312344acaeee9b"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectDateChangeEventArgs.html","b48c3c504d0f9bb53779862f6a1d6b55"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SelectFileModel.html","69d5e99e1cc6ba129d2e25a7dc8bb540"],["https://greengerong.github.io/rebirth-ng/compodocs/interfaces/SortChangeEventArg.html","75e3d0390be13b543fad381cd285850e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/compodoc.js","ad953fdfba0149fbf1a0316f900c8f6d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/EventDispatcher.js","1e3fe625c4f0527796f23e64e077ffeb"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/bootstrap-native.js","d191b1af66fefd294d416ec337dfb875"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/d3.v3.min.js","0e6e2a23439c7a7e7947a8916e81af44"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/deep-iterator.js","d3b63f71cae94963f58d42534930afc6"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/es6-shim.min.js","9d4304d9f51104986bc088e39fdf5d0d"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/htmlparser.js","44d432aff471ada617f5138f4ae02991"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/prism.js","928c81208324639b11d45b8c74a9a8a8"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/promise.min.js","1cb3b5b1ef9de4f2ab43c613bc466cab"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/svg-pan-zoom.min.js","cff1aa2a6f686c05573adc6c4594756f"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/vis.min.js","9e397b7f8d8dc778cf567cff7c45a22e"],["https://greengerong.github.io/rebirth-ng/compodocs/js/libs/zepto.min.js","50a4556b0089cfa1cb61e88ea23bbcce"],["https://greengerong.github.io/rebirth-ng/compodocs/js/menu.js","e691bb61f0b0638e85be0efb69c72bea"],["https://greengerong.github.io/rebirth-ng/compodocs/js/routes.js","a320d94aaefad8cd21ae16197fed5b15"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/lunr.min.js","f7a51af2f8665072c66d49beea245833"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search-lunr.js","37a6c886d2307518d4693ecd319e7c49"],["https://greengerong.github.io/rebirth-ng/compodocs/js/search/search.js","026dbac5b2f6a648a046e8e431c14b53"],["https://greengerong.github.io/rebirth-ng/compodocs/js/sourceCode.js","9086fc2f94144cd30ea313601d049dde"],["https://greengerong.github.io/rebirth-ng/compodocs/js/svg-pan-zoom.controls.js","0910cc8f8cedfe22f603124e6bbad554"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tabs.js","05741097cb54f940cac83a8499aceb05"],["https://greengerong.github.io/rebirth-ng/compodocs/js/tree.js","8c78c7b1db22037cef4dc6abe9564184"],["https://greengerong.github.io/rebirth-ng/compodocs/miscellaneous.html","ecb4c69344f51bc8494a5771223fb69a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules.html","38c8e5f59658a64dfb004d175831b671"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule.html","eceff545027ad35b2f4b4b8586e1bdbd"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AccordionModule/dependencies.svg","e7abf0372069d1a38ed90fd666aa8e9d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule.html","cdb970b80e0a4ea2aeb8df25993b005a"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ActionButtonModule/dependencies.svg","399d5e4640e4d9d4f790ace6ab261970"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule.html","308982decdfd913f0e539ac8febd514d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AlertBoxModule/dependencies.svg","a1a70753f537f396cd993eace338237d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule.html","6eb8828f7b9da90d7e89f66837987749"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/AutoCompleteModule/dependencies.svg","3deaf673fa7ca0f46ab77aa3904573f4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule.html","f969ac4ffd3d7bceb2179c6544906990"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BadgeModule/dependencies.svg","a0af612e7f9cf0f1d09ccc87b0be9f3b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule.html","76369e96d28e11142d033c27aa44356e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/BreadcrumbsModule/dependencies.svg","4665ea45370f50bdbaaafb83fe1ce9aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule.html","bdf7c2149c8945318dd63af2253ff3f0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CarouselModule/dependencies.svg","5073e6aec16556cacb917c3b57af1ed1"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule.html","fca5a62ecc8fa9eaa23fcf892a84e266"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/CheckboxGroupModule/dependencies.svg","24aba94f180701257d595fd481178399"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule.html","bb24844899c065868bb6e6404a7a1622"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DataTableModule/dependencies.svg","2b140b1f8c183ee202af25176edbb259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule.html","10debe0ecd57f2a424b5ab142c224372"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DatePickerModule/dependencies.svg","34662a0e57bce8547a2a514a4f750f59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule.html","f09160c658d0d729c5a5a3926bc1f133"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DialogModule/dependencies.svg","2a9d7f639829d4c72279a176f11117b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule.html","368aa45fb2cc62e09a045c1ce7825937"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/DraggableModule/dependencies.svg","48bbc0a3a49f10d126fff888d870c677"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule.html","75043070a033569619fa9672e7ba5120"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FileUploadModule/dependencies.svg","32d099a97c0f8507bbf408e1bd570ea0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule.html","d30799e42503c2d42995cfef5fdcca5d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/FlowStepModule/dependencies.svg","548ce02505dcd8b81dcae19f3fbc851f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule.html","e4eb1f0762e02125cc81c7fdd7228359"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/InfiniteScrollModule/dependencies.svg","26b9a61bd325bc089bfcdc2589ed538e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule.html","84891734cd8632b00b571669613c6e77"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/MenuBarModule/dependencies.svg","7c78ed133404e0024bba3942a081a259"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule.html","696c14198b7312e9c43622b8c8ad0cd3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ModalModule/dependencies.svg","b5c92e581a94d1dba475ea83ff446837"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule.html","29089789b646847cdf951b519919dc2f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/NotifyModule/dependencies.svg","1bcfa22d25f86d973e2dd92c4714000d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule.html","8344d85ff01d0ea8d1562fd577a98ef2"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/OverlayModule/dependencies.svg","58d758613be1bc946c8ae03047cb658b"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule.html","9701feb8e184f14aafb3f58c4de21edb"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PagerModule/dependencies.svg","8122e4a690f7ef718803be014a67b566"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule.html","97a06078e8ed81e255d757a3311ca529"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PaginationModule/dependencies.svg","a1272f859ab009b435bf2487da2482aa"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule.html","65f41d01bf6aa5f0c4720f4fe585c1ce"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PanelModule/dependencies.svg","c7f5ca4e7e6b48eaa915de3f945207b3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule.html","4e41fbb8592f136249a24e2337acc4cf"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/PopoverModule/dependencies.svg","65f93d4b976a2536dd28adc1272357fe"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule.html","0c4caabeb32c636632ca5ee6407efd25"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/ProgressBarModule/dependencies.svg","b09b1c4b722577acc60e246402790452"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule.html","38a478bc08cc14741b3ba7e55a85f0e4"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RadioGroupModule/dependencies.svg","cb89ef1ddc944af0631f25be2ef1d5ff"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule.html","2d20f10f3dead1353078b7a586fc5aa9"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RatingModule/dependencies.svg","f5d361e9f9acd5cb9531b44ff8e45641"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule.html","870e7342f640ca9a46a22f66c33aedd6"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthCommonModule/dependencies.svg","c4286f6d55d5864d9228bbefbef97ae5"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule.html","4ecf34a6a4602d87cefeeefabeb07fde"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthNGModule/dependencies.svg","9b0657f426435b2280f9ab0ab59b14ef"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule.html","c8a49784433308e5747b594a8440f750"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/RebirthValidatorsModule/dependencies.svg","4ac021bbc1ad5ca3b31a400e0c71817f"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule.html","48c0b9e9075d7e2a3b6902c1fe4d2019"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SelectButtonModule/dependencies.svg","9d5d2ca9c084e49e91e9d43ea080602c"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule.html","0874d980109c4cbea0b7184fd0adad43"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/SwitchModule/dependencies.svg","f33d0fe2e42f41ea2ecb086d6cf0de59"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule.html","3471f66b5acc7367ec05f53b75f49d45"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TabsModule/dependencies.svg","d2b1c94e7ec3c29d497bb41fad87a0e3"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule.html","86b8aa3025f988ce39ef66863229374d"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TimePickerModule/dependencies.svg","685a75cb7e120fa5d0c51107447c3d1e"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule.html","78ad1659e2f2f8a0f577dd25a1ffeed0"],["https://greengerong.github.io/rebirth-ng/compodocs/modules/TooltipModule/dependencies.svg","1075eb31f4e2f1333c119d9e2b30b7d5"],["https://greengerong.github.io/rebirth-ng/compodocs/overview.html","a795929d8ba315ba7bce127479fec825"],["https://greengerong.github.io/rebirth-ng/compodocs/pipes/TrustHtmlPipe.html","91622524edbc24208e98474d4c8b7038"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap-card.css","d1a32590517fbe0119957dff69806e80"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/compodoc.css","99cc24555488c593d042812b95cda6aa"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/laravel.css","5e10f4edcff24bfcd4729f377ea84bce"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/original.css","2da4fe7c0e29b7ef378602ced2c60e83"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/postmark.css","80db7cd100f7aa953fd546011c255a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/prism.css","a4b21f1c5ec3382a27bdb71b9f77719c"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/readthedocs.css","72885425ac081ec55708b51a99649a4a"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/reset.css","ba1d59b0e53d380b12b3e97a428b3314"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/stripe.css","4a7e61a07628f44395294c0dfc74f2b8"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/style.css","abcbc54c74f1fc4fd2a4cfab8ebbd858"],["https://greengerong.github.io/rebirth-ng/compodocs/styles/vagrant.css","893ca76e2ca19de63f4784cf5bb97994"],["https://greengerong.github.io/rebirth-ng/index.html","748cfe81550c8fa9dd00b69aedd97bbc"],["https://greengerong.github.io/rebirth-ng/inline.92e4b960b753f45526e3.bundle.js","92b7947a5da7ef1e7f9e776da0baf595"],["https://greengerong.github.io/rebirth-ng/loading.d8d12688fa026815e1fe.gif","d8d12688fa026815e1fe858a1196f3ef"],["https://greengerong.github.io/rebirth-ng/main.ace6e36ac848ae4af58a.bundle.js","68b3c847d927cc651e9ba2c1318d0ca4"],["https://greengerong.github.io/rebirth-ng/polyfills.a7a04a42b38e0b032cee.bundle.js","a3f18ef1cc80c67429e0249125ac96b4"],["https://greengerong.github.io/rebirth-ng/scripts.eac245e1e1ab21d85193.bundle.js","6dd3475085f16fc7dc593b688ace1d3c"],["https://greengerong.github.io/rebirth-ng/styles.95a41133053a443685ec.bundle.css","95a41133053a443685ec97e2ac4ed4a5"],["https://greengerong.github.io/rebirth-ng/vendor.41cc8e608ac297a6be63.bundle.js","9ff3c139b40368a9d18b8e5db9b89e5b"]];
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







