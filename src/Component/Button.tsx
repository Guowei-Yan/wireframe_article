import { Button } from 'react-bootstrap';
import Store from '../expand/StoreRedux';
export default function SingleButton(){
    return(
        <div style={{paddingBottom:'50px'}}>
            <Button variant="secondary" size="lg" active onClick={click_store}>
                MORE
            </Button>
        </div>
    )
}
function click_store(){
    Store.dispatch({type:'counter/incremented'});
    console.log(Store.getState().value)
}
