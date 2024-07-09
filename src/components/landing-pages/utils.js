export const linkClick = (router, url) => {
    if(url.startsWith('/docs/')===true){
        router.push(url);
    }else{
        window.open(url, '_blank').focus();
    }
    
}