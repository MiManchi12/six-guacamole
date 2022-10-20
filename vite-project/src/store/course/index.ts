import {defineStore} from "pinia";
import {ElMessage} from "element-plus";
import "@/mock/course/index"
import {
    searchHeader,
    searchImageList1,
    searchImageList2, searchImageList3, searchImageList4, searchImageList5, searchImageList6,
    searchNavList1,
    searchNavList2,
    searchTradeList
} from "@/api/course";
import type {
    choisesModel,
    HeaderListModel,
    ImageDataListModel,
    ImageDataModel,
    NavListModel,
    tradeListModel
} from "@/mock/course";
interface initHeaderDataModel {
    headerList:HeaderListModel,
    searchNavList1:NavListModel,
    imageList1:ImageDataListModel | undefined,
    imageList2:ImageDataListModel | undefined,
    imageList3:ImageDataListModel | undefined,
    imageList4:ImageDataListModel | undefined,
    imageList5:ImageDataListModel | undefined,
    tradeList: tradeListModel
}
export const initNavListModel=()=>({
    choises:[],
    label:'',
    style:''
})
// export const initImageList=()=>({
//     title:'',
//     price:'',
//     people:'',
//     hand:'',
//     message:'',
//     star:'',
//     writer:'',
//     date:'',
//     headpicture:'',
//     bigImage:'',
// })
const initHeaderData=():initHeaderDataModel=>({
    headerList:[],
    searchNavList1:initNavListModel(),
    imageList1:[],
    imageList2:[],
    imageList3:[],
    imageList4:[],
    imageList5:[],
    tradeList:[]
})
export const useCourseStore = defineStore('course', {
        state: () => (initHeaderData()),
        actions:{
            async getHeader(){
                try {
                    let res= await searchHeader()
                    this.headerList=res.data
                    // console.log(this.headerList)
                }catch(error){
                    return Promise.reject(error)
                }
            },
            async getNavList1(){
                try {
                    let res= await searchNavList1()
                    this.searchNavList1=res.data
                    // console.log(this.searchNavList1)
                }catch(error){
                    return Promise.reject(error)
                }
            },
            async getNavList2(){
                try {
                    let res= await searchNavList2()
                    this.searchNavList1=res.data
                    // console.log(this.searchNavList1)
                }catch(error){
                    return Promise.reject(error)
                }
            },
            async getImageList1(){
                try {
                    let res= await searchImageList1()
                    this.imageList1=res.data
                    // console.log(123,this.imageList1)
                }catch(error){
                    return Promise.reject(error)
                }
            },
            async getImageList2(){
                try {
                    let res= await searchImageList2()
                    this.imageList1=res.data
                    // console.log(123,this.imageList1)
                }catch(error){
                    return Promise.reject(error)
                }
            },
            async getImageList3(){
                try {
                    let res= await searchImageList3()
                    this.imageList2=res.data
                    // console.log(123,this.imageList1)
                }catch(error){
                    return Promise.reject(error)
                }
            },
            async getImageList4(){
                try {
                    let res= await searchImageList4()
                    this.imageList3=res.data
                    // console.log(123,this.imageList1)
                }catch(error){
                    return Promise.reject(error)
                }
            },
            async getImageList5(){
                try {
                    let res= await searchImageList5()
                    this.imageList4=res.data
                    // console.log(123,this.imageList1)
                }catch(error){
                    return Promise.reject(error)
                }
            },
            async getImageList6(){
                try {
                    let res= await searchImageList6()
                    this.imageList5=res.data
                    // console.log(123,this.imageList1)
                }catch(error){
                    return Promise.reject(error)
                }
            },
            async getTradeList(){
                try {
                    let res= await searchTradeList()
                    this.tradeList=res.data
                    console.log(123,this.tradeList)
                }catch(error){
                    return Promise.reject(error)
                }
            },
        }
    }
)
