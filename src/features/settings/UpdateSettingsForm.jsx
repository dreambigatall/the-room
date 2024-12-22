import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useEditingSeeting } from './useEditingSetting';
import { useSetting } from './useSetting';

function UpdateSettingsForm() {
   const {setings, error, isLoading}=useSetting();
   const {updateSeting,isEaditingSeting}=useEditingSeeting();
   if(isLoading) return <Spinner/>

   function handelUpdate(e, field){
    const {value}=e.target;
    if(!value) return;
    updateSeting({[field]:value})
   }
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={setings?.minimumBookingLeangth} 
        onBlur={(e)=>handelUpdate(e, 'minimumBookingLeangth')
          
        }
        disabled={isEaditingSeting}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={setings?.maxBookingLeangth}
        onBlur={(e)=>handelUpdate(e,'maxBookingLeangth')}
        disabled={isEaditingSeting} />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={setings?.MaxGuestPeople}
        onBlur={(e)=>handelUpdate(e,'MaxGuestPeople')} 
        disabled={isEaditingSeting} />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={setings?.breakFastPrice} 
        onBlur={(e)=>handelUpdate(e,'breakFastPrice')}
        disabled={isEaditingSeting} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
