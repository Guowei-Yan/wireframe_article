import { Button } from 'react-bootstrap';
export default function SingleButton(props:any){
// linkOne is the parameter to open the reference link provided by the API
    const {linkOne} = props;
    function click_link(link:any){
        window.open(link,"_blank");
    }
// The render used the function I made above
    return(
        <div style = {{paddingBottom:'3px'}}>
            <Button variant="secondary" size="lg" active onClick={() => click_link(linkOne)}>
                Read more
            </Button>
        </div>
    )
}
