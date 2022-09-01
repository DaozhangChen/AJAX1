// const { get } = require("http")

// const { getPackedSettings } = require("http2")

// const { brotliDecompressSync } = require("zlib")

// console.log("你好我是JS")
getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload=()=>{
        const div=document.createElement('div')
        div.innerHTML=request.response
        document.body.appendChild(div)
    }
    request.onerror=()=>{}
    request.send()
}


getJS.onclick=()=>{
const request=new XMLHttpRequest()
request.open('GET','/2.js')
request.onload=()=>{
    //创建script标签
    const script=document.createElement('script')
    //填写script内容
    script.innerHTML=request.response
    //插入身体
    document.body.appendChild(script)
}
request.onerror=()=>{}
request.send()
}

getCSS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/style.css');
    request.onreadystatechange=()=>{
if(request.readyState===4){
    if(request.status>=200&&request.status<299){
        request.onload=()=>{
            //创建style标签
            const style=document.createElement('style')
            //填写style内容
            style.innerHTML=request.response
            //插入头里
            document.head.appendChild(style)}
    }else{
        alert('加载CSS失败')
    }
}

    }

request.send()
}

getXML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&& request.status<300){
               const dom=request.responseXML
const text=dom.getElementsByTagName('warning')[0].textContent
console.log(text.trim())
                }else{
                    alert('加载失败')
                }
            }
        }
        request.send()
    }

getJSON.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
              const object=JSON.parse(request.response)
              myName.textContent=object.name
            }
        }
    }
    request.send()
}
let n=1
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n+1}.json`)
    request.onreadystatechange=()=>{
if(request.readyState===4&&request.status===200){
    const array=JSON.parse(request.response)
    array.forEach(item=>{
        const li=document.createElement("li")
        li.textContent=item.id
        xxx.appendChild(li);
    })
    n+=1
}

    }
    request.send()
}
    