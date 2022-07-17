import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./form.css";
import loginPic from "../../assets/images/loginPic.png";
const FormCom = ({ hideModal }) => {
  const login_type = [
    { type: "Teacher", value: 1 },
    { type: "Student", value: 2 },
    { type: "Admin", value: 3 },
  ];
  const [email, setEmail] =React.useState("")
  const [password, setPassword] =React.useState("")
  const onSubmitHandle=(e)=>{

  }
  return (
    <>
      <div className="row" style={{padding:"30px"}}>
        <div className="col-sm-5 img-class" >
          <img src={loginPic}></img>
        </div>
        <div className="col-sm-7">
          <Form>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
            </Form.Group>
            <Form.Text>
              <Form.Label> Login as a:</Form.Label>
            </Form.Text>
            <Form.Select size="sm" className="mb-4">
              {login_type.map((item) => {
                return <option key={item.value}>{item.type} </option>;
              })}
            </Form.Select>
            <Button
              variant="primary"
              type="submit"
              style={{ marginRight: "10px", background: "#185047" }}
            >
              Login
            </Button>
            <Button onClick={hideModal}>Cancel</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FormCom;
