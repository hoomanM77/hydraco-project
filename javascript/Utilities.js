///////////////////// about section /////////////////
let imgArray=['images/section1/1.svg','images/section1/3.svg','images/section1/2.svg']
const aboutNavLi=$('#about .tab ul li')
const aboutArticles=$('#about main .articles article')
const aboutImage=$('.about-img')
//////////////////// scroll tracer ////////////////
const scrollTracer=_id('page-tracer')
//////////////////// journal slider ///////////////
const journalDB=[
    {id:1,imageSrc:'images/section2/programming/1.png',time:'1 month ago',title:'JavaScript',type:'#Programming',author:'Hooman Mousavi',description:'1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda consectetur delectus deserunt eveniet ex harum illum.',link:'#'},
    {id:2,imageSrc:'images/section2/programming/2.png',time:'4 days ago',title:'PHP',type:'#Programming',author:'Alireza Alikhani',description:'2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda consectetur delectus deserunt eveniet ex harum illum.',link:'#'},
    {id:3,imageSrc:'images/section2/programming/3.png',time:'2 days ago',title:'HTML5',type:'#Programming',author:'Ahmad Mohammadi',description:'3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda consectetur delectus deserunt eveniet ex harum illum.',link:'#'},
    {id:4,imageSrc:'images/section2/programming/4.png',time:'1 week ago',title:'CSS3',type:'#Programming',author:'Sina Sharifi',description:'4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda consectetur delectus deserunt eveniet ex harum illum.',link:'#'},


    {id:5,imageSrc:'images/section2/network/1.png',time:'6 hours ago',title:'Network Topology',type:'#Network',author:'Reza Ghafari',description:'5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda consectetur delectus deserunt eveniet ex harum illum.',link:'#'},
    {id:6,imageSrc:'images/section2/network/2.png',time:'30 minutes ago',title:'Router Protocols',type:'#Network',author:'Ali Mirzaee',description:'6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda consectetur delectus deserunt eveniet ex harum illum.',link:'#'},
    {id:7,imageSrc:'images/section2/network/3.png',time:'5 days ago',title:'Server Types',type:'#Network',author:'Nazanin Amiri',description:'7Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda consectetur delectus deserunt eveniet ex harum illum.',link:'#'},
    {id:8,imageSrc:'images/section2/network/4.png',time:'23 hours ago',title:'Firewall Tips',type:'#Network',author:'Benyamin Alizadeh',description:'8Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda consectetur delectus deserunt eveniet ex harum illum.',link:'#'},


    {id:9,imageSrc:'images/section2/security/1.png',time:'8 hours ago',title:'Phishing Detection ',type:'#Security',author:'Mohammad Amiri',description:'9Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda consectetur delectus deserunt eveniet ex harum illum.',link:'#'},
    {id:10,imageSrc:'images/section2/security/2.png',time:'45 minutes ago',title:'Password Safety',type:'#Security',author:'Reza Nazari',description:'10Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda consectetur delectus deserunt eveniet ex harum illum.',link:'#'},
    {id:11,imageSrc:'images/section2/security/3.png',time:'10 days ago',title:'Cloud Advantage',type:'#Security',author:'Mitra Babak',description:'11Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda consectetur delectus deserunt eveniet ex harum illum.',link:'#'},
    {id:12,imageSrc:'images/section2/security/4.png',time:'16 hours ago',title:'Malware Detection',type:'#Security',author:'Saeed Ghane',description:'12Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda consectetur delectus deserunt eveniet ex harum illum.',link:'#'},
]

////////////////// hamburger menu //////////////
const hamburgerMenuTag=_id('hamburger-menu')
const slideDownMenu=$('#nav .menu-h .list-h')
///////////////// media query ////////////////
const mediaQuery=window.matchMedia('(min-width:970px)')
//////////////// background switcher ////////////////
const bgSwitch=_q('.switch')
/////////////// journal slider //////////////////
const journalBody=$('.journal-body')
const journalContainer=_q('.journal-slider')
const previousBtn=_q('.prev-slider')
const nextBtn=_q('.next-slider')
const journals=_qAll('.journal')
const nextSlideBtn=_q('.next-btn')
const previousSlideBtn=_q('.left-btn')
///////////// product slider //////////////////
const sliderContainerTag=_q('.slider-container')
const sliderItemTags=_qAll('.slider-item')
const showUpIconManager=_qAll('.showUp-icon-manager')
let mlArray=[0];
//////////// form //////////////////////
const createAccountForm=_q('.createAccountForm')
const nameInput=_id('name')
const emailInput=_id('email')
const usernameInput=_id('username')
const passwordInput=_id('password')
const countryInput=_id('country')
const stateInput=_id('state')
const showPasswordIcon=_q('.show-password-icon')
//////////////////// tooltip //////////////
const tooltips=_qAll('.tooltip-h')
/////////////////////// scroll to Top //////////////////
const scrollToTop=_q('.scrollToTop')
/////////////// Catching Elements with functions////////////////////
function _id(tag) {
    return  document.getElementById(tag)
}
function _class(tag) {
    return document.getElementsByClassName(tag)
}
function _q(tag) {
    return document.querySelector(tag)
}
function _qAll(tag) {
    return document.querySelectorAll(tag)
}
/////////////////////////////////// export /////////////////////////
export {imgArray,journalDB,hamburgerMenuTag,slideDownMenu,mediaQuery,bgSwitch,aboutNavLi,aboutArticles,aboutImage,journals,journalBody,journalContainer,previousBtn,nextBtn,sliderItemTags,sliderContainerTag,nextSlideBtn,previousSlideBtn,mlArray,showUpIconManager,createAccountForm,nameInput,usernameInput,emailInput,passwordInput,countryInput,stateInput,showPasswordIcon,tooltips,scrollTracer,scrollToTop}

