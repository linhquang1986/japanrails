const getCurrentTime = (): string => {
    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const today = (day) + "/" + (month) + "/" + now.getFullYear();
    return today;
}

const removeTagRoute = (modifyHtml: string): string => {
    modifyHtml = modifyHtml.replace(/(<(pre|script|style|textarea)[^]+?<\/\2)|(^|>>)\s+|\s+(?=<|$)/g, " ");
    // modifyHtml = modifyHtml.replace(/<div.*class=.bnr_default.*[\n]+.*?<\/div>/g, " ");
    modifyHtml = modifyHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/ig, " ")
    modifyHtml = modifyHtml.replace(/<a\b[^<]*(?:(?!<\/a>)<[^<]*)*<\/a>/ig, " ")
    modifyHtml = modifyHtml.replace(/mln\/img|https:\/\/mb.jorudan.co.jp\/os\/img\/rmark|\/mln\/img\/number/ig, "../../img")
    
    // modifyHtml = modifyHtml.replace(/<div class="hyouka".*?<\/div>/ig, " ");

    return modifyHtml;

}
export { getCurrentTime, removeTagRoute };
