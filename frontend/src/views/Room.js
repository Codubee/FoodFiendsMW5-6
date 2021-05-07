import React from 'react'
import { Button, Container,Row, Col,NavLink } from 'reactstrap'
import '../styles/Room.css'
import RoomId from '../components/RoomId'

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomId: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.enterRoom = this.enterRoom.bind(this);
        this.createNewRoom = this.createNewRoom.bind(this);
    }

    handleChange(event) {
        this.setState({ roomId: event.target.value });
    }

    enterRoom(event) {
        alert('Entering a room');
        event.preventDefault();
    }

    createNewRoom(event) {
        alert('Creating a new room');
        event.preventDefault();
    }

    render() {
        return (

            <div className="text-center">
                <Container className="main-header">
                    <h1>Enter a room or create a new one</h1>
                </Container>

                <Container>
                    <RoomId/>

                    <Row className="new-room-row">
                        <Col sm="12" md="6">
                            <h3>Create a new room</h3>
                        </Col>
                        <Col sm="12" md="6">
                            <Button>
                                <NavLink href="/match"> Create Room </NavLink>
                            </Button>
                        </Col>
                    </Row>

                </Container>
            </div>

        );
    }
}

export default Room;