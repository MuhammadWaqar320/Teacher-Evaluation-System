export const isAuthenticated=()=>{
    const token=localStorage.getItem("token")
    if(token){
        return true;
    }
    else{
        return false;
    }
}
export const logOut=()=>{
    localStorage.clear()
}
export const calculateAvgRating=(id,data)=>{
    let sumOfStar=0,count=0;
    for (const i of data) {
        if(i.Teacher.id===id){
            sumOfStar = i.no_of_star+sumOfStar;
            count++;
        }
    }
    return (sumOfStar/count)
}
export const  removeDoubleValues=(data)=>{
    const uniqueData=[];
    const newData=data.filter((item)=>{
        const isDuplicate=uniqueData.includes(item.TeacherId)
        if(!isDuplicate){
            uniqueData.push(item.TeacherId);
            return true;
        }
        return false
    })
   return newData
}