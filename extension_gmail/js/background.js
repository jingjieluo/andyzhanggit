
function sendTest(fn){
    chrome.tabs.query({active: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{
                greeting: "hello to content script!"
            },function(response){
                orders=response;
                fn(orders);
            });
    });
}

function jdGcSum(fn){
    chrome.tabs.query( {active: true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{
                greeting: "jd gift card sum"
            },function(response){
                sum=response;
                fn(sum);
            });
    });
}


function amazonUsCheck(fn){
    chrome.tabs.query({active:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{
            greeting:"amazon us tracking url get"
        },function(response){
            fn(response);
        });
    });
}  
/*
function trackCheck(fn){
    chrome.tabs.query({active: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{
                greeting: "tracking_numbers check"
            },function(response){
                orders=response;
                fn(orders);
            });
    });
}   */ 
    