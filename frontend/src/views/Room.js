import React from 'react'
import { Button, Container, FormGroup, Form, Label, Input, Row, Col,NavLink } from 'reactstrap'
import '../styles/Room.css'

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
                    <Form onSubmit={this.enterRoom}>
                        <FormGroup>
                            <div className="room-id-div">
                                <Row>
                                    <Col md="2" sm="12">
                                        <Label for="exampleEmail">Room ID</Label>
                                    </Col>
                                    <Col md="8" sm="12">
                                        <Input
                                            type="text"
                                            placeholder="Enter room id"
                                            value={this.state.roomId}
                                            onChange={this.handleChange}
                                        />
                                    </Col>
                                    <Col md="2" sm="12">
                                        <Button>Enter</Button>
                                    </Col>
                                </Row>
                            </div>
                        </FormGroup>
                    </Form >

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