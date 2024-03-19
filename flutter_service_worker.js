'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6a1ddcada98c2d340019f6f2bc945799",
"index.html": "bd466066e997166051cf72dc72c78846",
"/": "bd466066e997166051cf72dc72c78846",
"main.dart.js": "7b048ae9a4ab6d30236b15e24190b6ea",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"README.md": "c77dbf156256cc0f8d5fef71448fc275",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5ee39ccdfbd50d383daa619b05d48958",
".git/config": "978a76384a0acaa132a6fe9195ac577d",
".git/objects/95/cdaa80546bf45aca71942532d70bacc4dc3c16": "461c4fa4385d14139687f22d08fb962f",
".git/objects/3e/10175ef28c54df8ba0bf585b50957ee3e37087": "d7bceca40c06b006ba9b9ae0c4d017d1",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/108bac0b66ce5a85870c160f960aea46bd00dd": "db208e90802b3c86879086941b69df33",
".git/objects/04/b969580e37de56c16d90e886392425b35b973f": "b1a241f393cf9c03831e6bc893992988",
".git/objects/35/081ba219f134bede0b1b674bcc2d4a2cc8aecf": "9b630bface1ce9b1aaa94e7dfa40dcd8",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/4cfe4911afbfb1fe13d20866b3275c5ac70519": "7b59d4b3687f1a10c48f009ec4cf17a4",
".git/objects/93/0fd572292bfc911493eb5ca476219049495d81": "95df12b18bb2e18508d3587bbbd62e5f",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/34/c7de72c3eb31b951106982589f2ecaec4a8b0a": "6af0e5e7485ef4a62dc6870937b77ffb",
".git/objects/5a/19b368f7be28a7468de2417d67386e810dcc34": "a0998dcaa18ba8c609c1b867aed3eb20",
".git/objects/9d/bb819effe5c2c8ec91e3de6b830dca64be87c6": "9e95e8eb3ebe3dfdf3867b2aa2279642",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/b3/20ec96f263fd22b600f025e31be87ab4eef1bd": "56ca8c95ee781b1c5764264dd39b66bc",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/3ce1250cf4ef913270b39617982f385c0fc96f": "de31294aa8f3fb0f49ddf85f61095688",
".git/objects/e5/13a85f3bebfca71e6491cfd855ab6acaa26b50": "d99e7509db050363d30f3488e9bbabfa",
".git/objects/e5/c89c8c3d7a0374cf88f68a81b8282923c47cfb": "11696043a79dc0e95f23959dcce86993",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/1ea299b0f7d44ca124f3367185c8df9edd71b6": "ba8f3f1d851078e10fc47e8c3973d867",
".git/objects/c0/7a0b7e707f9fca21da76175117b97b902b75ed": "47dd19a7580d16f9b9c9d24edf2c253c",
".git/objects/c0/951cca918b80c18f677732151c09d70702fcf8": "f0bc893e93c82a60591a8b0d0f28779e",
".git/objects/fd/701a125ceb5beb6edaaaa5a84f5daa91507ef6": "2707ce0195abefad09c203f0158c7471",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/31f65a75a94b953f68e5357a6f73423da34fec": "cba80fe15651596e468095b1395869d4",
".git/objects/4e/339764302201b7dad515bee59a345137430906": "3f2915a3b7fbbbe023107ffd58a8b129",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/958464abb88a9f49859d602139f7c15e4c0326": "bf698024445527cd793053abeeae10cf",
".git/objects/4b/0f5588727ec14ad0e69c0fb632b7ffa44d11eb": "0dda96c9bd7f53bbb1843e43add45711",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/45/35a2b4e57cbc6164246fcb8e15d0ec0e9f1e96": "11c832ee1a24d5260832c1b811b99af6",
".git/objects/73/306fb0f4d40458f8b95ef733bb733ae6da7c8b": "b473ff16c5cc2d400827f455dced90a1",
".git/objects/28/601177b8a1890ac7c748c90451294ac6355789": "bc111008ec8c34f077eaec6b2d8547c4",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/f0997581e046cbb95cb4b55de6f8b8cca64750": "9de604eca74cc5c5e2061843bb872e5b",
".git/objects/21/da97ea5a8e1bc0987e117f777198192fc5c9a7": "e590b4016d658bdfe4cb4c369017c019",
".git/objects/72/1cd65d4e07d48689fe36f5886a19b41c021861": "36e115fb1a7033c0d02c0dc7eee7794e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/37/9f4f180eb4fdd6066ea56218d79d1ce51c8efa": "42dd105f637d81772c2e11bdccf67139",
".git/objects/37/7231296a9af8bc2be28d64733ed53b72e83c2f": "1c0a137127c6807136c21ff0af49ed77",
".git/objects/6c/659ab8f0c3c567c5911dec3e1d76e972b96122": "2a8bb834b615955bc54270e0fd08fb1b",
".git/objects/52/c1e3cccd7e714e095050343b1c0915c384d462": "6a5eb195ee56313bd85ba9602178a63a",
".git/objects/0f/22e939761ae2c7f0ff76bbde153be26581d005": "6d563acbadd8eb01edb5ae7a44260500",
".git/objects/90/088bc127c15dd80aee9bdc0ffa5099ed527a60": "a283f27ec7446bb16ab5b72ba7cc40d3",
".git/objects/d3/d6068f1dc154c92fc5adc099347d3b5b2ec40e": "0a45ba28b9df9a9eb427ef24530d00ca",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/8141e12ffd39bc04ffb6d0a3ac29c9cdce8625": "02cbed7f787f504c0ec60ec15b4abd1c",
".git/objects/b1/008593afdd9813229ec14f4eddd45c8654c711": "5f1d6599f6df463ee11a228132c4e583",
".git/objects/b1/e2bb29a7a7abf85da4bb564a517f73169117f4": "d3a96741a2ad1bac13951f679e3efc9e",
".git/objects/d5/9ca61b042713647dea1809820f8e82b2b7e833": "cd3dc3fc599ce393092ea6b8b92f5791",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/2edd0d94c569aecb1c53f94e559fe21584d90a": "3a75294e06815712efb61956ecf63985",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/1d960a093ef94dcb7dd511289f57b22017f250": "86c5fa02cf3f17fa1dfa122badd501da",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/58ce370d2167e714855b8e7f68a22a4d7ed446": "288119874bfd57e9260757b79c9acf03",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c5/d7df30a9a8c755fb9dc851c2e252a61d655bcf": "f3c2c90aa4b84b2bcf10d46cd6b6b6cd",
".git/objects/c2/e71a8960e864c3e482719476732fe04ffbb961": "52191a6c3356c85c5ff04ff0507577f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/85/845a9533532acb23357916fe6c376c21abda1d": "ac7e6b1308431102a9e5c2e143808654",
".git/objects/71/bd6a0200153d5ac72fc7d91e64596b2a2fd404": "1a7e338654da35fb92f3df3aa466d4c7",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/76/c5e9c960a9e6bf8c8014a1c12d7c7c1e542033": "69443653669148710fe582793b3fac1b",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/82/1cb8d300b79e5911d6003a429b82424bf6e174": "b305cc8f654b480d7e2932ac7ff9892f",
".git/objects/8e/9181794b0c2249c5fa117d83a6844a429eadb7": "a581f849cfd5f1873c26ff0123e83ab4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c05e5ea136c2047a5079f840c7ea832f",
".git/logs/refs/heads/main": "c05e5ea136c2047a5079f840c7ea832f",
".git/logs/refs/remotes/origin/main": "422d6abad83341ee7df460d4b1439ba4",
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
".git/refs/heads/main": "f0ff48ee1248c6ef5b783d1a5eb34e74",
".git/refs/remotes/origin/main": "f0ff48ee1248c6ef5b783d1a5eb34e74",
".git/index": "78026d5da036aff0ff0387caa432e275",
".git/COMMIT_EDITMSG": "83c83e1d6d339c7daac69d16a0527b73",
".git/FETCH_HEAD": "017f713098ece5dbc86e99ad3f76d143",
"assets/AssetManifest.json": "38bac2f0cde5ef4ee50a70af937ec2aa",
"assets/NOTICES": "f249c45fa99fcabd6568f69f0fe09a0e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c70842187b06a01ad21a4a004d28784e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "92b73be1ae748b4ee14e86be4e8df2a2",
"assets/fonts/MaterialIcons-Regular.otf": "c883f58a4e816070f6006c31a429a4ec",
"assets/assets/images/ak47.png": "0402310264db5549c6087c80123fc3e1",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
