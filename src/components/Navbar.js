import React from "react"
import { Menu, Header } from "semantic-ui-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <Menu inverted color="blue">
      <Menu.Item>
        <Header as="h1" style={{ color: "white" }}>
          StuCred Project
        </Header>
      </Menu.Item>
      <Menu.Item>
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/kyc">KYC</Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/register">Register</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar
