import  {subscribeToHellfire} from "./firebase/hellfire-subscription.js";

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');


btnSubscribe.addEventListener('click', async ()=>{
    const newSubscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    const subscriptionId = await subscribeToHellfire(newSubscription);
    console.log(`Succesfully subscripted, your sessionID is: ${subscriptionId}`)
})