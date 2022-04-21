function bypass() {
    let text = prompt("Welcome to DoorDash\nenter url, the one already there is Google. make sure to start with http://, https://, or //.\nOR enter 'p' to go to a proxy site.\n\n\n-luphoria",placeholder="//www.google.com/?igu=1") //prompts user to input a url
    document.getElementsByTagName("html")[0].innerHTML = ' <object data="'+text+'"    type="text/html" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%" >    </object>';
}

bypass();
