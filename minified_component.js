function setOrganizationCode(c){let d=document.getElementById("career-page"),a=new XMLHttpRequest;a.open("POST","https://search.torre.co/opportunities/_search?size=100",!1),a.setRequestHeader("Content-Type","application/json"),a.send(JSON.stringify({organization:{code:c}}));let e=JSON.parse(a.response),b='<ul class="job-list">';e.results.forEach(c=>{let a=c.compensation?.data,e=c.id,f=c.remote,d=c.locations;b+='<li class="job-list__item">',b+=`<a href="https://torre.co/post/${e}" class="job-list__item--title">${c.objective}</a><br/>`,a&&"fixed"===a.code?b+=`<span class="job-list__item--compensation">${a.currency}${a.minAmount}/${a.periodicity}</span><br/>`:a&&"range"===a.code&&(b+=`<span class="job-list__item--compensation">${a.currency}${a.minAmount} - ${a.maxAmount}/${a.periodicity}</span><br/>`),f&&0==d.length?b+='<span class="job-list__item--location">Remote</span><br/>':d.length>0?b+=`<span class="job-list__item--location">${d[0]}</span><br/>`:b+='<span class="job-list__item--location">Unknown</span><br/>',b+=`<a href="https://torre.co/post/${e}" class="job-list__item--CTA">View Job</a>`,b+="</li>"}),b+="</ul>",d.innerHTML=b}