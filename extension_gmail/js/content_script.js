chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {    
    if (request.greeting === "hello to content script!"){
        var string_tag=document.getElementsByClassName('Bs nH iY');
        var orders=new Array();
        var string=string_tag[0].innerHTML;
        var p=/id="\w+\@\d{3}\.\w{3}/gi;//match order_emails
        order_emails=string.match(p);
        //order_emails=JSON.stringify(order_emails);
        p=/\>(\d{3}\-\d{7}\-\d{7})\</gi;//match rder_numbers
        order_numbers=string.match(p);
        //order_numbers=JSON.stringify(order_numbers);
        p=/\s\d{12}\./gi;//match order tracking_numbers
        order_tracking_numbers=string.match(p);
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

/*
//order shipped emails
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {    
    if (request.greeting === "tracking_numbers check"){
        var string=document.getElementsByClassName('Tm aeJ')[0].getElementsByClassName('Cp')[0].getElementsByTagName('tr');
        var i=0;
        var orders=new Array();
        var order_emails=new Array(),order_numbers=new Array(),order_tracking_links=new Array();
        var checkInterval = setInterval(function(){     
                //if(i<string.length){
                if(i<10){           
                    if(window.location.hash != '#label/2%E5%8F%91%E8%B4%A7%E5%88%B0%E8%B4%A7'){
                    if(document.title.indexOf('Your Amazon.com order')!=-1) {           
                        var string_target=document.getElementsByClassName('Bs nH iY')[0].innerHTML;
                        var p=/\w+\@\d{3}\.\w{3}/gi;//match order_emails
                        order_emails[i]=string_target.match(p)[0];
                        p=/(\d{3}\-\d{7}\-\d{7})\</gi;//match rder_numbers
                        order_numbers[i]=string_target.match(p)[0].replace(/\>|\</gi,"");
                        var string_link=document.getElementsByClassName('Bs nH iY')[0].getElementsByTagName('a');
                        order_tracking_links[i]=string_link[4].href;//match order tracking_links
                        history.back();
                        i++;
                        console.log(order_emails);
                         }
                    else  {
                            i++;
                            history.back();
                            }   
                    }
                    else {
                        console.log('打开第'+(i+1)+'个邮件列表');
                        string[i].click();
                    }
                }
                else {
                    clearInterval(checkInterval);
                    orders={emails:order_emails,order_numbers:order_numbers,order_tracking_links:order_tracking_links};
                    console.log(orders);
                }
        }, 2000);
        sendResponse(orders);
    }
});*/

