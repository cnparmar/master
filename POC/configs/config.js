var basePath = __dirname;

exports.config={

    seleniumAddress:"http://localhost:4444/wd/hub",
    specs:["../tests/*.js"],

    params: {
        siteURL: "https://angularjs.org/"
    },
   
    onPrepare: function () {

        global.requirePO = function (relativePath) {
            return require(basePath + '/../pages/' + relativePath + '.po.js');
        };

        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(3000);
    }
}