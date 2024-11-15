function removeADs() {
        let adlist_A = document.querySelectorAll('#b_results>li.b_ad');
        let adArray_A = Array.from(adlist_A);
        for (let i = 0; i < adArray_A.length; i++) {
                adArray_A[i].remove();
        };
        let regex = /^(?!title|subtitle)[a-z]{2,10}$/;
        let adlist_B = document.querySelectorAll('p');
        let adArray_B = Array.from(adlist_B).filter(div => regex.test(div.className));
        for (let i = 0; i < adArray_B.length; i++) {
                adArray_B[i].parentElement.parentElement.remove();
        };
        let adlist_C = document.getElementsByClassName('b_algoSlug');
        let adArray_C = Array.from(adlist_C);
        for (let i = 0; i < adArray_C.length; i++) {
                adArray_C[i].parentElement.parentElement.remove();
        };
};
function removeimageADs(){
        let ad_on_image =  document.querySelectorAll('div.ta_c');
        let adArray_image = Array.from(ad_on_image);
        for (let i = 0; i < adArray_image.length; i++) {
                adArray_image[i].remove();
        };
};
window.onload = function(){
        removeADs;
        setInterval(removeADs, 500);
        removeimageADs;
        setInterval(removeimageADs, 250);
};