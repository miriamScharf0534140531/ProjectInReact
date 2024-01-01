import { observable, makeObservable, action, computed } from 'mobx';

class Appstore{
    isLogin=false;
    isEditData=false;
    isErrorLogin=false;
    isAddService=false;
    isAddMeetimg=false;
    constructor(){
        makeObservable(this,{
            isLogin:observable,
            isEditData:observable,
            isErrorLogin:observable,
            isAddService:observable,
            isAddMeetimg:observable,
            setIsLogin:action,
            setIsEditData:action,
            setIsErrorLogin:action,
            setIsAddService:action,
            setIsAddMeetimg:action,
            getIsLogin:computed,
            getIsErrorLogin:computed,
            getIsEditData:computed,
            getIsAddService:computed,
            getIsAddMeetimg:computed
        })
    }
    setIsAddService=(val)=>{
        this.isAddService=val;
    }
    setIsLogin=(val)=>{
        this.isLogin=val;
    }
    setIsEditData=(val)=>{
        this.isEditData=val;
    }
    setIsErrorLogin=(val)=>{
        this.isErrorLogin=val;
    }
    setIsAddMeetimg=(val)=>{
        this.isAddMeetimg=val;
    }
    get getIsLogin(){
        return this.isLogin;
    }
    get getIsErrorLogin(){
        return this.isErrorLogin;
    }
    get getIsEditData(){
        return this.isEditData;
    }
    get getIsAddService(){
        return this.isAddService;
    }
    get getIsAddMeetimg(){
        return this.isAddMeetimg;
    }
}
export default new Appstore();