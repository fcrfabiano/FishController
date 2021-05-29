const Item = require("../models/Item")
const calcs = require("../models/calcs")

const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
});

const { format: formatKg } = new Intl.NumberFormat('pt-br', {
    style: "unit",
    unit: "kilogram",
    unitDisplay: "narrow",
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
});


const newItems = async(req, res)=>{
    let item = new Item(req.body)

    try{
        let doc = await item.save()
        res.redirect('/')
    }catch(error){
        res.render('index', {error, body: req.body})
    }
}

const allItems = async (req, res)=>{
    try{
        let docs = await Item.find({})
        
        let amount = calcs.amount(docs)

        res.render('index', {items: docs, amount, formatPrice, formatKg })


        
    }catch(error){
        res.render(error)
    }
}


module.exports = {allItems, newItems}