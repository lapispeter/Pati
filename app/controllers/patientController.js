const PatientController ={
    index: (req, res) =>{
        res.json({
            crud:"read",
            method:"get",
            name:"Lapis Péter, IIE, 2025-10-13",
            success:true})
    },
    store: (req, res) =>{
       res.json({
            crud:"create",
            method:"post",
            name:"Lapis Péter, IIE, 2025-10-13",
            success:true})
    },
    update: (req, res) =>{
        res.json({
            crud:"update",
            method:"update",
            name:"Lapis Péter, IIE, 2025-10-13",
            success:true})
    },
    destroy: (req, res) =>{
        res.json({
            crud:"delete",
            method:"delete",
            name:"Lapis Péter, IIE, 2025-10-13",
            success:true})
    }
}
export default PatientController