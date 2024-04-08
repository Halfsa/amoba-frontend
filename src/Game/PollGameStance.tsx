import axios from "axios"
    const PollGameStance = async ()=>{
        const val = await axios.get("http://localhost:5173/play").then(res=>{
                //console.log(res.data)
                return res.data
            }
        ).catch(err=>{
            console.log(err)
            return err;
        })
        return val
    }
export default PollGameStance;