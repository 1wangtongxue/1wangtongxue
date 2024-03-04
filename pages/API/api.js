const BASE_URL="https://api-hmugo-web.itheima.net/api/public/v1" //地址
export const myRequest=(option)=>{
	return new Promise((resolve,reject)=>{ //异步
			uni.request({
				url:BASE_URL+option.url,
				method:option.method || 'GET',
				data:option.data || {},
				success:(res)=>{
					if(res.data.meta.status !==200){
						return uni.showToast({
							title:'获取数据失败！'
						})
					}
					resolve(res)
				},
				fail: (err) => {
					return uni.showToast({
						title:'获取接口失败'
					})
					reject(err);
				}
			})
		})
}