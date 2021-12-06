import { Button } from 'react-bootstrap';
export default function SingleButton(props:any){
    const { linkOne } = props;
    function click_link(linkOne:any){
        window.open(linkOne,"blank");
    }
    return(
        <div style = {{paddingBottom:'3px'}}>
            <Button variant="secondary" size="lg" active onClick={click_link}>
                Read more
            </Button>
        </div>
    )
}
