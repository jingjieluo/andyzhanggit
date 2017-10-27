chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {    
    if (request.greeting === "hello to content script!"){
        var string_tag=document.getElementsByClassName('Bs nH iY');
        var orders=new Array();
        var string=string_tag[0].innerHTML;
        var p=/id="\w+\@\d{3}\.\w{3}/gi;//match order_emails
        order_emails=string.match(p);
        console.log(order_emails);
        //order_emails=JSON.stringify(order_emails);
        p=/\>(\d{3}\-\d{7}\-\d{7})\</gi;//match rder_numbers
        order_numbers=string.match(p);
        console.log(order_numbers);
        //order_numbers=JSON.stringify(order_numbers);
        var string=string_tag[0].innerText;
        p=/\d{12}/gi;//match order tracking_numbers
        order_tracking_numbers=string.match(p);
        console.log(order_tracking_numbers);
        //order_tracking_numbers=JSON.stringify(order_tracking_numbers);
        orders={emails:order_emails,order_numbers:order_numbers,tracking_numbers:order_tracking_numbers};
        sendResponse(orders);
        //console.log(orders);
    }
});

//JD balance
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {    
    if (request.greeting === "jd gift card sum"){
        
        var text_cards=document.getElementsByTagName("tr");
        var sum=0;
        for(var i=1;i<text_cards.length;i++){
            if(text_cards[i].innerHTML.indexOf("co13")){
                var p=/\d+\.\d{2}/gi; 
                sum=sum+parseFloat(text_cards[i].innerText.match(p)[1]);
            }
        }
        sendResponse(sum);
        console.log(sum);
    }
});


//order shipped emails
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.greeting === "amazon us tracking url get"){
         function emailClick(int){
            if(i>5) {
                console.log("查询完毕");
                orders={emails:order_emails,order_numbers:order_numbers,order_tracking_links:order_tracking_links};
                console.log(orders);
                window.clearInterval(int);
                sendResponse("test");
            }
                else{
                     if(location.hash=="#label/2%E5%8F%91%E8%B4%A7%E5%88%B0%E8%B4%A7"){
                        var title=emails[i].getElementsByClassName("bog")[0].innerText;
                        console.log(title);
                        if(title.indexOf("Your Amazon.com order has shipped")>-1) emails[i].click();
                            else i++;
                    }
                    else{
                        string=document.getElementsByClassName('Bs nH iY')[0].innerHTML;
                        p=/\w+\@\d{3}\.\w{3}/gi;//match order_emails
                        order_emails[j]=string.match(p)[0];
                        p=/(\d{3}\-\d{7}\-\d{7})\</gi;//match order_numbers
                        order_numbers[j]=string.match(p)[0].replace(/\>|\</gi,"");
                        order_tracking_links[j]=document.getElementsByClassName('CToWUd')[2].parentNode.href;
                        console.log(order_emails[j]);
                        console.log(order_numbers[j]);
                        console.log(order_tracking_links[j]);
                        console.log(j);
                        window.history.back();
                        i++;
                        j++;
                    }   
                }          
        }
        var emails=document.getElementsByClassName("ae4 UI")[0].getElementsByTagName("tr");
        var i=0,j=0,order_emails=new Array(),order_numbers=new Array(),order_tracking_links=new Array();
        var ins=setInterval(function(){emailClick(ins)},2000);
    }
});

