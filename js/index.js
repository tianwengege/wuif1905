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


    let current=0,next=0;
    let rightBtn = document.querySelector('.rightBtn');
    let leftBtn = document.querySelector('.leftBtn');
    let bannerImg = document.querySelectorAll('.bannerImg>li');
    let w=bannerImg[0].offsetWidth;
    let flag=true;


    rightBtn.onmouseenter=function () {
            this.style.backgroundColor='#00c1de';
        }
    rightBtn.onmouseleave=function () {
            this.style.backgroundColor='#fff';
        }



    rightBtn.onclick=function () {
        if (!flag) {
            return;
        }
        flag=false;
        next++;
        if (next == bannerImg.length) {
            next = 0;
        }
        bannerPoint[current].classList.remove('hot')
        bannerPoint[next].classList.add('hot');
        bannerImg[next].style.left=-w+'px';
        animate(bannerImg[current],{left:w})
        animate(bannerImg[next],{left:0},function () {
                flag=true  ;
        })
        current=next;
    }
    leftBtn.onclick=function () {
        if (!flag) {
            return;
        }
        flag=false;
        next--;
        if (next<0) {
            next = bannerImg.length-1;
        }
        bannerPoint[current].classList.remove('hot')
        bannerPoint[next].classList.add('hot');
        bannerImg[next].style.left=w+'px';
        animate(bannerImg[current],{left:-w})
        animate(bannerImg[next],{left:0},function () {
            flag=true  ;
        });
        current=next;
    }

    // 轮播图自己动
    // setInterval(rightBtn.onclick,1000);

    // 鼠标移入轮播图暂停

    let bannerLeft=document.querySelector('.bannerLeft');
    let t=setInterval(rightBtn.onclick,3000);
    bannerLeft.onmouseenter=function () {
        clearInterval(t);
    };
    bannerLeft.onmouseleave=function () {
        t=setInterval(rightBtn.onclick,3000);
    };


   // 小点控制轮播图
    for (let i=0;i<bannerPoint.length;i++){
        bannerPoint[i].onclick=function () {
            if (next===i){
                return;
            }
            next=i;
            if(next>current){
                bannerImg[next].style.left=w+'px';
                animate(bannerImg[current],{left:-w})
                animate(bannerImg[next],{left:0});
            }else {
                bannerImg[next].style.left=-w+'px';
                animate(bannerImg[current],{left:w})
                animate(bannerImg[next],{left:0});
            }
            bannerPoint[current].classList.remove('hot')
            bannerPoint[next].classList.add('hot');
            current=next;
        }
    }




}