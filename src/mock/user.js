const token = 'DUAN_TONG_TOKEN_AUTH'
export const login = req => {
  console.log(req)
  req = JSON.parse(req.body)
  if (req.username === 'admin' && req.password === 'admin') {
    return {
      code: 1000,
      data: {token: token},
      msg: '数据请求成功'
    }
  }
}
