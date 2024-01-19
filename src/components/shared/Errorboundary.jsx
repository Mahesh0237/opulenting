import { Card, Container, Stack, Text, Alert, Group, Button, Center } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';
import React, { Component } from 'react'

class Errorboundry extends React.Component {
    state = {
        errorMessage: '',
    };
    static getDerivedStateFromError(error) {
        return { errorMessage: error.toString() };
    }

    componentDidCatch(error, info) {
        this.logErrorToServices(error.toString(), info.componentStack);
    }

    // A fake logging service.
    logErrorToServices = console.log;

    render() {
        if (this.state.errorMessage) {
            return (
                <Card withBorder>
                    <Card.Section inheritPadding py="md">
                        <Stack align="center">
                            <IconAlertTriangle size="120px" color="red" />
                            <Text weight="bold" color="red">Oops Something went wrong</Text>
                            <Alert color="red"><Text>{this.state.errorMessage}</Text></Alert>
                            <Text>Error Code: {this.props.Code}</Text>
                            <Button component='a' href='/homepage' color='red'>Go Back to Home page</Button>
                        </Stack>
                    </Card.Section>
                </Card>
            );
        }
        return this.props.children;
    }
}

export default Errorboundry;
