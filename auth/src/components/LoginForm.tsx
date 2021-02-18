import React, {useState} from 'react';
import {Button, Card, CardSection, Input} from './common';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          onChangeText={setEmail}
          value={email}
          placeholder="user@gmail.com"
        />
      </CardSection>

      <CardSection>
        <Input
          label="Password"
          onChangeText={setPassword}
          value={password}
          placeholder="password"
          secureTextEntry
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => null}>Log in</Button>
      </CardSection>
    </Card>
  );
};

export default LoginForm;
