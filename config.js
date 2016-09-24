System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  depCache: {
    "lib/main.js": [
      "./../site-config",
      "react",
      "react-dom",
      "reflexbox",
      "react-look",
      "./modules/site-area",
      "./modules/time",
      "./modules/weather",
      "./modules/thought",
      "./modules/currency"
    ],
    "npm:react-dom@15.3.2.js": [
      "npm:react-dom@15.3.2/index.js"
    ],
    "npm:reflexbox@2.2.1.js": [
      "npm:reflexbox@2.2.1/dist/index.js"
    ],
    "npm:react@15.3.2.js": [
      "npm:react@15.3.2/react.js"
    ],
    "lib/modules/site-area.js": [
      "react",
      "reflexbox",
      "react-look"
    ],
    "lib/modules/weather.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "./../../site-config",
      "react",
      "react-look",
      "fetch-jsonp",
      "react-skycons"
    ],
    "lib/modules/time.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "react-look",
      "moment",
      "moment/locale/ja"
    ],
    "npm:react-look@1.0.1.js": [
      "npm:react-look@1.0.1/lib/index.js"
    ],
    "lib/modules/currency.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "./../../site-config",
      "react",
      "react-addons-create-fragment",
      "reflexbox",
      "react-look",
      "es6-promise",
      "isomorphic-fetch"
    ],
    "lib/modules/thought.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "es6-promise",
      "isomorphic-fetch"
    ],
    "npm:react@15.3.2/react.js": [
      "./lib/React"
    ],
    "npm:reflexbox@2.2.1/dist/index.js": [
      "./config",
      "./withReflex",
      "./Flex",
      "./Box",
      "./Grid",
      "./Reflex"
    ],
    "npm:babel-runtime@5.8.38/helpers/get.js": [
      "../core-js/object/get-own-property-descriptor"
    ],
    "npm:fetch-jsonp@1.0.1.js": [
      "npm:fetch-jsonp@1.0.1/build/fetch-jsonp.js"
    ],
    "npm:babel-runtime@5.8.38/helpers/inherits.js": [
      "../core-js/object/create",
      "../core-js/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/helpers/create-class.js": [
      "../core-js/object/define-property"
    ],
    "npm:react-dom@15.3.2/index.js": [
      "react/lib/ReactDOM"
    ],
    "npm:react-skycons@0.3.0.js": [
      "npm:react-skycons@0.3.0/dist/react-skycons.js"
    ],
    "npm:react-look@1.0.1/lib/index.js": [
      "react-look-core",
      "./plugins/fallbackValue",
      "./plugins/linter",
      "./plugins/friendlyClassName",
      "./mixins/substr",
      "./mixins/extractCSS",
      "./mixins/platformQuery",
      "./presets/react-dom",
      "./prefixer/DynamicPrefixer",
      "./prefixer/StaticPrefixer",
      "./api/Prefixer",
      "./api/StyleSheet",
      "./api/LookRoot",
      "./api/StyleContainer",
      "./core/resolver"
    ],
    "npm:moment@2.15.1.js": [
      "npm:moment@2.15.1/moment.js"
    ],
    "npm:moment@2.15.1/locale/ja.js": [
      "../moment"
    ],
    "npm:react-addons-create-fragment@15.3.2.js": [
      "npm:react-addons-create-fragment@15.3.2/index.js"
    ],
    "npm:es6-promise@3.3.1.js": [
      "npm:es6-promise@3.3.1/dist/es6-promise.js"
    ],
    "npm:isomorphic-fetch@2.2.1.js": [
      "npm:isomorphic-fetch@2.2.1/fetch-npm-browserify.js"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js": [
      "core-js/library/fn/object/get-own-property-descriptor"
    ],
    "npm:reflexbox@2.2.1/dist/Flex.js": [
      "react",
      "./withReflex"
    ],
    "npm:reflexbox@2.2.1/dist/withReflex.js": [
      "react",
      "robox",
      "ruled",
      "./config"
    ],
    "npm:reflexbox@2.2.1/dist/Grid.js": [
      "react",
      "./withReflex"
    ],
    "npm:reflexbox@2.2.1/dist/Box.js": [
      "react",
      "./withReflex"
    ],
    "npm:react@15.3.2/lib/React.js": [
      "object-assign",
      "./ReactChildren",
      "./ReactComponent",
      "./ReactPureComponent",
      "./ReactClass",
      "./ReactDOMFactories",
      "./ReactElement",
      "./ReactPropTypes",
      "./ReactVersion",
      "./onlyChild",
      "fbjs/lib/warning",
      "./ReactElementValidator",
      "process"
    ],
    "npm:reflexbox@2.2.1/dist/Reflex.js": [
      "./withReflex"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/create.js": [
      "core-js/library/fn/object/create"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js": [
      "core-js/library/fn/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/define-property.js": [
      "core-js/library/fn/object/define-property"
    ],
    "npm:react-look-core@1.0.1.js": [
      "npm:react-look-core@1.0.1/lib/index.js"
    ],
    "npm:react-look@1.0.1/lib/plugins/fallbackValue.js": [
      "lodash/isPlainObject",
      "lodash/isArray",
      "assign-styles",
      "../utils/camelToDashCase"
    ],
    "npm:react-look@1.0.1/lib/prefixer/StaticPrefixer.js": [
      "../api/Prefixer",
      "inline-style-prefix-all"
    ],
    "npm:react-look@1.0.1/lib/api/StyleSheet.js": [
      "lodash/isFunction",
      "lodash/isPlainObject",
      "./StyleContainer",
      "../core/renderer",
      "../utils/getFontFormat"
    ],
    "npm:react-skycons@0.3.0/dist/react-skycons.js": [
      "react",
      "react-dom",
      "skycons"
    ],
    "npm:react-look@1.0.1/lib/plugins/linter.js": [
      "inline-style-linter",
      "react-look-core"
    ],
    "npm:react-look@1.0.1/lib/mixins/substr.js": [
      "lodash/isNumber",
      "lodash/isString",
      "react",
      "react-look-core"
    ],
    "npm:react-look@1.0.1/lib/plugins/friendlyClassName.js": [
      "react-look-core"
    ],
    "npm:react-look@1.0.1/lib/mixins/platformQuery.js": [
      "inline-style-prefixer"
    ],
    "npm:react-look@1.0.1/lib/presets/react-dom.js": [
      "react-look-core",
      "../plugins/fallbackValue",
      "../mixins/extractCSS",
      "../mixins/platformQuery",
      "../mixins/substr",
      "../prefixer/StaticPrefixer"
    ],
    "npm:react-look@1.0.1/lib/prefixer/DynamicPrefixer.js": [
      "../api/Prefixer",
      "inline-style-prefixer"
    ],
    "npm:react@15.3.2/lib/ReactDOM.js": [
      "./ReactDOMComponentTree",
      "./ReactDefaultInjection",
      "./ReactMount",
      "./ReactReconciler",
      "./ReactUpdates",
      "./ReactVersion",
      "./findDOMNode",
      "./getHostComponentFromComposite",
      "./renderSubtreeIntoContainer",
      "fbjs/lib/warning",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactInstrumentation",
      "./ReactDOMUnknownPropertyHook",
      "./ReactDOMNullInputValuePropHook",
      "process"
    ],
    "npm:isomorphic-fetch@2.2.1/fetch-npm-browserify.js": [
      "whatwg-fetch"
    ],
    "npm:react-look@1.0.1/lib/core/resolver.js": [
      "lodash/isEmpty",
      "assign-styles",
      "react",
      "react-look-core",
      "./renderer",
      "../mixins/extractCSS",
      "../api/StyleContainer"
    ],
    "npm:react-look@1.0.1/lib/api/LookRoot.js": [
      "lodash/merge",
      "react",
      "./Prefixer",
      "./StyleContainer",
      "../core/resolver"
    ],
    "npm:react-look@1.0.1/lib/api/StyleContainer.js": [
      "lodash/merge",
      "lodash/isEmpty",
      "inline-style-transformer",
      "react-look-core",
      "./Prefixer",
      "../utils/generateHashCode"
    ],
    "npm:es6-promise@3.3.1/dist/es6-promise.js": [
      "process"
    ],
    "npm:react-addons-create-fragment@15.3.2/index.js": [
      "react/lib/ReactFragment"
    ],
    "npm:object-assign@4.1.0.js": [
      "npm:object-assign@4.1.0/index"
    ],
    "npm:ruled@1.0.1.js": [
      "npm:ruled@1.0.1/dist/index.js"
    ],
    "npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js": [
      "../../modules/$",
      "../../modules/es6.object.get-own-property-descriptor"
    ],
    "npm:robox@1.0.0-beta.8.js": [
      "npm:robox@1.0.0-beta.8/dist/Robox.js"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:react@15.3.2/lib/ReactDOMFactories.js": [
      "./ReactElement",
      "./ReactElementValidator",
      "process"
    ],
    "npm:fbjs@0.8.4/lib/warning.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactPureComponent.js": [
      "object-assign",
      "./ReactComponent",
      "./ReactNoopUpdateQueue",
      "fbjs/lib/emptyObject"
    ],
    "npm:react@15.3.2/lib/ReactChildren.js": [
      "./PooledClass",
      "./ReactElement",
      "fbjs/lib/emptyFunction",
      "./traverseAllChildren"
    ],
    "npm:react@15.3.2/lib/ReactComponent.js": [
      "./reactProdInvariant",
      "./ReactNoopUpdateQueue",
      "./canDefineProperty",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactClass.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactComponent",
      "./ReactElement",
      "./ReactPropTypeLocations",
      "./ReactPropTypeLocationNames",
      "./ReactNoopUpdateQueue",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/keyMirror",
      "fbjs/lib/keyOf",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactElement.js": [
      "object-assign",
      "./ReactCurrentOwner",
      "fbjs/lib/warning",
      "./canDefineProperty",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactPropTypes.js": [
      "./ReactElement",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/emptyFunction",
      "./getIteratorFn",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/onlyChild.js": [
      "./reactProdInvariant",
      "./ReactElement",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactElementValidator.js": [
      "./ReactCurrentOwner",
      "./ReactComponentTreeHook",
      "./ReactElement",
      "./ReactPropTypeLocations",
      "./checkReactTypeSpec",
      "./canDefineProperty",
      "./getIteratorFn",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:lodash@4.16.1/isPlainObject.js": [
      "./_getPrototype",
      "./isObjectLike"
    ],
    "npm:assign-styles@2.0.0.js": [
      "npm:assign-styles@2.0.0/lib/index.js"
    ],
    "npm:inline-style-prefix-all@2.0.2.js": [
      "npm:inline-style-prefix-all@2.0.2/lib/prefixAll.js"
    ],
    "npm:lodash@4.16.1/isFunction.js": [
      "./isObject"
    ],
    "npm:skycons@1.0.0.js": [
      "npm:skycons@1.0.0/skycons.js"
    ],
    "npm:lodash@4.16.1/isNumber.js": [
      "./isObjectLike"
    ],
    "npm:lodash@4.16.1/isString.js": [
      "./isArray",
      "./isObjectLike"
    ],
    "npm:core-js@1.2.7/library/fn/object/set-prototype-of.js": [
      "../../modules/es6.object.set-prototype-of",
      "../../modules/$.core"
    ],
    "npm:core-js@1.2.7/library/fn/object/create.js": [
      "../../modules/$"
    ],
    "npm:core-js@1.2.7/library/fn/object/define-property.js": [
      "../../modules/$"
    ],
    "npm:react-look-core@1.0.1/lib/index.js": [
      "./core/enhancer",
      "./core/resolver",
      "./mixins/condition",
      "./mixins/contains",
      "./mixins/extend",
      "./plugins/mixin",
      "./plugins/statefulValue",
      "./plugins/statefulSelector",
      "./plugins/styleLogger",
      "./utils/copyProperties",
      "./utils/getChildType",
      "./utils/getPseudoExpression",
      "./utils/sortObject",
      "./utils/splitCondition"
    ],
    "npm:inline-style-linter@0.2.8.js": [
      "npm:inline-style-linter@0.2.8/lib/index.js"
    ],
    "npm:react@15.3.2/lib/ReactDefaultInjection.js": [
      "./BeforeInputEventPlugin",
      "./ChangeEventPlugin",
      "./DefaultEventPluginOrder",
      "./EnterLeaveEventPlugin",
      "./HTMLDOMPropertyConfig",
      "./ReactComponentBrowserEnvironment",
      "./ReactDOMComponent",
      "./ReactDOMComponentTree",
      "./ReactDOMEmptyComponent",
      "./ReactDOMTreeTraversal",
      "./ReactDOMTextComponent",
      "./ReactDefaultBatchingStrategy",
      "./ReactEventListener",
      "./ReactInjection",
      "./ReactReconcileTransaction",
      "./SVGDOMPropertyConfig",
      "./SelectEventPlugin",
      "./SimpleEventPlugin"
    ],
    "npm:inline-style-prefixer@1.0.4.js": [
      "npm:inline-style-prefixer@1.0.4/lib/Prefixer.js"
    ],
    "npm:react@15.3.2/lib/renderSubtreeIntoContainer.js": [
      "./ReactMount"
    ],
    "npm:react-look@1.0.1/lib/core/renderer.js": [
      "lodash/isArray",
      "lodash/isBoolean",
      "lodash/isEmpty",
      "lodash/isPlainObject",
      "lodash/isFunction",
      "../api/StyleContainer",
      "../utils/sortPseudoClasses",
      "../utils/isMediaQuery",
      "../utils/isPseudo",
      "../utils/isDynamicArray"
    ],
    "npm:react@15.3.2/lib/ReactInstrumentation.js": [
      "./ReactDebugTool",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMComponentTree.js": [
      "./reactProdInvariant",
      "./DOMProperty",
      "./ReactDOMComponentFlags",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactReconciler.js": [
      "./ReactRef",
      "./ReactInstrumentation",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactUpdates.js": [
      "./reactProdInvariant",
      "object-assign",
      "./CallbackQueue",
      "./PooledClass",
      "./ReactFeatureFlags",
      "./ReactReconciler",
      "./Transaction",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/findDOMNode.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "./ReactDOMComponentTree",
      "./ReactInstanceMap",
      "./getHostComponentFromComposite",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactMount.js": [
      "./reactProdInvariant",
      "./DOMLazyTree",
      "./DOMProperty",
      "./ReactBrowserEventEmitter",
      "./ReactCurrentOwner",
      "./ReactDOMComponentTree",
      "./ReactDOMContainerInfo",
      "./ReactDOMFeatureFlags",
      "./ReactElement",
      "./ReactFeatureFlags",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactMarkupChecksum",
      "./ReactReconciler",
      "./ReactUpdateQueue",
      "./ReactUpdates",
      "fbjs/lib/emptyObject",
      "./instantiateReactComponent",
      "fbjs/lib/invariant",
      "./setInnerHTML",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/getHostComponentFromComposite.js": [
      "./ReactNodeTypes"
    ],
    "npm:react@15.3.2/lib/ReactDOMUnknownPropertyHook.js": [
      "./DOMProperty",
      "./EventPluginRegistry",
      "./ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMNullInputValuePropHook.js": [
      "./ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:whatwg-fetch@1.0.0.js": [
      "npm:whatwg-fetch@1.0.0/fetch.js"
    ],
    "npm:lodash@4.16.1/isEmpty.js": [
      "./_getTag",
      "./isArguments",
      "./isArray",
      "./isArrayLike",
      "./isBuffer",
      "./_isPrototype",
      "./_nativeKeys"
    ],
    "npm:lodash@4.16.1/merge.js": [
      "./_baseMerge",
      "./_createAssigner"
    ],
    "npm:inline-style-transformer@1.1.1.js": [
      "npm:inline-style-transformer@1.1.1/lib/Transformer.js"
    ],
    "npm:react@15.3.2/lib/ReactFragment.js": [
      "./reactProdInvariant",
      "./ReactChildren",
      "./ReactElement",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js": [
      "./$.to-iobject",
      "./$.object-sap"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:robox@1.0.0-beta.8/dist/Robox.js": [
      "react",
      "understyle"
    ],
    "npm:fbjs@0.8.4/lib/emptyObject.js": [
      "process"
    ],
    "npm:react@15.3.2/lib/canDefineProperty.js": [
      "process"
    ],
    "npm:fbjs@0.8.4/lib/invariant.js": [
      "process"
    ],
    "npm:fbjs@0.8.4/lib/keyMirror.js": [
      "./invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactPropTypeLocationNames.js": [
      "process"
    ],
    "npm:react@15.3.2/lib/ReactNoopUpdateQueue.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/PooledClass.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/traverseAllChildren.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "./ReactElement",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "./KeyEscapeUtils",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactPropTypeLocations.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@15.3.2/lib/checkReactTypeSpec.js": [
      "./reactProdInvariant",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "./ReactComponentTreeHook",
      "process"
    ],
    "npm:lodash@4.16.1/_getPrototype.js": [
      "./_overArg"
    ],
    "npm:inline-style-prefix-all@2.0.2/lib/prefixAll.js": [
      "./prefixProps",
      "./utils/capitalizeString",
      "./utils/assign",
      "./plugins/calc",
      "./plugins/cursor",
      "./plugins/flex",
      "./plugins/sizing",
      "./plugins/gradient",
      "./plugins/transition",
      "./plugins/flexboxIE",
      "./plugins/flexboxOld"
    ],
    "npm:lodash@4.16.1/isBoolean.js": [
      "./isObjectLike"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js": [
      "./$.export",
      "./$.set-proto"
    ],
    "npm:react-look-core@1.0.1/lib/mixins/condition.js": [
      "../utils/splitCondition"
    ],
    "npm:inline-style-linter@0.2.8/lib/index.js": [
      "./Linter",
      "./plugins/shorthandLonghand",
      "./plugins/noVendorPrefix",
      "./plugins/noInitialValue",
      "./plugins/preferNumber",
      "./plugins/requireUnit",
      "./plugins/compatibility"
    ],
    "npm:react@15.3.2/lib/HTMLDOMPropertyConfig.js": [
      "./DOMProperty"
    ],
    "npm:react@15.3.2/lib/ReactInjection.js": [
      "./DOMProperty",
      "./EventPluginHub",
      "./EventPluginUtils",
      "./ReactComponentEnvironment",
      "./ReactClass",
      "./ReactEmptyComponent",
      "./ReactBrowserEventEmitter",
      "./ReactHostComponent",
      "./ReactUpdates"
    ],
    "npm:react@15.3.2/lib/DOMLazyTree.js": [
      "./DOMNamespaces",
      "./setInnerHTML",
      "./createMicrosoftUnsafeLocalFunction",
      "./setTextContent"
    ],
    "npm:react@15.3.2/lib/ReactMarkupChecksum.js": [
      "./adler32"
    ],
    "npm:react-look-core@1.0.1/lib/core/resolver.js": [
      "lodash/flattenDeep",
      "lodash/isArray",
      "lodash/isNumber",
      "lodash/isString",
      "react"
    ],
    "npm:react-look-core@1.0.1/lib/mixins/contains.js": [
      "lodash/isString",
      "../utils/getPseudoExpression"
    ],
    "npm:react-look-core@1.0.1/lib/plugins/mixin.js": [
      "lodash/isEmpty",
      "assign-styles"
    ],
    "npm:react-look-core@1.0.1/lib/plugins/statefulValue.js": [
      "lodash/isPlainObject",
      "lodash/isFunction",
      "assign-styles"
    ],
    "npm:react-look-core@1.0.1/lib/mixins/extend.js": [
      "assign-styles"
    ],
    "npm:react-look-core@1.0.1/lib/plugins/statefulSelector.js": [
      "lodash/isPlainObject",
      "lodash/isFunction",
      "assign-styles"
    ],
    "npm:react-look-core@1.0.1/lib/utils/getChildType.js": [
      "lodash/isFunction"
    ],
    "npm:react-look-core@1.0.1/lib/utils/splitCondition.js": [
      "lodash/get",
      "lodash/assign"
    ],
    "npm:react@15.3.2/lib/ReactDOMEmptyComponent.js": [
      "object-assign",
      "./DOMLazyTree",
      "./ReactDOMComponentTree"
    ],
    "npm:inline-style-prefixer@1.0.4/lib/Prefixer.js": [
      "inline-style-prefix-all",
      "./utils/getBrowserInformation",
      "./utils/getPrefixedKeyframes",
      "./utils/capitalizeString",
      "./utils/assign",
      "./prefixProps",
      "./plugins/calc",
      "./plugins/cursor",
      "./plugins/flex",
      "./plugins/sizing",
      "./plugins/gradient",
      "./plugins/transition",
      "./plugins/flexboxIE",
      "./plugins/flexboxOld"
    ],
    "npm:react-look@1.0.1/lib/utils/isDynamicArray.js": [
      "lodash/isNumber",
      "lodash/isString"
    ],
    "npm:react-look-core@1.0.1/lib/core/enhancer.js": [
      "lodash/merge",
      "../utils/copyProperties",
      "react",
      "process"
    ],
    "npm:react-look-core@1.0.1/lib/plugins/styleLogger.js": [
      "lodash/isEmpty",
      "../utils/getChildType",
      "inline-style-transformer"
    ],
    "npm:react@15.3.2/lib/ReactComponentBrowserEnvironment.js": [
      "./DOMChildrenOperations",
      "./ReactDOMIDOperations",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactReconcileTransaction.js": [
      "object-assign",
      "./CallbackQueue",
      "./PooledClass",
      "./ReactBrowserEventEmitter",
      "./ReactInputSelection",
      "./ReactInstrumentation",
      "./Transaction",
      "./ReactUpdateQueue",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactRef.js": [
      "./ReactOwner",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactBrowserEventEmitter.js": [
      "object-assign",
      "./EventConstants",
      "./EventPluginRegistry",
      "./ReactEventEmitterMixin",
      "./ViewportMetrics",
      "./getVendorPrefixedEventName",
      "./isEventSupported",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMContainerInfo.js": [
      "./validateDOMNesting",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactComponentTreeHook.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/BeforeInputEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./FallbackCompositionState",
      "./SyntheticCompositionEvent",
      "./SyntheticInputEvent",
      "fbjs/lib/keyOf"
    ],
    "npm:react@15.3.2/lib/ChangeEventPlugin.js": [
      "./EventConstants",
      "./EventPluginHub",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "./SyntheticEvent",
      "./getEventTarget",
      "./isEventSupported",
      "./isTextInputElement",
      "fbjs/lib/keyOf",
      "process"
    ],
    "npm:react@15.3.2/lib/DefaultEventPluginOrder.js": [
      "fbjs/lib/keyOf"
    ],
    "npm:react@15.3.2/lib/EnterLeaveEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "./ReactDOMComponentTree",
      "./SyntheticMouseEvent",
      "fbjs/lib/keyOf"
    ],
    "npm:react@15.3.2/lib/ReactDOMTreeTraversal.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./AutoFocusUtils",
      "./CSSPropertyOperations",
      "./DOMLazyTree",
      "./DOMNamespaces",
      "./DOMProperty",
      "./DOMPropertyOperations",
      "./EventConstants",
      "./EventPluginHub",
      "./EventPluginRegistry",
      "./ReactBrowserEventEmitter",
      "./ReactDOMButton",
      "./ReactDOMComponentFlags",
      "./ReactDOMComponentTree",
      "./ReactDOMInput",
      "./ReactDOMOption",
      "./ReactDOMSelect",
      "./ReactDOMTextarea",
      "./ReactInstrumentation",
      "./ReactMultiChild",
      "./ReactServerRenderingTransaction",
      "fbjs/lib/emptyFunction",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./isEventSupported",
      "fbjs/lib/keyOf",
      "fbjs/lib/shallowEqual",
      "./validateDOMNesting",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMTextComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./DOMChildrenOperations",
      "./DOMLazyTree",
      "./ReactDOMComponentTree",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./validateDOMNesting",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactEventListener.js": [
      "object-assign",
      "fbjs/lib/EventListener",
      "fbjs/lib/ExecutionEnvironment",
      "./PooledClass",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "./getEventTarget",
      "fbjs/lib/getUnboundedScrollPosition",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDefaultBatchingStrategy.js": [
      "object-assign",
      "./ReactUpdates",
      "./Transaction",
      "fbjs/lib/emptyFunction"
    ],
    "npm:react@15.3.2/lib/SelectEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactDOMComponentTree",
      "./ReactInputSelection",
      "./SyntheticEvent",
      "fbjs/lib/getActiveElement",
      "./isTextInputElement",
      "fbjs/lib/keyOf",
      "fbjs/lib/shallowEqual"
    ],
    "npm:react@15.3.2/lib/SimpleEventPlugin.js": [
      "./reactProdInvariant",
      "./EventConstants",
      "fbjs/lib/EventListener",
      "./EventPropagators",
      "./ReactDOMComponentTree",
      "./SyntheticAnimationEvent",
      "./SyntheticClipboardEvent",
      "./SyntheticEvent",
      "./SyntheticFocusEvent",
      "./SyntheticKeyboardEvent",
      "./SyntheticMouseEvent",
      "./SyntheticDragEvent",
      "./SyntheticTouchEvent",
      "./SyntheticTransitionEvent",
      "./SyntheticUIEvent",
      "./SyntheticWheelEvent",
      "fbjs/lib/emptyFunction",
      "./getEventCharCode",
      "fbjs/lib/invariant",
      "fbjs/lib/keyOf",
      "process"
    ],
    "npm:react@15.3.2/lib/DOMProperty.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/CallbackQueue.js": [
      "./reactProdInvariant",
      "object-assign",
      "./PooledClass",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDebugTool.js": [
      "./ReactInvalidSetStateWarningHook",
      "./ReactHostOperationHistoryHook",
      "./ReactComponentTreeHook",
      "./ReactChildrenMutationWarningHook",
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/performanceNow",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/Transaction.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactUpdateQueue.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/instantiateReactComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactCompositeComponent",
      "./ReactEmptyComponent",
      "./ReactHostComponent",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/setInnerHTML.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./DOMNamespaces",
      "./createMicrosoftUnsafeLocalFunction",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactNodeTypes.js": [
      "./reactProdInvariant",
      "./ReactElement",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/EventPluginRegistry.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:lodash@4.16.1/isArguments.js": [
      "./isArrayLikeObject"
    ],
    "npm:lodash@4.16.1/_getTag.js": [
      "./_DataView",
      "./_Map",
      "./_Promise",
      "./_Set",
      "./_WeakMap",
      "./_baseGetTag",
      "./_toSource"
    ],
    "npm:lodash@4.16.1/isArrayLike.js": [
      "./isFunction",
      "./isLength"
    ],
    "npm:lodash@4.16.1/isBuffer.js": [
      "./_root",
      "./stubFalse",
      "@empty"
    ],
    "npm:lodash@4.16.1/_nativeKeys.js": [
      "./_overArg"
    ],
    "npm:lodash@4.16.1/_baseMerge.js": [
      "./_Stack",
      "./_arrayEach",
      "./_assignMergeValue",
      "./_baseKeysIn",
      "./_baseMergeDeep",
      "./isArray",
      "./isObject",
      "./isTypedArray"
    ],
    "npm:lodash@4.16.1/_createAssigner.js": [
      "./_baseRest",
      "./_isIterateeCall"
    ],
    "npm:inline-style-transformer@1.1.1/lib/Transformer.js": [
      "./utils/camelToDashCase",
      "./utils/dashToCamelCase",
      "./utils/isNumber"
    ],
    "npm:core-js@1.2.7/library/modules/$.to-iobject.js": [
      "./$.iobject",
      "./$.defined"
    ],
    "npm:process@0.11.9.js": [
      "npm:process@0.11.9/browser.js"
    ],
    "npm:core-js@1.2.7/library/modules/$.object-sap.js": [
      "./$.export",
      "./$.core",
      "./$.fails"
    ],
    "npm:understyle@1.3.0.js": [
      "npm:understyle@1.3.0/dist/index.js"
    ],
    "npm:inline-style-prefix-all@2.0.2/lib/plugins/calc.js": [
      "../utils/joinPrefixedRules",
      "../utils/isPrefixedValue"
    ],
    "npm:inline-style-prefix-all@2.0.2/lib/plugins/flex.js": [
      "../utils/camelToDashCase"
    ],
    "npm:inline-style-prefix-all@2.0.2/lib/plugins/cursor.js": [
      "../utils/joinPrefixedRules"
    ],
    "npm:inline-style-prefix-all@2.0.2/lib/plugins/sizing.js": [
      "../utils/joinPrefixedRules"
    ],
    "npm:inline-style-prefix-all@2.0.2/lib/plugins/gradient.js": [
      "../utils/joinPrefixedRules",
      "../utils/isPrefixedValue"
    ],
    "npm:inline-style-prefix-all@2.0.2/lib/plugins/transition.js": [
      "../utils/camelToDashCase",
      "../utils/capitalizeString",
      "../utils/isPrefixedValue",
      "../prefixProps"
    ],
    "npm:inline-style-prefix-all@2.0.2/lib/plugins/flexboxOld.js": [
      "../utils/camelToDashCase"
    ],
    "npm:lodash@4.16.1/flattenDeep.js": [
      "./_baseFlatten"
    ],
    "npm:lodash@4.16.1/get.js": [
      "./_baseGet"
    ],
    "npm:lodash@4.16.1/assign.js": [
      "./_assignValue",
      "./_copyObject",
      "./_createAssigner",
      "./isArrayLike",
      "./_isPrototype",
      "./keys"
    ],
    "npm:core-js@1.2.7/library/modules/$.export.js": [
      "./$.global",
      "./$.core",
      "./$.ctx"
    ],
    "npm:core-js@1.2.7/library/modules/$.set-proto.js": [
      "./$",
      "./$.is-object",
      "./$.an-object",
      "./$.ctx"
    ],
    "npm:inline-style-linter@0.2.8/lib/Linter.js": [
      "./utils/isObject",
      "./utils/isArray"
    ],
    "npm:inline-style-linter@0.2.8/lib/plugins/shorthandLonghand.js": [
      "../data/propertyMap"
    ],
    "npm:inline-style-linter@0.2.8/lib/plugins/noInitialValue.js": [
      "../data/propertyMap"
    ],
    "npm:inline-style-linter@0.2.8/lib/plugins/requireUnit.js": [
      "../utils/isUnitlessProperty"
    ],
    "npm:inline-style-prefixer@1.0.4/lib/plugins/calc.js": [
      "../utils/camelToDashCase"
    ],
    "npm:inline-style-prefixer@1.0.4/lib/plugins/flex.js": [
      "../utils/camelToDashCase"
    ],
    "npm:inline-style-prefixer@1.0.4/lib/plugins/cursor.js": [
      "../utils/camelToDashCase"
    ],
    "npm:inline-style-prefixer@1.0.4/lib/plugins/sizing.js": [
      "../utils/camelToDashCase"
    ],
    "npm:inline-style-prefixer@1.0.4/lib/plugins/gradient.js": [
      "../utils/camelToDashCase"
    ],
    "npm:inline-style-prefixer@1.0.4/lib/plugins/transition.js": [
      "../utils/camelToDashCase",
      "../utils/capitalizeString",
      "../utils/unprefixProperty"
    ],
    "npm:inline-style-prefixer@1.0.4/lib/plugins/flexboxOld.js": [
      "../utils/camelToDashCase"
    ],
    "npm:inline-style-prefixer@1.0.4/lib/plugins/flexboxIE.js": [
      "../utils/camelToDashCase"
    ],
    "npm:react@15.3.2/lib/ReactEventEmitterMixin.js": [
      "./EventPluginHub"
    ],
    "npm:react@15.3.2/lib/SyntheticCompositionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticInputEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticMouseEvent.js": [
      "./SyntheticUIEvent",
      "./ViewportMetrics",
      "./getEventModifierState"
    ],
    "npm:react@15.3.2/lib/ReactDOMButton.js": [
      "./DisabledInputUtils"
    ],
    "npm:react@15.3.2/lib/SyntheticFocusEvent.js": [
      "./SyntheticUIEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticAnimationEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticDragEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticClipboardEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticKeyboardEvent.js": [
      "./SyntheticUIEvent",
      "./getEventCharCode",
      "./getEventKey",
      "./getEventModifierState"
    ],
    "npm:react@15.3.2/lib/SyntheticTouchEvent.js": [
      "./SyntheticUIEvent",
      "./getEventModifierState"
    ],
    "npm:react@15.3.2/lib/SyntheticTransitionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticUIEvent.js": [
      "./SyntheticEvent",
      "./getEventTarget"
    ],
    "npm:react@15.3.2/lib/SyntheticWheelEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:inline-style-linter@0.2.8/lib/plugins/compatibility.js": [
      "../data/propertyMap",
      "../utils/browserNames",
      "../utils/targetBrowser",
      "../utils/unprefixStyles",
      "object-assign"
    ],
    "npm:inline-style-prefixer@1.0.4/lib/utils/getBrowserInformation.js": [
      "bowser"
    ],
    "npm:react@15.3.2/lib/FallbackCompositionState.js": [
      "object-assign",
      "./PooledClass",
      "./getTextContentAccessor"
    ],
    "npm:react@15.3.2/lib/DOMChildrenOperations.js": [
      "./DOMLazyTree",
      "./Danger",
      "./ReactMultiChildUpdateTypes",
      "./ReactDOMComponentTree",
      "./ReactInstrumentation",
      "./createMicrosoftUnsafeLocalFunction",
      "./setInnerHTML",
      "./setTextContent",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMIDOperations.js": [
      "./DOMChildrenOperations",
      "./ReactDOMComponentTree",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactServerRenderingTransaction.js": [
      "object-assign",
      "./PooledClass",
      "./Transaction",
      "./ReactInstrumentation",
      "./ReactServerUpdateQueue",
      "process"
    ],
    "npm:fbjs@0.8.4/lib/EventListener.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react@15.3.2/lib/EventPluginHub.js": [
      "./reactProdInvariant",
      "./EventPluginRegistry",
      "./EventPluginUtils",
      "./ReactErrorUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/EventPluginUtils.js": [
      "./reactProdInvariant",
      "./EventConstants",
      "./ReactErrorUtils",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactComponentEnvironment.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactHostComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/setTextContent.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./escapeTextContentForBrowser",
      "./setInnerHTML"
    ],
    "npm:react@15.3.2/lib/ReactInputSelection.js": [
      "./ReactDOMSelection",
      "fbjs/lib/containsNode",
      "fbjs/lib/focusNode",
      "fbjs/lib/getActiveElement"
    ],
    "npm:react@15.3.2/lib/ReactOwner.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/EventConstants.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@15.3.2/lib/getVendorPrefixedEventName.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@15.3.2/lib/isEventSupported.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@15.3.2/lib/validateDOMNesting.js": [
      "object-assign",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/EventPropagators.js": [
      "./EventConstants",
      "./EventPluginHub",
      "./EventPluginUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/SyntheticEvent.js": [
      "object-assign",
      "./PooledClass",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/AutoFocusUtils.js": [
      "./ReactDOMComponentTree",
      "fbjs/lib/focusNode"
    ],
    "npm:react@15.3.2/lib/CSSPropertyOperations.js": [
      "./CSSProperty",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactInstrumentation",
      "fbjs/lib/camelizeStyleName",
      "./dangerousStyleValue",
      "fbjs/lib/hyphenateStyleName",
      "fbjs/lib/memoizeStringOnly",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/DOMPropertyOperations.js": [
      "./DOMProperty",
      "./ReactDOMComponentTree",
      "./ReactInstrumentation",
      "./quoteAttributeValueForBrowser",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMOption.js": [
      "object-assign",
      "./ReactChildren",
      "./ReactDOMComponentTree",
      "./ReactDOMSelect",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMInput.js": [
      "./reactProdInvariant",
      "object-assign",
      "./DisabledInputUtils",
      "./DOMPropertyOperations",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMSelect.js": [
      "object-assign",
      "./DisabledInputUtils",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMTextarea.js": [
      "./reactProdInvariant",
      "object-assign",
      "./DisabledInputUtils",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactMultiChild.js": [
      "./reactProdInvariant",
      "./ReactComponentEnvironment",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactMultiChildUpdateTypes",
      "./ReactCurrentOwner",
      "./ReactReconciler",
      "./ReactChildReconciler",
      "fbjs/lib/emptyFunction",
      "./flattenChildren",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactInvalidSetStateWarningHook.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:fbjs@0.8.4/lib/performanceNow.js": [
      "./performance"
    ],
    "npm:react@15.3.2/lib/ReactChildrenMutationWarningHook.js": [
      "./ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactCompositeComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactComponentEnvironment",
      "./ReactCurrentOwner",
      "./ReactElement",
      "./ReactErrorUtils",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactNodeTypes",
      "./ReactPropTypeLocations",
      "./ReactReconciler",
      "./checkReactTypeSpec",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/shallowEqual",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:lodash@4.16.1/isArrayLikeObject.js": [
      "./isArrayLike",
      "./isObjectLike"
    ],
    "npm:lodash@4.16.1/_Map.js": [
      "./_getNative",
      "./_root"
    ],
    "npm:lodash@4.16.1/_Promise.js": [
      "./_getNative",
      "./_root"
    ],
    "npm:lodash@4.16.1/_DataView.js": [
      "./_getNative",
      "./_root"
    ],
    "npm:lodash@4.16.1/_Set.js": [
      "./_getNative",
      "./_root"
    ],
    "npm:lodash@4.16.1/_toSource.js": [
      "@empty"
    ],
    "npm:lodash@4.16.1/_WeakMap.js": [
      "./_getNative",
      "./_root"
    ],
    "npm:lodash@4.16.1/_root.js": [
      "./_freeGlobal"
    ],
    "npm:lodash@4.16.1/_Stack.js": [
      "./_ListCache",
      "./_stackClear",
      "./_stackDelete",
      "./_stackGet",
      "./_stackHas",
      "./_stackSet"
    ],
    "npm:lodash@4.16.1/_baseKeysIn.js": [
      "./isObject",
      "./_isPrototype",
      "./_nativeKeysIn"
    ],
    "npm:lodash@4.16.1/_assignMergeValue.js": [
      "./_baseAssignValue",
      "./eq"
    ],
    "npm:lodash@4.16.1/_baseMergeDeep.js": [
      "./_assignMergeValue",
      "./_baseClone",
      "./_copyArray",
      "./isArguments",
      "./isArray",
      "./isArrayLikeObject",
      "./isFunction",
      "./isObject",
      "./isPlainObject",
      "./isTypedArray",
      "./toPlainObject"
    ],
    "npm:lodash@4.16.1/isTypedArray.js": [
      "./_baseIsTypedArray",
      "./_baseUnary",
      "./_nodeUtil"
    ],
    "npm:lodash@4.16.1/_isIterateeCall.js": [
      "./eq",
      "./isArrayLike",
      "./_isIndex",
      "./isObject"
    ],
    "npm:lodash@4.16.1/_baseRest.js": [
      "./identity",
      "./_overRest",
      "./_setToString"
    ],
    "npm:inline-style-transformer@1.1.1/lib/utils/isNumber.js": [
      "unitless-css-property"
    ],
    "npm:core-js@1.2.7/library/modules/$.iobject.js": [
      "./$.cof"
    ],
    "npm:understyle@1.3.0/dist/index.js": [
      "./understyle",
      "./display",
      "./flex",
      "./margin",
      "./padding",
      "./column"
    ],
    "npm:lodash@4.16.1/_baseFlatten.js": [
      "./_arrayPush",
      "./_isFlattenable"
    ],
    "npm:inline-style-prefix-all@2.0.2/lib/utils/joinPrefixedRules.js": [
      "./camelToDashCase"
    ],
    "npm:lodash@4.16.1/_baseGet.js": [
      "./_castPath",
      "./_isKey",
      "./_toKey"
    ],
    "npm:lodash@4.16.1/_assignValue.js": [
      "./_baseAssignValue",
      "./eq"
    ],
    "npm:lodash@4.16.1/_copyObject.js": [
      "./_assignValue",
      "./_baseAssignValue"
    ],
    "npm:lodash@4.16.1/keys.js": [
      "./_arrayLikeKeys",
      "./_baseKeys",
      "./isArrayLike"
    ],
    "npm:bowser@1.4.6.js": [
      "npm:bowser@1.4.6/src/bowser.js"
    ],
    "npm:core-js@1.2.7/library/modules/$.ctx.js": [
      "./$.a-function"
    ],
    "npm:core-js@1.2.7/library/modules/$.an-object.js": [
      "./$.is-object"
    ],
    "npm:react@15.3.2/lib/getEventKey.js": [
      "./getEventCharCode"
    ],
    "npm:inline-style-linter@0.2.8/lib/utils/unprefixStyles.js": [
      "./unprefixProperty",
      "./unprefixValue"
    ],
    "npm:fbjs@0.8.4/lib/containsNode.js": [
      "./isTextNode"
    ],
    "npm:fbjs@0.8.4/lib/camelizeStyleName.js": [
      "./camelize"
    ],
    "npm:fbjs@0.8.4/lib/hyphenateStyleName.js": [
      "./hyphenate"
    ],
    "npm:react@15.3.2/lib/quoteAttributeValueForBrowser.js": [
      "./escapeTextContentForBrowser"
    ],
    "npm:react@15.3.2/lib/ReactErrorUtils.js": [
      "process"
    ],
    "npm:react@15.3.2/lib/getTextContentAccessor.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@15.3.2/lib/Danger.js": [
      "./reactProdInvariant",
      "./DOMLazyTree",
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/createNodesFromMarkup",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactMultiChildUpdateTypes.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@15.3.2/lib/ReactServerUpdateQueue.js": [
      "./ReactUpdateQueue",
      "./Transaction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/accumulateInto.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMSelection.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./getNodeForCharacterOffset",
      "./getTextContentAccessor"
    ],
    "npm:react@15.3.2/lib/dangerousStyleValue.js": [
      "./CSSProperty",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/LinkedValueUtils.js": [
      "./reactProdInvariant",
      "./ReactPropTypes",
      "./ReactPropTypeLocations",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactChildReconciler.js": [
      "./ReactReconciler",
      "./instantiateReactComponent",
      "./KeyEscapeUtils",
      "./shouldUpdateReactComponent",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "./ReactComponentTreeHook",
      "process"
    ],
    "npm:react@15.3.2/lib/flattenChildren.js": [
      "./KeyEscapeUtils",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "./ReactComponentTreeHook",
      "process"
    ],
    "npm:fbjs@0.8.4/lib/performance.js": [
      "./ExecutionEnvironment"
    ],
    "npm:lodash@4.16.1/_ListCache.js": [
      "./_listCacheClear",
      "./_listCacheDelete",
      "./_listCacheGet",
      "./_listCacheHas",
      "./_listCacheSet"
    ],
    "npm:lodash@4.16.1/_getNative.js": [
      "./_baseIsNative",
      "./_getValue"
    ],
    "npm:lodash@4.16.1/_stackClear.js": [
      "./_ListCache"
    ],
    "npm:lodash@4.16.1/_stackSet.js": [
      "./_ListCache",
      "./_Map",
      "./_MapCache"
    ],
    "npm:lodash@4.16.1/_baseClone.js": [
      "./_Stack",
      "./_arrayEach",
      "./_assignValue",
      "./_baseAssign",
      "./_cloneBuffer",
      "./_copyArray",
      "./_copySymbols",
      "./_getAllKeys",
      "./_getTag",
      "./_initCloneArray",
      "./_initCloneByTag",
      "./_initCloneObject",
      "./isArray",
      "./isBuffer",
      "./isObject",
      "./keys"
    ],
    "npm:lodash@4.16.1/_baseIsTypedArray.js": [
      "./isLength",
      "./isObjectLike"
    ],
    "npm:lodash@4.16.1/toPlainObject.js": [
      "./_copyObject",
      "./keysIn"
    ],
    "npm:lodash@4.16.1/_nodeUtil.js": [
      "./_freeGlobal",
      "@empty"
    ],
    "npm:lodash@4.16.1/_overRest.js": [
      "./_apply"
    ],
    "npm:lodash@4.16.1/_setToString.js": [
      "./_baseSetToString",
      "./_shortOut"
    ],
    "npm:unitless-css-property@1.0.2.js": [
      "npm:unitless-css-property@1.0.2/modules/index.js"
    ],
    "npm:understyle@1.3.0/dist/display.js": [
      "object-assign",
      "./prefix"
    ],
    "npm:understyle@1.3.0/dist/understyle.js": [
      "object-assign",
      "./display",
      "./flex",
      "./margin",
      "./padding",
      "./column"
    ],
    "npm:understyle@1.3.0/dist/flex.js": [
      "object-assign",
      "./prefix"
    ],
    "npm:understyle@1.3.0/dist/margin.js": [
      "object-assign",
      "./get-number-prop",
      "./initial-scale"
    ],
    "npm:understyle@1.3.0/dist/padding.js": [
      "object-assign",
      "./get-number-prop",
      "./initial-scale"
    ],
    "npm:understyle@1.3.0/dist/column.js": [
      "object-assign",
      "./get-prop"
    ],
    "npm:lodash@4.16.1/_isKey.js": [
      "./isArray",
      "./isSymbol"
    ],
    "npm:lodash@4.16.1/_isFlattenable.js": [
      "./_Symbol",
      "./isArguments",
      "./isArray"
    ],
    "npm:lodash@4.16.1/_toKey.js": [
      "./isSymbol"
    ],
    "npm:lodash@4.16.1/_castPath.js": [
      "./isArray",
      "./_stringToPath"
    ],
    "npm:lodash@4.16.1/_baseKeys.js": [
      "./_isPrototype",
      "./_nativeKeys"
    ],
    "npm:lodash@4.16.1/_arrayLikeKeys.js": [
      "./_baseTimes",
      "./isArguments",
      "./isArray",
      "./_isIndex"
    ],
    "npm:fbjs@0.8.4/lib/isTextNode.js": [
      "./isNode"
    ],
    "npm:fbjs@0.8.4/lib/createNodesFromMarkup.js": [
      "./ExecutionEnvironment",
      "./createArrayFromMixed",
      "./getMarkupWrap",
      "./invariant",
      "process"
    ],
    "npm:lodash@4.16.1/_listCacheGet.js": [
      "./_assocIndexOf"
    ],
    "npm:lodash@4.16.1/_listCacheHas.js": [
      "./_assocIndexOf"
    ],
    "npm:lodash@4.16.1/_listCacheSet.js": [
      "./_assocIndexOf"
    ],
    "npm:lodash@4.16.1/_listCacheDelete.js": [
      "./_assocIndexOf"
    ],
    "npm:lodash@4.16.1/_baseIsNative.js": [
      "./isFunction",
      "./_isMasked",
      "./isObject",
      "./_toSource"
    ],
    "npm:lodash@4.16.1/_baseAssign.js": [
      "./_copyObject",
      "./keys"
    ],
    "npm:lodash@4.16.1/_MapCache.js": [
      "./_mapCacheClear",
      "./_mapCacheDelete",
      "./_mapCacheGet",
      "./_mapCacheHas",
      "./_mapCacheSet"
    ],
    "npm:lodash@4.16.1/_cloneBuffer.js": [
      "@empty"
    ],
    "npm:lodash@4.16.1/_getAllKeys.js": [
      "./_baseGetAllKeys",
      "./_getSymbols",
      "./keys"
    ],
    "npm:lodash@4.16.1/_copySymbols.js": [
      "./_copyObject",
      "./_getSymbols"
    ],
    "npm:lodash@4.16.1/_initCloneByTag.js": [
      "./_cloneArrayBuffer",
      "./_cloneDataView",
      "./_cloneMap",
      "./_cloneRegExp",
      "./_cloneSet",
      "./_cloneSymbol",
      "./_cloneTypedArray"
    ],
    "npm:lodash@4.16.1/_initCloneObject.js": [
      "./_baseCreate",
      "./_getPrototype",
      "./_isPrototype"
    ],
    "npm:lodash@4.16.1/keysIn.js": [
      "./_arrayLikeKeys",
      "./_baseKeysIn",
      "./isArrayLike"
    ],
    "npm:lodash@4.16.1/_baseSetToString.js": [
      "./constant",
      "./identity",
      "./_nativeDefineProperty"
    ],
    "npm:unitless-css-property@1.0.2/modules/index.js": [
      "hyphenate-style-name"
    ],
    "npm:lodash@4.16.1/isSymbol.js": [
      "./isObjectLike"
    ],
    "npm:lodash@4.16.1/_Symbol.js": [
      "./_root"
    ],
    "npm:lodash@4.16.1/_stringToPath.js": [
      "./_memoizeCapped",
      "./toString"
    ],
    "npm:fbjs@0.8.4/lib/createArrayFromMixed.js": [
      "./invariant",
      "process"
    ],
    "npm:fbjs@0.8.4/lib/getMarkupWrap.js": [
      "./ExecutionEnvironment",
      "./invariant",
      "process"
    ],
    "npm:lodash@4.16.1/_assocIndexOf.js": [
      "./eq"
    ],
    "npm:lodash@4.16.1/_mapCacheDelete.js": [
      "./_getMapData"
    ],
    "npm:lodash@4.16.1/_mapCacheClear.js": [
      "./_Hash",
      "./_ListCache",
      "./_Map"
    ],
    "npm:lodash@4.16.1/_isMasked.js": [
      "./_coreJsData"
    ],
    "npm:lodash@4.16.1/_mapCacheGet.js": [
      "./_getMapData"
    ],
    "npm:lodash@4.16.1/_baseGetAllKeys.js": [
      "./_arrayPush",
      "./isArray"
    ],
    "npm:lodash@4.16.1/_mapCacheHas.js": [
      "./_getMapData"
    ],
    "npm:lodash@4.16.1/_mapCacheSet.js": [
      "./_getMapData"
    ],
    "npm:lodash@4.16.1/_getSymbols.js": [
      "./_overArg",
      "./stubArray"
    ],
    "npm:lodash@4.16.1/_cloneArrayBuffer.js": [
      "./_Uint8Array"
    ],
    "npm:lodash@4.16.1/_cloneDataView.js": [
      "./_cloneArrayBuffer"
    ],
    "npm:lodash@4.16.1/_cloneMap.js": [
      "./_addMapEntry",
      "./_arrayReduce",
      "./_mapToArray"
    ],
    "npm:lodash@4.16.1/_cloneSet.js": [
      "./_addSetEntry",
      "./_arrayReduce",
      "./_setToArray"
    ],
    "npm:lodash@4.16.1/_cloneSymbol.js": [
      "./_Symbol"
    ],
    "npm:lodash@4.16.1/_baseCreate.js": [
      "./isObject"
    ],
    "npm:lodash@4.16.1/_cloneTypedArray.js": [
      "./_cloneArrayBuffer"
    ],
    "npm:hyphenate-style-name@1.0.1.js": [
      "npm:hyphenate-style-name@1.0.1/index.js"
    ],
    "npm:lodash@4.16.1/_nativeDefineProperty.js": [
      "./_getNative"
    ],
    "npm:lodash@4.16.1/_memoizeCapped.js": [
      "./memoize"
    ],
    "npm:lodash@4.16.1/toString.js": [
      "./_baseToString",
      "@empty"
    ],
    "npm:lodash@4.16.1/_coreJsData.js": [
      "./_root"
    ],
    "npm:lodash@4.16.1/_getMapData.js": [
      "./_isKeyable"
    ],
    "npm:lodash@4.16.1/_Hash.js": [
      "./_hashClear",
      "./_hashDelete",
      "./_hashGet",
      "./_hashHas",
      "./_hashSet"
    ],
    "npm:lodash@4.16.1/_Uint8Array.js": [
      "./_root"
    ],
    "npm:lodash@4.16.1/memoize.js": [
      "./_MapCache"
    ],
    "npm:lodash@4.16.1/_baseToString.js": [
      "./_Symbol",
      "./isSymbol",
      "@empty"
    ],
    "npm:lodash@4.16.1/_hashClear.js": [
      "./_nativeCreate"
    ],
    "npm:lodash@4.16.1/_hashGet.js": [
      "./_nativeCreate"
    ],
    "npm:lodash@4.16.1/_hashHas.js": [
      "./_nativeCreate"
    ],
    "npm:lodash@4.16.1/_hashSet.js": [
      "./_nativeCreate"
    ],
    "npm:lodash@4.16.1/_nativeCreate.js": [
      "./_getNative"
    ]
  },

  map: {
    "TypeScript": "npm:babel-core@5.8.38",
    "TypeScript-runtime": "npm:babel-runtime@5.8.38",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "es6-promise": "npm:es6-promise@3.3.1",
    "fetch-jsonp": "npm:fetch-jsonp@1.0.1",
    "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
    "lodash": "npm:lodash@4.16.1",
    "moment": "npm:moment@2.15.1",
    "react": "npm:react@15.3.2",
    "react-addons-create-fragment": "npm:react-addons-create-fragment@15.3.2",
    "react-dom": "npm:react-dom@15.3.2",
    "react-look": "npm:react-look@1.0.1",
    "react-skycons": "npm:react-skycons@0.3.0",
    "reflexbox": "npm:reflexbox@2.2.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:asap@2.0.4": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:es6-promise@2.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:es6-promise@3.3.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.8.4": {
      "core-js": "npm:core-js@1.2.7",
      "immutable": "npm:immutable@3.8.1",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:fetch-jsonp@1.0.1": {
      "es6-promise": "npm:es6-promise@2.3.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inline-style-linter@0.2.8": {
      "object-assign": "npm:object-assign@4.1.0"
    },
    "npm:inline-style-prefixer@1.0.4": {
      "bowser": "npm:bowser@1.4.6",
      "inline-style-prefix-all": "npm:inline-style-prefix-all@2.0.2"
    },
    "npm:inline-style-transformer@1.1.1": {
      "unitless-css-property": "npm:unitless-css-property@1.0.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.2",
      "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:node-fetch@1.6.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-addons-create-fragment@15.3.2": {
      "react": "npm:react@15.3.2"
    },
    "npm:react-dom@15.3.2": {
      "react": "npm:react@15.3.2"
    },
    "npm:react-look-core@1.0.1": {
      "assign-styles": "npm:assign-styles@2.0.0",
      "inline-style-transformer": "npm:inline-style-transformer@1.1.1",
      "lodash": "npm:lodash@4.16.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-look@1.0.1": {
      "assign-styles": "npm:assign-styles@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inline-style-linter": "npm:inline-style-linter@0.2.8",
      "inline-style-prefix-all": "npm:inline-style-prefix-all@2.0.2",
      "inline-style-prefixer": "npm:inline-style-prefixer@1.0.4",
      "inline-style-transformer": "npm:inline-style-transformer@1.1.1",
      "lodash": "npm:lodash@4.16.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.2",
      "react-dom": "npm:react-dom@15.3.2",
      "react-look-core": "npm:react-look-core@1.0.1"
    },
    "npm:react-skycons@0.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.2",
      "react-dom": "npm:react-dom@15.3.2",
      "skycons": "npm:skycons@1.0.0"
    },
    "npm:react@15.3.2": {
      "fbjs": "npm:fbjs@0.8.4",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:reflexbox@2.2.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.2",
      "robox": "npm:robox@1.0.0-beta.8",
      "ruled": "npm:ruled@1.0.1"
    },
    "npm:robox@1.0.0-beta.8": {
      "understyle": "npm:understyle@1.3.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:understyle@1.3.0": {
      "object-assign": "npm:object-assign@4.1.0"
    },
    "npm:unitless-css-property@1.0.2": {
      "hyphenate-style-name": "npm:hyphenate-style-name@1.0.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
