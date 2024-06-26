import { useState } from 'react';
import { Flex, RadioGroup } from 'gestalt';
import { ChartGraph } from 'gestalt-charts';

export default function Example() {
  const [visualPatternSelected, setVisualPatternSelected] = useState('default');
  const [type, setType] = useState('bar');
  const [layout, setLayout] = useState('vertical');

  let axisSeries01;
  let axisSeries02;

  if (layout === 'horizontalBiaxial') {
    axisSeries01 = 'bottom';
    axisSeries02 = 'top';
  }

  if (layout === 'verticalBiaxial') {
    axisSeries01 = 'left';
    axisSeries02 = 'right';
  }

  const data = [
    {
      name: 'A',
      'Series_01': 100,
      'Series_02': 200,
    },
    {
      name: 'B',
      'Series_01': 200,
      'Series_02': 300,
    },
  ];

  return (
    <Flex direction="column" gap={2} height="100%" width="100%">
      <Flex justifyContent="between" width="100%" wrap>
        <RadioGroup direction="row" id="layout-type" legend="ChartGraph type">
          <RadioGroup.RadioButton
            checked={type === 'bar'}
            id="layout-type-bar"
            label="Bar"
            name="bar"
            onChange={() => setType('bar')}
            size="sm"
            value="bar"
          />
          <RadioGroup.RadioButton
            checked={type === 'line'}
            id="layout-type-line"
            label="Line"
            name="line"
            onChange={() => setType('line')}
            size="sm"
            value="line"
          />
          <RadioGroup.RadioButton
            checked={type === 'combo'}
            id="layout-type-combo"
            label="Combo"
            name="combo"
            onChange={() => setType('combo')}
            size="sm"
            value="combo"
          />
        </RadioGroup>
        <RadioGroup direction="row" id="layout_layout" legend="Layout">
          <RadioGroup.RadioButton
            checked={layout === 'horizontal'}
            id="layout_layout-horizontal"
            label="Horizontal"
            name="horizontal"
            onChange={() => setLayout('horizontal')}
            size="sm"
            value="horizontal"
          />
          <RadioGroup.RadioButton
            checked={layout === 'horizontalBiaxial'}
            id="layout_layout-horizontalBiaxial"
            label="HorizontalBiaxial"
            name="horizontalBiaxial"
            onChange={() => setLayout('horizontalBiaxial')}
            size="sm"
            value="horizontalBiaxial"
          />
          <RadioGroup.RadioButton
            checked={layout === 'vertical'}
            id="layout_layout-vertical"
            label="Vertical"
            name="vertical"
            onChange={() => setLayout('vertical')}
            size="sm"
            value="vertical"
          />
          <RadioGroup.RadioButton
            checked={layout === 'verticalBiaxial'}
            id="layout_layout-verticalBiaxial"
            label="VerticalBiaxial"
            name="verticalBiaxial"
            onChange={() => setLayout('verticalBiaxial')}
            size="sm"
            value="verticalBiaxial"
          />
        </RadioGroup>
      </Flex>

      <ChartGraph
        accessibilityLabel="Example of chart with decal custom dimension"
        // @ts-expect-error - TS2322 - Type '{ name: string; Series_01: number; Series_02: number; }[]' is not assignable to type 'readonly { [k: string]: number | undefined; [k: number]: number | undefined; }[]'.
        data={data}
        elements={[
          {
            // @ts-expect-error - TS2322 - Type 'string' is not assignable to type '"line" | "bar"'.
            type: type === 'combo' ? 'bar' : type,
            id: 'Series_01',
            // @ts-expect-error - TS2322 - Type 'string | undefined' is not assignable to type '"bottom" | "left" | "right" | "top" | undefined'.
            axis: axisSeries01,
          },
          {
            // @ts-expect-error - TS2322 - Type 'string' is not assignable to type '"line" | "bar"'.
            type: type === 'combo' ? 'line' : type,
            id: 'Series_02',
            // @ts-expect-error - TS2322 - Type 'string | undefined' is not assignable to type '"bottom" | "left" | "right" | "top" | undefined'.
            axis: axisSeries02,
          },
        ]}
        // @ts-expect-error - TS2322 - Type 'string' is not assignable to type '"horizontal" | "vertical" | "horizontalBiaxial" | "verticalBiaxial" | undefined'.
        layout={layout}
        legend="none"
        onVisualPatternChange={() =>
          setVisualPatternSelected((value) => (value === 'default' ? 'visualPattern' : 'default'))
        }
        title="ChartGraph"
        titleDisplay="hidden"
        // @ts-expect-error - TS2322 - Type 'string' is not assignable to type '"line" | "bar" | "combo" | undefined'.
        type={type}
        // @ts-expect-error - TS2322 - Type 'string' is not assignable to type '"disabled" | "default" | "visualPattern"'.
        visualPatternSelected={visualPatternSelected}
      />
    </Flex>
  );
}
