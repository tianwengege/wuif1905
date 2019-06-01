window.onload = function () {

    let home=document.getElementById('home');
    home.onmouseenter = function () {
        home.style.color='red';
    }
    home.onmouseleave = function () {
        home.style.color='#fff';
    }

    let btnList=document.getElementsByClassName('btnList');
    let bannerPoint=btnList[0].getElementsByTagName('li');

    // for(let i=0;i<bannerPoint.length;i++){
    //     bannerPoint[i].onmouseenter=function () {
    //         this.style.backgroundColor='#00c1de';
    //     }
    //     bannerPoint[i].onmouseleave=function () {
    //         this.style.backgroundColor='#fff';
    //     }
    // }
    let tabList=document.querySelectorAll('.tabList > li' );
    for(var i=0;i<tabList.length;i++){
        tabList[i].onmouseenter=(function (i) {
            return function () {
                for(let j=0;j<tabList.length;j++){
                    tabList[j].classList.remove('hot');
                }
                tabList[i].classList.add( 'hot');
            }
        })(i)
        tabList[i].onmouseleave=(function (i) {
            return function () {
                for(let j=0;j<tabList.length;j++){
                    tabList[j].classList.remove('hot');
                }
                tabList[0].classList.add( 'hot');
            }
        })(i)
    }

    let index=0;
    let rightBtn = document.querySelector('.rightBtn');
    let leftBtn = document.querySelector('.leftBtn');
    let bannerImg = document.querySelectorAll('.bannerImg>li');

    rightBtn.onclick=function () {
        index++;
        if (index == bannerImg.length) {
            index = 0;
        }
        bannerImg.forEach(function (ele) {
            ele.style.zIndex = 1;
        });
        Array.prototype.forEach.call(bannerPoint,function (elem) {
            elem.classList.remove('hot')
        });
        bannerPoint[index].classList.add('hot');

        bannerImg[index].style.zIndex = 999;

    }


    leftBtn.onclick=function () {
        index--;
        if (index<=0) {
            index = bannerImg.length-1;
        }
        bannerImg.forEach(function (ele) {
            ele.style.zIndex = 1;
        });
        Array.prototype.forEach.call(bannerPoint,function (elem) {
            elem.classList.remove('hot')
        });
        bannerPoint[index].classList.add('hot');

        bannerImg[index].style.zIndex = 999;
    }

    // // 轮播图自己动
    // setInterval(rightBtn.onclick,2000);
    // 鼠标移入轮播图暂停

    let bannerLeft=document.querySelector('.bannerLeft');
    let t=setInterval(rightBtn.onclick,1000);
    bannerLeft.onmouseenter=function () {
        clearInterval(t);
    };
    bannerLeft.onmouseleave=function () {
        t=setInterval(rightBtn.onclick,1000);
    };

    // 小点控制轮播图
    for (let i=0;i<bannerPoint.length;i++){
        bannerPoint[i].li=i;
        bannerPoint[i].onclick=function () {
            index=this.li;
            bannerImg.forEach(function (ele) {
                ele.style.zIndex = 1;
            });

            // 小点随轮播动
            Array.prototype.forEach.call(bannerPoint,function (elem) {
                elem.classList.remove('hot')
            });
            this.classList.add('hot');
            bannerImg[this.li].style.zIndex = 999;
        }
    }




}