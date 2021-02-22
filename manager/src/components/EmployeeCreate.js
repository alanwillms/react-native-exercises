import React from 'react';
import {Button} from 'react-native';
import {Card, CardSection, Input} from './common';

const EmployeeCreate = () => {
  return (
    <Card>
      <CardSection>
        <Input label="Name" placeholder="Jane Doe" />
      </CardSection>

      <CardSection>
        <Input label="Phone" placeholder="555-555-5555" />
      </CardSection>

      <CardSection />

      <CardSection>
        <Button>Create</Button>
      </CardSection>
    </Card>
  );
};

export default EmployeeCreate;
