export const shareName = (formData)=>{
    console.log('inside action')
    return ({
        type:'STORENAME',
        payload:formData
    })
}
export const ShareSurName = (formData)=>{
    return({
        type:'SURNAME',
        payload:formData
    })
}
export const shareFullName = (formData)=>{
    return({
        type:'FULLNAME',
        payload:formData
    })
}