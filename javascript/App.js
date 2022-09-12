////////////////////Variables//////////////////////////////////////
import {
    aboutArticles,
    aboutImage,
    aboutNavLi,
    bgSwitch,
    countryInput,
    createAccountForm,
    emailInput,
    hamburgerMenuTag,
    imgArray,
    journalBody,
    journalContainer,
    journalDB,
    journals,
    mediaQuery,
    mlArray,
    nameInput,
    nextBtn,
    nextSlideBtn,
    passwordInput,
    previousBtn,
    previousSlideBtn,
    showPasswordIcon,
    showUpIconManager,
    slideDownMenu,
    sliderContainerTag,
    sliderItemTags,
    stateInput,
    usernameInput,
    tooltips,
    scrollTracer,
    scrollToTop
} from "./Utilities.js";
let isDark=true;
let themeStatus;
let sliderItemCssProperty,sliderItemCount,sliderItemWidth,endIndex,startIndex,sliderTypeElement,whichSlide;
////////////////////// fire on hamburger menu ///////////////////////
hamburgerMenuTag.addEventListener('click',function () {
    if(!hamburgerMenuTag.classList.contains('active')){
        hamburgerMenuTag.classList.add('active')
        slideDownMenu.slideDown(500)
    }else{
        hamburgerMenuTag.classList.remove('active')
        slideDownMenu.slideUp(500)
    }

})
//////////////////////// media query change //////////////////////////
mediaQuery.addListener(function () {
    if(mediaQuery.matches){
        slideDownMenu.css('display','flex')
    }else{
        slideDownMenu.css('display','none')
    }
})
///////////////////////// fire on scroll tracer //////////////////////
window.addEventListener('scroll',()=>{
    let scrollTop=document.documentElement.scrollTop
    let bodyHeight=document.body.offsetHeight
    let windowInnerHeight=window.innerHeight
    let percentOfScrollingBody=(scrollTop/(bodyHeight-windowInnerHeight))*100
    scrollTracer.style.width=`${percentOfScrollingBody}%`
})
/////////////////////////// fire on background switcher ////////////////
bgSwitch.addEventListener('click',function () {
    if(isDark){
        document.body.classList.add('changeBg')
        bgSwitch.classList.add('light')
        localStorage.setItem('theme','light')
        isDark=false

    }else{
        document.body.classList.remove('changeBg')
        bgSwitch.classList.remove('light')
        localStorage.setItem('theme','dark')
        isDark=true
    }
})
window.addEventListener('load',function () {
    themeStatus=localStorage.getItem('theme')
    if(themeStatus===null){
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            localStorage.setItem('theme','dark')
            document.body.classList.remove('changeBg')
            bgSwitch.classList.remove('light')
        }else{
            localStorage.setItem('theme','light')
            document.body.classList.add('changeBg')
            bgSwitch.classList.add('light')
        }
    }else{
        if(themeStatus==='light'){
            document.body.classList.add('changeBg')
            bgSwitch.classList.add('light')
            isDark=false
        }else{
            document.body.classList.remove('changeBg')
            bgSwitch.classList.remove('light')
            isDark=true
        }
    }
})
//////////////////////////// fire on about section /////////////////
aboutNavLi.click(function () {
    let liIndex=$(this).index()
    aboutImage.attr('src',imgArray[liIndex])
    aboutNavLi.removeClass('active')
    $(this).addClass('active')
    aboutArticles.fadeOut(0)
    aboutArticles.eq(liIndex).fadeIn(200)

})
////////////////////////// journal slider ///////////////////////
journalBody.hover(function () {
    $(this).find('.user-information').animate({opacity:'0'},200)
    $(this).find('.description').fadeIn(200)
},function () {
    $(this).find('.user-information').animate({opacity:'1'},200)
    $(this).find('.description').fadeOut(200)
})
/////////////////////////////////////////////
let howManySlideOnce=4
let slideNumber=journalDB.length/howManySlideOnce
function goToNextSlide(e) {
    journalContainer.classList.remove('changeOpc2')
    journalContainer.classList.add('changeOpc1')
    let currentSlide=changeSliderNumber(e,slideNumber,'plus')
    changeSlide(currentSlide)

}
function goToPreviousSlide(e) {
    journalContainer.classList.remove('changeOpc2')
    journalContainer.classList.add('changeOpc1')
    let currentSlide=changeSliderNumber(e,1,'minus')
    changeSlide(currentSlide)
}
function changeSliderNumber(event,condition,operation) {
    sliderTypeElement=event.target.parentElement.children[1]
    whichSlide=Number(event.target.parentElement.children[1].dataset.val)
    if(operation==='minus'){
        if(whichSlide===condition){
            sliderTypeElement.setAttribute('data-val',`${slideNumber}`)
        }else{
            sliderTypeElement.setAttribute('data-val',`${whichSlide-1}`)
        }
    }else if(operation==='plus'){
        if(whichSlide===condition){
            sliderTypeElement.setAttribute('data-val',`1`)
        }else{
            sliderTypeElement.setAttribute('data-val',`${whichSlide+1}`)
        }

    }
    let currentSlide=sliderTypeElement.getAttribute('data-val')
    if (currentSlide==='2'){
        event.target.parentElement.children[1].innerHTML='Network'
    }else if(currentSlide==='1'){
        event.target.parentElement.children[1].innerHTML='Programming'
    }else if(currentSlide==='3'){
        event.target.parentElement.children[1].innerHTML='Security'
    }
    return sliderTypeElement.getAttribute('data-val')

}
function changeSlide(currentSlide) {
    let i=0
    endIndex=currentSlide*howManySlideOnce
    startIndex=endIndex-howManySlideOnce
    let targetJournalArray=journalDB.slice(startIndex,endIndex)
    journals.forEach(function (item) {
        item.children[0].children[1].setAttribute('src',targetJournalArray[i].imageSrc)
        item.children[1].children[0].children[0].innerHTML=`${targetJournalArray[i].time}`
        item.children[1].children[1].children[1].innerHTML=`${targetJournalArray[i].title}`
        item.children[1].children[1].children[3].innerHTML=`${targetJournalArray[i].type}`
        item.children[1].children[2].children[1].innerHTML=`${targetJournalArray[i].author}`
        item.children[1].children[3].children[0].innerHTML=`${targetJournalArray[i].description}`
        item.children[1].children[3].children[1].setAttribute('href',targetJournalArray[i].link)
        i++
    })
}
journalContainer.addEventListener('animationend',function () {
    journalContainer.classList.replace('changeOpc1','changeOpc2')
})
previousBtn.addEventListener('click',goToPreviousSlide)
nextBtn.addEventListener('click',goToNextSlide)
//////////////////////////////////////////////// profile info show ///////////////////////////////
showUpIconManager.forEach((icon)=>{
    icon.addEventListener('click',(e)=>{
        if(e.target.classList.contains('bi-arrow-up-circle-fill')){
            e.target.parentElement.children[2].classList.remove('moveDown')
            e.target.parentElement.children[2].classList.add('moveUp')
            e.target.classList.replace('text-dark','text-white')
            e.target.classList.replace('bi-arrow-up-circle-fill','bi-arrow-down-circle-fill')
        }else{
            e.target.parentElement.children[2].classList.replace('moveUp','moveDown')
            e.target.classList.replace('text-white','text-dark')
            e.target.classList.replace('bi-arrow-down-circle-fill','bi-arrow-up-circle-fill')
        }
    })
})

