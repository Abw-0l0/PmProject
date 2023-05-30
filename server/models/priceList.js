import mongoose from "mongoose";

const priceListSchema = mongoose.Schema({
    linearMerterageCost:{
        type:Number,
        // required:true,
    },
    adminID:{
        
            type:mongoose.Schema.Types.ObjectId,
            ref:'adminModel',
            required:true

      
    },
    saddleCost:{
        type:Number,
        // required:true,
    },
    throwinCost:{
        type:Number,
        // required:true,
    },
    hakkiLayher:{
        type:Number,
        // required:true,
    },
    temporaryRoof:{
        type:Number,
        // required:true,
    },
    monoflex:{
        type:Number,
        // required:true,
    },
    shrinkwrap:{
        type:Number,
        // required:true,
    },
    fivebyonepointeightTower:{
        type:Number,
        // required:true,
        },
    fivebyonepointeightTowerCostPerLift:{
        type:Number,
        // required:true,
        },
    eightbytwopointfourTower:{
        type:Number,
        // required:true,
        },
    eightbytwopointfourTowerCostPerLift:{
        type:Number,
        // required:true,
        },
    tenbythreeTower:{
        type:Number,
        // required:true,
        },
    tenbythreeTowerCostPerLift:{
        type:Number,
        // required:true,
        },
    thirteenbyfourTower:{
        type:Number,
        // required:true,
        },
    thirteenbyfourTowerCostPerLift:{
        type:Number,
        // required:true,
        },
    scaffoldingInspectionPerVisit:{
        type:Number,
        // required:true,
        },
    overhirePercentage:{
        type:Number,
        // required:true,
        },
    addItem:{
        type:Array,
        required:false,
        },
                                                                                                                                                                                                                                                
})

const priceList = mongoose.model('priceList',priceListSchema);
 export default priceList;