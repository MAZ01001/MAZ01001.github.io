let something = document.createElement("div"),
    menuBox = document.createElement("div");
menuBox.style.position = 'fixed';
menuBox.style.zIndex = '50';
menuBox.style.width = '2em';
menuBox.style.height = '2em';
menuBox.style.backgroundColor = '#fff';
menuBox.id = 'menuBox';
menuBox.hidden = true;
something.style.position = 'fixed';
something.style.transform = 'translate(-50%,-50%)';
something.style.top = '50%';
something.style.left = '50%';
something.style.zIndex = '30';
something.style.width = '2em';
something.style.height = '2em';
something.style.backgroundColor = '#000';
something.style.cursor = 'help';
something.addEventListener("contextmenu", event => {
    event.preventDefault();
    document.getElementById('menuBox').hidden = false;
    document.getElementById('menuBox').style.top = event.clientY + "px";
    document.getElementById('menuBox').style.left = event.clientX + "px";
});
document.body.appendChild(something);
document.body.appendChild(menuBox);
document.body.addEventListener('mousedown', event => {
    let noMenu=true;
    document.body.getElementsByClassName('menuBox').forEach(element => {
        event.target!=element?noMenu=noMenu:noMenu=true;
    });
    menuBox.hidden = true;
});

function setCssArg(sel='',arg='',val='',create=false) {
    for(const sheet in document.styleSheets){
        if (document.styleSheets.hasOwnProperty(sheet)) {
            for (const rule in document.styleSheets[sheet.cssRules]) {
                if (document.styleSheets[sheet.cssRules].hasOwnProperty(rule)) {
                    if(rule.selectorText==sel){
                        for (let i = 0; i < rule.style.length; i++) {
                            if(rule.style[i]==arg){
                                rule.style[arg]=val;
                                for(const styleTag in document.head.getElementsByTagName('style')){
                                    if(styleTag.innerText.search(RegExp('}?'+sel+'{'))){
                                        if (styleTag.innerText.search(RegExp('}?'+sel+'{.*'+arg+'.*}'))) {
                                            
                                        }
                                    }
                                }
                                return true;
                            }
                        }
                        if (create) {
                            rule.style[rule.style.length] = arg;
                            rule.style[arg] = val;
                            return true;
                        }
                    }
                }
            }
        }
    }
    if (create) {
        document.head.innerHTML+=`\n<style>\n${sel}{\n${arg}: ${val};\n}\n</style>`;
        return true;
    }
    return false;
}