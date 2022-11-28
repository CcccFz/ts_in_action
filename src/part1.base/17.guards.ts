enum LangType {Strong, Week}

class Java {
    helloJava() {
        console.log('Hello Java')
    }
    java: any
}

class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript')
    }
    js: any
}

function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}

function getLang(type: LangType) {
    let lang = type === LangType.Strong ? new Java() : new JavaScript()

    if (isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }

    if ((lang as Java).helloJava) {

    } else {

    }

    if (lang instanceof Java) {

    } else {

    }

    if ('java' in lang) {

    } else {

    }
}