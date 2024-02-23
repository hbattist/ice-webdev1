import { Button, Card } from "react-bootstrap";
import { useState } from "react";

function Badger(props) {
    const [isHovering, setIsHovering] = useState(false)
    
    function sayName() {
        alert("I am Bucky!")
    }
    return <Card style={{margin: "0.5rem"}}>
        <h2>Bucky Badger</h2>
        <p>bucky.badger@wisc.edu</p>
        <Button
        variant="success"
        onClick={sayName}
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        >Say Name</Button>
    </Card>
}

export default Badger;