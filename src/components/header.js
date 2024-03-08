import React, { useState } from 'react'
import { Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useDarkMode } from '../useThemContex';

export default function Header() {
  const {toggleDarkMode } = useDarkMode();

  return (
    <Navbar expand="lg" className="bg-body-tertiary position-stec" sticky="top">
      <Container>
      <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Check this switch"
        onClick={toggleDarkMode}
      />
    </Form>
      </Container>
    </Navbar>
  )
}
