function getDataObject(id='null'){
    let data = {
        'hub_parts':{
            name:'HUB Parts',
            recipe:{
                machine:'',
                items:[[0,''],[0,'']]
            },
            resource:false,
            building:false,
            craftingMaterial:false,
            buildingMaterial:true,
            spaceElevatorMaterial:false,

            imgSrc:'.\\icon\\x.png'
        },
        default:{}
    }
    return data[id];
}
/**
 * '' [\w]
 * name [original name ~img.png ohne '_']
 * recipe {machine:'',items:[[num,''],[num,'']]}
 * imgSrc .\icon\img.png
 * 
 * 
*/