export default function TabButton({children, onSelect}){
    function handleClick(){
        console.log("helloworld");
    }
    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}