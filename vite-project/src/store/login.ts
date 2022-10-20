import {defineStore} from "pinia";
import {reqLogin, reqLogout, reqUserInfo} from "@/api/loginInfo";
import {ElMessage} from "element-plus";

export interface userModel{
    phone: string,
    password:string,
    name?:string,
    token?:string,
}
export const useLoginStore = defineStore('login', {
        state: () => ({
            phone: '',
            password: "",
            name:JSON.parse(localStorage.getItem('name')as string) || '',
            token:JSON.parse(localStorage.getItem('token') as string)|| '',
            dialogFormVisible: false,   // 是否显示登录对话框的布尔值
        }),
        actions:{
            async login(phone: string, password: string) {
                try {
                    try {
                        let result = await reqLogin({ phone, password })
                        // console.log(123,result)
                        if(result.data.code===200||result.data.code===20000){
                            // console.log(999,result)
                            this.token=result.data.data.token
                            this.name=result.data.data.name
                            localStorage.setItem('token',JSON.stringify(this.token))
                            localStorage.setItem('name',JSON.stringify(this.name))
                            ElMessage.success('登录成功')
                        }else{
                            ElMessage.error(result.data.message)
                            return Promise.reject(result.data.message)
                        }
                    }catch(error){
                        ElMessage.error('登录失败')
                        return Promise.reject(error)
                    }
                } catch (error) {
                    ElMessage.error('用户名密码错误');
                    return Promise.reject(error)
                }
            },
            async getInfo(){
                try {
                    let res=reqUserInfo()
                    console.log(987,res)
                }catch(error){
                    ElMessage.error('获取用户信息失败')
                    return Promise.reject(error)
                }
            },
            async logout() {
                try {
                    await reqLogout(); // 请求头携带token,告诉后端token作废
                    this.reset()
                } catch (error) {
                    ElMessage.error('退出登录错误')
                    return Promise.reject(error);
                }
            },
            reset(){
                localStorage.removeItem('token')
                localStorage.removeItem('name')
                this.name=''
                this.token=''
            },
            // 修改 dialogFormVisible 是否显示对话框的布尔值
            toggleLoginDialog(status: boolean) {
                this.dialogFormVisible = status;
            }
        }
    }
)
