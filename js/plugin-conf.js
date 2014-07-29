define(['require',
    'github:pieroxy/lz-string@release/libs/lz-string-1.3.3-min',
    './index.html!text',
    './style.css!text',
    '#google Exo 2:300 !font'
    ], function(require, LZString, htmlTemp, cssTemp) {

    var pluginConf = {
        name: "Hya Sequencer",
        version: '0.0.1',
        hyaId: 'HSEQ',
        ui: {
            type: 'div',
            width: 600,
            height: 460,
            html: htmlTemp,
            css: cssTemp
        }
    };