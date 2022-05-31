


const Flutterwave = require('flutterwave-node-v3');

const flw = new Flutterwave(PUBLIC_KEY, SECRET_KEY  );



const zambia_mobile_money =  async () =>{
 
    try {

        const payload = {
            "tx_ref": "MC-15852113s09v5050e8",
            "amount": "1500",
            "currency": "ZMW",
            "email": "olufemi@flw.com",
            "phone_number": "054709929220",
            "fullname": "Olufemi Obafunmiso",
            "order_id": "URF_MMGH_1585323540079_5981535" //Unique identifier for the mobilemoney transaction to be provided by the merchant
        }
       const response =  await flw.MobileMoney.zambia(payload)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 
 
zambia_mobile_money();