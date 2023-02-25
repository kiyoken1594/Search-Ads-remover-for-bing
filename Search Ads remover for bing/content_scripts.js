window.onload = function () {
        const adlist_A = document.querySelectorAll('#b_results>li.b_ad');
        const adArray_A = Array.from(adlist_A);
        for (let i = 0; i < adArray_A.length; i++) {
                adArray_A[i].remove();
        };
        const regex = /^(?!title|subtitle)[a-z]{2,10}$/;
        const adlist_B = document.querySelectorAll('p');
        const adArray_B = Array.from(adlist_B).filter(div => regex.test(div.className));
        for (let i = 0; i < adArray_B.length; i++) {
                adArray_B[i].parentElement.parentElement.remove();
        };
};