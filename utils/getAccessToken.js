import Cookies from 'js-cookie'

export default () => {
    // return useCookie('accessToken')
    const accessToken = Cookies.get('accessToken')
    console.log('accessToken util: ', accessToken)
    return accessToken
}