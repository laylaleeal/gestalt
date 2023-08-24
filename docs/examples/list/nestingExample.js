// @flow strict
import { type Node } from 'react';
import { Box, List, Text } from 'gestalt';

export default function Example(): Node {
  return (
    <Box padding={8} height="100%" display="flex" alignItems="center" justifyContent="center">
      <List label={<Text weight="bold">Bare unordered nested</Text>} type="bare">
        <List.Item text="List item text">
          <List.Item text="List item text">
            <List.Item text="List item text">
              <List.Item text="List item text">
                <List.Item text="List item text">
                  <List.Item text="List item text" />
                </List.Item>
              </List.Item>
            </List.Item>
          </List.Item>
        </List.Item>
      </List>
    </Box>
  );
}