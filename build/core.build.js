({
    optimize: "none",
    preserveLicenseComments: false,
    baseUrl: "../",
    paths: {
        "text" : "build/text", // plugin for pulling in text! files
        "core" : "plugins-client/cloud9.core/www/core",
        "treehugger" : "node_modules/treehugger/lib/treehugger",
        "debug": "node_modules/v8debug/lib/v8debug",  
        "ext/main": "plugins-client/ext.main",
        "apf-packaged": "plugins-client/lib.apf/www/apf-packaged"
    },
    include: [
        "node_modules/ace/build/src/ace",
        "node_modules/ace/build/src/ace",
        "node_modules/ace/build/src/theme-chrome",
        "node_modules/ace/build/src/theme-clouds",
        "node_modules/ace/build/src/theme-clouds_midnight",
        "node_modules/ace/build/src/theme-cobalt",
        "node_modules/ace/build/src/theme-crimson_editor",
        "node_modules/ace/build/src/theme-dawn",
        "node_modules/ace/build/src/theme-eclipse",
        "node_modules/ace/build/src/theme-idle_fingers",
        "node_modules/ace/build/src/theme-kr_theme",
        "node_modules/ace/build/src/theme-merbivore",
        "node_modules/ace/build/src/theme-merbivore_soft",
        "node_modules/ace/build/src/theme-mono_industrial",
        "node_modules/ace/build/src/theme-monokai",
        "node_modules/ace/build/src/theme-pastel_on_dark",
        "node_modules/ace/build/src/theme-solarized_dark",
        "node_modules/ace/build/src/theme-solarized_light",
        "node_modules/ace/build/src/theme-textmate",
        "node_modules/ace/build/src/theme-tomorrow",
        "node_modules/ace/build/src/theme-tomorrow_night",
        "node_modules/ace/build/src/theme-tomorrow_night_blue",
        "node_modules/ace/build/src/theme-tomorrow_night_bright",
        "node_modules/ace/build/src/theme-tomorrow_night_eighties",
        "node_modules/ace/build/src/theme-twilight",
        "node_modules/ace/build/src/theme-vibrant_ink",
        "apf-packaged/apf_release",
        "core/document", 
        "core/ext", 
        "core/ide", 
        "core/settings", 
        "core/util", 
        "ext/main/main", 
        "treehugger/traverse",
        "treehugger/js/parse",
        "debug/Breakpoint",
        "debug/ChromeDebugMessageStream",
        "debug/WSChromeDebugMessageStream",
        "debug/WSV8DebuggerService",
        "debug/DevToolsService",
        "debug/StandaloneV8DebuggerService",
        "debug/V8DebuggerService",
        "debug/V8Debugger"
    ],
    out: "./src/core.packed.js",
    inlineText: true,
    findNestedDependencies: true,
    optimizeAllPluginResources: false,
    useStrict: true,
    wrap: true
})