////////////////////////////// fire for wow js //////////////////
new WOW().init()

//////////////////////////// tooltip //////////////////////////
tooltips.forEach(tooltip=>{
    new bootstrap.Tooltip(tooltip)
})

//////////////////////////// product slider //////////////////////
let offset;
if(window.innerWidth<1000 && window.innerWidth>860){
    offset=3
}else if(window.innerWidth<860){
    offset=2

}else{
    offset=4
}
let sliderTimer=setInterval(function () {
    nextSlideHandler()
},8000);
(function() {
    sliderItemCount=(sliderItemTags.length)+1
    sliderItemTags.forEach(function (item) {
        sliderItemCssProperty=getComputedStyle(item).width
    })
    sliderItemWidth=separatingPX(sliderItemCssProperty)
    sliderContainerTag.style.width=`${sliderItemCount * sliderItemWidth}px`
}())
function separatingPX(cssValue) {
    let separateInArray=cssValue.split('')
    separateInArray.splice(separateInArray.length-2,2)
    return Number(separateInArray.join(''))
}
function nextSlideHandler() {
    if( Math.abs(mlArray[0]) === (sliderItemCount * sliderItemWidth)-(sliderItemWidth*offset)){
        sliderContainerTag.style.marginLeft=`${0}px`
    }else{
        sliderContainerTag.style.marginLeft=`${mlArray[0] - sliderItemWidth}px`
    }
}
sliderContainerTag.addEventListener('transitionend',function () {
    let sliderContainerML=getComputedStyle(sliderContainerTag).marginLeft
    mlArray[0]=separatingPX(sliderContainerML)

})
function prevSlideHandler() {
    if(Math.abs(mlArray[0]) === 0){
        sliderContainerTag.style.marginLeft=`-${(sliderItemCount * sliderItemWidth)-(sliderItemWidth*offset)}px`
    }else{
        sliderContainerTag.style.marginLeft=`${mlArray[0] +sliderItemWidth}px`
    }


}
function nextSlideButtonHandler() {
    clearInterval(sliderTimer)
    nextSlideHandler()
}
function prevSlideButtonHandler() {
    clearInterval(sliderTimer)
    prevSlideHandler()
}

