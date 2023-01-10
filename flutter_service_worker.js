'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "afc5597f1d263a41f4d86984b0998981",
"index.html": "a8c5ddc34d77f6e716eb20bf2d80b58d",
"/": "a8c5ddc34d77f6e716eb20bf2d80b58d",
"vercel.json": "771490896fb0a55febf3851669992bc2",
"main.dart.js": "bb2847561221e027a2eafef9c9caf5f9",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7cdaa6d2830c69b77ba16ea13091a0a4",
".git/config": "0eeba87239786a5cc2e2e5b2e9a62d1f",
".git/objects/61/47b81a4d1829f5aaac94fbf3a399e6831cc8ff": "b0776cffd0a639f6c1a3c5fadcde5646",
".git/objects/61/f9e92ccad669f01be2b66283561348b95acde2": "b0f5758a13a106922de502509cfeba51",
".git/objects/68/414d6009a87b3e798afb52e575912102d4329a": "8a74b0ad0cb3a0460ccd63795ff1a461",
".git/objects/69/e440471b7f8b17bb9bc3624f2492534a732930": "433c880fcdeb425ae58f08552f93790b",
".git/objects/ac/c88b00a02583564f0f8d75b4cbaa71674c6f52": "f45de4bd0f883d186cea71e40fb70ab3",
".git/objects/ad/391f5c41b783c9be7b47c023595da5a54c9c06": "ccb3d66d21660d2502c2d6959674e1f2",
".git/objects/b3/cc200accbabc2fb98eb40c04c39c24eeb637f7": "fb12424e5f89454a6dfbd8c10a37f9e5",
".git/objects/b4/c4e8698f611d782afa53047c662296f4a9b1d0": "4dd810e68fb6944f1c489cbec2f64c32",
".git/objects/b4/68d30c9bf3e24763a34b4da948b0d1ef361e4c": "9ecb9ad72f07faef62b6283e033b01ab",
".git/objects/bc/f715600711f345915593598c800aa4ffaf1f90": "6b7458f6b6b0f709926f5bdcf5d2c982",
".git/objects/d8/ba09ca6cccdfa09bb129fe44c877c9588f3bd7": "60e870c3706b213baaefd28e3d2e4ca5",
".git/objects/e5/aaf002daf6f6b69894655e975adab69a51dbae": "4e494de157685ab4a593f94cc5399680",
".git/objects/ee/348dc31d731cd42bb8021f14b25703e4dfa8eb": "2a4f5a852eceda3102909ed5ef76596c",
".git/objects/c9/8b1c8079247a37cfcdfbe2c55bd5a97c3d8c09": "1fed5bba4fd5b84c6c7a3a81b2d48d17",
".git/objects/ed/2aa8a04ff67fc73cc6455009fa5919deef4896": "e2b3881fd104dcd8967c5ef84dc7b3d5",
".git/objects/4b/c5c9e68f8a745996d395992fb08e7004f228de": "8ea396acd2e695e71a3bc4bcc4c62112",
".git/objects/pack/pack-b0aa24e66e5ccb3ee45a673dadddd8f40844694f.pack": "42e946cbb5a830cf9344466b4792949d",
".git/objects/pack/pack-b0aa24e66e5ccb3ee45a673dadddd8f40844694f.idx": "cf40ce79112a21e7abdedda02b8e9965",
".git/objects/7b/692830074a47b68b9626d556b45ad4e4a95272": "aa5302d68b4b969f649d2df0772bb882",
".git/objects/19/da535b40a513b66cce7dcaa1a95d58ffcd4135": "7738245d7f73057f45bbff51cd3518a5",
".git/objects/75/e9f42790b6e5765d195bd78c2cd193035cd505": "0aaf89a94a8de5485952e491554c50fa",
".git/objects/44/8c53aa17bd1105289b15430e35cad6bbad5699": "94aafa23f0e5b89818e1e80fcba92e79",
".git/objects/43/281aa5080aa5558a9f23dfa392b15876c911b3": "637c4838916c8df7555219bf3a84b815",
".git/objects/07/ff44b1ed436ab0b6b12e9f03868585f46fb0ba": "f496ebeca38c36cee1bf16e670543080",
".git/objects/00/74ba1acabb0f8a7775ae069d34810869ae65f9": "a5fcf99f4cf4637539c2e865ea07bffe",
".git/objects/3a/550f4f74f0e60e60ca83a4ba64a77362a85206": "11a5899c98804742f47f2e2b1c9b2528",
".git/objects/5e/c2b6df49ab92aaeefb251298032cbd0ee910a9": "27bbf80367242e58f832386bd25aed16",
".git/objects/6c/bc2df69ebff9f07fe5e9dbc7c5cc7fabd1d3e8": "284990500f1e38dbe486f6e5e6d14ddd",
".git/objects/dc/da6afbcbaca1b72295c1106197d6698024fbcf": "8c81a00dd8c3fbbfb60d446413276b9d",
".git/objects/a9/513ab7d5fc26d6c5e9902e5a22c37c87ded875": "cc67f82dd91ee7bebfdcbed7bc6d416e",
".git/objects/e6/a8779dcee6e85049a57f1ca86120f83e69d9a2": "621a11bf72393dd6d90e640b5c26b188",
".git/objects/84/35f4266be8e77a6d070d6e5f1b6e9c8d86decb": "d23496b47dc0e2e55d804f897428c098",
".git/objects/71/f91d7c1a7efd590eebdb46bd9dcb7b46c216ec": "67a38a765d9d34b837b35044d791f51a",
".git/objects/78/4ccdc6675e5db978d22dcf45616071d4cc8274": "cd2c8fd492e4f5114cc51878536f9c64",
".git/objects/13/1c6c768c0e7a118adb4f85162d96b30e88de91": "7f266325d73cfcd4084994dc296b5051",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "09502cd8d2da2c8551e55416a6f05d87",
".git/logs/refs/heads/master": "09502cd8d2da2c8551e55416a6f05d87",
".git/logs/refs/remotes/origin/HEAD": "ffb597f56533b3c095f114bcb1f9440c",
".git/logs/refs/remotes/origin/master": "31e8df9fb78d22267dee496b36a1b39e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "7b65a4af37007594e3c51d7d6c0447f4",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "7b65a4af37007594e3c51d7d6c0447f4",
".git/index": "c812efb7c483dc5667e2dee60097ef98",
".git/packed-refs": "85be53a3a999aa28a4ef330bfe84a12c",
".git/COMMIT_EDITMSG": "3999081ea5953b4a28bd4a1a0e604c81",
"assets/AssetManifest.json": "8e8a91d2f046eb52850289ecec699aca",
"assets/NOTICES": "a7c77a758606acb865129c169bd61ed9",
"assets/FontManifest.json": "fa116ffaec40846594ac4344625edf3e",
"assets/packages/iamport_flutter/assets/images/iamport-logo.png": "2face5c40217bba082ef64aa5c66e9b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "d495c1734c8689a158e15e629d71738f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/mypage_card.png": "d3665ea3b244a2aebba7856c031d24a8",
"assets/assets/images/my_stroke@3x.png": "4641ad3d46ab3a4dd6f179bb3aa9dc6a",
"assets/assets/images/home_stroke@3x.png": "194ee9746bc922fef123bc679733400a",
"assets/assets/images/home_page_hospital.png": "97d3d2b988f9c84d2ea1edb865351f78",
"assets/assets/images/license@3x.png": "424fe6fee94a1caacf018a518975ef22",
"assets/assets/images/scheduled@3x.png": "099697bdba04eeab8ac42d7c0f10b54f",
"assets/assets/images/customer@3x.png": "aa0ceba8854bf34daab4b1382d6646ed",
"assets/assets/images/check_stroke@3x.png": "59b455bcd6fd5aa5451a6db63974650d",
"assets/assets/images/review_good_act.png": "b23feb7950f50929555d5bed9a7a1ef9",
"assets/assets/images/review_good.png": "cc5ee98aa14126ec39f073d0e00d8f4e",
"assets/assets/images/escort_place_page.png": "79b1e31c8ae85c319c13398d1707e4de",
"assets/assets/images/progress.png": "2c3e6c4fe95604a422d7d7e453143b6c",
"assets/assets/images/naver_login_button.png": "e010167225dc8c81448178373513a1c6",
"assets/assets/images/splash_white_logo.png": "b46d3c10e133d36876fc31da6707bb38",
"assets/assets/images/banner_1.png": "ce8bcfab74f29c5463039db9840987bb",
"assets/assets/images/banner_1.jpg": "a417cc966abd3f5fee846f75c04ed24b",
"assets/assets/images/price_icon.png": "43d2cca94b29dbef7921af87ed2115c8",
"assets/assets/images/application@3x.png": "6eade86a12802d4146e0e17636e881d1",
"assets/assets/images/banner_2.png": "39263cc7bc6402bc39d3d3be8fb72788",
"assets/assets/images/md_logo_main_140@3x.png": "720471c842d49b7a932106658355315c",
"assets/assets/images/banner_3.png": "3730b707a31bbbfe54cf49697d1c99ce",
"assets/assets/images/escorter@3x.png": "8e26eca1380f55adbdbd9b81b1cbba11",
"assets/assets/images/edit_mdlist@3x.png": "ea2e310956b877b7c3b29c976c68e046",
"assets/assets/images/2.0x/gender_any.png": "70d688d7125de926c185e36a6c793a7f",
"assets/assets/images/2.0x/gender_male.png": "261fffe9877389713900764bdd6a6b6f",
"assets/assets/images/2.0x/btn_special_match.png": "53c3d4e6641d3b8a9e3e8205c2ca47bb",
"assets/assets/images/2.0x/gender_female.png": "cfbe1e38cec321be6c59aec6a4b1bd25",
"assets/assets/images/home_fill@3x.png": "08d4e6acb4f39ce17a08761d539559c1",
"assets/assets/images/mypage_payment.png": "70594de4ff5ac20f42afec2544bbe7ab",
"assets/assets/images/review_modest.png": "ecbfd47a7654c012747e052ed29387ab",
"assets/assets/images/escort_medicalcenter_page.png": "f6fbb2446e275ec660fc60573c0df7bb",
"assets/assets/images/gender_any.png": "f43c759758a49ebdbc62a2e04eb57746",
"assets/assets/images/escort_fill@3x.png": "bca66ae9c9d37fa90ef2dbdea3077dfc",
"assets/assets/images/mypage_review.png": "c037027e139fcc9a371e340481d7ddcb",
"assets/assets/images/kakao_login.jpg": "e63adfee146a86d308142a149175769e",
"assets/assets/images/customer_center_icon.png": "a46c5c529469db28b616398c3c9fa10c",
"assets/assets/images/3.0x/gender_any.png": "a60c3ac770990ce52e5f1b9d4ee1ac1f",
"assets/assets/images/3.0x/gender_male.png": "78e83c07692e62e5412ce7ccb3d2f82e",
"assets/assets/images/3.0x/btn_special_match.png": "d02b910f86a78017996329352e583440",
"assets/assets/images/3.0x/gender_female.png": "c4ae2110ee1f3265af316808394d2ea0",
"assets/assets/images/review_bad.png": "2fd5ced3875dc0d2f9cdff4ad301df20",
"assets/assets/images/gender_male.png": "fb1f2f77b03b78c7e986a5adb5a70f08",
"assets/assets/images/my_fill@3x.png": "d6fefd0d6182802b1a1d37e647f70dfa",
"assets/assets/images/escort_stroke@3x.png": "7edc8536fb59c0f17168dfd4f383eb50",
"assets/assets/images/edit_certification@3x.png": "58a17c32aed6cecf71bf1f3ccf1574e0",
"assets/assets/images/button_man.png": "fb1f2f77b03b78c7e986a5adb5a70f08",
"assets/assets/images/usage_tip_icon.png": "9924892c514320f73a305db28d64307b",
"assets/assets/images/btn_special_match.png": "76869f6b3eac962229e9fd1613ad3200",
"assets/assets/images/review_bad_act.png": "d7d99a0fcc9fc953d53aec8908549ed1",
"assets/assets/images/md_logo_login_286@3x.png": "92b7afb38a5d64488a29ccd6b62a144d",
"assets/assets/images/gender_female.png": "4ec90e3aa87a6674333d1206f3b04edf",
"assets/assets/images/escort_place.png": "b29053cf4e9f77f2516ab70274a3d5a2",
"assets/assets/images/patient_female.png": "063ea949f20d8eb1cad9fd2a43d093b1",
"assets/assets/images/check_fill@3x.png": "e7b3098e697d3d7ad385f52635a1857d",
"assets/assets/images/progress_page.png": "fe7fcfc87fc3d39c24dec3b77db5b1d3",
"assets/assets/images/snubh_splash.png": "7d6e635e72d4a149eb44bd282190f134",
"assets/assets/images/md_logo_splash_270@3x.png": "0a22bf8bde4a085467c726e10ff62822",
"assets/assets/images/review_modest_act.png": "278b8b685a566cc77d33d78836eac240",
"assets/assets/images/career@3x.png": "a8d718e9e0500003742527d3ca520c31",
"assets/assets/images/certification@3x.png": "c2efdea269477e9d2b02c0ce80468644",
"assets/assets/images/patient.png": "ed9b79a433002f71a4f9a890c85c312a",
"assets/assets/images/edit_account@3x.png": "c4b456267b67b577b4ad7f7e1a945bcb",
"assets/assets/images/escort_medicalcenter.png": "c3d7927e2d57f39dfce150b04b561754",
"assets/assets/images/snubh_temp_image.png": "5a4df2cf2ff3d6445eb6a879ab9f0171",
"assets/assets/images/escorter.png": "962bab9cd17c1ab055dd618732774907",
"assets/assets/images/snubh_splash_no_padding.png": "7615f7910678b1d26ae939ddb16c0d57",
"assets/assets/images/kakao_symbol.jpeg": "287740cf7b6b64fa9fd563a33ba02cd3",
"assets/assets/images/edit_scheduled@3x.png": "bf977d1cb13065ca60c2a1b754c0749f",
"assets/assets/images/splash_logo.png": "43754d9727d245237c6d7a49d77ba73e",
"assets/assets/images/profile_basic@3x.png": "61886bf69451a94e0768bcd4052fe619",
"assets/assets/images/patient_male.png": "440cc805e77bc5dbb8b80a67f803836a",
"assets/assets/images/mypage_patient.png": "00d301923a680bfccccde8a3403524be",
"assets/assets/images/escorter_cert.png": "6b19d5bacf6e85044a435c96f3fea9b6",
"assets/assets/icons/cert_mark_icon.png": "ad92a868de3a03f2ee8d12016fbfa679",
"assets/assets/icons/icon_profile.png": "98a195c9b13d47140e9c72101063e8ff",
"assets/assets/icons/icon_camera_stroke.png": "9b2801b9ce7dcd89f0c1288d5078b710",
"assets/assets/icons/icon_sms_stroke.png": "38cf5bc3da6a1688c82e7c11fc63a949",
"assets/assets/icons/icon.png": "c4a30fbd2bc3bcd4a459059a7457e295",
"assets/assets/icons/icon_guide_stroke.png": "77a6988fbac30a2f4e3040bf9add189f",
"assets/assets/icons/icon_search_fill.png": "b636a522cedccfc72a536029ace52004",
"assets/assets/icons/icon_home_stroke.png": "194ee9746bc922fef123bc679733400a",
"assets/assets/icons/naver_icon.png": "0160f7aeec6f09c56c59902343d87017",
"assets/assets/icons/icon_call_stroke.png": "dd9622b0c56b3979a39c6bb99d6a96be",
"assets/assets/icons/icon_escort_stroke.png": "16c64acc6a02c227e7a2395cac8fcbb3",
"assets/assets/icons/2.0x/cert_mark_icon.png": "cf401d8e7b97948ba4d33622606b1a41",
"assets/assets/icons/2.0x/icon_price.png": "70904f4eb658aaed0da2304ace8be691",
"assets/assets/icons/2.0x/icon_messanger1.png": "4f6e26620faa625ef9a070a716265abe",
"assets/assets/icons/2.0x/icon_guide.png": "8741ab6bd8b20010bff8a155db16de67",
"assets/assets/icons/icon_mypage_stroke.png": "4641ad3d46ab3a4dd6f179bb3aa9dc6a",
"assets/assets/icons/icon_delete_stroke.png": "681ec59dca94b0ff1a4510823213d2aa",
"assets/assets/icons/icon_price.png": "bf6992d208ff233c29d97f8e811205e5",
"assets/assets/icons/icon_mypage_fill.png": "d6fefd0d6182802b1a1d37e647f70dfa",
"assets/assets/icons/3.0x/cert_mark_icon.png": "f6f11e5f91542b38c10fc7c5e46b81ef",
"assets/assets/icons/3.0x/icon_price.png": "3727037087fb6a9e831a0e11f6478da7",
"assets/assets/icons/3.0x/icon_messanger1.png": "2153485a5b637fadaacfcdaea2b8f3fc",
"assets/assets/icons/3.0x/icon_guide.png": "c1e29b13fcda7ddd77e9e56917d6b517",
"assets/assets/icons/icon_close_stroke.png": "da14812113b21a5220f7c2aaaced8d58",
"assets/assets/icons/icon_schedule_stroke.png": "099697bdba04eeab8ac42d7c0f10b54f",
"assets/assets/icons/icon_escort_fill.png": "9cca11bd6261aa85ecc75452a1e04e76",
"assets/assets/icons/icon_check_stroke.png": "59b455bcd6fd5aa5451a6db63974650d",
"assets/assets/icons/icon_home_fill.png": "08d4e6acb4f39ce17a08761d539559c1",
"assets/assets/icons/icon_medicalcenter_stroke.png": "2ceb6d6cd450a603deb8e82d7ecce6fd",
"assets/assets/icons/icon_messanger1.png": "7024adaa3147d212309faa6ce491f4f3",
"assets/assets/icons/icon_check_fill.png": "c1761f7fea5fb6327ffb3d7912b481fc",
"assets/assets/icons/icon_guide.png": "e1d4391509369cc03e5ba1a9cbee9d6a",
"assets/assets/icons/icon_foreground.png": "68f1cd0bfe4e24ea08af1d8dc1cc3dcf",
"assets/assets/icons/icon_certification_stroke.png": "90cbd1133d356bf27b2c3e9a44f1983a",
"assets/assets/icons/icon_star_fill.png": "34e2d226fa258e773a26b14b87a4fd41",
"assets/assets/icons/icon_wheelchair.png": "08fca146ba4f102221d4704da6d27e7a",
"assets/assets/icons/icon_search_stroke.png": "0f7ce2e17037f400e27303ac6da96cfa",
"assets/assets/icons/icon_edit_stroke.png": "cfff93300501c98f965133d06a2143ce",
"assets/assets/icons/icon_charge_stroke.png": "f23d4dae82598ee6613252075ed51549",
"assets/assets/icons/icon_headset.png": "5d7d1356829a73e25db8fa259e6168c6",
"assets/assets/fonts/NotoSansKR-Light.otf": "1b0504a3e741f8e6e07b297cb8f55d2d",
"assets/assets/fonts/NotoSansKR-Bold.otf": "c4723de3da750cff5d95b7c9b398d983",
"assets/assets/fonts/NotoSansKR-Thin.otf": "3c91862c95752f24cd41785301373e7b",
"assets/assets/fonts/NotoSansKR-Black.otf": "25ab3626b77d039abe87a29ef5e78de9",
"assets/assets/fonts/NotoSansKR-Medium.otf": "3e344d255a9c2bc603683f5b078d471d",
"assets/assets/fonts/NotoSansKR-Regular.otf": "839a2f6c607e26dee10678a077729ba5",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
