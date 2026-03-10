import { stripBasePath } from "@/utils/stripBasePath";

export const linkClick = (router, url) => {
    if(url.startsWith('/docs/')===true){
        router.push(stripBasePath(url));
    }else{
        window.open(url, '_blank').focus();
    }

}