previousSlideBtn.addEventListener('click',prevSlideButtonHandler)
nextSlideBtn.addEventListener('click',nextSlideButtonHandler)
////////////////////////////////////////  type it
{
    const typeAnimation=new TypeIt("#field-title",{
        afterComplete: () => {
            typeAnimation.reset()
                .go()
        },
    })
        .delete()
        .type("developers.")
        .pause(1000)
        .delete()
        .type("engineers.")
        .pause(1000)
        .delete()
        .type("managers.")
        .pause(1000)
        .delete()
        .type("startups.")
        .pause(1000)
        .delete()
        .go()
}
//////////////////////////////////// form validation //////////////////////
let conditionArray;
class UserInfo{
    constructor(name,username,email,password,country,state){
        this.name=name
        this.username=username
        this.email=email
        this.password=password
        this.country=country
        this.state=state
    }
}
class Validation{
    static check(e){

        conditionArray=[]

        let userInformation=new UserInfo(nameInput.value,usernameInput.value,emailInput.value,passwordInput.value,countryInput.value,stateInput.value)

        let validation=new Validation;

        validation.nameValidation(userInformation.name)

        validation.usernameValidation(userInformation.username)

        validation.emailValidation(userInformation.email)

        validation.passwordValidation(userInformation.password)

        validation.countryValidation(userInformation.country)

        validation.stateValidation(userInformation.state)

        let allInputIsValidate=validation.completeFormValidation()

        if(allInputIsValidate){
            return true
        }else{
            e.preventDefault()
        }
    }
    showMessage(status,tag,msg){
        if(status==='success'){
            tag.parentElement.className='input-container'
            tag.parentElement.classList.add('success')
            tag.parentElement.children[0].children[1].innerHTML=msg
        }else if(status==='failed'){
            tag.parentElement.className='input-container'
            tag.parentElement.classList.add('failed')
            tag.parentElement.children[0].children[1].innerHTML=msg
        }
    }
    nameValidation(value){
        if(!isNaN(value)){
            this.showMessage('failed',nameInput,'&starf;required')
            this.checkAllInputValidation(false,0)
        }else{
            this.showMessage('success',nameInput,'&check;looks good!')
            this.checkAllInputValidation(true,0)
        }
    }
    usernameValidation(value){
        const usernameRegex=/^([^\.\_\?\*\#\@\(\)\$\%\~]+)([a-zA-Z0-9]+[\_\.]?[a-zA-Z0-9]*)([^\.\_\?\*\#\@\(\)\$\%\~]+)$/

        let isLimitedCharacter;
        isLimitedCharacter = value.length > 8 && value.length < 20;
        if(!isLimitedCharacter || !usernameRegex.test(value)){
            this.showMessage('failed',usernameInput,'&starf;incorrect username!')
            this.checkAllInputValidation(false,1)
        }else{
            this.showMessage('success',usernameInput,'&check;looks good!')
            this.checkAllInputValidation(true,1)
        }

    }
    emailValidation(value){
        let emailRegex =/^([a-zA-Z0-9\_\.])+@(\w{4,6})\.(\w{2,3})$/

        if(emailRegex.test(value)){
            this.showMessage('success',emailInput,'&check;looks good!')
            this.checkAllInputValidation(true,2)
        }else{
            this.showMessage('failed',emailInput,'&starf;incorrect email!')
            this.checkAllInputValidation(false,2)
        }
    }
    passwordValidation(value){
        let isCorrectPassword;
        isCorrectPassword = value.length > 8 && value.length < 20;

        if(!isNaN(value) || !isCorrectPassword){
            this.showMessage('failed',passwordInput,'&starf;incorrect password!')
            this.checkAllInputValidation(false,3)
        }else{
            this.showMessage('success',passwordInput,'&check;looks good!')
            this.checkAllInputValidation(true,3)
        }
    }
    countryValidation(value){
        if(value==='default'){
            this.showMessage('failed',countryInput,'&starf;required')
            this.checkAllInputValidation(false,4)
        }else{
            this.showMessage('success',countryInput,'&check;looks good!')
            this.checkAllInputValidation(true,4)
        }
    }
    stateValidation(value){
        if(value==='default'){
            this.showMessage('failed',stateInput,'&starf;required')
            this.checkAllInputValidation(false,5)
        }else{
            this.showMessage('success',stateInput,'&check;looks good!')
            this.checkAllInputValidation(true,5)
        }
    }
    checkAllInputValidation(state,index){
        conditionArray[index] = !!state;
    }
    completeFormValidation(){
        return conditionArray.every((item) => {
            return item === true
        })

    }

}
const showPassword = (e) => {
  if(e.target.classList.contains('bi-eye-fill')){
      e.target.classList.replace('bi-eye-fill','bi-eye-slash-fill')
      passwordInput.setAttribute('type','text')
  }else{
      e.target.classList.replace('bi-eye-slash-fill','bi-eye-fill')
      passwordInput.setAttribute('type','password')
  }

}
const setCountries = async () => {
    try{
        let res=await fetch('http://battuta.medunes.net/api/country/all/?key=e89917464524bd49f2eaebd84abf03a8')
        let newOptionTag;
        let countryFragment=document.createDocumentFragment()
        if(res.ok){
            let countries=await res.json()
            countries.forEach(country=>{
                newOptionTag=document.createElement('option')
                newOptionTag.setAttribute('value',country.code)
                newOptionTag.innerHTML=country.name
                countryFragment.append(newOptionTag)
            })
            countryInput.append(countryFragment)

        }else{
            throw Error('api is not responding')
        }
    }catch (e) {
        console.log(e)
    }
}
const setStates = async (e) => {
    try{
        stateInput.innerHTML=''
        stateInput.insertAdjacentHTML('beforeend','<option value="default" selected>Select your state</option>')
        let countryInputValue=e.target.value
        let res=await fetch('http://battuta.medunes.net/api/region/'+countryInputValue+'/all/?key=e89917464524bd49f2eaebd84abf03a8')
        if(res.ok){
            let states=await res.json()

            let allStateString=states.map(state=>{
                return '<option value='+state.region+'>'+state.region+'</option>'
            }).join('')
            stateInput.insertAdjacentHTML('beforeend',allStateString)
        }else{
            throw Error('api is not responding!')
        }

    }catch (e) {
        console.log(e)
    }
}
createAccountForm.addEventListener('submit',Validation.check)
showPasswordIcon.addEventListener('click',showPassword)
window.addEventListener('load',setCountries)
countryInput.addEventListener('change',setStates)
////////////////////////// scroll to Top btn ////////////////////////////
let isShow;
window.addEventListener('scroll',()=>{
    let scrollTop=document.documentElement.scrollTop
    let windowInnerHeight=window.innerHeight

    if(scrollTop>windowInnerHeight){
        scrollToTop.style.display='block'
        isShow=true
        localStorage.setItem('isShow','true')
    }else{
        scrollToTop.style.display='none'
        isShow=false
        localStorage.setItem('isShow','false')
    }
})
window.addEventListener('load',()=>{
    let isBtnShow=localStorage.getItem('isShow')
    if(isBtnShow!==null){
        if(isBtnShow==='true'){
            scrollToTop.style.display='block'
        }else{
            scrollToTop.style.display='none'
        }
    }
})
scrollToTop.addEventListener('click',()=>{
    window.scrollTo(0,0)
})

